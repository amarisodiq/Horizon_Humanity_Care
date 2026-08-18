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
} from "lucide-react";

const institutions = [
  {
    number: "01",
    title: "Armed Forces",
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
    description:
      "Extending support to retired personnel who served communities through civil protection and national security responsibilities.",
    image: "/images/serve-nscdc.jpg",
  },
  {
    number: "04",
    title: "Department of State Services",
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
    title: "Retired Personnel",
    text: "Supporting individuals as they transition from active service into retirement and a new phase of life.",
  },
  {
    icon: Users,
    title: "Spouses & Widows",
    text: "Recognizing the families and spouses who have shared the responsibilities and sacrifices of service.",
  },
  {
    icon: UserRound,
    title: "Dependents",
    text: "Where appropriate, supporting dependents and families connected to retired personnel.",
  },
  {
    icon: Network,
    title: "Communities",
    text: "Strengthening networks, social connections and community relationships around retired personnel.",
  },
];

export default function WhoWeServePage() {
  return (
    <main>
      {/* HERO */}
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
              Honouring service
              <br />
              <em>across Nigeria's security community.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Horizon Humanity Care focuses on retired personnel from
              Nigeria's security institutions, while recognizing the families,
              dependents and communities connected to their service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section serve-introduction">
        <div className="container serve-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">OUR BENEFICIARIES</span>

              <h2>
                Service may end, but its impact continues.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="serve-intro-copy">
              <p>
                Retirement represents a major transition. For many personnel,
                it is a period of adjustment involving changes in income,
                healthcare, social networks, routine and personal purpose.
              </p>

              <p>
                Our approach recognizes the individual as well as the wider
                support system around them. That is why Horizon's work extends
                beyond retired personnel to include families, dependents and
                communities where appropriate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECURITY INSTITUTIONS */}
      <section className="institutions-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">
                  SECURITY INSTITUTIONS
                </span>

                <h2>
                  Serving those who served the nation.
                </h2>
              </div>

              <p>
                Horizon seeks to support retired personnel across Nigeria's
                security ecosystem while working respectfully with relevant
                institutions and stakeholders.
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
        </div>
      </section>

      {/* FAMILIES */}
      <section className="section family-section">
        <div className="container">
          <ScrollReveal>
            <div className="family-heading">
              <span className="kicker">
                BEYOND THE INDIVIDUAL
              </span>

              <h2>
                Supporting the people and communities connected to service.
              </h2>

              <p>
                The wellbeing of retired personnel is closely connected to
                their families and communities. Our work therefore considers
                the wider human context of retirement.
              </p>
            </div>
          </ScrollReveal>

          <div className="support-grid">
            {supportAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 90}
                >
                  <article className="support-card">
                    <div className="support-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HUMAN-CENTRED APPROACH */}
      <ScrollReveal>
        <section className="human-centred-section">
          <div className="human-centred-image" />

          <div className="human-centred-content">
            <span className="kicker light-kicker">
              A HUMAN-CENTRED APPROACH
            </span>

            <h2>
              Every beneficiary is more than a programme statistic.
            </h2>

            <p>
              We believe support should begin with listening. Understanding
              individual circumstances allows interventions to be more
              respectful, relevant and effective.
            </p>

            <div className="human-principles">
              <div>
                <Shield size={19} />
                <span>Dignity first</span>
              </div>

              <div>
                <HeartHandshake size={19} />
                <span>Respectful support</span>
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

      {/* PARTNERSHIP */}
      <ScrollReveal>
        <section className="serve-cta">
          <div className="container serve-cta-inner">
            <div>
              <span className="kicker">
                PARTNER WITH US
              </span>

              <h2>
                Help us reach more people who served.
              </h2>

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