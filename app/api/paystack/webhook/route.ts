import crypto from "crypto";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

export const runtime = "nodejs";

function normalizeFrequency(frequency: unknown) {
  const value = String(frequency || "").toLowerCase();

  if (value.includes("monthly")) {
    return "monthly";
  }

  if (value.includes("annual") || value.includes("year")) {
    return "annual";
  }

  return "one_time";
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();

    const signature = request.headers.get("x-paystack-signature");
    const secret = process.env.PAYSTACK_SECRET_KEY;

    if (!signature) {
      return NextResponse.json(
        { message: "Missing Paystack signature." },
        { status: 401 }
      );
    }

    if (!secret) {
      console.error("PAYSTACK_SECRET_KEY is not configured.");

      return NextResponse.json(
        { message: "Payment configuration error." },
        { status: 500 }
      );
    }

    const hash = crypto
      .createHmac("sha512", secret)
      .update(rawBody)
      .digest("hex");

    const validSignature =
      signature.length === hash.length &&
      crypto.timingSafeEqual(
        Buffer.from(hash),
        Buffer.from(signature)
      );

    if (!validSignature) {
      return NextResponse.json(
        { message: "Invalid signature." },
        { status: 401 }
      );
    }

    const event = JSON.parse(rawBody);
    const eventName = event.event;
    const eventData = event.data || {};

    console.log("Paystack webhook received:", eventName);

    /*
     * ============================================================
     * SUCCESSFUL PAYMENT
     * ============================================================
     */
    if (eventName === "charge.success") {
      const transaction = eventData;

      console.log(
        "PAYSTACK TRANSACTION DATA:",
        JSON.stringify(transaction, null, 2)
      );

      const metadata =
        transaction.metadata &&
        typeof transaction.metadata === "object"
          ? transaction.metadata
          : {};

      const amountInNaira =
        Number(transaction.amount || 0) / 100;

      let subscriptionCode: string | null = null;
      let subscriptionStatus: string | null = null;
      let nextPaymentDate: string | null = null;

      /*
       * For recurring payments, retrieve the customer's
       * subscriptions from Paystack.
       */
      if (
        transaction.plan?.plan_code &&
        transaction.customer?.customer_code
      ) {
        try {
          const customerResponse = await fetch(
            `https://api.paystack.co/customer/${encodeURIComponent(
              transaction.customer.customer_code
            )}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${secret}`,
                "Content-Type": "application/json",
              },
            }
          );

          const customerData = await customerResponse.json();

          console.log(
            "PAYSTACK CUSTOMER DATA:",
            JSON.stringify(customerData, null, 2)
          );

          if (customerResponse.ok && customerData.status) {
            const subscriptions =
              customerData.data?.subscriptions || [];

            /*
             * Paystack's customer response may return
             * an empty plan object, so match using amount.
             *
             * If there are multiple active subscriptions
             * with the same amount, use the newest one.
             */
            const matchingSubscriptions =
              subscriptions.filter(
                (subscription: any) =>
                  subscription.status === "active" &&
                  Number(subscription.amount) ===
                    Number(transaction.amount)
              );

            matchingSubscriptions.sort(
              (a: any, b: any) =>
                new Date(b.createdAt || 0).getTime() -
                new Date(a.createdAt || 0).getTime()
            );

            const matchingSubscription =
              matchingSubscriptions[0];

            subscriptionCode =
              matchingSubscription?.subscription_code || null;

            subscriptionStatus =
              matchingSubscription?.status || null;

            nextPaymentDate =
              matchingSubscription?.next_payment_date || null;
          }
        } catch (error) {
          console.error(
            "Unable to retrieve Paystack subscription:",
            error
          );
        }
      }

      const donation = {
        paystack_reference: transaction.reference,

        paystack_transaction_id: transaction.id,

        amount: amountInNaira,

        currency: transaction.currency || "NGN",

        frequency: normalizeFrequency(metadata.frequency),

        payment_status: "success",

        donor_email:
          transaction.customer?.email ||
          metadata.email ||
          "",

        donor_phone:
          transaction.customer?.phone ||
          metadata.phone ||
          null,

        donation_date:
          transaction.paid_at ||
          transaction.created_at ||
          new Date().toISOString(),

        subscription_code: subscriptionCode,

        plan_code:
          transaction.plan?.plan_code ||
          transaction.plan_code ||
          null,

        subscription_status: subscriptionStatus,

        next_payment_date: nextPaymentDate,

        subscription_event:
          subscriptionCode ? "charge.success" : null,

        failure_reason: null,

        invoice_code: null,

        metadata,

        updated_at: new Date().toISOString(),
      };

      if (!donation.paystack_reference) {
        return NextResponse.json(
          {
            message:
              "Missing Paystack transaction reference.",
          },
          { status: 400 }
        );
      }

      if (!donation.donor_email) {
        return NextResponse.json(
          {
            message: "Missing donor email.",
          },
          { status: 400 }
        );
      }

      const { error } = await supabaseAdmin
        .from("donations")
        .upsert(donation, {
          onConflict: "paystack_reference",
        });

      if (error) {
        console.error(
          "Donation database error:",
          error
        );

        return NextResponse.json(
          {
            message: "Unable to save donation.",
          },
          { status: 500 }
        );
      }

      console.log("Donation saved:", {
        reference: donation.paystack_reference,
        amount: donation.amount,
        frequency: donation.frequency,
        subscription_code:
          donation.subscription_code,
        plan_code: donation.plan_code,
        subscription_status:
          donation.subscription_status,
        next_payment_date:
          donation.next_payment_date,
        email: donation.donor_email,
      });
    }

    /*
     * ============================================================
     * INVOICE PAYMENT FAILED
     * ============================================================
     *
     * We do NOT create a fake donation record here.
     * We update the donor's subscription information instead.
     */
    if (eventName === "invoice.payment_failed") {
      const invoice = eventData;

      console.log(
        "PAYSTACK INVOICE PAYMENT FAILED:",
        JSON.stringify(invoice, null, 2)
      );

      const subscriptionCode =
        invoice.subscription?.subscription_code ||
        invoice.subscription_code ||
        null;

      const invoiceCode =
        invoice.invoice_code ||
        null;

      const failureReason =
        invoice.failure_reason ||
        invoice.gateway_response ||
        invoice.message ||
        "Recurring payment failed.";

      if (subscriptionCode) {
        const { error } = await supabaseAdmin
          .from("donations")
          .update({
            subscription_status: "payment_failed",
            invoice_code: invoiceCode,
            failure_reason: failureReason,
            subscription_event:
              "invoice.payment_failed",
            updated_at: new Date().toISOString(),
          })
          .eq("subscription_code", subscriptionCode);

        if (error) {
          console.error(
            "Failed to update subscription payment failure:",
            error
          );
        }
      }

      console.log("Recurring payment failed:", {
        subscriptionCode,
        invoiceCode,
        failureReason,
      });
    }

    /*
     * ============================================================
     * INVOICE UPDATE
     * ============================================================
     */
    if (eventName === "invoice.update") {
      const invoice = eventData;

      console.log(
        "PAYSTACK INVOICE UPDATE:",
        JSON.stringify(invoice, null, 2)
      );

      const subscriptionCode =
        invoice.subscription?.subscription_code ||
        invoice.subscription_code ||
        null;

      const invoiceCode =
        invoice.invoice_code ||
        null;

      if (subscriptionCode) {
        const updateData: Record<string, unknown> = {
          invoice_code: invoiceCode,
          subscription_event: "invoice.update",
          updated_at: new Date().toISOString(),
        };

        if (invoice.status) {
          updateData.subscription_status =
            invoice.status;
        }

        if (invoice.next_payment_date) {
          updateData.next_payment_date =
            invoice.next_payment_date;
        }

        const { error } = await supabaseAdmin
          .from("donations")
          .update(updateData)
          .eq("subscription_code", subscriptionCode);

        if (error) {
          console.error(
            "Invoice update database error:",
            error
          );
        }
      }
    }

    /*
     * ============================================================
     * SUBSCRIPTION NOT RENEWING
     * ============================================================
     */
    if (eventName === "subscription.not_renew") {
      const subscription = eventData;

      console.log(
        "PAYSTACK SUBSCRIPTION NOT RENEWING:",
        JSON.stringify(subscription, null, 2)
      );

      const subscriptionCode =
        subscription.subscription_code ||
        subscription.code ||
        null;

      if (subscriptionCode) {
        const { error } = await supabaseAdmin
          .from("donations")
          .update({
            subscription_status: "non_renewing",
            subscription_event:
              "subscription.not_renew",
            updated_at: new Date().toISOString(),
          })
          .eq("subscription_code", subscriptionCode);

        if (error) {
          console.error(
            "Subscription not-renewing update error:",
            error
          );
        }
      }
    }

    /*
     * ============================================================
     * SUBSCRIPTION DISABLED
     * ============================================================
     */
    if (eventName === "subscription.disable") {
      const subscription = eventData;

      console.log(
        "PAYSTACK SUBSCRIPTION DISABLED:",
        JSON.stringify(subscription, null, 2)
      );

      const subscriptionCode =
        subscription.subscription_code ||
        subscription.code ||
        null;

      if (subscriptionCode) {
        const { error } = await supabaseAdmin
          .from("donations")
          .update({
            subscription_status:
              subscription.status || "disabled",
            subscription_event:
              "subscription.disable",
            updated_at: new Date().toISOString(),
          })
          .eq("subscription_code", subscriptionCode);

        if (error) {
          console.error(
            "Subscription disabled update error:",
            error
          );
        }
      }
    }

    /*
     * ============================================================
     * SUBSCRIPTION CREATED
     * ============================================================
     */
    if (eventName === "subscription.create") {
      const subscription = eventData;

      console.log(
        "PAYSTACK SUBSCRIPTION CREATED:",
        JSON.stringify(subscription, null, 2)
      );
    }

    /*
     * Always acknowledge the webhook.
     */
    return NextResponse.json(
      { received: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Paystack webhook error:",
      error
    );

    return NextResponse.json(
      {
        message: "Webhook processing failed.",
      },
      { status: 500 }
    );
  }
}