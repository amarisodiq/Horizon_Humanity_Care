import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  Search,
  HeartHandshake,
  Lightbulb,
  Handshake,
  BarChart3,
  ShieldCheck,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Search,
    title: "Listen & Understand",
    text: "We begin by listening to beneficiaries, families, institutions and communities to understand needs, priorities and existing gaps.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Respond with Dignity",
    text: "Our interventions are designed to provide practical assistance while respecting independence, privacy and personal dignity.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Design Practical Solutions",
    text: "We seek solutions that are relevant, realistic and capable of responding to the circumstances of the people we serve.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Build Partnerships",
    text: "We work with institutions, professionals, organizations and communities to combine expertise, resources and networks.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Measure & Learn",
    text: "We encourage monitoring, evaluation and learning so that programmes can improve over time and resources can be used responsibly.",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Dignity",
    text: "Every interaction should recognize the value, experience and contribution of those who served.",
  },
  {
    icon: Users,
    title: "Inclusion",
    text: "We consider the wider family and community environment surrounding retired personnel.",
  },
  {
    icon: Target,
    title: "Purpose",
    text: "We seek to create opportunities for continued participation, learning and contribution.",
  },
  {
    icon: BarChart3,
    title: "Accountability",
    text: "We promote responsible stewardship, transparency and evidence-informed programme development.",
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Needs Assessment",
    text: "Gathering information and understanding the circumstances of the communities and beneficiaries concerned.",
  },
  {
    number: "02",
    title: "Programme Design",
    text: "Developing interventions around identified priorities, available resources and appropriate expertise.",
  },
  {
    number: "03",
    title: "Partnership & Mobilisation",
    text: "Bringing together the institutions, professionals, resources and networks required for implementation.",
  },
  {
    number: "04",
    title: "Implementation",
    text: "Delivering programmes through coordinated activities, beneficiary engagement and responsible management.",
  },
  {
    number: "05",
    title: "Monitoring & Learning",
    text: "Reviewing progress, documenting lessons and using evidence to strengthen future interventions.",
  },
];

export default function OurApproachPage() {
  return (
    <main>
      {/* HERO */}

      <section className="approach-page-hero">
        <div className="approach-page-overlay" />

        <div className="container approach-page-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              OUR APPROACH
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Purposeful action.
              <br />
              <em>Responsible impact.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              We combine listening, practical intervention, partnership and
              accountability to create programmes that respond to the real
              needs of retired security personnel and their families.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="section approach-introduction">
        <div className="container approach-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">OUR PHILOSOPHY</span>

              <h2>
                Support should strengthen independence, not replace it.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="approach-intro-copy">
              <p>
                Horizon Humanity Care believes that meaningful support begins
                with understanding. Retired personnel have different
                circumstances, experiences, capabilities and priorities.
              </p>

              <p>
                Our approach therefore seeks to combine immediate support
                where necessary with longer-term opportunities for
                empowerment, participation and continued purpose.
              </p>

              <p>
                We also recognize that sustainable change cannot be achieved
                by one organization working alone. Collaboration with
                institutions, professionals, communities and strategic
                partners is central to our model.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PRINCIPLES */}

      <section className="approach-principles">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">OUR FIVE-STEP APPROACH</span>

              <h2>
                From understanding needs to creating lasting value.
              </h2>

              <p>
                Our approach is designed to provide a clear framework for
                identifying priorities, developing appropriate interventions
                and learning from implementation.
              </p>
            </div>
          </ScrollReveal>

          <div className="approach-principles-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.number}
                  delay={index * 90}
                >
                  <article className="approach-principle-card">
                    <div className="approach-principle-top">
                      <span>{item.number}</span>

                      <Icon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGNITY MODEL */}

      <ScrollReveal>
        <section className="approach-model">
          <div className="approach-model-image" />

          <div className="approach-model-content">
            <span className="kicker light-kicker">
              OUR GUIDING MODEL
            </span>

            <h2>
              Human dignity at the centre of every intervention.
            </h2>

            <p>
              Our work is guided by a simple principle: beneficiaries should
              remain at the centre of decisions that affect them.
            </p>

            <div className="approach-pillar-list">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <div
                    className="approach-pillar"
                    key={pillar.title}
                  >
                    <Icon size={21} />

                    <div>
                      <strong>{pillar.title}</strong>

                      <p>{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DELIVERY CYCLE */}

      <section className="section delivery-cycle">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">
                  PROGRAMME DELIVERY
                </span>

                <h2>
                  A disciplined cycle from need to learning.
                </h2>
              </div>

              <p>
                Effective programmes require structure. Our delivery cycle
                provides a framework for turning identified needs into
                coordinated action and continuous improvement.
              </p>
            </div>
          </ScrollReveal>

          <div className="delivery-cycle-list">
            {deliveryStages.map((stage, index) => (
              <ScrollReveal
                key={stage.number}
                delay={index * 80}
              >
                <article className="delivery-cycle-row">
                  <span>{stage.number}</span>

                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </div>

                  {index < deliveryStages.length - 1 && (
                    <ArrowRight className="delivery-arrow" />
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODEL */}

      <section className="partnership-model">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">
                COLLABORATIVE DELIVERY
              </span>

              <h2>
                No single organization can solve complex social challenges
                alone.
              </h2>

              <p>
                Horizon seeks to create meaningful partnerships that bring
                complementary capabilities together around shared objectives.
              </p>
            </div>
          </ScrollReveal>

          <div className="partnership-model-grid">
            <ScrollReveal delay={0}>
              <div>
                <span>01</span>
                <h3>Government & Public Institutions</h3>
                <p>
                  Collaboration around policy, services, programmes and
                  institutional coordination.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <span>02</span>
                <h3>Security Institutions</h3>
                <p>
                  Engagement with relevant institutions and associations
                  connected to retired personnel.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <span>03</span>
                <h3>Private Sector</h3>
                <p>
                  Mobilising expertise, resources, technology and employment
                  or enterprise opportunities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div>
                <span>04</span>
                <h3>Development & Civil Society</h3>
                <p>
                  Working with foundations, NGOs and development organizations
                  around shared social objectives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}

      <ScrollReveal>
        <section className="accountability-section">
          <div className="container accountability-grid">
            <div>
              <span className="kicker light-kicker">
                ACCOUNTABILITY
              </span>

              <h2>
                Responsible stewardship is part of our impact.
              </h2>

              <p>
                We believe that trust is built through transparency,
                responsible resource management, clear programme objectives
                and a willingness to learn from results.
              </p>
            </div>

            <div className="accountability-list">
              <div>
                <CheckCircle2 size={19} />
                <span>Clear programme objectives</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Responsible resource management</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Monitoring and evaluation</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Stakeholder engagement</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Continuous learning and improvement</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}

      <ScrollReveal>
        <section className="approach-cta">
          <div className="container approach-cta-inner">
            <div>
              <span className="kicker">
                LET&apos;S WORK TOGETHER
              </span>

              <h2>
                Strong partnerships create stronger outcomes.
              </h2>

              <p>
                If your institution or organization shares our commitment to
                dignity after service, we welcome the opportunity to explore
                collaboration.
              </p>
            </div>

            <div className="approach-cta-actions">
              <Link
                href="/partnerships"
                className="button button-gold"
              >
                Partnership Opportunities
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