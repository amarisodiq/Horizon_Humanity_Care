import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, amount, firstName, lastName, phone, country, frequency } =
      body;

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

    const normalizedFrequency = String(frequency || "One-Time")
      .trim()
      .toLowerCase();

    /*
     * HHC Monthly Giving Plans
     *
     * Each monthly donation amount has its own
     * Paystack recurring plan.
     */
    const monthlyPlans: Record<number, string> = {
      10000: "PLN_m4vxgxqvvh066l8",
      20000: "PLN_3b7ufw9w1pch95i",
      50000: "PLN_ycfi3flf9iaro72",
      100000: "PLN_fu2f9fmhy0y3quw",
      250000: "PLN_zrx0ds59olriocu",
      500000: "PLN_0z4wb85x41z1g1g",
    };

    let plan: string | undefined;

    if (
      normalizedFrequency === "monthly" ||
      normalizedFrequency === "monthly recurring"
    ) {
      plan = monthlyPlans[numericAmount];

      if (!plan) {
        return NextResponse.json(
          {
            message:
              "Please select one of the available monthly giving amounts: ₦10,000, ₦20,000, ₦50,000, ₦100,000, ₦250,000 or ₦500,000.",
          },
          { status: 400 }
        );
      }
    }

    /*
     * Annual recurring payments are not enabled yet.
     */
    if (normalizedFrequency === "annual strategic contribution") {
      return NextResponse.json(
        {
          message:
            "Annual recurring donations are not enabled yet. Please choose One-Time or Monthly Recurring.",
        },
        { status: 400 }
      );
    }

    const amountInKobo = Math.round(numericAmount * 100);

    const transactionData: Record<string, unknown> = {
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
    };

    /*
     * Adding a Paystack plan creates a recurring
     * subscription after the first successful payment.
     */
    if (plan) {
      transactionData.plan = plan;
    }

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      console.error("Paystack error:", data);

      return NextResponse.json(
        {
          message: data.message || "Unable to initialize payment.",
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
        message: "Something went wrong while starting payment.",
      },
      { status: 500 }
    );
  }
}