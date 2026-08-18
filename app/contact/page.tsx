"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Building2,
  Handshake,
  Music2,
  Facebook,
  Twitter,
} from "lucide-react";

const contactReasons = [
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Discuss institutional, corporate, development or programme partnerships.",
  },
  {
    icon: Building2,
    title: "Institutional Engagement",
    text: "Connect with Horizon about stakeholder engagement, programmes or initiatives.",
  },
  {
    icon: Send,
    title: "General Enquiries",
    text: "Ask a question or request more information about our organisation and work.",
  },
];

const socialLinks = [
  {
    name: "TikTok",
    handle: "@horizon.humanityc",
    href: "https://www.tiktok.com/@horizon.humanityc",
    icon: Music2,
  },
  {
    name: "Facebook",
    handle: "Horizon Humanity Care Foundation",
    href: "#",
    icon: Facebook,
  },
  {
    name: "X",
    handle: "@horizonHHC",
    href: "https://x.com/horizonHHC",
    icon: Twitter,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const organisation = String(formData.get("organisation") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const enquiry = String(formData.get("enquiry") || "");
    const message = String(formData.get("message") || "");

    const subject = `Horizon Humanity Care Enquiry - ${enquiry}`;

    const body = `
Dear Horizon Humanity Care,

A new enquiry has been submitted through the Horizon Humanity Care website.

CONTACT DETAILS
------------------------------
Full Name: ${name}
Organisation: ${organisation}
Email: ${email}
Telephone: ${phone}
Enquiry Type: ${enquiry}

MESSAGE
------------------------------
${message}

------------------------------
Submitted through the Horizon Humanity Care website.
`;

    const mailto = `mailto:hhc.humanitycare@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);
    form.reset();
  };

  return (
    <main>
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="container contact-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              CONTACT HORIZON
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Let&apos;s start
              <br />
              <em>a conversation.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Whether you are looking to partner, collaborate, contribute
              expertise or simply learn more about Horizon Humanity Care, we
              welcome your enquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}

      <section className="section contact-intro">
        <div className="container contact-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">GET IN TOUCH</span>

              <h2>
                Every meaningful relationship starts with a conversation.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact-intro-copy">
              <p>
                Horizon Humanity Care is interested in building constructive
                relationships with institutions, organisations, professionals,
                communities and individuals who share our commitment to dignity
                after service.
              </p>

              <p>
                Use the form below or contact us directly. Our team can help
                direct your enquiry to the appropriate area.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}

      <section className="contact-main">
        <div className="container contact-main-grid">
          {/* DETAILS */}

          <ScrollReveal direction="left">
            <div className="contact-details">
              <span className="kicker">CONTACT INFORMATION</span>

              <h2>We&apos;re here to listen.</h2>

              <p className="contact-details-intro">
                For partnership enquiries, institutional engagement, programme
                information and general correspondence, please use the details
                below.
              </p>

              <div className="contact-detail-list">
                <a href="mailto:hhc.humanitycare@gmail.com">
                  <span className="contact-detail-icon">
                    <Mail size={20} />
                  </span>

                  <span>
                    <small>Email</small>
                    hhc.humanitycare@gmail.com
                  </span>
                </a>

                <a href="tel:09165794936">
                  <span className="contact-detail-icon">
                    <Phone size={20} />
                  </span>

                  <span>
                    <small>Telephone</small>
                    09165794936
                  </span>
                </a>

                <a href="tel:09033169558">
                  <span className="contact-detail-icon">
                    <Phone size={20} />
                  </span>

                  <span>
                    <small>Telephone</small>
                    09033169558
                  </span>
                </a>

                <div>
                  <span className="contact-detail-icon">
                    <MapPin size={20} />
                  </span>

                  <span>
                    <small>Office</small>
                    No 11 Olumeni Street, Forces Avenue, Old GRA,
                    Port Harcourt, Rivers State, Nigeria
                  </span>
                </div>

                <div>
                  <span className="contact-detail-icon">
                    <Clock3 size={20} />
                  </span>

                  <span>
                    <small>Office Hours</small>
                    Monday – Friday
                  </span>
                </div>
              </div>

              {/* SOCIAL MEDIA */}

              <div className="contact-social">
                <span className="kicker">FOLLOW HORIZON</span>

                <div className="contact-social-list">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={
                          social.href !== "#" ? "_blank" : undefined
                        }
                        rel={
                          social.href !== "#"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={`${social.name} - ${social.handle}`}
                      >
                        <span className="contact-social-icon">
                          <Icon size={18} />
                        </span>

                        <span>
                          <small>{social.name}</small>
                          {social.handle}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FORM */}

          <ScrollReveal direction="right" delay={120}>
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span className="kicker">SEND AN ENQUIRY</span>

                <h2>How can we help?</h2>

                <p>
                  Tell us a little about your enquiry and we&apos;ll know where
                  to direct it.
                </p>
              </div>

              {submitted && (
                <div className="form-success">
                  <strong>Thank you for contacting Horizon Humanity Care.</strong>

                  <p>
                    Your enquiry has been prepared. Your email application
                    should now open so you can send it to our team.
                  </p>
                </div>
              )}

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <label>
                    <span>Full Name</span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </label>

                  <label>
                    <span>Organisation</span>

                    <input
                      type="text"
                      name="organisation"
                      placeholder="Organisation name"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Email Address</span>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label>
                    <span>Telephone</span>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your telephone number"
                    />
                  </label>
                </div>

                <label>
                  <span>Enquiry Type</span>

                  <select
                    name="enquiry"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="Partnership">
                      Partnership
                    </option>

                    <option value="Programme Enquiry">
                      Programme Enquiry
                    </option>

                    <option value="Volunteer / Expertise">
                      Volunteer / Expertise
                    </option>

                    <option value="Institutional Engagement">
                      Institutional Engagement
                    </option>

                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </label>

                <label>
                  <span>Message</span>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="button button-navy form-submit"
                >
                  Send Enquiry
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REASONS */}

      <section className="section contact-reasons">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">WHY CONTACT US</span>

              <h2>
                There are many ways to begin working with Horizon.
              </h2>
            </div>
          </ScrollReveal>

          <div className="contact-reasons-grid">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <ScrollReveal
                  key={reason.title}
                  delay={index * 100}
                >
                  <article className="contact-reason-card">
                    <div className="contact-reason-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>{reason.title}</h3>

                    <p>{reason.text}</p>

                    <Link href="/partnerships">
                      Learn More
                      <ArrowRight size={15} />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}

      <ScrollReveal>
        <section className="contact-location">
          <div className="contact-location-map">
            <div className="map-placeholder">
              <MapPin size={30} />

              <span>Horizon Humanity Care</span>

              <small>Port Harcourt, Rivers State</small>
            </div>
          </div>

          <div className="contact-location-content">
            <span className="kicker light-kicker">
              OUR LOCATION
            </span>

            <h2>
              Connecting from Nigeria to communities and partners.
            </h2>

            <p>
              Horizon Humanity Care is focused on building relationships and
              programmes that respond to the needs of retired security
              personnel and their families across Nigeria.
            </p>

            <div className="location-detail">
              <MapPin size={19} />

              <span>
                No 11 Olumeni Street, Forces Avenue, Old GRA,
                Port Harcourt, Rivers State, Nigeria
              </span>
            </div>

            <Link
              href="/about"
              className="button button-gold"
            >
              Learn About Horizon
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}

      <ScrollReveal>
        <section className="contact-final-cta">
          <div className="container contact-final-inner">
            <div>
              <span className="kicker">
                PARTNER WITH PURPOSE
              </span>

              <h2>
                Help create a more dignified future after service.
              </h2>

              <p>
                Explore the ways your organisation, expertise or resources can
                contribute to Horizon&apos;s mission.
              </p>
            </div>

            <Link
              href="/partnerships"
              className="button button-navy"
            >
              Explore Partnerships
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}