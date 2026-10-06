import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;

    if (!secret) {
      return NextResponse.json(
        {
          success: false,
          message: "PAYSTACK_SECRET_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const reference = "T183482727031176";

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json(
        {
          success: false,
          paystackStatus: response.status,
          message: data.message || "Unable to verify transaction.",
        },
        { status: response.status }
      );
    }

    const transaction = data.data;

    return NextResponse.json({
      success: true,

      transaction: {
        id: transaction.id,
        reference: transaction.reference,
        status: transaction.status,
        amount: transaction.amount,
        currency: transaction.currency,
        domain: transaction.domain,
        paid_at: transaction.paid_at,
      },

      customer: transaction.customer,

      authorization: transaction.authorization,

      plan: transaction.plan || null,

      metadata: transaction.metadata,
    });
  } catch (error) {
    console.error("Paystack transaction debug error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while checking Paystack.",
      },
      { status: 500 }
    );
  }
}