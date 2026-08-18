import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
  Target,
  Eye,
  Scale,
  Handshake,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Upholding the highest standards of honesty, ethics and professionalism.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    text: "Remaining committed to those who dedicated their lives to serving others.",
  },
  {
    icon: UsersRound,
    title: "Respect & Dignity",
    text: "Treating every beneficiary with respect, compassion and dignity.",
  },
  {
    icon: Scale,
    title: "Accountability",
    text: "Taking responsibility for our decisions, resources and results.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Promoting openness and responsible stewardship in our work.",
  },
  {
    icon: Target,
    title: "Excellence",
    text: "Pursuing quality and meaningful results across our programmes.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "Working collaboratively with institutions and communities to create impact.",
  },
  {
    icon: BookOpen,
    title: "Inclusiveness",
    text: "Ensuring that our work recognizes diverse needs and circumstances.",
  },
];

const objectives = [
  "Promote the welfare and wellbeing of retired personnel.",
  "Facilitate access to quality healthcare and psychosocial support.",
  "Provide vocational training, entrepreneurship development and financial literacy.",
  "Advocate for improved retirement benefits, policies and social protection.",
  "Establish emergency assistance programmes for vulnerable retirees.",
  "Support educational opportunities and scholarships for children and dependents where feasible.",
  "Encourage social inclusion, networking, mentorship and community engagement.",
  "Promote research and public awareness on issues affecting retired security personnel.",
];

export default function AboutPage() {
  return (
    <main>
      {/* =========================================
          PAGE HERO
      ========================================= */}

      <section className="inner-hero">
        <div className="inner-hero-overlay" />

        <div className="container inner-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              ABOUT HORIZON HUMANITY CARE
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1>
              A lifetime of service
              <br />
              <em>deserves a future of dignity.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p>
              We exist to support retired security personnel and their
              families through practical assistance, empowerment, advocacy
              and strategic partnerships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          WHO WE ARE
      ========================================= */}

      <section className="section about-introduction">
        <div className="container about-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">WHO WE ARE</span>

              <h2>
                Honouring the people behind a lifetime of national service.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="about-copy">
              <p>
                Horizon Humanity Care is a non-profit, non-governmental
                organization established to improve the welfare, dignity and
                quality of life of retired personnel from Nigeria&apos;s
                security agencies.
              </p>

              <p>
                Our work recognizes that retirement can bring significant
                changes to financial stability, healthcare access, social
                connection, personal purpose and economic opportunity.
              </p>

              <p>
                We therefore seek to provide practical support while helping
                retirees maintain independence, dignity and the opportunity
                to continue contributing meaningfully to society.
              </p>

              <Link href="/programs" className="text-link">
                Explore Our Programmes
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          STORY
      ========================================= */}

      <ScrollReveal direction="left">
        <section className="about-story">
          <div className="about-story-image" />

          <div className="about-story-content">
            <span className="kicker">OUR STORY</span>

            <h2>
              Born from witnessing the realities of life after service.
            </h2>

            <p>
              The idea behind Horizon Humanity Care grew from firsthand
              experience with veterans and their families and the challenges
              that can emerge after active service comes to an end.
            </p>

            <p>
              We believe that people who dedicated their working lives to
              protecting others should not have to face retirement without
              dignity, support or opportunity.
            </p>

            <p>
              Horizon was created around a simple conviction: service should
              be remembered, retirement should be dignified, and support
              should strengthen independence rather than replace it.
            </p>

            <Link href="/programs" className="text-link">
              Explore Our Programmes
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* =========================================
          VISION & MISSION
      ========================================= */}

      <section className="section vision-mission">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">OUR DIRECTION</span>

                <h2>Purpose with a clear destination.</h2>
              </div>

              <p>
                Our vision and mission guide how we design programmes, build
                partnerships and engage the communities we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="vm-grid">
            <ScrollReveal direction="left">
              <article className="vm-card vision-card">
                <span>OUR VISION</span>

                <Eye size={34} />

                <h3>
                  A society where every retired security personnel can leave
                  service with dignity, financial security, good health and
                  access to meaningful opportunities.
                </h3>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <article className="vm-card mission-card">
                <span>OUR MISSION</span>

                <Target size={34} />

                <h3>
                  To empower retired security personnel through welfare
                  support, economic empowerment, healthcare access, advocacy,
                  skills development and strategic partnerships that improve
                  quality of life and strengthen continued contribution to
                  society.
                </h3>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          CORE VALUES
      ========================================= */}

      <section className="section values">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">OUR CORE VALUES</span>

              <h2>The principles behind our work.</h2>

              <p>
                Our values shape how Horizon Humanity Care serves
                beneficiaries, works with partners and manages its
                responsibilities.
              </p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <ScrollReveal
                  key={value.title}
                  delay={index * 80}
                >
                  <article className="value-card">
                    <div className="value-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <Icon size={25} strokeWidth={1.5} />

                    <h3>{value.title}</h3>

                    <p>{value.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          STRATEGIC OBJECTIVES
      ========================================= */}

      <section className="section about-objectives">
        <div className="container objectives-layout">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">STRATEGIC OBJECTIVES</span>

              <h2>
                From purpose
                <br />
                to action.
              </h2>

              <p>
                Horizon&apos;s objectives translate our mission into practical
                areas of intervention designed around the needs of retired
                personnel and their families.
              </p>

              <Link href="/programs" className="button button-navy">
                Explore Our Programmes
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="objectives-list">
            {objectives.map((objective, index) => (
              <ScrollReveal
                key={objective}
                delay={index * 70}
                direction="right"
              >
                <div className="objective-row">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2 size={19} />

                  <p>{objective}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          GOVERNANCE
      ========================================= */}

      <ScrollReveal>
        <section className="governance-section">
          <div className="container governance-grid">
            <div>
              <span className="kicker light-kicker">
                GOVERNANCE & ACCOUNTABILITY
              </span>

              <h2>Built around responsible stewardship.</h2>
            </div>

            <div>
              <p>
                Horizon Humanity Care is designed to operate through a
                governance structure that supports responsible decision
                making, programme delivery, financial accountability,
                partnerships and monitoring and evaluation.
              </p>

              <div className="governance-list">
                <div>
                  <strong>Board of Trustees</strong>
                  <span>Strategic oversight and governance</span>
                </div>

                <div>
                  <strong>Executive Management</strong>
                  <span>
                    Organizational leadership and implementation
                  </span>
                </div>

                <div>
                  <strong>Thematic Committees</strong>
                  <span>
                    Programme, finance and partnership oversight
                  </span>
                </div>

                <div>
                  <strong>Monitoring & Evaluation</strong>
                  <span>
                    Learning, accountability and programme improvement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <ScrollReveal>
        <section className="about-cta">
          <div className="container about-cta-inner">
            <div>
              <span className="kicker">WORK WITH US</span>

              <h2>
                Help build a more dignified future after service.
              </h2>

              <p>
                Whether through partnership, expertise, resources or
                advocacy, there is a role for institutions and individuals
                who share this commitment.
              </p>
            </div>

            <Link href="/get-involved" className="button button-navy">
              Get Involved
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}