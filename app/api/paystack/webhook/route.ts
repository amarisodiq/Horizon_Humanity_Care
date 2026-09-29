import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();

    const signature = request.headers.get("x-paystack-signature");

    if (!signature) {
      return NextResponse.json(
        { message: "Missing Paystack signature." },
        { status: 401 }
      );
    }

    const secret = process.env.PAYSTACK_SECRET_KEY;

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

    if (
      !crypto.timingSafeEqual(
        Buffer.from(hash),
        Buffer.from(signature)
      )
    ) {
      return NextResponse.json(
        { message: "Invalid signature." },
        { status: 401 }
      );
    }

    const event = JSON.parse(rawBody);

    console.log("Paystack webhook received:", event.event);

    if (event.event === "charge.success") {
      const transaction = event.data;

      console.log("Successful payment:", {
        reference: transaction.reference,
        amount: transaction.amount,
        currency: transaction.currency,
        email: transaction.customer?.email,
        metadata: transaction.metadata,
      });

      // Later we will save this transaction to the HHC database.
    }

    return NextResponse.json(
      { received: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Paystack webhook error:", error);

    return NextResponse.json(
      { message: "Webhook processing failed." },
      { status: 500 }
    );
  }
}