import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Handshake,
  Heart,
  Users,
  Lightbulb,
  Landmark,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

const involvementOptions = [
  {
    number: "01",
    icon: Handshake,
    title: "Partner With Us",
    text: "Bring your institution, organisation or professional network into programmes designed to improve the wellbeing and opportunities of retired personnel.",
    action: "Explore Partnerships",
    href: "/partnerships",
  },
  {
    number: "02",
    icon: Heart,
    title: "Support Our Work",
    text: "Contribute resources that can help us develop and deliver practical initiatives across healthcare, welfare, empowerment and capacity building.",
    action: "Contact Horizon",
    href: "/contact",
  },
  {
    number: "03",
    icon: Users,
    title: "Volunteer",
    text: "Offer your time, experience or community connections to support initiatives that align with your skills and availability.",
    action: "Volunteer Interest",
    href: "/contact",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Share Your Expertise",
    text: "Professionals can contribute specialist knowledge in healthcare, finance, law, technology, training, research and other areas.",
    action: "Share Your Expertise",
    href: "/contact",
  },
  {
    number: "05",
    icon: Landmark,
    title: "Support a Programme",
    text: "Organisations can support a specific programme area through funding, equipment, technical expertise or implementation support.",
    action: "View Programmes",
    href: "/programs",
  },
  {
    number: "06",
    icon: UserPlus,
    title: "Refer or Connect",
    text: "Help connect Horizon with retired personnel, families, institutions or organisations that may benefit from our work.",
    action: "Make a Connection",
    href: "/contact",
  },
];

const commitments = [
  "Respect for beneficiaries and their dignity",
  "Responsible use of contributed resources",
  "Clear communication with partners and supporters",
  "Practical programmes with defined objectives",
  "Collaboration rather than duplication",
  "Continuous learning and improvement",
];

export default function GetInvolvedPage() {
  return (
    <main>
      {/* HERO */}

      <section className="involved-hero">
        <div className="involved-hero-overlay" />

        <div className="container involved-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              GET INVOLVED
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              There is a role
              <br />
              <em>for everyone.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Whether you represent an institution, have professional
              expertise, want to volunteer or simply want to help create
              better outcomes for those who served, there are meaningful ways
              to contribute.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}

      <section className="section involved-intro">
        <div className="container involved-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">YOUR CONTRIBUTION MATTERS</span>

              <h2>
                Meaningful change is built by people who choose to participate.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="involved-intro-copy">
              <p>
                Horizon Humanity Care is building a network of people and
                institutions committed to improving life after service.
              </p>

              <p>
                Not every contribution needs to look the same. Some partners
                provide expertise. Others provide resources, networks,
                opportunities, time or access to services.
              </p>

              <p>
                What matters is finding the right way to turn your capacity
                into meaningful impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OPTIONS */}

      <section className="involvement-options">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">WAYS TO GET INVOLVED</span>

              <h2>
                Choose the contribution that fits your capacity.
              </h2>

              <p>
                Every pathway can be adapted around your organisation,
                expertise, resources and objectives.
              </p>
            </div>
          </ScrollReveal>

          <div className="involvement-grid">
            {involvementOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <ScrollReveal
                  key={option.number}
                  delay={index * 80}
                >
                  <article className="involvement-card">
                    <div className="involvement-card-top">
                      <span>{option.number}</span>

                      <Icon size={27} strokeWidth={1.5} />
                    </div>

                    <h3>{option.title}</h3>

                    <p>{option.text}</p>

                    <Link href={option.href}>
                      {option.action}
                      <ArrowRight size={15} />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUPPORT PROGRAMME */}

      <ScrollReveal>
        <section className="involved-programme-section">
          <div className="involved-programme-image" />

          <div className="involved-programme-content">
            <span className="kicker light-kicker">
              SUPPORT A PROGRAMME
            </span>

            <h2>
              Put your resources behind an area where they can make a
              difference.
            </h2>

            <p>
              Organisations and individuals can support specific areas of
              Horizon&apos;s work according to their interests, capabilities
              and available resources.
            </p>

            <div className="involved-programme-list">
              <div>
                <CheckCircle2 size={18} />
                <span>Healthcare & Wellness</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Economic Empowerment</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Welfare & Humanitarian Support</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Financial Literacy</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Capacity Building</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Family & Community Development</span>
              </div>
            </div>

            <Link
              href="/programs"
              className="button button-gold"
            >
              Explore All Programmes
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* VOLUNTEER */}

      <section className="section volunteer-section">
        <div className="container volunteer-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">VOLUNTEER & EXPERTISE</span>

              <h2>
                Your experience can become someone else&apos;s opportunity.
              </h2>

              <p>
                We welcome individuals who can contribute professional,
                technical or practical expertise to relevant initiatives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="expertise-list">
              <div>
                <span>Healthcare</span>
                <p>Medical, wellness and health education expertise.</p>
              </div>

              <div>
                <span>Finance</span>
                <p>Financial literacy, planning and investment education.</p>
              </div>

              <div>
                <span>Legal</span>
                <p>Legal information, rights awareness and documentation.</p>
              </div>

              <div>
                <span>Technology</span>
                <p>Digital literacy, technology and information systems.</p>
              </div>

              <div>
                <span>Training</span>
                <p>Vocational, leadership and professional development.</p>
              </div>

              <div>
                <span>Research</span>
                <p>Research, evaluation, documentation and knowledge.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RESPONSIBLE SUPPORT */}

      <section className="responsible-support">
        <div className="container responsible-support-grid">
          <ScrollReveal>
            <div>
              <span className="kicker light-kicker">
                OUR COMMITMENT
              </span>

              <h2>
                Support should create trust as well as impact.
              </h2>

              <p>
                We aim to build relationships with supporters and partners
                around transparency, respect, responsibility and shared
                objectives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="commitment-list">
              {commitments.map((commitment) => (
                <div key={commitment}>
                  <CheckCircle2 size={18} />
                  <span>{commitment}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}

      <ScrollReveal>
        <section className="involved-final-cta">
          <div className="container involved-final-inner">
            <div>
              <span className="kicker">READY TO CONTRIBUTE?</span>

              <h2>
                Let&apos;s find the right way for you to get involved.
              </h2>

              <p>
                Tell us about your organisation, expertise, resources or
                interest and our team can explore the most appropriate next
                step.
              </p>
            </div>

            <Link
              href="/contact"
              className="button button-navy"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}