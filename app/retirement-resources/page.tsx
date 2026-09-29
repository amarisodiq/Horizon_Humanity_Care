import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Landmark,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const resources = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Retirement Readiness Checklist",
    text: "A practical guide to help serving personnel prepare for the transition from active service into retirement.",
    items: [
      "Personal documentation",
      "Financial preparation",
      "Healthcare planning",
      "Family readiness",
    ],
  },
  {
    number: "02",
    icon: Landmark,
    title: "Pension & Benefits Information",
    text: "Guidance to help retirees better understand pension processes, benefit documentation and where to seek appropriate information.",
    items: [
      "Pension documentation",
      "Benefit enquiries",
      "Record keeping",
      "Official information pathways",
    ],
  },
  {
    number: "03",
    icon: WalletCards,
    title: "Financial Planning",
    text: "Practical financial literacy resources designed to support more informed decisions before and after retirement.",
    items: [
      "Budgeting",
      "Income planning",
      "Savings",
      "Financial resilience",
    ],
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Health & Wellness",
    text: "Resources focused on maintaining physical and psychosocial wellbeing through the retirement transition.",
    items: [
      "Preventive healthcare",
      "Health screening",
      "Medication awareness",
      "Wellbeing support",
    ],
  },
  {
    number: "05",
    icon: BriefcaseBusiness,
    title: "Second-Career & Enterprise",
    text: "Information and practical guidance for retirees exploring entrepreneurship, livelihoods and new professional opportunities.",
    items: [
      "Entrepreneurship",
      "Cooperatives",
      "Skills development",
      "Second-career pathways",
    ],
  },
  {
    number: "06",
    icon: FileText,
    title: "Documentation & Records",
    text: "Helping service personnel understand the importance of keeping essential records organised throughout their transition.",
    items: [
      "Identity documents",
      "Service records",
      "Pension records",
      "Family documentation",
    ],
  },
];

const bulletinTopics = [
  "Pension and retirement updates",
  "Healthcare and wellbeing",
  "Financial literacy",
  "Post-retirement opportunities",
  "Policy and service-community developments",
  "Stories and practical experiences",
];

export default function RetirementResourcesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="resources-page-hero">
        <div className="resources-page-overlay" />

        <div className="container resources-page-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              RETIREMENT RESOURCES
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Preparing for what
              <br />
              <em>comes after service.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Practical information and guidance to help security personnel
              prepare for retirement, navigate transition and build a more
              secure life beyond the uniform.
            </p>
          </ScrollReveal>
        </div>

        <div className="resources-page-hero-bottom">
          <div className="container">
            <span>RETIREMENT READINESS</span>
            <strong>PREPARATION · INFORMATION · OPPORTUNITY</strong>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section resources-introduction">
        <div className="container resources-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">RETIREMENT RESOURCE CENTRE</span>

              <h2>
                Retirement should be a transition, not a disappearance.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="resources-intro-copy">
              <p>
                Leaving active service can bring significant changes in
                income, healthcare, family responsibilities, social networks
                and personal identity.
              </p>

              <p>
                The Horizon Humanity Care Retirement Resource Centre is
                designed to make that transition easier to understand and
                better prepared for.
              </p>

              <div className="resources-highlight">
                <ShieldCheck size={21} />
                <span>
                  Information should empower people to make informed
                  decisions about their next chapter.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RESOURCE DIRECTORY */}
      <section className="resources-directory">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading resources-section-heading">
              <div>
                <span className="kicker">RESOURCE DIRECTORY</span>
                <h2>Tools for life beyond the uniform.</h2>
              </div>

              <p>
                Explore practical areas that can help serving personnel,
                retirees and their families prepare for the realities of
                retirement.
              </p>
            </div>
          </ScrollReveal>

          <div className="resources-grid">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <ScrollReveal
                  key={resource.number}
                  delay={index * 70}
                >
                  <article className="resource-card">
                    <div className="resource-card-top">
                      <span>{resource.number}</span>

                      <div className="resource-icon">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                    </div>

                    <h3>{resource.title}</h3>

                    <p>{resource.text}</p>

                    <ul>
                      {resource.items.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BULLETIN */}
      <section className="retirement-bulletin-section">
        <div className="container">
          <div className="retirement-bulletin-grid">
            <ScrollReveal direction="left">
              <div className="retirement-bulletin-image">
                <div className="retirement-bulletin-image-overlay" />

                <div className="retirement-bulletin-image-content">
                  <span>HORIZON HUMANITY CARE</span>
                  <strong>
                    Retirement &amp;
                    <br />
                    Security Service
                    <br />
                    Bulletin
                  </strong>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="retirement-bulletin-content">
                <span className="kicker">RETIREMENT &amp; SECURITY SERVICE BULLETIN</span>

                <h2>
                  Information that keeps the service community informed.
                </h2>

                <p>
                  Horizon Humanity Care will develop a monthly digital
                  bulletin, with selective print distribution, covering
                  issues that matter to serving personnel, retirees and their
                  families.
                </p>

                <div className="bulletin-topic-list">
                  {bulletinTopics.map((topic) => (
                    <div key={topic}>
                      <CheckCircle2 size={17} />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="bulletin-note">
                  <BookOpen size={20} />
                  <p>
                    The bulletin is intended to make useful information easier
                    to access while connecting the service community to
                    practical opportunities and support.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* READINESS */}
      <section className="readiness-section">
        <div className="container">
          <div className="readiness-grid">
            <ScrollReveal>
              <div>
                <span className="kicker">START EARLY</span>

                <h2>
                  The best retirement plan begins before retirement.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="readiness-copy">
                <p>
                  Retirement readiness is not only about pensions. It also
                  involves healthcare, financial planning, documentation,
                  family preparation, skills, social connections and a clear
                  understanding of what comes next.
                </p>

                <div className="readiness-points">
                  <div>
                    <span>01</span>
                    <strong>Understand</strong>
                    <p>Know your records, benefits and responsibilities.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Prepare</strong>
                    <p>Build financial, health and family readiness.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Plan</strong>
                    <p>Consider opportunities beyond active service.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HHC SUPPORT CTA */}
      <section className="resources-cta">
        <div className="container resources-cta-inner">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">NEED SUPPORT?</span>

              <h2>
                You do not have to navigate the transition alone.
              </h2>

              <p>
                If you are a retired security personnel, serving officer
                approaching retirement, or a family member seeking relevant
                support, connect with Horizon Humanity Care.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="resources-cta-actions">
              <Link href="/contact" className="button button-gold">
                Contact Horizon
                <ArrowRight size={18} />
              </Link>

              <Link href="/get-involved" className="button button-outline-dark">
                Support Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}