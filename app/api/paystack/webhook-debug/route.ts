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

    // This is the transaction ID from the HHC monthly test payment.
    const transactionId = "6612807468";

    const response = await fetch(
      `https://api.paystack.co/integration/webhooks/events/lookup?reference=${transactionId}`,
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
          message: data.message || "Unable to retrieve webhook event.",
          data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Paystack webhook event retrieved.",
      data: data.data,
    });
  } catch (error) {
    console.error("Webhook debug error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while checking Paystack.",
      },
      { status: 500 }
    );
  }
}