import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Target,
  Eye,
  Handshake,
  Scale,
  UsersRound,
  BookOpen,
  BriefcaseBusiness,
  HeartPulse,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Dignity",
    text: "We treat every person we serve with respect, compassion and dignity, regardless of their circumstances.",
  },
  {
    number: "02",
    icon: Award,
    title: "Honour",
    text: "We recognise the sacrifices of those who served and ensure that service remains visible beyond the uniform.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Evidence",
    text: "We seek to understand needs through verification, assessment, learning and responsible use of information.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Partnership",
    text: "We work with institutions, professionals, communities and supporters to create sustainable impact.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Integrity",
    text: "We are committed to honesty, accountability, responsible stewardship and doing what is right.",
  },
];

const workAreas = [
  {
    icon: ShieldCheck,
    title: "Prevention",
    text: "Promoting awareness and retirement readiness before challenges become crises.",
  },
  {
    icon: BookOpen,
    title: "Preparation",
    text: "Helping serving personnel understand the practical realities of transition and life after service.",
  },
  {
    icon: HeartPulse,
    title: "Intervention",
    text: "Connecting eligible beneficiaries with practical welfare, healthcare and family support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Empowerment",
    text: "Supporting economic resilience, skills, entrepreneurship and meaningful opportunities.",
  },
  {
    icon: Award,
    title: "Recognition",
    text: "Keeping the stories, sacrifices and contributions of service personnel visible.",
  },
];

const founderMariam = [
  "Serving Police Officer",
  "Public Relations Practitioner",
  "On-Air Personality",
  "BSc, Kwara State University",
  "MA Public Relations, NIPR",
  "PGD Peace & Security, UNIPORT",
  "Master's in Corporate Communication, Rome Business School",
];

const founderAduragba = [
  "Entrepreneur",
  "Project Management Professional",
  "Oil & Gas Executive",
  "BSc Industrial Chemistry",
  "MSc Project Management, Rome Business School",
  "DBA, London Bridge Business School",
  "Upstream & Oil and Gas Servicing",
];

const founderMariamRoles = [
  "Nigeria Police Force career began in 2017",
  "Served across Ilorin, the FCT and Port Harcourt",
  "Currently a Port Harcourt Police OAP",
  "Uses 99.1 Police Radio Abuja and Super FM Port Harcourt",
  "Member of IACP, CIPR UK and NIPR",
];

const founderAduragbaRoles = [
  "Project delivery and commercial coordination",
  "Contract administration",
  "Stakeholder engagement",
  "Business development",
  "Experience working with IOCs and major industry stakeholders",
  "Certified Management Professional",
];

const objectives = [
  "Improve the welfare and quality of life of retired security personnel and their families.",
  "Facilitate access to healthcare, wellness and relevant support services.",
  "Promote economic resilience, entrepreneurship, financial literacy and second-career opportunities.",
  "Support retirement readiness, awareness and practical transition planning.",
  "Provide needs-based assistance to vulnerable retirees and families of fallen heroes.",
  "Support families through educational, welfare and livelihood interventions where feasible.",
  "Promote social inclusion, community recognition, mentorship and continued contribution.",
  "Generate awareness and evidence around the realities of life after security service.",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="inner-hero about-hero">
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
              A cause born
              <br />
              <em>from service.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p>
              Horizon Humanity Care exists to ensure that those who spent
              their lives protecting others do not face life after service
              without dignity, care or opportunity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

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
                Horizon Humanity Care is a Nigerian non-profit organisation
                established in 2021 to improve the quality of life of retired
                security personnel and their families.
              </p>

              <p>
                Our work recognises that retirement can bring major changes
                to income, healthcare access, social connection, personal
                identity, family responsibilities and economic opportunity.
              </p>

              <p>
                We therefore focus on practical support, preparation,
                empowerment and recognition — helping people navigate the
                transition from active service into a dignified and more
                secure next chapter.
              </p>

              <Link href="/programs" className="text-link">
                Explore Our Programmes
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          FOUNDER STORY
      ========================================================= */}

      <section className="about-founder-story">
        <div className="container about-founder-story-grid">
          <ScrollReveal direction="left">
            <div className="about-founder-story-image">
              <img
                src="/images/about-story.jpg"
                alt="Community and service personnel represented in Horizon Humanity Care's work"
              />

              <div className="about-founder-story-overlay" />

              <div className="about-founder-story-caption">
                <span>THE BEGINNING</span>

                <strong>
                  Service should never become invisible
                  <br />
                  when the uniform comes off.
                </strong>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="about-founder-story-content">
              <span className="kicker">OUR STORY</span>

              <h2>
                A cause shaped by
                <br />
                <em>lived experience.</em>
              </h2>

              <p>
                The idea behind Horizon Humanity Care grew from firsthand
                exposure to the realities faced by security personnel and
                their families during and after service.
              </p>

              <p>
                The organisation&apos;s founder grew up in the barracks as the
                daughter of two police officers. From an early age, she
                witnessed the long hours, transfers, sacrifices and demands
                that came with police service.
              </p>

              <p>
                She also witnessed what could happen when officers died in
                service or left active duty — and how families could face a
                very different reality once the structure of service was
                gone.
              </p>

              <p>
                Her co-founder came to understand these realities through his
                wife, her professional experience and the wider service
                community around them.
              </p>

              <p>
                Horizon Humanity Care was built from that understanding:
                combining prevention, preparation, intervention,
                empowerment and recognition to help bridge the gap between
                active service and life beyond it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          CORE BELIEF
      ========================================================= */}

      <section className="about-belief">
        <div className="container">
          <ScrollReveal>
            <div className="about-belief-inner">
              <span className="kicker light-kicker">
                OUR CORE BELIEF
              </span>

              <h2>
                We believe service should never become invisible
                <br />
                <em>when the uniform comes off.</em>
              </h2>

              <p>
                Those who spent their lives protecting others deserve dignity,
                care and opportunity after service.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          FOUNDERS
      ========================================================= */}

      <section className="section founders-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading founders-heading">
              <div>
                <span className="kicker">OUR FOUNDERS</span>

                <h2>
                  Experience behind
                  <br />
                  <em>the mission.</em>
                </h2>
              </div>

              <p>
                Horizon Humanity Care brings together professional experience,
                service knowledge and a shared commitment to improving life
                after service.
              </p>
            </div>
          </ScrollReveal>

          {/* MARIAM */}
          <ScrollReveal direction="left">
            <article className="founder-card">
              <div className="founder-image">
                <img
                  src="/images/founder-mariam.png"
                  alt="Abdulraheem Mariam"
                />

                <div className="founder-image-number">01</div>
              </div>

              <div className="founder-content">
                <span className="kicker">
                  CO-FOUNDER
                </span>

                <h3>
                  Abdulraheem
                  <br />
                  Mariam
                </h3>

                <p className="founder-role">
                  Serving Police Officer · PR Practitioner · OAP
                </p>

                <p>
                  Abdulraheem Mariam is a serving police officer, public
                  relations practitioner and on-air personality whose career
                  and personal background have given her a close understanding
                  of the realities of police service and the transition beyond
                  active duty.
                </p>

                <p>
                  Her career with the Nigeria Police Force began in 2017 and
                  has included roles across Ilorin, the Federal Capital
                  Territory and Port Harcourt. She currently serves as a
                  Port Harcourt Police OAP, using 99.1 Police Radio Abuja and
                  Super FM Port Harcourt.
                </p>

                <div className="founder-details-grid">
                  <div>
                    <span>EDUCATION</span>

                    <ul>
                      {founderMariam.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span>PROFESSIONAL EXPERIENCE</span>

                    <ul>
                      {founderMariamRoles.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="founder-memberships">
                  <span>MEMBERSHIPS</span>

                  <strong>
                    IACP · CIPR UK · NIPR
                  </strong>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* ADURAGBA */}
          <ScrollReveal direction="right" delay={120}>
            <article className="founder-card founder-card-reverse">
              <div className="founder-image">
                <img
                  src="/images/founder-aduragba.png"
                  alt="Abdulraheem Aduragba"
                />

                <div className="founder-image-number">02</div>
              </div>

              <div className="founder-content">
                <span className="kicker">
                  CO-FOUNDER
                </span>

                <h3>
                  Abdulraheem
                  <br />
                  Aduragba
                </h3>

                <p className="founder-role">
                  Entrepreneur · Project Management Professional · Oil & Gas
                  Executive
                </p>

                <p>
                  Abdulraheem Aduragba is an entrepreneur, project management
                  professional and oil and gas executive with experience in
                  project delivery, commercial coordination, contract
                  administration, stakeholder engagement and business
                  development.
                </p>

                <p>
                  His professional experience includes upstream and oil and
                  gas servicing, working with international oil companies and
                  major industry stakeholders, while coordinating projects
                  and commercial relationships across the sector.
                </p>

                <div className="founder-details-grid">
                  <div>
                    <span>EDUCATION</span>

                    <ul>
                      {founderAduragba.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span>PROFESSIONAL EXPERIENCE</span>

                    <ul>
                      {founderAduragbaRoles.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={15} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="founder-memberships">
                  <span>PROFESSIONAL RECOGNITION</span>

                  <strong>
                    CMP · Distinguished Fellow, AIPA Ghana · Honorary
                    Doctorate, ILMMD
                  </strong>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          VISION & MISSION
      ========================================================= */}

      <section className="section vision-mission">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">OUR DIRECTION</span>

                <h2>
                  A clear purpose.
                  <br />
                  <em>A national ambition.</em>
                </h2>
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
                  A Nigeria where no retired security officer, and no family
                  that depended on their service, faces the transition out of
                  uniform alone.
                </h3>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <article className="vm-card mission-card">
                <span>OUR MISSION</span>

                <Target size={34} />

                <h3>
                  To improve the quality of life of retired security personnel
                  and their families through healthcare, welfare, economic
                  opportunity, social inclusion, retirement readiness and
                  community recognition.
                </h3>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="section values">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">
                OUR CORE VALUES
              </span>

              <h2>
                The principles behind
                <br />
                <em>our work.</em>
              </h2>

              <p>
                These principles shape how Horizon Humanity Care serves
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
                      {value.number}
                    </div>

                    <Icon
                      size={27}
                      strokeWidth={1.5}
                    />

                    <h3>{value.title}</h3>

                    <p>{value.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}

      <section className="about-how-we-work">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker light-kicker">
                  HOW WE WORK
                </span>

                <h2>
                  From service
                  <br />
                  <em>to what comes next.</em>
                </h2>
              </div>

              <p>
                Our approach combines prevention, preparation, intervention,
                empowerment and recognition rather than treating retirement
                challenges as isolated problems.
              </p>
            </div>
          </ScrollReveal>

          <div className="work-areas-grid">
            {workAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <ScrollReveal
                  key={area.title}
                  delay={index * 80}
                >
                  <article className="work-area-card">
                    <div className="work-area-top">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Icon
                        size={26}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>{area.title}</h3>

                    <p>{area.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC OBJECTIVES
      ========================================================= */}

      <section className="section about-objectives">
        <div className="container objectives-layout">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">
                STRATEGIC OBJECTIVES
              </span>

              <h2>
                From purpose
                <br />
                <em>to action.</em>
              </h2>

              <p>
                Our objectives translate the mission into practical areas of
                intervention designed around the realities of retired
                personnel, veterans and their families.
              </p>

              <Link
                href="/programs"
                className="button button-navy"
              >
                Explore Our Programmes
                <ArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="objectives-list">
            {objectives.map((objective, index) => (
              <ScrollReveal
                key={objective}
                delay={index * 60}
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

      {/* =========================================================
          GOVERNANCE
      ========================================================= */}

      <section className="governance-section">
        <div className="container governance-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker light-kicker">
                GOVERNANCE & ACCOUNTABILITY
              </span>

              <h2>
                Built around
                <br />
                <em>responsible stewardship.</em>
              </h2>

              <p className="governance-intro">
                Responsible service requires responsible stewardship. HHC is
                committed to structures and practices that support sound
                decision-making, accountability and measurable impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div>
              <p>
                Horizon Humanity Care is designed to operate through a
                governance structure that supports responsible decision
                making, programme delivery, financial accountability,
                partnerships and monitoring and evaluation.
              </p>

              <div className="governance-list">
                <div>
                  <Landmark size={20} />

                  <div>
                    <strong>Board of Trustees</strong>

                    <span>
                      Strategic oversight and governance
                    </span>
                  </div>
                </div>

                <div>
                  <UsersRound size={20} />

                  <div>
                    <strong>Executive Management</strong>

                    <span>
                      Organisational leadership and implementation
                    </span>
                  </div>
                </div>

                <div>
                  <Handshake size={20} />

                  <div>
                    <strong>Programme & Partnership Oversight</strong>

                    <span>
                      Coordination of programmes, resources and partnerships
                    </span>
                  </div>
                </div>

                <div>
                  <Scale size={20} />

                  <div>
                    <strong>Monitoring & Evaluation</strong>

                    <span>
                      Learning, accountability and programme improvement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          2030 AMBITION
      ========================================================= */}

      <section className="about-2030">
        <div className="container about-2030-inner">
          <ScrollReveal>
            <div>
              <span className="kicker">
                2030 NATIONAL AMBITION
              </span>

              <h2>
                Reaching & empowering
                <br />
                <strong>24,000</strong> people.
              </h2>

              <p>
                By 2030, Horizon Humanity Care aims to reach and empower
                24,000 retired security personnel, fallen heroes&apos; families
                and dependants across Nigeria through meaningful engagement,
                healthcare, welfare, economic empowerment and community
                inclusion.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="about-2030-mark">
              <span>HHC</span>

              <strong>2030</strong>

              <small>
                REACH · EMPOWER · HONOUR
              </small>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <ScrollReveal>
        <section className="about-cta">
          <div className="container about-cta-inner">
            <div>
              <span className="kicker">
                JOIN THE MISSION
              </span>

              <h2>
                Help build a more dignified
                <br />
                <em>future after service.</em>
              </h2>

              <p>
                Whether through partnership, expertise, resources, advocacy
                or direct support, there is a role for people and institutions
                who share this commitment.
              </p>
            </div>

            <div className="about-cta-actions">
              <Link
                href="/partnerships"
                className="button button-navy"
              >
                Partner With Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/get-involved"
                className="button button-outline-navy"
              >
                Get Involved
              </Link>

              <Link
                href="/donate"
                className="button button-gold"
              >
                Donate
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}