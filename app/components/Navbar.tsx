"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const mainLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Programmes",
    href: "/programs",
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
  },
];

const moreLinks = [
  {
    label: "Our Approach",
    href: "/our-approach",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  {
    label: "Insights",
    href: "/news",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  /* =========================================
     SCROLL STATE
  ========================================= */

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

  /* =========================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMobile = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  /* =========================================
     TOGGLE MOBILE MENU
  ========================================= */

  const toggleMobile = () => {
    setMobileOpen((open) => !open);
    setMoreOpen(false);
  };

  /* =========================================
     TOGGLE MORE DROPDOWN
  ========================================= */

  const toggleMore = () => {
    setMoreOpen((open) => !open);
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
      {/* =====================================
          NAVBAR INNER
      ====================================== */}

      <div className="container horizon-navbar-inner">
        {/* ===================================
            LOGO
        ==================================== */}

        <Link
          href="/"
          className="horizon-navbar-logo"
          onClick={closeMobile}
          aria-label="Horizon Humanity Care"
        >
          <img
            src={scrolled ? "/images/logo.png"  : "/images/logo-dark.png"}
            alt="Horizon Humanity Care"
          />
        </Link>

        {/* ===================================
            DESKTOP NAVIGATION
        ==================================== */}

        <nav className="horizon-desktop-nav" aria-label="Main navigation">
          {/* MAIN NAV LINKS */}

          <div className="horizon-nav-links">
            {/* HOME */}

            <Link href="/">Home</Link>

            {/* ABOUT */}

            <Link href="/about">About</Link>

            {/* PROGRAMMES */}

            <Link href="/programs">Our Programmes</Link>

            {/* WHO WE SERVE */}

            <Link href="/who-we-serve">Who We Serve</Link>

            {/* PARTNER WITH US */}

            <Link href="/partnerships">Partner With Us</Link>

            {/* MORE DROPDOWN */}

            <div className="horizon-more">
              <button
                type="button"
                className="horizon-more-button"
                onClick={toggleMore}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                <span>More</span>

                <ChevronDown
                  size={14}
                  className={moreOpen ? "horizon-chevron-open" : ""}
                />
              </button>

              {/* MORE MENU */}

              <div
                className={[
                  "horizon-more-menu",
                  moreOpen ? "horizon-more-menu-open" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                role="menu"
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    role="menuitem"
                  >
                    <span>{link.label}</span>

                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}

            <Link href="/contact" className="horizon-contact-link">
              Contact
            </Link>
          </div>

          {/* =================================
              DONATE
          ================================== */}

          <Link href="/donate" className="horizon-donate-button">
            <span>Donate</span>

            <ArrowRight size={15} />
          </Link>
        </nav>

        {/* ===================================
            MOBILE MENU BUTTON
        ==================================== */}

        <button
          type="button"
          className="horizon-mobile-button"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="horizon-mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}

      <div
        id="horizon-mobile-menu"
        className={[
          "horizon-mobile-menu",
          mobileOpen ? "horizon-mobile-menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="container horizon-mobile-menu-inner">
          {/* HOME */}

          <Link href="/" onClick={closeMobile}>
            <span>Home</span>

            <ArrowRight size={15} />
          </Link>

          {/* MAIN LINKS */}

          {mainLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobile}>
              <span>{link.label}</span>

              <ArrowRight size={15} />
            </Link>
          ))}

          {/* WHO WE SERVE */}

          {/* PARTNER WITH US */}

          <Link
            href="/partnerships"
            className="horizon-mobile-cta horizon-mobile-partner"
            onClick={closeMobile}
          >
            <span>Partner With Us</span>

            <ArrowRight size={16} />
          </Link>

          {/* DIVIDER */}

          <div className="horizon-mobile-divider" />

          {/* MORE LINKS */}

          {moreLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobile}>
              <span>{link.label}</span>

              <ArrowRight size={15} />
            </Link>
          ))}

          {/* CONTACT */}

          <Link href="/contact" onClick={closeMobile}>
            <span>Contact</span>

            <ArrowRight size={15} />
          </Link>

          {/* DONATE */}

          <Link
            href="/donate"
            className="horizon-mobile-cta horizon-mobile-donate"
            onClick={closeMobile}
          >
            <span>Donate</span>

            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
