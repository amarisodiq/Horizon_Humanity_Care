import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      email,
      amount,
      firstName,
      lastName,
      phone,
      country,
      frequency,
    } = body;

    if (!email || !amount) {
      return NextResponse.json(
        { message: "Email and amount are required." },
        { status: 400 }
      );
    }

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount < 1000) {
      return NextResponse.json(
        { message: "Donation amount must be at least ₦1,000." },
        { status: 400 }
      );
    }

    const amountInKobo = Math.round(numericAmount * 100);

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          amount: amountInKobo.toString(),
          currency: "NGN",
        
          callback_url: `${new URL(request.url).origin}/donate/success`,

          metadata: {
            donor_name: `${firstName || ""} ${lastName || ""}`.trim(),
            first_name: firstName || "",
            last_name: lastName || "",
            phone: phone || "",
            country: country || "Nigeria",
            frequency: frequency || "One-Time",
            donation_amount: numericAmount,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      console.error("Paystack error:", data);

      return NextResponse.json(
        {
          message:
            data.message || "Unable to initialize payment.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (error) {
    console.error("Paystack initialization error:", error);

    return NextResponse.json(
      {
        message:
          "Something went wrong while starting payment.",
      },
      { status: 500 }
    );
  }
}