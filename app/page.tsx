import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  BriefcaseBusiness,
  Scale,
  WalletCards,
  GraduationCap,
  UsersRound,
  HandHeart,
  Landmark,
  ChevronRight,
} from "lucide-react";

const programs = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    text: "Medical outreaches, health screenings, psychosocial support, health insurance advocacy and healthcare partnerships.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Economic Empowerment",
    text: "Entrepreneurship training, business support, cooperative opportunities, agricultural projects and pathways to sustainable income.",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Welfare & Humanitarian Support",
    text: "Emergency assistance, food support, clothing, housing assistance and relief for vulnerable retirees.",
  },
  {
    number: "04",
    icon: Scale,
    title: "Legal & Pension Support",
    text: "Guidance on pensions, gratuities, documentation, legal rights and access to government benefits.",
  },
  {
    number: "05",
    icon: WalletCards,
    title: "Financial Literacy",
    text: "Retirement planning, budgeting, investment education, pension management and wealth preservation.",
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Capacity Building",
    text: "Digital literacy, vocational skills, leadership development, mentoring and lifelong learning.",
  },
  {
    number: "07",
    icon: UsersRound,
    title: "Family & Community Development",
    text: "Support for spouses, widows, dependents, youth mentorship and stronger community connections.",
  },
  {
    number: "08",
    icon: Landmark,
    title: "Advocacy & Policy",
    text: "Working with stakeholders to strengthen legislation, policies and social protection for retired personnel.",
  },
];

const beneficiaries = [
  "Armed Forces",
  "Nigeria Police Force",
  "NSCDC",
  "DSS",
  "Nigeria Immigration Service",
  "Nigeria Customs Service",
  "Nigerian Correctional Service",
  "Families & Dependents",
];

const approach = [
  {
    number: "01",
    title: "IDENTIFY",
    text: "Understand the needs of retired personnel and their families.",
  },
  {
    number: "02",
    title: "SUPPORT",
    text: "Provide welfare, healthcare and humanitarian assistance.",
  },
  {
    number: "03",
    title: "EMPOWER",
    text: "Create opportunities through skills, enterprise and financial literacy.",
  },
  {
    number: "04",
    title: "ADVOCATE",
    text: "Promote policies and systems that protect retirement rights.",
  },
  {
    number: "05",
    title: "SUSTAIN",
    text: "Build partnerships and programmes that create lasting impact.",
  },
];

const objectives = [
  "Promote the welfare and wellbeing of retired personnel.",
  "Facilitate access to quality healthcare and psychosocial support.",
  "Provide vocational training, entrepreneurship and financial literacy.",
  "Advocate for improved retirement benefits and social protection.",
  "Establish emergency assistance for vulnerable retirees.",
  "Support education and scholarship opportunities where feasible.",
  "Encourage social inclusion, networking and mentorship.",
  "Promote research and public awareness on retirement issues.",
];

export default function Home() {
  return (
    <main>
      {/* =========================================
    HERO
========================================= */}

      <section className="hero" id="home">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="hero-copy">
            <ScrollReveal>
              <div className="eyebrow">
                <span />
                HORIZON HUMANITY CARE
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1>
                Honouring Service.
                <br />
                <em>Empowering Retirement.</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <p>
                Horizon Humanity Care works to improve the welfare, dignity and
                quality of life of retired personnel from Nigeria&apos;s
                security agencies and the families connected to their service.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="hero-actions">
                <Link href="/programs" className="button button-gold">
                  Explore Our Programs
                  <ArrowRight size={18} />
                </Link>

                <Link href="/about" className="button button-outline">
                  Discover Horizon
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={420}>
              <div className="hero-trust">
                <ShieldCheck size={18} />

                <span>
                  Supporting dignity, wellbeing, opportunity and continued
                  purpose.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-statement">
            <span>A LIFETIME OF SERVICE</span>

            <strong>DESERVES A FUTURE OF DIGNITY.</strong>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="intro section">
        <div className="container split">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">WHY HORIZON</span>

              <h2>A lifetime of service deserves a future of dignity.</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="large-copy">
              <p>
                Retirement can bring changes in financial stability, healthcare
                access, social connection, purpose and opportunity. Horizon
                Humanity Care exists to help address these challenges with
                practical, respectful support.
              </p>

              <p>
                Our work is centred on retired security personnel and the
                families and dependents connected to their service. We believe
                support should never erase independence — it should strengthen
                it.
              </p>

              <Link href="/about" className="text-link">
                Read Our Story
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          COMMITMENTS
      ========================================= */}

      <section className="commitment">
        <div className="container commitment-grid">
          <ScrollReveal delay={0}>
            <div>
              <span>01</span>
              <strong>Dignity</strong>
              <p>Honouring those who served.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <span>02</span>
              <strong>Wellbeing</strong>
              <p>Supporting healthier retirement.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <span>03</span>
              <strong>Opportunity</strong>
              <p>Creating pathways for continued contribution.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div>
              <span>04</span>
              <strong>Advocacy</strong>
              <p>Promoting stronger retirement protection.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          PROGRAMS
      ========================================= */}

      <section className="section programs" id="programs">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">OUR AREAS OF WORK</span>

                <h2>Building a stronger future after service.</h2>
              </div>

              <p>
                Our work combines practical support, empowerment, advocacy and
                long-term partnerships to address the realities faced by retired
                security personnel and their families.
              </p>
            </div>
          </ScrollReveal>

          <div className="program-list">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <ScrollReveal key={program.number} delay={index * 70}>
                  <Link href="/programs" className="program-row">
                    <span className="program-number">{program.number}</span>

                    <span className="program-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>

                    <span className="program-info">
                      <h3>{program.title}</h3>

                      <p>{program.text}</p>
                    </span>

                    <ChevronRight className="program-arrow" />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={150}>
            <div className="center-action">
              <Link href="/programs" className="button button-navy">
                View All Programs
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          WHO WE SERVE
      ========================================= */}

      <section className="serve section" id="who-we-serve">
        <div className="container">
          <div className="serve-grid">
            <ScrollReveal direction="left">
              <div>
                <span className="kicker light-kicker">WHO WE SERVE</span>

                <h2>Serving across Nigeria&apos;s security community.</h2>

                <p>
                  Our focus extends across the security institutions whose
                  personnel have dedicated their working lives to protecting the
                  nation.
                </p>

                <Link href="/who-we-serve" className="light-link">
                  Explore Who We Serve
                  <ArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>

            <div className="beneficiary-list">
              {beneficiaries.map((item, index) => (
                <ScrollReveal key={item} direction="right" delay={index * 70}>
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <strong>{item}</strong>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          OUR APPROACH
      ========================================= */}

      <section className="section approach" id="approach">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">OUR APPROACH</span>

              <h2>From recognition to lasting impact.</h2>

              <p>
                We believe meaningful change requires more than immediate
                assistance. It requires listening, partnership, empowerment and
                sustained action.
              </p>
            </div>
          </ScrollReveal>

          <div className="approach-line">
            {approach.map((item, index) => (
              <ScrollReveal key={item.number} delay={index * 100}>
                <div className="approach-item">
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="center-action">
              <Link href="/our-approach" className="text-link">
                Learn About Our Approach
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          OBJECTIVES
      ========================================= */}

      <section className="objectives section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">STRATEGIC OBJECTIVES</span>

                <h2>Turning purpose into action.</h2>
              </div>

              <p>
                Horizon Humanity Care&apos;s objectives are designed around
                welfare, health, economic resilience, social inclusion,
                retirement protection and long-term community impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="objective-grid">
            {objectives.map((objective, index) => (
              <ScrollReveal key={objective} delay={index * 70}>
                <div className="objective">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <p>{objective}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          IMPACT
      ========================================= */}

      <section className="impact section">
        <div className="container impact-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">THE CHANGE WE SEEK</span>

              <h2>
                Because those who protected our future deserve a future of their
                own.
              </h2>

              <p>
                Horizon Humanity Care aims to improve the quality of life of
                retired security personnel by increasing healthcare access,
                strengthening economic resilience, promoting social inclusion,
                protecting retirees&apos; rights and supporting continued
                purpose.
              </p>

              <Link href="/get-involved" className="button button-gold">
                Help Us Create Impact
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="impact-panel">
              <div>
                <span>HEALTHCARE</span>

                <strong>Improved access to care and wellbeing support.</strong>
              </div>

              <div>
                <span>ECONOMIC RESILIENCE</span>

                <strong>
                  Greater opportunity for sustainable livelihoods.
                </strong>
              </div>

              <div>
                <span>SOCIAL INCLUSION</span>

                <strong>Stronger families, networks and communities.</strong>
              </div>

              <div>
                <span>RETIREMENT RIGHTS</span>

                <strong>Greater awareness, advocacy and protection.</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          PARTNERSHIPS
      ========================================= */}

      <ScrollReveal>
        <section className="partner-banner">
          <div className="container partner-content">
            <div>
              <span className="kicker light-kicker">
                STRATEGIC PARTNERSHIPS
              </span>

              <h2>Together, we can honour their service.</h2>

              <p>
                Horizon Humanity Care seeks collaboration with government
                institutions, security institutions, pension administrators,
                healthcare providers, corporate organizations, development
                agencies, philanthropic foundations and community organizations.
              </p>
            </div>

            <Link href="/partnerships" className="button button-white">
              Explore Partnerships
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <ScrollReveal>
        <section className="final-cta">
          <div className="container">
            <span className="kicker">HORIZON HUMANITY CARE</span>

            <h2>
              Every sacrifice deserves
              <br />
              recognition.
            </h2>

            <p>
              Join us in building a future where retirement is defined by
              dignity, purpose, wellbeing and opportunity.
            </p>

            <div className="hero-actions">
              <Link href="/get-involved" className="button button-navy">
                Get Involved
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="button button-outline">
                Contact Horizon
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
