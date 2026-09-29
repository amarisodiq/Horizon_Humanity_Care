"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

type PaymentData = {
  status: string;
  reference: string;
  amount: number;
  currency: string;
  paidAt?: string;
  customer?: {
    email?: string;
    first_name?: string;
    last_name?: string;
  };
  metadata?: {
    donor_name?: string;
    frequency?: string;
    donation_amount?: number;
  };
};

export default function DonationSuccessPage() {
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const reference = params.get("reference");

      if (!reference) {
        setError("No payment reference was found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/api/paystack/verify?reference=${encodeURIComponent(reference)}`,
          {
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to verify your payment.");
        }

        if (data.status !== "success") {
          throw new Error("This payment has not been confirmed as successful.");
        }

        setPayment(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Unable to verify your payment."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, []);

  if (loading) {
    return (
      <main className="donation-success-page">
        <div className="container donation-success-container">
          <div className="donation-success-card">
            <div className="donation-success-loader" />

            <span className="kicker">VERIFYING YOUR DONATION</span>

            <h1>Please wait...</h1>

            <p>We are securely confirming your transaction with Paystack.</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !payment) {
    return (
      <main className="donation-success-page">
        <div className="container donation-success-container">
          <div className="donation-success-card">
            <div className="donation-success-icon error">!</div>

            <span className="kicker">PAYMENT VERIFICATION</span>

            <h1>We couldn&apos;t confirm your donation.</h1>

            <p>
              {error ||
                "Please contact Horizon Humanity Care so we can check your transaction."}
            </p>

            <div className="donation-success-actions">
              <Link href="/donate" className="button button-gold">
                Return to Donate
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="text-link">
                Contact HHC
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const amount = new Intl.NumberFormat("en-NG").format(payment.amount / 100);

  const donorName =
    payment.metadata?.donor_name ||
    `${payment.customer?.first_name || ""} ${
      payment.customer?.last_name || ""
    }`.trim();

  return (
    <main className="donation-success-page">
      <div className="container donation-success-container">
        <div className="donation-success-card confirmed">
          <div className="donation-success-icon">
            <CheckCircle2 size={42} />
          </div>

          <span className="kicker">DONATION CONFIRMED</span>

          <h1>
            Thank you
            {donorName ? `, ${donorName}` : ""}.
          </h1>

          <p className="success-lead">
            Your contribution has been successfully received. Thank you for
            supporting Horizon Humanity Care.
          </p>

          <div className="donation-success-amount">
            <span>Your contribution</span>

            <strong>₦{amount}</strong>
          </div>

          <div className="donation-success-details">
            <div>
              <span>Payment status</span>
              <strong>Successful</strong>
            </div>

            <div>
              <span>Frequency</span>
              <strong>{payment.metadata?.frequency || "One-Time"}</strong>
            </div>

            <div>
              <span>Reference</span>
              <strong>{payment.reference}</strong>
            </div>
          </div>

          <div className="donation-success-trust">
            <ShieldCheck size={20} />

            <p>
              Your transaction was verified directly with Paystack. HHC uses
              verified, needs-based interventions to support retired security
              personnel and their families.
            </p>
          </div>

          <div className="donation-success-actions">
            <Link href="/" className="button button-gold">
              Return Home
              <ArrowRight size={18} />
            </Link>

            <Link href="/donate" className="text-link">
              Make Another Donation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
