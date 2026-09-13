import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import {
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

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
                After a lifetime of protecting Nigeria,
                <br />
                <em>who protects the people who served?</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <p>
                Horizon Humanity Care is a Nigerian non-profit organisation
                committed to improving the lives of retired security personnel
                and their families through practical support, healthcare,
                economic opportunity, retirement readiness, family support and
                public recognition.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={320}>
              <div className="hero-actions">
                <Link href="/get-involved" className="button button-gold">
                  Support Our Work
                  <ArrowRight size={18} />
                </Link>

                <Link href="/partnerships" className="button button-outline">
                  Partner With Us
                </Link>

                <Link href="/contact" className="button button-outline">
                  Get Support
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={420}>
              <div className="hero-trust">
                <ShieldCheck size={18} />

                <span>
                  We believe service should never become invisible when the
                  uniform comes off.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-statement">
            <span>2030 NATIONAL AMBITION</span>

            <strong>REACHING &amp; EMPOWERING 24,000 PEOPLE.</strong>
          </div>
        </div>
      </section>

      {/* =========================================
      WHY HORIZON
      ========================================= */}

      {/* =========================================
      HHC BY THE NUMBERS
      ========================================= */}

      <section className="hhc-numbers section">
        <div className="container">
          <div className="hhc-numbers-layout">
            {/* IMAGE */}
            <ScrollReveal direction="left">
              <div className="hhc-numbers-image">
                <img
                  src="/images/hhc-impact.jpg"
                  alt="Retired security personnel and community members"
                />

                <div className="hhc-numbers-image-overlay">
                  <span>HORIZON HUMANITY CARE</span>

                  <strong>
                    Service should never
                    <br />
                    become invisible.
                  </strong>
                </div>
              </div>
            </ScrollReveal>

            {/* CONTENT */}
            <ScrollReveal direction="right" delay={120}>
              <div className="hhc-numbers-content">
                <span className="kicker">HHC BY THE NUMBERS</span>

                <h2>
                  Service deserves
                  <br />
                  <em>measurable impact.</em>
                </h2>

                <p className="hhc-numbers-intro">
                  Our ambition is to turn recognition and support into
                  meaningful, measurable outcomes for retired security
                  personnel, fallen heroes&apos; families and their dependants.
                </p>

                {/* STATISTICS */}
                <div className="hhc-stats-grid">
                  <div className="hhc-stat">
                    <strong>2021</strong>

                    <span>HHC FOUNDED</span>

                    <p>
                      Established to support retired security personnel and
                      families connected to their service.
                    </p>
                  </div>

                  <div className="hhc-stat hhc-stat-featured">
                    <strong>24,000</strong>

                    <span>2030 REACH &amp; EMPOWERMENT TARGET</span>

                    <p>
                      Retired security personnel, fallen heroes&apos; families
                      and dependants we aim to reach and empower across Nigeria.
                    </p>
                  </div>

                  <div className="hhc-stat">
                    <strong>5</strong>

                    <span>CORE PROGRAMME PILLARS</span>

                    <p>
                      Welfare, health, economic resilience, family and
                      community, honour and retirement readiness.
                    </p>
                  </div>

                  <div className="hhc-stat">
                    <strong>35,000+</strong>

                    <span>INDICATIVE SERVICE COMMUNITY</span>

                    <p>
                      Retired security personnel and pension beneficiaries
                      reflected in available public data.
                    </p>
                  </div>
                </div>

                {/* SEVEN COMMUNITIES */}
                <div className="hhc-seven">
                  <strong>7</strong>

                  <div>
                    <span>SECURITY-SERVICE COMMUNITIES</span>

                    <p>
                      Core security-service communities covered through the
                      RSPEI framework.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          COMMITMENTS
      ========================================= */}
      {/* =========================================
    THOSE WHO SERVED DESERVE TO BE REMEMBERED
========================================= */}

      <section className="remember-section">
        <div className="container">
          <div className="remember-grid">
            {/* LEFT — STORY */}
            <ScrollReveal direction="left">
              <div className="remember-copy">
                <span className="kicker">
                  THOSE WHO SERVED DESERVE TO BE REMEMBERED
                </span>

                <h2>
                  A lifetime of service
                  <br />
                  deserves a future of
                  <br />
                  <em>dignity.</em>
                </h2>

                <p>
                  Every day, men and women in Nigeria&apos;s security services
                  protect lives, communities, institutions and the nation. But
                  what happens when active service ends?
                </p>

                <p>
                  For some, retirement brings a welcome new chapter; for others,
                  it brings uncertainty — reduced income, healthcare needs, loss
                  of professional identity, family pressure, limited
                  opportunities and the difficult adjustment to life outside the
                  structure of service.
                </p>

                <p>HHC exists to help bridge that gap.</p>

                <div className="remember-actions">
                  <Link href="/about" className="text-link">
                    Learn About HHC
                    <ArrowRight size={16} />
                  </Link>

                  <Link href="/programs" className="text-link">
                    Explore Our Programmes
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — THREE COMMITMENTS */}
            <ScrollReveal direction="right" delay={120}>
              <div className="remember-principles">
                <div className="remember-principle">
                  <span>01</span>

                  <div>
                    <h3>We honour the service.</h3>
                    <p>
                      We recognise the sacrifice, discipline and contribution of
                      those who dedicated their working lives to protecting
                      Nigeria.
                    </p>
                  </div>
                </div>

                <div className="remember-principle">
                  <span>02</span>

                  <div>
                    <h3>We support the transition.</h3>
                    <p>
                      We help retirees and their families navigate the
                      practical, health, financial and social realities that can
                      come with leaving active service.
                    </p>
                  </div>
                </div>

                <div className="remember-principle">
                  <span>03</span>

                  <div>
                    <h3>We help build what comes next.</h3>
                    <p>
                      Through empowerment, opportunity, preparation and
                      community, we help create pathways toward continued
                      purpose and dignity.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
      PROGRAMS
      ========================================= */}

      <section className="programmes-section">
        <div className="container">
          {/* HEADER */}
          <ScrollReveal>
            <div className="programmes-header">
              <div>
                <span className="kicker">OUR PROGRAMMES</span>

                <h2>
                  Turning service
                  <br />
                  into <em>continued purpose.</em>
                </h2>
              </div>

              <p>
                HHC combines practical welfare, healthcare, economic
                opportunity, family support and retirement readiness to help
                retired security personnel and their families navigate life
                beyond active service.
              </p>
            </div>
          </ScrollReveal>

          {/* RSPEI */}
          <ScrollReveal delay={100}>
            <div className="rspei-block">

              {/* FEATURED RSPEI CONTENT */}
              <div className="rspei-feature">
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

                <div className="rspei-feature-content">
                  <span className="programme-number">01</span>

                  <span className="programme-label">
                    FLAGSHIP PROGRAMME
                  </span>

                  <h3>
                    Retired Security
                    <br />
                    Personnel Support
                    <br />
                    &amp; Empowerment
                    <br />
                    Initiative
                  </h3>

                  <p>
                    HHC&apos;s flagship programme, bringing welfare, healthcare,
                    economic resilience, family support and retirement readiness
                    together into a coordinated framework.
                  </p>

                  <Link href="/programs" className="text-link">
                    Explore RSPEI
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* FIVE PILLARS */}
              <div className="rspei-pillars">
                <div className="programme-pillar">
                  <span>01</span>

                  <div>
                    <h4>Dignity &amp; Welfare</h4>

                    <p>
                      Emergency assistance, food, essential household supplies,
                      housing repairs and referrals.
                    </p>
                  </div>
                </div>

                <div className="programme-pillar">
                  <span>02</span>

                  <div>
                    <h4>Health &amp; Wellness</h4>

                    <p>
                      Medical outreaches, health screening, referrals,
                      medication support, education and psychosocial wellbeing
                      initiatives.
                    </p>
                  </div>
                </div>

                <div className="programme-pillar">
                  <span>03</span>

                  <div>
                    <h4>Economic Resilience</h4>

                    <p>
                      Entrepreneurship training, cooperative development,
                      financial literacy, livelihood support and second-career
                      pathways.
                    </p>
                  </div>
                </div>

                <div className="programme-pillar">
                  <span>04</span>

                  <div>
                    <h4>Family &amp; Community</h4>

                    <p>
                      Educational assistance, youth mentorship, support for
                      spouses, widows, widowers and family resilience
                      initiatives.
                    </p>
                  </div>
                </div>

                <div className="programme-pillar">
                  <span>05</span>

                  <div>
                    <h4>Honour &amp; Readiness</h4>

                    <p>
                      Pre-retirement awareness, pension information, financial
                      literacy, documentation guidance and public recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* USSA */}
          <ScrollReveal delay={180}>
            <div className="ussa-block">
              <div className="ussa-mark">
                <span>02</span>
                <strong>USSA</strong>
              </div>

              <div className="ussa-content">
                <span className="programme-label">
                  RECOGNITION &amp; MEDIA INITIATIVE
                </span>

                <h3>
                  Unsung Shield Awards
                  <br />
                  &amp; Media Initiative
                </h3>

                <p>
                  A recognition and storytelling platform dedicated to honouring
                  active personnel, veterans and families through interviews,
                  storytelling, media features, oral history archives, public
                  campaigns and recognition events.
                </p>
              </div>

              <div className="ussa-quote">
                <span>OUR BELIEF</span>

                <strong>
                  Honour is not an accessory
                  <br />
                  to our work; it is part
                  <br />
                  of the work.
                </strong>
              </div>
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
            {/* IMAGE */}
            <ScrollReveal direction="left">
              <div className="serve-image">
                <img
                  src="/images/who-we-serve.jpg"
                  alt="Community engagement with retired personnel and families"
                />

                <div className="serve-image-overlay">
                  <span>WHO WE SERVE</span>
                  <strong>Honouring those who served.</strong>
                </div>
              </div>
            </ScrollReveal>

            {/* CONTENT */}
            <ScrollReveal direction="right" delay={120}>
              <div className="serve-content">
                <span className="kicker light-kicker">WHO WE SERVE</span>

                <h2>
                  Serving across Nigeria&apos;s
                  <em> security community.</em>
                </h2>

                <p>
                  Our focus extends across the security institutions whose
                  personnel have dedicated their working lives to protecting the
                  nation.
                </p>

                <p>
                  We also recognise the important role played by spouses,
                  widows, dependents and families whose lives are connected to
                  that service.
                </p>

                <Link href="/who-we-serve" className="light-link">
                  Explore Who We Serve
                  <ArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* BENEFICIARIES */}

          <div className="beneficiary-list">
            {beneficiaries.map((item, index) => (
              <ScrollReveal key={item} direction="up" delay={index * 60}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{item}</strong>

                  <ChevronRight size={17} />
                </div>
              </ScrollReveal>
            ))}
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
          DONATE
      ========================================= */}

      <ScrollReveal>
        <section className="donate-cta">
          <div className="container donate-cta-inner">
            <div className="donate-cta-copy">
              <span className="kicker light-kicker">MAKE A DIFFERENCE</span>

              <h2>
                Honour their service.
                <br />
                <em>Secure their retirement.</em>
              </h2>

              <p>
                Your contribution helps retired security personnel, fallen heroes&apos;
                families and veterans transition into life beyond active service
                with dignity, care and opportunity.
              </p>
            </div>

            <div className="donate-cta-action">
              <Link href="/donate" className="button button-gold">
                Donate Now
                <ArrowRight size={18} />
              </Link>

              <span>
                Every contribution helps us turn service into continued purpose.
              </span>
            </div>
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
