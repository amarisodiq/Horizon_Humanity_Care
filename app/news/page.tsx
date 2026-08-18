import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Newspaper,
  Mic2,
  BookOpen,
} from "lucide-react";

const stories = [
  {
    category: "PROGRAMME UPDATE",
    date: "Coming Soon",
    title: "Building stronger pathways for life after service",
    text: "Follow Horizon Humanity Care as we develop programmes focused on wellbeing, opportunity and continued purpose for retired personnel.",
    image: "/images/news-programme.jpg",
  },
  {
    category: "COMMUNITY",
    date: "Coming Soon",
    title: "Connecting retired personnel with new opportunities",
    text: "Our community-focused work is designed to strengthen social connection, access to information and meaningful participation.",
    image: "/images/news-community.jpg",
  },
  {
    category: "HEALTH & WELLNESS",
    date: "Coming Soon",
    title: "Promoting healthier and more informed retirement",
    text: "Healthcare access, prevention and wellbeing remain important parts of a dignified transition into retirement.",
    image: "/images/news-health.jpg",
  },
];

const contentTypes = [
  {
    icon: Newspaper,
    title: "News & Announcements",
    text: "Updates about Horizon's activities, partnerships, milestones and organisational developments.",
  },
  {
    icon: CalendarDays,
    title: "Events",
    text: "Information about conferences, outreach activities, stakeholder engagements and community events.",
  },
  {
    icon: BookOpen,
    title: "Stories & Perspectives",
    text: "Human-centred stories and perspectives around service, retirement, family and community.",
  },
  {
    icon: FileText,
    title: "Publications",
    text: "Reports, briefs, resources and other materials that support learning and informed dialogue.",
  },
];

export default function NewsPage() {
  return (
    <main>
      {/* HERO */}

      <section className="news-hero">
        <div className="news-hero-overlay" />

        <div className="container news-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              INSIGHTS & UPDATES
            </span>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h1>
              Stories, ideas
              <br />
              <em>and progress.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220}>
            <p>
              Follow Horizon Humanity Care as we build partnerships, develop
              programmes and contribute to conversations about dignity,
              wellbeing and opportunity after service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}

      <section className="section news-intro">
        <div className="container news-intro-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="kicker">FROM HORIZON</span>

              <h2>
                Keeping stakeholders informed and connected.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="news-intro-copy">
              <p>
                Our Insights section will provide a window into the work of
                Horizon Humanity Care, including programme developments,
                partnerships, events and perspectives from the communities we
                serve.
              </p>

              <p>
                As our programmes grow, this space will also become a resource
                for stakeholders interested in retirement support, social
                protection, wellbeing and community development.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURED */}

      <section className="featured-story">
        <div className="container">
          <ScrollReveal>
            <div className="featured-story-label">
              <span className="kicker">FEATURED</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <article className="featured-story-card">
              <div className="featured-story-image">
                <img
                  src="/images/news-featured.jpg"
                  alt="Horizon Humanity Care community engagement"
                />

                <span>FEATURED STORY</span>
              </div>

              <div className="featured-story-content">
                <span className="article-category">
                  ORGANISATIONAL PERSPECTIVE
                </span>

                <h2>
                  A new horizon for those who served.
                </h2>

                <p>
                  Horizon Humanity Care is built around a simple conviction:
                  a lifetime of service deserves a future where dignity,
                  wellbeing and opportunity remain possible.
                </p>

                <p>
                  Our work brings together welfare, healthcare, economic
                  empowerment, skills development, advocacy and partnership
                  around the realities of retirement.
                </p>

                <div className="article-meta">
                  <span>HORIZON HUMANITY CARE</span>
                  <span>•</span>
                  <span>ORGANISATIONAL STORY</span>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* LATEST STORIES */}

      <section className="section latest-news">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <div>
                <span className="kicker">LATEST</span>

                <h2>
                  Updates from Horizon.
                </h2>
              </div>

              <p>
                This section will grow as Horizon launches programmes,
                develops partnerships and engages communities.
              </p>
            </div>
          </ScrollReveal>

          <div className="stories-grid">
            {stories.map((story, index) => (
              <ScrollReveal
                key={story.title}
                delay={index * 100}
              >
                <article className="story-card">
                  <div className="story-image">
                    <img
                      src={story.image}
                      alt={story.title}
                    />
                  </div>

                  <div className="story-content">
                    <div className="story-meta">
                      <span>{story.category}</span>
                      <span>{story.date}</span>
                    </div>

                    <h3>{story.title}</h3>

                    <p>{story.text}</p>

                    <Link href="/contact">
                      Stay Connected
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}

      <section className="content-types">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">EXPLORE OUR CONTENT</span>

              <h2>
                More than news.
              </h2>

              <p>
                Horizon's communications will bring together information,
                knowledge and human stories that help stakeholders understand
                our work.
              </p>
            </div>
          </ScrollReveal>

          <div className="content-types-grid">
            {contentTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 80}
                >
                  <article className="content-type-card">
                    <div className="content-type-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <span>
                      COMING SOON
                    </span>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDIA / EVENTS */}

      <ScrollReveal>
        <section className="media-section">
          <div className="container media-grid">
            <div className="media-image" />

            <div className="media-content">
              <span className="kicker light-kicker">
                ENGAGEMENT
              </span>

              <h2>
                Conferences, forums and stakeholder conversations.
              </h2>

              <p>
                Horizon will use events and professional forums to encourage
                dialogue around retirement, social protection, healthcare,
                economic resilience and the continued contribution of retired
                personnel.
              </p>

              <div className="media-features">
                <div>
                  <Mic2 size={19} />
                  <span>Stakeholder Forums</span>
                </div>

                <div>
                  <CalendarDays size={19} />
                  <span>Community Events</span>
                </div>

                <div>
                  <BookOpen size={19} />
                  <span>Knowledge Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}

      <ScrollReveal>
        <section className="news-final-cta">
          <div className="container news-final-inner">
            <div>
              <span className="kicker">
                STAY CONNECTED
              </span>

              <h2>
                Follow the journey as Horizon grows.
              </h2>

              <p>
                For programme updates, partnership announcements and future
                publications, stay connected with Horizon Humanity Care.
              </p>
            </div>

            <Link
              href="/contact"
              className="button button-navy"
            >
              Contact Horizon
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}