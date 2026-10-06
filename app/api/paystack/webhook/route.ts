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

    console.log("Paystack webhook received:", event.event);

    if (event.event === "charge.success") {
      const transaction = event.data;

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

      /*
       * Paystack's charge.success payload contains
       * the plan, but not necessarily the subscription code.
       *
       * For recurring payments, fetch the customer and
       * look for the active subscription.
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

              const matchingSubscription =
              subscriptions.find(
                (subscription: any) =>
                  subscription.status === "active" &&
                  Number(subscription.amount) === Number(transaction.amount)
              );

            subscriptionCode =
              matchingSubscription?.subscription_code || null;
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
        email: donation.donor_email,
      });
    }

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