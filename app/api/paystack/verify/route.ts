import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { message: "Transaction reference is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(
        reference
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json(
        {
          message: data.message || "Unable to verify transaction.",
        },
        { status: 400 }
      );
    }

    const transaction = data.data;

    return NextResponse.json({
      status: transaction.status,
      reference: transaction.reference,
      amount: transaction.amount,
      currency: transaction.currency,
      paidAt: transaction.paid_at,
      customer: transaction.customer,
      metadata: transaction.metadata,
    });
  } catch (error) {
    console.error("Paystack verification error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while verifying the transaction.",
      },
      { status: 500 }
    );
  }
}