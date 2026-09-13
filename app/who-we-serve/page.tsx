import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Shield,
  Users,
  HeartHandshake,
  Building2,
  UserRound,
  Network,
  Heart,
  GraduationCap,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

const institutions = [
  {
    number: "01",
    title: "Armed Forces",
    subtitle: "Army · Navy · Air Force",
    description:
      "Supporting retired personnel whose careers have been dedicated to the defence and security of Nigeria.",
    image: "/images/serve-armed-forces.jpg",
  },
  {
    number: "02",
    title: "Nigeria Police Force",
    description:
      "Supporting retired police personnel and recognizing the contribution made through years of public safety and service.",
    image: "/images/serve-police.jpg",
  },
  {
    number: "03",
    title: "Nigeria Security and Civil Defence Corps",
    subtitle: "NSCDC",
    description:
      "Extending support to retired personnel who served communities through civil protection and national security responsibilities.",
    image: "/images/serve-nscdc.jpg",
  },
  {
    number: "04",
    title: "Department of State Services",
    subtitle: "DSS",
    description:
      "Recognizing retired personnel whose careers contributed to national intelligence and security.",
    image: "/images/serve-dss.jpg",
  },
  {
    number: "05",
    title: "Nigeria Immigration Service",
    description:
      "Supporting retirees who served in immigration management and the protection of Nigeria's borders.",
    image: "/images/serve-immigration.jpg",
  },
  {
    number: "06",
    title: "Nigeria Customs Service",
    description:
      "Recognizing retired personnel whose service contributed to border management, trade facilitation and national revenue protection.",
    image: "/images/serve-customs.jpg",
  },
  {
    number: "07",
    title: "Nigerian Correctional Service",
    description:
      "Supporting retired correctional personnel and acknowledging their contribution to custodial and rehabilitative services.",
    image: "/images/serve-correctional.jpg",
  },
];

const supportAreas = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Spouses",
    text: "Recognizing the families and spouses who have shared the responsibilities and sacrifices of service.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Widows & Widowers",
    text: "Supporting eligible widows and widowers connected to retired or deceased security personnel.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Children & Dependants",
    text: "Where appropriate, supporting children, dependants and families connected to retired personnel.",
  },
  {
    icon: Users,
    number: "04",
    title: "Fallen Heroes' Families",
    text: "Supporting vulnerable families of deceased personnel through welfare, healthcare, education and livelihood opportunities.",
  },
  {
    icon: BadgeCheck,
    number: "05",
    title: "Serving Personnel Approaching Retirement",
    text: "Helping personnel prepare for the transition from active service into retirement with greater awareness and readiness.",
  },
  {
    icon: Network,
    number: "06",
    title: "Service Communities",
    text: "Supporting other members of service communities who require relevant assistance and connection to appropriate resources.",
  },
];

export default function WhoWeServePage() {
  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="serve-page-hero">
        <div className="serve-page-overlay" />

        <div className="container serve-page-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              WHO WE SERVE
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              A growing community
              <br />
              <em>of people who served.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Horizon Humanity Care focuses on retired personnel across
              Nigeria&apos;s security and protective institutions, while
              recognizing the families, dependants and communities connected
              to their service.
            </p>
          </ScrollReveal>
        </div>

        <div className="serve-page-hero-bottom">
          <div className="container">
            <span>WHO WE SERVE</span>
            <strong>RETIREES · FAMILIES · FALLEN HEROES</strong>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}
      <section className="section serve-introduction">
        <div className="container serve-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">A GROWING COMMUNITY</span>

              <h2>
                Retirement should be a transition,
                <br />
                not a disappearance.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="serve-intro-copy">
              <p>
                A career in security service is built around structure, a
                chain of command, responsibilities, uniforms, colleagues,
                routines, institutional identity, and a clear sense of
                purpose.
              </p>

              <p>
                When active service ends, retirement can bring a welcome new
                chapter for some, while for others, it exposes challenges
                that were difficult to prepare for. These may include
                financial insecurity, healthcare needs, delayed or inadequate
                retirement benefits, reduced household income, loss of
                professional identity, social isolation, limited economic
                opportunities, family responsibilities, unexpected
                emergencies, and insufficient preparation before retirement.
              </p>

              <p className="serve-highlight">
                Horizon Humanity Care exists to help close this gap, because
                retirement should be a transition, not a disappearance.
              </p>

              <p className="serve-action-statement">
                <strong>
                  We choose action instead of complaints, together we can
                  change the narrative.
                </strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          SECURITY SERVICES
      ========================================================= */}
      <section className="institutions-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">
                  SECURITY SERVICES &amp; AGENCIES
                </span>

                <h2>Serving those who served the nation.</h2>
              </div>

              <p>
                Our work is designed for retired personnel across Nigeria&apos;s
                primary security and protective institutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="institution-grid">
            {institutions.map((institution, index) => (
              <ScrollReveal
                key={institution.number}
                delay={index * 70}
              >
                <article className="institution-card">
                  <div className="institution-image">
                    <img
                      src={institution.image}
                      alt={institution.title}
                    />

                    <span>{institution.number}</span>
                  </div>

                  <div className="institution-content">
                    <div className="institution-meta">
                      <span>{institution.number}</span>

                      {institution.subtitle && (
                        <small>{institution.subtitle}</small>
                      )}
                    </div>

                    <h3>{institution.title}</h3>

                    <p>{institution.description}</p>

                    <Link
                      href="/contact"
                      className="institution-link"
                    >
                      Discuss Partnership
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="institutions-note">
              <Shield size={20} />

              <p>
                Our scope also includes{" "}
                <strong>
                  other eligible security and protective services
                </strong>{" "}
                where relevant to HHC&apos;s programmes and support framework.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          WIDER BENEFICIARY COMMUNITY
      ========================================================= */}
      <section className="section family-section">
        <div className="container">
          <ScrollReveal>
            <div className="family-heading">
              <span className="kicker">THE WIDER BENEFICIARY COMMUNITY</span>

              <h2>
                Service affects more than just the person wearing the uniform.
              </h2>

              <p>
                An officer&apos;s journey shapes the entire household. Our
                wider beneficiary community therefore includes families,
                dependants and other members of service communities who may
                require relevant support.
              </p>
            </div>
          </ScrollReveal>

          <div className="support-grid">
            {supportAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  delay={index * 80}
                >
                  <article className="support-card">
                    <div className="support-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <span>{item.number}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FALLEN HEROES
      ========================================================= */}
      <section className="fallen-heroes-section">
        <div className="fallen-heroes-image" />

        <div className="fallen-heroes-overlay" />

        <div className="container fallen-heroes-inner">
          <ScrollReveal direction="left">
            <div className="fallen-heroes-content">
              <span className="kicker light-kicker">
                SPECIAL FOCUS
              </span>

              <h2>Families of fallen heroes should not be left behind.</h2>

              <p>
                When a security officer dies in the line of duty, the uniform
                is folded away, but the family continues living with the
                consequences.
              </p>

              <p>
                Through our Family &amp; Community pillar, HHC provides
                specialised support for eligible families of fallen personnel,
                including welfare, healthcare, education-related assistance,
                livelihood opportunities, and public remembrance.
              </p>

              <p>
                Our goal is to ensure that the sacrifice of their loved one is
                remembered and that the family is not left to navigate every
                challenge alone.
              </p>

              <Link
                href="/get-involved"
                className="button button-gold"
              >
                Support This Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          SCALE & DATA
      ========================================================= */}
      <section className="section serve-scale-section">
        <div className="container">
          <ScrollReveal>
            <div className="serve-scale-header">
              <span className="kicker">SCALE OF THE COMMUNITY &amp; DATA</span>

              <h2>
                A substantial community,
                <br />
                <em>measured responsibly.</em>
              </h2>

              <p>
                Nigeria does not currently have one publicly consolidated
                database covering every retired security personnel across all
                individual agencies. Available pension, government, and
                retirement data are distributed across separate institutions
                and pension administrators.
              </p>
            </div>
          </ScrollReveal>

          <div className="serve-data-grid">
            <ScrollReveal>
              <article className="serve-data-card serve-data-feature">
                <span className="serve-data-number">35,000+</span>

                <h3>
                  Indicative service community
                </h3>

                <p>
                  Based on available public data, HHC works within a potential
                  service community of more than 35,000 retired security
                  personnel and pension beneficiaries.
                </p>

                <small>
                  Conservative indicative aggregation — not an exact national
                  census.
                </small>
              </article>
            </ScrollReveal>

            <div className="serve-data-side">
              <ScrollReveal delay={100}>
                <article className="serve-data-card">
                  <span className="serve-data-label">
                    NPF PENSIONS
                  </span>

                  <strong>30,370</strong>

                  <p>
                    Approximately 30,370 police retirees reflected as having
                    received benefits since inception in available reporting.
                  </p>
                </article>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <article className="serve-data-card">
                  <span className="serve-data-label">
                    RECENT MONTHLY PAYMENTS
                  </span>

                  <strong>25,572</strong>

                  <p>
                    Approximately 25,572 police retirees receiving monthly
                    payments in recent reporting.
                  </p>
                </article>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="serve-data-context">
              <BriefcaseBusiness size={20} />

              <p>
                Recent military retirement cohorts have included hundreds of
                Army and Navy personnel, while Nigeria Customs Service records
                reflect thousands of retired beneficiaries and additional
                personnel scheduled for statutory retirement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          HUMAN-CENTRED APPROACH
      ========================================================= */}
      <ScrollReveal>
        <section className="human-centred-section">
          <div className="human-centred-image" />

          <div className="human-centred-content">
            <span className="kicker light-kicker">
              THE VERIFICATION &amp; ASSESSMENT PRINCIPLE
            </span>

            <h2>
              We do not assume every retiree is vulnerable.
            </h2>

            <p>
              Horizon Humanity Care recognizes the strength, discipline, and
              continued capability of retired security personnel.
            </p>

            <p>
              Our approach begins with registration, rigorous verification of
              service history and status, and individual needs assessment.
              This ensures that resources reach the people and families who
              genuinely require meaningful intervention.
            </p>

            <div className="human-principles">
              <div>
                <Shield size={19} />
                <span>Dignity first</span>
              </div>

              <div>
                <BadgeCheck size={19} />
                <span>Verify before intervention</span>
              </div>

              <div>
                <HeartHandshake size={19} />
                <span>Needs-based support</span>
              </div>

              <div>
                <Building2 size={19} />
                <span>Institutional collaboration</span>
              </div>

              <div>
                <Users size={19} />
                <span>Community connection</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* =========================================================
          CTA
      ========================================================= */}
      <ScrollReveal>
        <section className="serve-cta">
          <div className="container serve-cta-inner">
            <div>
              <span className="kicker">PARTNER WITH US</span>

              <h2>Help us reach more people who served.</h2>

              <p>
                Institutions, organizations, professionals and individuals
                can contribute expertise, resources, networks and
                opportunities that strengthen our work.
              </p>
            </div>

            <div className="serve-cta-actions">
              <Link
                href="/partnerships"
                className="button button-gold"
              >
                Explore Partnerships
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/donate"
                className="button button-outline"
              >
                Donate Now
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="button button-outline"
              >
                Contact Horizon
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}