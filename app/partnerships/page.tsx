import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Handshake,
  Users,
  Globe2,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

const partnerTypes = [
  {
    number: "01",
    icon: Landmark,
    title: "Government & Public Institutions",
    text: "Collaborating on programmes, policy engagement, institutional coordination and initiatives that strengthen retirement support.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Security Institutions",
    text: "Working alongside relevant security institutions and associations to better understand and respond to the needs of retired personnel.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Private Sector",
    text: "Mobilising corporate expertise, resources, technology, employment opportunities and enterprise support.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Healthcare Providers",
    text: "Developing healthcare partnerships that can improve access, awareness, screening and wellbeing support.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Education & Skills Partners",
    text: "Creating opportunities for digital literacy, vocational development, entrepreneurship and lifelong learning.",
  },
  {
    number: "06",
    icon: Globe2,
    title: "Development Organisations",
    text: "Working with foundations, NGOs and development partners around shared social protection and community objectives.",
  },
];

const opportunities = [
  {
    number: "01",
    title: "Programme Partnership",
    text: "Co-design, fund or implement initiatives addressing healthcare, welfare, economic empowerment or capacity building.",
  },
  {
    number: "02",
    title: "Technical Expertise",
    text: "Contribute professional knowledge, specialist services, research or advisory support to strengthen programme quality.",
  },
  {
    number: "03",
    title: "Resource Mobilisation",
    text: "Support the delivery of programmes through financial contributions, equipment, materials or other appropriate resources.",
  },
  {
    number: "04",
    title: "Knowledge & Research",
    text: "Collaborate on research, data, publications and evidence that can improve understanding of retirement challenges.",
  },
  {
    number: "05",
    title: "Skills & Employment",
    text: "Create opportunities for training, mentorship, enterprise development or meaningful post-retirement engagement.",
  },
  {
    number: "06",
    title: "Strategic Advocacy",
    text: "Join constructive conversations that promote stronger retirement systems, social protection and public awareness.",
  },
];

export default function PartnershipsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="partnerships-hero">
        <div className="partnerships-hero-overlay" />

        <div className="container partnerships-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              PARTNERSHIPS
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Stronger together.
              <br />
              <em>Greater impact.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Horizon Humanity Care welcomes strategic partnerships with
              institutions and organisations that share our commitment to
              dignity, wellbeing and opportunity after service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="section partnership-intro">
        <div className="container partnership-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">
                WHY PARTNERSHIPS MATTER
              </span>

              <h2>
                Complex challenges require coordinated solutions.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="partnership-intro-copy">
              <p>
                The needs of retired security personnel span healthcare,
                welfare, pensions, financial resilience, skills, family
                support and social inclusion. Addressing these areas
                effectively requires collaboration across sectors.
              </p>

              <p>
                Horizon seeks to connect organisations with complementary
                capabilities around clearly defined objectives and practical
                programmes.
              </p>

              <p>
                Our goal is not simply to establish partnerships, but to build
                relationships that create measurable and sustainable value for
                beneficiaries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PARTNER TYPES */}

      <section className="partner-types-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">
                  WHO WE WORK WITH
                </span>

                <h2>
                  Bringing complementary strengths together.
                </h2>
              </div>

              <p>
                We are open to responsible collaboration with public,
                private, development and community stakeholders.
              </p>
            </div>
          </ScrollReveal>

          <div className="partner-types-grid">
            {partnerTypes.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <ScrollReveal
                  key={partner.number}
                  delay={index * 80}
                >
                  <article className="partner-type-card">
                    <div className="partner-type-top">
                      <span>{partner.number}</span>

                      <Icon
                        size={26}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>{partner.title}</h3>

                    <p>{partner.text}</p>

                    <Link href="/contact">
                      Discuss Collaboration
                      <ArrowRight size={15} />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}

      <section className="section partnership-opportunities">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">
                WAYS TO COLLABORATE
              </span>

              <h2>
                There are many ways to contribute to the mission.
              </h2>

              <p>
                Partnerships can be tailored to the capabilities,
                priorities and resources of each organisation.
              </p>
            </div>
          </ScrollReveal>

          <div className="opportunity-grid">
            {opportunities.map((opportunity, index) => (
              <ScrollReveal
                key={opportunity.number}
                delay={index * 70}
              >
                <article className="opportunity-card">
                  <span>{opportunity.number}</span>

                  <h3>{opportunity.title}</h3>

                  <p>{opportunity.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PRINCIPLES */}

      <ScrollReveal>
        <section className="partnership-principles">
          <div className="container partnership-principles-grid">
            <div className="partnership-principles-content">
              <span className="kicker light-kicker">
                OUR PARTNERSHIP PRINCIPLES
              </span>

              <h2>
                Relationships built on trust and shared responsibility.
              </h2>

              <p>
                We seek partnerships that are aligned with our values and
                capable of creating meaningful benefit for the people and
                communities we serve.
              </p>
            </div>

            <div className="partnership-principles-list">
              <div>
                <CheckCircle2 size={19} />
                <span>Shared objectives</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Clear roles and responsibilities</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Transparency and accountability</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Respect for beneficiaries</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Responsible resource management</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Long-term sustainability</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* PARTNERSHIP JOURNEY */}

      <section className="section partnership-journey">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">
                  STARTING A PARTNERSHIP
                </span>

                <h2>
                  A straightforward path from conversation to collaboration.
                </h2>
              </div>

              <p>
                We aim to make the initial engagement clear, professional and
                focused on shared priorities.
              </p>
            </div>
          </ScrollReveal>

          <div className="journey-grid">
            <ScrollReveal delay={0}>
              <div className="journey-step">
                <span>01</span>
                <h3>Connect</h3>
                <p>
                  Start a conversation about your organisation and areas of
                  shared interest.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="journey-step">
                <span>02</span>
                <h3>Explore</h3>
                <p>
                  Identify the needs, opportunities and capabilities that
                  could form the basis of collaboration.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="journey-step">
                <span>03</span>
                <h3>Design</h3>
                <p>
                  Develop an appropriate programme, initiative or support
                  arrangement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="journey-step">
                <span>04</span>
                <h3>Deliver</h3>
                <p>
                  Work together to implement, monitor and improve the
                  initiative.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}

      <ScrollReveal>
        <section className="partnership-final-cta">
          <div className="container partnership-final-inner">
            <div>
              <span className="kicker">
                LET&apos;S BUILD SOMETHING MEANINGFUL
              </span>

              <h2>
                Your organisation could help shape a more dignified
                retirement.
              </h2>

              <p>
                Tell us about your organisation, expertise or area of
                interest and let&apos;s explore where our objectives align.
              </p>
            </div>

            <div className="partnership-final-actions">
              <Link
                href="/contact"
                className="button button-navy"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/get-involved"
                className="button button-outline"
              >
                Other Ways to Help
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}