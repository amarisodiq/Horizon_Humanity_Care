import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  HeartPulse,
  BriefcaseBusiness,
  HandHeart,
  Scale,
  WalletCards,
  GraduationCap,
  UsersRound,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const programs = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    short:
      "Improving access to healthcare, preventive services and psychosocial support.",
    description:
      "Horizon Humanity Care seeks to help retired personnel and their families navigate healthcare challenges through practical support, health awareness and strategic partnerships.",
    activities: [
      "Medical outreaches and health screenings",
      "Healthcare access and referral support",
      "Health insurance advocacy",
      "Psychosocial and wellbeing support",
      "Partnerships with healthcare providers",
    ],
    image: "/images/program-healthcare.jpg",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Economic Empowerment",
    short:
      "Creating pathways for sustainable income, enterprise and continued contribution.",
    description:
      "Retirement should not necessarily mean the end of productive activity. We support initiatives that help retirees develop practical skills, explore enterprise opportunities and strengthen financial independence.",
    activities: [
      "Entrepreneurship training",
      "Small business support",
      "Cooperative opportunities",
      "Agricultural and livelihood projects",
      "Enterprise development",
    ],
    image: "/images/program-economic.jpg",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Welfare & Humanitarian Support",
    short:
      "Providing practical assistance to retirees experiencing vulnerability or hardship.",
    description:
      "For retirees facing difficult circumstances, timely assistance can make a meaningful difference. Our welfare work focuses on dignity, responsiveness and practical humanitarian support.",
    activities: [
      "Emergency assistance",
      "Food support",
      "Clothing and essential supplies",
      "Housing assistance",
      "Relief for vulnerable retirees",
    ],
    image: "/images/program-welfare.jpg",
  },
  {
    number: "04",
    icon: Scale,
    title: "Legal & Pension Support",
    short:
      "Helping retirees better understand their rights, documentation and retirement benefits.",
    description:
      "Navigating pensions, gratuities and administrative processes can be challenging. Horizon seeks to connect beneficiaries with appropriate guidance and support.",
    activities: [
      "Pension guidance",
      "Gratuity and benefit information",
      "Documentation support",
      "Legal rights awareness",
      "Access to relevant government services",
    ],
    image: "/images/program-legal.jpg",
  },
  {
    number: "05",
    icon: WalletCards,
    title: "Financial Literacy",
    short:
      "Strengthening financial decision-making before and after retirement.",
    description:
      "Financial literacy can help retirees make informed decisions around budgeting, savings, investments and long-term financial wellbeing.",
    activities: [
      "Retirement planning",
      "Budgeting education",
      "Investment awareness",
      "Pension management education",
      "Wealth preservation",
    ],
    image: "/images/program-finance.jpg",
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Capacity Building",
    short:
      "Supporting lifelong learning, digital literacy, vocational skills and leadership.",
    description:
      "Retirement can open new opportunities for learning and contribution. Our capacity-building initiatives are designed to help beneficiaries acquire relevant knowledge and practical skills.",
    activities: [
      "Digital literacy",
      "Vocational training",
      "Leadership development",
      "Mentoring",
      "Lifelong learning",
    ],
    image: "/images/program-capacity.jpg",
  },
  {
    number: "07",
    icon: UsersRound,
    title: "Family & Community Development",
    short:
      "Strengthening families, social networks and community connections.",
    description:
      "The impact of service extends beyond the individual. We recognize spouses, widows, dependents and communities as important parts of the support ecosystem.",
    activities: [
      "Family support",
      "Support for widows and dependents",
      "Youth mentorship",
      "Community engagement",
      "Social networking initiatives",
    ],
    image: "/images/program-family.jpg",
  },
  {
    number: "08",
    icon: Landmark,
    title: "Advocacy & Policy",
    short:
      "Promoting stronger systems, policies and social protection for retired personnel.",
    description:
      "Sustainable improvement requires more than individual assistance. Horizon seeks constructive engagement with stakeholders to promote stronger retirement protection and social support systems.",
    activities: [
      "Policy engagement",
      "Stakeholder dialogue",
      "Public awareness",
      "Research and evidence gathering",
      "Advocacy for stronger social protection",
    ],
    image: "/images/program-advocacy.jpg",
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
              healthcare, welfare, economic empowerment, capacity building,
              advocacy and stronger community support.
            </p>
          </ScrollReveal>
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

              <h2>
                Support that addresses the whole retirement journey.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div>
              <p>
                Horizon Humanity Care takes a holistic approach to retirement
                support. We recognize that wellbeing is connected to health,
                financial security, family relationships, social inclusion,
                legal rights and continued purpose.
              </p>

              <p>
                Our programme areas are therefore designed to complement one
                another while allowing partnerships and interventions to
                respond to specific community needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          PROGRAMME AREAS
      ========================================= */}

      <section className="programme-directory">
        <div className="container">
          <ScrollReveal>
            <div className="programme-directory-heading">
              <span className="kicker">EIGHT AREAS OF ACTION</span>

              <h2>
                Our programmes are built around dignity, opportunity and
                wellbeing.
              </h2>
            </div>
          </ScrollReveal>

          <div className="programme-list">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <ScrollReveal
                  key={program.number}
                  delay={index * 60}
                >
                  <article className="programme-detail">
                    <div className="programme-detail-image">
                      <img
                        src={program.image}
                        alt={program.title}
                      />

                      <span className="programme-number">
                        {program.number}
                      </span>
                    </div>

                    <div className="programme-detail-content">
                      <div className="programme-icon-large">
                        <Icon
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>

                      <span className="programme-label">
                        PROGRAMME {program.number}
                      </span>

                      <h3>{program.title}</h3>

                      <p className="programme-short">
                        {program.short}
                      </p>

                      <p className="programme-description">
                        {program.description}
                      </p>

                      <div className="programme-activities">
                        <span>KEY AREAS</span>

                        {program.activities.map((activity) => (
                          <div key={activity}>
                            <CheckCircle2 size={16} />
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
          DELIVERY PRINCIPLES
      ========================================= */}

      <section className="section delivery-section">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">
                HOW WE DELIVER
              </span>

              <h2>
                Programmes designed around people, partnerships and results.
              </h2>

              <p>
                Our work is intended to be practical, respectful,
                collaborative and responsive to the needs of the communities
                we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="delivery-grid">
            <ScrollReveal delay={0}>
              <div className="delivery-card">
                <span>01</span>
                <h3>Needs-led</h3>
                <p>
                  We seek to understand the actual circumstances and
                  priorities of beneficiaries before designing interventions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="delivery-card">
                <span>02</span>
                <h3>Partnership-driven</h3>
                <p>
                  We collaborate with institutions, professionals and
                  organizations whose expertise can strengthen our impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="delivery-card">
                <span>03</span>
                <h3>Dignity-centred</h3>
                <p>
                  Assistance should strengthen independence and respect,
                  rather than create unnecessary dependency.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="delivery-card">
                <span>04</span>
                <h3>Impact-focused</h3>
                <p>
                  We seek measurable learning and meaningful outcomes from
                  the programmes we develop and support.
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
              <span className="kicker light-kicker">
                PARTNER WITH HORIZON
              </span>

              <h2>
                Your expertise, resources or network can help extend our
                reach.
              </h2>

              <p>
                We welcome collaboration with government institutions,
                security agencies, healthcare providers, pension
                administrators, businesses, development organizations,
                foundations and community partners.
              </p>
            </div>

            <div className="programmes-cta-actions">
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
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}