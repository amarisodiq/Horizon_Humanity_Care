"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Our Approach", href: "/our-approach" },
];

const moreLinks = [
  { label: "Partnerships", href: "/partnerships" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Insights", href: "/news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header
      className={[
        "horizon-navbar",
        scrolled ? "horizon-navbar-scrolled" : "",
        mobileOpen ? "horizon-navbar-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container horizon-navbar-inner">
        {/* LOGO */}

        <Link
          href="/"
          className="horizon-navbar-logo"
          onClick={closeMobile}
          aria-label="Horizon Humanity Care"
        >
          <img
            src="/images/logo.png"
            alt="Horizon Humanity Care"
          />
        </Link>

        {/* DESKTOP NAV */}

        <nav className="horizon-desktop-nav">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <div className="horizon-more">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
              <ChevronDown
                size={14}
                className={
                  moreOpen
                    ? "horizon-chevron-open"
                    : ""
                }
              />
            </button>

            <div
              className={[
                "horizon-more-menu",
                moreOpen
                  ? "horizon-more-menu-open"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMoreOpen(false)}
                >
                  {link.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="horizon-contact-link"
          >
            Contact
          </Link>

          <Link
            href="/partnerships"
            className="horizon-partner-button"
          >
            Partner With Us
            <ArrowRight size={15} />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="horizon-mobile-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={[
          "horizon-mobile-menu",
          mobileOpen
            ? "horizon-mobile-menu-open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="container horizon-mobile-menu-inner">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
            >
              {link.label}
              <ArrowRight size={15} />
            </Link>
          ))}

          <div className="horizon-mobile-divider" />

          {moreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
            >
              {link.label}
              <ArrowRight size={15} />
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMobile}
          >
            Contact
            <ArrowRight size={15} />
          </Link>

          <Link
            href="/partnerships"
            className="horizon-mobile-cta"
            onClick={closeMobile}
          >
            Partner With Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}