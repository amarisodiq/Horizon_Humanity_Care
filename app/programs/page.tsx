import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  HeartPulse,
  HandHeart,
  BriefcaseBusiness,
  UsersRound,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

const rspeiPillars = [
  {
    number: "01",
    icon: HandHeart,
    title: "Dignity & Welfare",
    short:
      "Practical support for retirees and families experiencing vulnerability or hardship.",
    description:
      "HHC provides needs-based welfare assistance designed to protect dignity and respond to immediate challenges faced by retired security personnel and their families.",
    activities: [
      "Emergency assistance",
      "Food and essential household supplies",
      "Housing repairs",
      "Welfare referrals",
    ],
    image: "/images/program-welfare.jpg",
  },

  {
    number: "02",
    icon: HeartPulse,
    title: "Health & Wellness",
    short:
      "Improving access to healthcare, prevention, referrals and psychosocial wellbeing.",
    description:
      "HHC supports healthcare access through medical outreaches, health screening, referrals, medication support, health education and psychosocial wellbeing initiatives.",
    activities: [
      "Medical outreaches",
      "Health screening",
      "Healthcare referrals",
      "Medication support",
      "Psychosocial wellbeing initiatives",
    ],
    image: "/images/program-healthcare.jpg",
  },

  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Economic Resilience",
    short:
      "Creating pathways for sustainable income, enterprise and continued contribution.",
    description:
      "HHC supports retirees with opportunities to strengthen financial independence, develop practical skills and explore enterprise, livelihood and second-career pathways.",
    activities: [
      "Entrepreneurship training",
      "Cooperative development",
      "Financial literacy",
      "Livelihood support",
      "Business guidance",
      "Second-career pathways",
    ],
    image: "/images/program-economic.jpg",
  },

  {
    number: "04",
    icon: UsersRound,
    title: "Family & Community",
    short:
      "Strengthening families, dependants and the wider service community.",
    description:
      "Service affects entire households. HHC therefore supports spouses, widows, widowers, children and dependants while strengthening community resilience and inclusion.",
    activities: [
      "Educational assistance",
      "Youth mentorship",
      "Support for spouses",
      "Support for widows and widowers",
      "Family welfare",
      "Community resilience initiatives",
    ],
    image: "/images/program-family.jpg",
  },

  {
    number: "05",
    icon: ShieldCheck,
    title: "Honour & Readiness",
    short:
      "Preparing personnel for retirement while ensuring service continues to be recognised.",
    description:
      "HHC promotes retirement readiness and public recognition through awareness, pension information, financial literacy, documentation guidance and initiatives that honour the contribution of security personnel.",
    activities: [
      "Pre-retirement awareness",
      "Pension information",
      "Financial literacy",
      "Documentation guidance",
      "Public recognition",
    ],
    image: "/images/program-capacity.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* =========================================
          HERO
      ========================================= */}

      <section className="programs-hero">
        <div className="programs-hero-overlay" />

        <div className="container programs-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              OUR PROGRAMMES
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Practical support.
              <br />
              <em>Lasting empowerment.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Our programmes respond to the realities of retirement through
              healthcare, welfare, economic resilience, family support,
              retirement readiness and public recognition.
            </p>
          </ScrollReveal>
        </div>

        <div className="programs-hero-bottom">
          <div className="container">
            <span>HHC PROGRAMME FRAMEWORK</span>
            <strong>SUPPORTING LIFE BEYOND SERVICE.</strong>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="section programmes-intro">
        <div className="container programmes-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">OUR PROGRAMME FRAMEWORK</span>

              <h2>Supporting the whole retirement journey.</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div>
              <p>
                Horizon Humanity Care takes a holistic approach to retirement
                support. We recognise that wellbeing is connected to health,
                financial security, family relationships, social inclusion,
                retirement readiness and continued purpose.
              </p>

              <p>
                Our flagship programme, the Retired Security Personnel Support &
                Empowerment Initiative (RSPEI), brings these priorities together
                through five interconnected pillars.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          RSPEI
      ========================================= */}

      <section className="rspei-section">
        <div className="container">
          <ScrollReveal>
            <div className="rspei-heading">
              <div>
                <span className="kicker">FLAGSHIP PROGRAMME</span>

                <h2>
                  Retired Security Personnel Support & Empowerment Initiative
                </h2>
              </div>

              <p>
                RSPEI brings welfare, healthcare, economic resilience, family
                support and retirement readiness together into a coordinated
                framework for retired security personnel and their families.
              </p>
            </div>
          </ScrollReveal>

          <div className="rspei-feature">
            <ScrollReveal direction="left">
              <div className="rspei-feature-image">
                <img
                  src="/images/hhc-impact.jpg"
                  alt="Retired security personnel and community members"
                />

                <div className="rspei-feature-overlay" />

                <div className="rspei-feature-caption">
                  <span>RSPEI</span>

                  <strong>
                    Supporting life
                    <br />
                    beyond service.
                  </strong>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="rspei-feature-content">
                <span className="programme-number">01</span>

                <span className="programme-label">
                  RETIRED SECURITY PERSONNEL SUPPORT & EMPOWERMENT INITIATIVE
                </span>

                <h3>
                  A coordinated approach to dignity, care and opportunity.
                </h3>

                <p>
                  RSPEI is HHC&apos;s flagship programme, bringing welfare,
                  healthcare, economic resilience, family support and retirement
                  readiness together into a coordinated framework.
                </p>

                <div className="rspei-statement">
                  <ShieldCheck size={20} />

                  <span>
                    We believe service should never become invisible when the
                    uniform comes off.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================
              FIVE PILLARS
          ========================================= */}

          <div className="rspei-pillars-heading">
            <ScrollReveal>
              <span className="kicker">THE FIVE PILLARS</span>

              <h3>Five connected areas of support.</h3>
            </ScrollReveal>
          </div>

          <div className="rspei-pillars">
            {rspeiPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <ScrollReveal key={pillar.number} delay={index * 70}>
                  <article className="rspei-pillar">
                    <div className="rspei-pillar-image">
                      <img src={pillar.image} alt={pillar.title} />

                      <span>{pillar.number}</span>
                    </div>

                    <div className="rspei-pillar-content">
                      <div className="rspei-pillar-icon">
                        <Icon size={25} strokeWidth={1.5} />
                      </div>

                      <span className="programme-label">
                        PILLAR {pillar.number}
                      </span>

                      <h4>{pillar.title}</h4>

                      <p className="pillar-short">{pillar.short}</p>

                      <p className="pillar-description">{pillar.description}</p>

                      <div className="pillar-activities">
                        <span>FOCUS AREAS</span>

                        {pillar.activities.map((activity) => (
                          <div key={activity}>
                            <CheckCircle2 size={15} />

                            <p>{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          USSA
      ========================================= */}

      <section className="ussa-section">
        <div className="container">
          <div className="ussa-grid">
            <ScrollReveal direction="left">
              <div className="ussa-image">
                <img
                  src="/images/program-advocacy.jpg"
                  alt="Security service recognition and storytelling"
                />

                <div className="ussa-overlay" />

                <div className="ussa-image-content">
                  <Award size={30} />

                  <span>UNSUNG SHIELD</span>

                  <strong>
                    Honour is part
                    <br />
                    of the work.
                  </strong>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="ussa-content">
                <span className="kicker">RECOGNITION & STORYTELLING</span>

                <span className="ussa-number">02</span>

                <h2>Unsung Shield Awards & Media Initiative</h2>

                <p className="ussa-lead">
                  USSA is HHC&apos;s recognition and storytelling platform
                  dedicated to honouring active personnel, veterans and
                  families.
                </p>

                <p>
                  Through interviews, storytelling, media features, oral history
                  archives, public campaigns and recognition events, USSA helps
                  ensure that the contribution of those who served is seen,
                  remembered and valued.
                </p>

                <div className="ussa-features">
                  <div>
                    <CheckCircle2 size={17} />
                    <span>Interviews & storytelling</span>
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    <span>Media features</span>
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    <span>Oral history archives</span>
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    <span>Public campaigns</span>
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    <span>Recognition events</span>
                  </div>
                </div>

                <div className="ussa-quote">
                  <span>
                    &ldquo;Honour is not an accessory to our work; it is part of
                    the work.&rdquo;
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          HOW WE DELIVER
      ========================================= */}

      <section className="section delivery-section">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">HOW WE DELIVER</span>

              <h2>
                Programmes designed around people, partnerships and results.
              </h2>

              <p>
                Our work is practical, respectful, collaborative and responsive
                to the needs of the communities we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="delivery-grid">
            <ScrollReveal delay={0}>
              <div className="delivery-card">
                <span>01</span>

                <h3>Needs-led</h3>

                <p>
                  We seek to understand the actual circumstances and priorities
                  of beneficiaries before designing interventions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="delivery-card">
                <span>02</span>

                <h3>Partnership-driven</h3>

                <p>
                  We collaborate with institutions, professionals and
                  organisations whose expertise can strengthen our impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="delivery-card">
                <span>03</span>

                <h3>Dignity-centred</h3>

                <p>
                  Assistance should strengthen independence and respect, rather
                  than create unnecessary dependency.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="delivery-card">
                <span>04</span>

                <h3>Impact-focused</h3>

                <p>
                  We seek measurable learning and meaningful outcomes from the
                  programmes we develop and support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          PARTNERSHIP CTA
      ========================================= */}

      <ScrollReveal>
        <section className="programmes-cta">
          <div className="container programmes-cta-grid">
            <div>
              <span className="kicker light-kicker">PARTNER WITH HORIZON</span>

              <h2>
                Your expertise, resources or network can help extend our reach.
              </h2>

              <p>
                We welcome collaboration with government institutions, security
                agencies, healthcare providers, pension administrators,
                businesses, development organisations, foundations and community
                partners.
              </p>
            </div>

            <div className="programmes-cta-actions">
              <Link href="/partnerships" className="button button-gold">
                Explore Partnerships
                <ArrowRight size={18} />
              </Link>

              <Link href="/donate" className="button button-outline">
                Donate Now
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="button button-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
