"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Newspaper,
  Mic2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const stories = [
  {
    category: "HEALTH & WELLNESS",
    date: "3RD OCTOBER 2026",
    title:
      "Horizon Humanity Care Announces Free Medical Outreach for Security Personnel & Families in Port Harcourt",
    text: "Horizon Humanity Care has announced a free medical outreach focused on security personnel, retired personnel and families in Port Harcourt, reinforcing its commitment to healthcare, dignity and community support.",
    image: "/images/news-medical-outreach.jpg",
    link: "https://swiftreporters.com/horizon-humanity-care-announces-free-medical-outreach-for-security-personnel-families-in-port-harcourt/",
  },
  {
    category: "PARTNERSHIPS & ENGAGEMENT",
    date: "21 SEPTEMBER 2026",
    title:
      "HHC Management Team Pays Courtesy Visit to Former Minister of Youth Development",
    text: "The Horizon Humanity Care (HHC) Management Team paid a courtesy visit to former Minister of Youth Development, Dr. Jamila Bio Ibrahim, as part of its ongoing efforts to promote the welfare, recognition and support of Nigeria's heroes and dedicated service personnel.",
    image: "/images/news-courtesy-visit.jpg",
    link: "https://www.facebook.com/share/p/1DW8LrvaDD/",
  },
  {
    category: "PARTNERSHIPS & ENGAGEMENT",
    date: "16 SEPTEMBER 2026",
    title:
      "Horizon Humanity Care Meets with the Inspector General of Police in Abuja",
    text: "The Horizon Humanity Care Foundation (HHC) Board and Management team met with the Inspector General of Police, IGP Disu, at Force Headquarters in Abuja to present the organisation's mission and discuss opportunities to strengthen support for retired security personnel and families of fallen heroes.",
    image: "/images/news-igp-meeting.jpg",
    link: "https://www.facebook.com/share/p/1Kin2prCAV/",
  },
  {
    category: "STORIES & PERSPECTIVES",
    date: "25 AUGUST 2026",
    title: "Retirement Is Not the End. It Is a New Beginning.",
    text:
      "A message of encouragement and renewed purpose for security personnel approaching or transitioning into retirement. Retirement marks a new chapter, with opportunities for continued contribution, dignity and meaningful engagement.",
    image: "/images/news-retirement-new-beginning.jpg",
    link: "https://www.facebook.com/share/v/1BuHEcdbTy/",
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
  const storiesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = storiesRef.current;

    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 5);
  };

  useEffect(() => {
    updateScrollButtons();

    const container = storiesRef.current;

    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [stories.length]);

  const scrollStories = (direction: "left" | "right") => {
    if (!storiesRef.current) return;

    storiesRef.current.scrollBy({
      left: direction === "right" ? 408 : -408,
      behavior: "smooth",
    });
  };

  return (
    <main>
      {/* HERO */}

      <section className="news-hero">
        <div className="news-hero-overlay" />

        <div className="container news-hero-content">
          <ScrollReveal>
            <span className="eyebrow">
              <span />
              INSIGHTS &amp; UPDATES
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

              <h2>Keeping stakeholders informed and connected.</h2>
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

      {/* FEATURED NEWS */}

      <section className="featured-story">
        <div className="container">
          <ScrollReveal>
            <div className="featured-story-label">
              <span className="kicker">LATEST NEWS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <article className="featured-story-card">
              <div className="featured-story-image">
                <img
                  src="/images/news-medical-outreach.jpg"
                  alt="Horizon Humanity Care medical outreach"
                />

                <span>HEALTH &amp; WELLNESS</span>
              </div>

              <div className="featured-story-content">
                <span className="article-category">COMMUNITY HEALTH</span>

                <h2>
                  Horizon Humanity Care Announces Free Medical Outreach for
                  Security Personnel &amp; Families in Port Harcourt.
                </h2>

                <p>
                  Horizon Humanity Care has announced a free medical outreach
                  focused on security personnel, retired personnel and families
                  in Port Harcourt.
                </p>

                <p>
                  The initiative reflects HHC&apos;s commitment to improving
                  healthcare access, supporting vulnerable service communities
                  and promoting dignity and wellbeing beyond active service.
                </p>

                <div className="article-meta">
                  <span>HORIZON HUMANITY CARE</span>
                  <span>•</span>
                  <span>3RD OCTOBER 2026</span>
                </div>

                <a
                  href="https://swiftreporters.com/horizon-humanity-care-announces-free-medical-outreach-for-security-personnel-families-in-port-harcourt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Read Full Story
                  <ArrowRight size={16} />
                </a>
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

                <h2>Updates from Horizon.</h2>
              </div>

              <p>
                This section will grow as Horizon launches programmes, develops
                partnerships and engages communities.
              </p>
            </div>
          </ScrollReveal>

          {/* NEWS CAROUSEL */}

          <div className="stories-carousel">
            {canScrollLeft && (
              <button
                type="button"
                className="news-scroll-arrow news-scroll-arrow-left"
                onClick={() => scrollStories("left")}
                aria-label="Previous news stories"
              >
                <ChevronLeft size={20} strokeWidth={1.8} />
              </button>
            )}

            <div className="stories-grid" ref={storiesRef}>
              {stories.map((story, index) => (
                <ScrollReveal key={story.title} delay={index * 100}>
                  <article className="story-card">
                    <div className="story-image">
                      <img src={story.image} alt={story.title} />
                    </div>

                    <div className="story-content">
                      <div className="story-meta">
                        <span>{story.category}</span>
                        <span>{story.date}</span>
                      </div>

                      <h3>{story.title}</h3>

                      <p>{story.text}</p>

                      {story.link.startsWith("http") ? (
                        <a
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read Story
                          <ArrowRight size={15} />
                        </a>
                      ) : (
                        <Link href={story.link}>
                          Stay Connected
                          <ArrowRight size={15} />
                        </Link>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {canScrollRight && (
              <button
                type="button"
                className="news-scroll-arrow news-scroll-arrow-right"
                onClick={() => scrollStories("right")}
                aria-label="Next news stories"
              >
                <ChevronRight size={20} strokeWidth={1.8} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}

      <section className="content-types">
        <div className="container">
          <ScrollReveal>
            <div className="center-heading">
              <span className="kicker">EXPLORE OUR CONTENT</span>

              <h2>More than news.</h2>

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
                <ScrollReveal key={item.title} delay={index * 80}>
                  <article className="content-type-card">
                    <div className="content-type-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <span>COMING SOON</span>
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
              <span className="kicker light-kicker">ENGAGEMENT</span>

              <h2>Conferences, forums and stakeholder conversations.</h2>

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
              <span className="kicker">STAY CONNECTED</span>

              <h2>Follow the journey as Horizon grows.</h2>

              <p>
                For programme updates, partnership announcements and future
                publications, stay connected with Horizon Humanity Care.
              </p>
            </div>

            <Link href="/contact" className="button button-navy">
              Contact Horizon
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
