import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const debugToken = process.env.PAYSTACK_WEBHOOK_DEBUG_TOKEN;
    const providedToken = request.headers.get("x-webhook-debug-token");

    if (!debugToken || providedToken !== debugToken) {
      return NextResponse.json(
        { message: "Unauthorized." },
        { status: 401 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { message: "PAYSTACK_SECRET_KEY is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.paystack.co/integration/webhooks/events?event_type=charge.success&limit=5",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json(
        {
          message: data.message || "Unable to retrieve webhook events.",
        },
        { status: response.status || 500 }
      );
    }

    return NextResponse.json({
      status: true,
      events: data.data.map((event: any) => ({
        id: event._id,
        domain: event.domain,
        event: event.event_name,
        status: event.status,
        statusDetail: event.status_detail,
        responseCode: event.response_code,
        attempts: event.trial_count,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
      })),
    });
  } catch (error) {
    console.error("Webhook status error:", error);

    return NextResponse.json(
      { message: "Unable to check webhook status." },
      { status: 500 }
    );
  }
}