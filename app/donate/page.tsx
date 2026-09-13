"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CreditCard,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

const donationAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

const impactTiers = [
  {
    amount: 10000,
    title: "Basic Needs",
    description:
      "Contributes to emergency food and essential household supplies for a retired security veteran's household.",
    alternative:
      "May also support specialised medical, hygiene or nutritional needs for a widow or dependant child.",
  },
  {
    amount: 20000,
    title: "Health & Education",
    description:
      "Supports subsidised medication or specialist health screening for an ageing retired security officer.",
    alternative:
      "May also support educational materials or school-support assistance for a fallen hero's child or dependant.",
  },
  {
    amount: 50000,
    title: "90-Day Support",
    description:
      "Contributes toward a comprehensive 90-day intervention cycle covering assessed welfare or economic resilience needs.",
    alternative:
      "May also support family resilience and welfare for a high-vulnerability household.",
  },
];

export default function DonatePage() {
  const [frequency, setFrequency] = useState("One-Time");
  const [amount, setAmount] = useState(50000);
  const [customAmount, setCustomAmount] = useState("");
  const [country, setCountry] = useState("Nigeria");

  const selectedAmount =
    customAmount && Number(customAmount) > 0
      ? Number(customAmount)
      : amount;

  const formattedAmount = new Intl.NumberFormat("en-NG").format(
    selectedAmount || 0
  );

  return (
    <main className="donate-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="donate-hero">
        <div className="donate-hero-overlay" />

        <div className="container donate-hero-content">
          <span className="kicker light-kicker">
            MAKE A DIFFERENCE
          </span>

          <h1>
            Honour Their Service.
            <br />
            <em>Secure Their Retirement.</em>
          </h1>

          <p>
            Your contribution directly supports retired security personnel,
            fallen heroes&apos; families, and veterans transitioning out of
            uniform with dignity, care and opportunity.
          </p>

          <div className="donate-hero-trust">
            <ShieldCheck size={18} />

            <span>
              Every intervention begins with verification and needs
              assessment.
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORIES
      ===================================================== */}

      <section className="donate-story section">
        <div className="container">
          <div className="donate-story-header">
            <div>
              <span className="kicker">
                WHY YOUR SUPPORT MATTERS
              </span>

              <h2>
                Someone&apos;s future can
                <br />
                <em>change with your support.</em>
              </h2>
            </div>

            <p>
              Behind every intervention is a person, a family and a story.
              These examples illustrate the kinds of challenges HHC seeks to
              address through structured, needs-based support.
            </p>
          </div>

          {/* TAIWO */}
          <article className="donate-person-story">
            <div className="donate-person-image">
              <img
                src="/images/taiwo.png"
                alt="Illustrative story of Taiwo, a retired security veteran facing financial pressure after service"
              />

              <div className="donate-person-image-overlay" />

              <div className="donate-person-image-label">
                <span>01</span>
                <strong>TAIWO</strong>
              </div>
            </div>

            <div className="donate-person-content">
              <span className="story-label">
                MEET TAIWO
              </span>

              <h3>
                Life after more than three decades in uniform.
              </h3>

              <p>
                After more than three decades in uniform, Taiwo retired
                expecting a quieter life. Instead, the monthly pension that
                arrives is barely enough to cover one week of food for the
                household.
              </p>

              <p>
                Rice, garri and basic ingredients have become careful
                calculations. Some days the family manages one solid meal.
                School fees still arrive. Rent still arrives. The children&apos;s
                needs do not pause simply because his years of service have
                ended.
              </p>

              <p>
                Hunger and quiet pressure now sit where structure and regular
                income once stood.
              </p>

              <div className="donate-person-tag">
                <span>CHALLENGE</span>
                <strong>Household welfare & economic pressure</strong>
              </div>
            </div>
          </article>

          {/* JOHNSON */}
          <article className="donate-person-story reverse">
            <div className="donate-person-image">
              <img
                src="/images/johnson.png"
                alt="Illustrative story of Johnson, a retired security veteran facing healthcare costs"
              />

              <div className="donate-person-image-overlay" />

              <div className="donate-person-image-label">
                <span>02</span>
                <strong>JOHNSON</strong>
              </div>
            </div>

            <div className="donate-person-content">
              <span className="story-label">
                THEN THERE IS JOHNSON
              </span>

              <h3>
                When healthcare becomes another financial burden.
              </h3>

              <p>
                Johnson left service carrying more than memories. Constant
                headaches and other symptoms forced him back to the clinic.
                The doctor asked for further tests to find the cause.
              </p>

              <p>
                The hospital bill alone is already stretching the household
                thin. He is hoping the current cost will not break what little
                stability remains.
              </p>

              <p>
                He once stood watch for the nation. Now he waits, hoping the
                next step will not cost him more than he has left to give.
              </p>

              <div className="donate-person-tag">
                <span>CHALLENGE</span>
                <strong>Healthcare access & household stability</strong>
              </div>
            </div>
          </article>

          <div className="donate-story-conclusion">
            <div className="conclusion-line" />

            <div>
              <strong>
                These are not isolated stories.
              </strong>

              <p>
                Taiwo and Johnson represent the quiet reality faced by many
                retired security personnel and the families who stood with
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HHC RESPONSE
      ===================================================== */}

      <section className="donate-response">
        <div className="container donate-response-grid">
          <div>
            <span className="kicker light-kicker">
              THIS IS WHERE HHC COMES IN
            </span>

            <h2>
              Support that helps people
              <br />
              <em>move forward.</em>
            </h2>
          </div>

          <div>
            <p>
              Horizon Humanity Care is building a structured pathway that
              responds to these realities — not only with temporary relief,
              but with support that can help families move forward.
            </p>

            <p>
              Through RSPEI and our wider programmes, we connect eligible
              beneficiaries with practical help across welfare, healthcare,
              economic empowerment, family assistance and opportunities for a
              more secure future.
            </p>

            <p className="response-highlight">
              The goal is simple: help people navigate life after service with
              dignity, independence and hope.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DONATION FORM
      ===================================================== */}

      <section
        className="donate-form-section section"
        id="donate"
      >
        <div className="container">
          <div className="center-heading">
            <span className="kicker">
              YOU CAN HELP US REACH THE NEXT FAMILY
            </span>

            <h2>
              Give once. Give monthly.
              <br />
              <em>Help build what comes next.</em>
            </h2>

            <p>
              Whatever you can give, your contribution becomes part of
              someone&apos;s next chapter.
            </p>
          </div>

          <div className="donation-form-shell">
            {/* FREQUENCY */}

            <div className="donation-step">
              <div className="donation-step-heading">
                <span>01</span>

                <div>
                  <span className="kicker">
                    GIVING FREQUENCY
                  </span>

                  <h3>
                    Choose how you would like to give.
                  </h3>
                </div>
              </div>

              <div className="frequency-grid">
                {["One-Time", "Monthly", "Annual"].map(
                  (option) => (
                    <button
                      type="button"
                      key={option}
                      className={`frequency-option ${
                        frequency === option ? "active" : ""
                      }`}
                      onClick={() => setFrequency(option)}
                    >
                      {frequency === option && (
                        <Check size={18} />
                      )}

                      <span>
                        {option === "One-Time"
                          ? "One-Time Gift"
                          : option === "Monthly"
                          ? "Monthly Recurring"
                          : "Annual Strategic Contribution"}
                      </span>

                      {option === "Monthly" && (
                        <small>Recommended</small>
                      )}
                    </button>
                  )
                )}
              </div>

              <p className="donation-note">
                Monthly giving helps sustain HHC&apos;s structured
                intervention cycles and ongoing support.
              </p>
            </div>

            {/* AMOUNT */}

            <div className="donation-step">
              <div className="donation-step-heading">
                <span>02</span>

                <div>
                  <span className="kicker">
                    YOUR CONTRIBUTION
                  </span>

                  <h3>
                    How much would you like to give?
                  </h3>
                </div>
              </div>

              <div className="amount-grid">
                {donationAmounts.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={`amount-option ${
                      amount === value && !customAmount
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount("");
                    }}
                  >
                    ₦
                    {new Intl.NumberFormat("en-NG").format(
                      value
                    )}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <label htmlFor="customAmount">
                  Or enter your own amount
                </label>

                <div className="amount-input">
                  <span>₦</span>

                  <input
                    id="customAmount"
                    type="number"
                    min="1000"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) =>
                      setCustomAmount(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="impact-tier-grid">
                {impactTiers.map((tier) => (
                  <div
                    className="impact-tier"
                    key={tier.amount}
                  >
                    <strong>
                      ₦
                      {new Intl.NumberFormat("en-NG").format(
                        tier.amount
                      )}
                    </strong>

                    <span>{tier.title}</span>

                    <p>{tier.description}</p>

                    <small>{tier.alternative}</small>
                  </div>
                ))}
              </div>
            </div>

            {/* DONOR INFORMATION */}

            <div className="donation-step">
              <div className="donation-step-heading">
                <span>03</span>

                <div>
                  <span className="kicker">
                    YOUR INFORMATION
                  </span>

                  <h3>
                    Tell us where to send your receipt and updates.
                  </h3>
                </div>
              </div>

              <div className="donor-form-grid">
                <div className="form-field">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                  />
                </div>

                <div className="form-field full">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                  <small>
                    Required for automated receipts and optional
                    HHC impact updates.
                  </small>
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone Number (Optional)
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234..."
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="country">
                    Country
                  </label>

                  <select
                    id="country"
                    value={country}
                    onChange={(e) =>
                      setCountry(e.target.value)
                    }
                  >
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <label className="newsletter-check">
                <input type="checkbox" />

                <span>
                  Keep me informed about Horizon Humanity Care&apos;s
                  work and impact.
                </span>
              </label>
            </div>

            {/* PAYMENT */}

            <div className="donation-step">
              <div className="donation-step-heading">
                <span>04</span>

                <div>
                  <span className="kicker">
                    PAYMENT
                  </span>

                  <h3>
                    Choose your preferred payment method.
                  </h3>
                </div>
              </div>

              <div className="payment-options">
                <button
                  type="button"
                  className="payment-option active"
                >
                  <CreditCard size={22} />

                  <div>
                    <strong>Pay with Card</strong>

                    <span>
                      Secure online payment
                    </span>
                  </div>

                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="payment-option"
                >
                  <Landmark size={22} />

                  <div>
                    <strong>
                      Pay with Bank Transfer
                    </strong>

                    <span>
                      Direct NGN bank transfer
                    </span>
                  </div>

                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="donation-submit">
                <div>
                  <span>Your contribution</span>

                  <strong>
                    ₦{formattedAmount}
                  </strong>
                </div>

                <button
                  type="button"
                  className="button button-gold"
                >
                  Donate ₦{formattedAmount}

                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="payment-placeholder">
                Online payment processing will become active once
                HHC&apos;s approved payment gateway is connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BANK TRANSFER
      ===================================================== */}

      <section className="bank-transfer-section">
        <div className="container bank-transfer-grid">
          <div>
            <span className="kicker">
              DIRECT BANK TRANSFER
            </span>

            <h2>
              Prefer to give
              <br />
              <em>directly?</em>
            </h2>

            <p>
              You can make a direct NGN transfer through your mobile
              banking application or bank.
            </p>

            <div className="bank-transfer-note">
              <ShieldCheck size={18} />

              <span>
                These are HHC&apos;s verified donation account details.
                Please include your donation purpose in the transfer
                reference.
              </span>
            </div>
          </div>

          <div className="bank-card">
            <div className="bank-card-top">
              <Landmark size={22} />

              <span>
                HORIZON HUMANITY CARE
              </span>
            </div>

            <div className="bank-detail">
              <span>Account Name</span>

              <strong>
                Horizon Humanity Care
              </strong>
            </div>

            <div className="bank-detail">
              <span>Nigeria / NGN</span>

              <strong>Providus Bank</strong>

              <span className="account-number">
                1310328477
              </span>
            </div>

            <div className="bank-detail">
              <span>International / USD</span>

              <strong>Providus Bank</strong>

              <span className="account-number">
                1310330423
              </span>
            </div>

            <div className="bank-detail">
              <span>SWIFT Code</span>

              <strong>
                UMPLNGLA
              </strong>
            </div>

            <div className="bank-reference">
              <strong>Important:</strong>

              <p>
                Please state the purpose of your donation in the
                transaction remarks, such as &quot;Basic Needs&quot;,
                &quot;Health Pillar&quot; or &quot;Fallen Heroes
                Support&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT
      ===================================================== */}

      <section className="donation-impact section">
        <div className="container">
          <div className="impact-card">
            <div className="impact-icon">
              <HeartHandshake size={30} />
            </div>

            <span className="kicker">
              YOUR GIFT CREATES POSSIBILITY
            </span>

            <h2>
              Every contribution helps extend
              <br />
              <em>
                practical support to someone who served.
              </em>
            </h2>

            <p>
              Your contribution helps HHC respond to a retiree,
              veteran, dependant or family when support is needed most.
            </p>

            <p>
              Thank you for helping us honour service and empower
              retirement.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ADOPT A FAMILY
      ===================================================== */}

      <section className="adopt-family-section">
        <div className="container adopt-family-grid">
          <div>
            <span className="kicker light-kicker">
              A SPECIAL WAY TO GIVE
            </span>

            <h2>
              Want to make a
              <br />
              <em>greater impact?</em>
            </h2>

            <p>
              Support a vulnerable retiree or fallen hero&apos;s family
              through a structured RSPEI package based on the
              household&apos;s assessed needs.
            </p>
          </div>

          <div className="adopt-family-card">
            <Users size={28} />

            <span>
              ADOPT A VULNERABLE RETIREE FAMILY
            </span>

            <strong>
              ₦3,000,000
            </strong>

            <p>
              A major contribution toward full RSPEI support,
              providing a structured package of assistance based on
              the family&apos;s assessed needs.
            </p>

            <a
              href="#contact"
              className="button button-gold"
            >
              Adopt a Family
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="donate-contact section"
        id="contact"
      >
        <div className="container">
          <div className="donate-contact-card">
            <div>
              <span className="kicker">
                MAJOR GIFTS & PARTNERSHIPS
              </span>

              <h2>
                Want to do
                <br />
                <em>more?</em>
              </h2>

              <p>
                For major gifts, family sponsorships, corporate
                contributions and institutional partnerships, please
                contact the HHC team.
              </p>
            </div>

            <div className="donate-contact-details">
              <a href="mailto:hhc.humanitycare@gmail.com">
                hhc.humanitycare@gmail.com
              </a>

              <a href="tel:+2349165794936">
                +234 916 579 4936
              </a>

              <a href="tel:+2349033169558">
                +234 903 316 9558
              </a>

              <Link
                href="/partnerships"
                className="text-link"
              >
                Explore Partnership Opportunities
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="donate-trust">
        <div className="container donate-trust-inner">
          <ShieldCheck size={24} />

          <p>
            Every donation to Horizon Humanity Care is intended to
            support verified, needs-based interventions. HHC tracks
            beneficiaries, services delivered and follow-up outcomes
            to support responsible stewardship and meaningful impact
            reporting.
          </p>
        </div>
      </section>
    </main>
  );
}