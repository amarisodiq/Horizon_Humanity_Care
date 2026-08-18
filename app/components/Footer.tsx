import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const footerLinks = {
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Insights", href: "/news" },
  ],
  programmes: [
    { label: "Our Programmes", href: "/programs" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* MAIN FOOTER */}

      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Horizon Humanity Care"
            />
          </Link>

          <p>
            Honouring those who served. Empowering those who retired.
          </p>

          <p className="footer-description">
            Horizon Humanity Care works to support retired security personnel
            and their families through welfare, healthcare, empowerment,
            capacity building, advocacy and strategic partnerships.
          </p>

          <div className="footer-socials">
            <a
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-heading">
            Organisation
          </span>

          <nav>
            {footerLinks.organisation.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <span className="footer-heading">
            Engage
          </span>

          <nav>
            {footerLinks.programmes.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column footer-contact">
          <span className="footer-heading">
            Contact
          </span>

          <a href="mailto:info@horizonhumanitycare.org">
            <Mail size={16} />
            <span>
              <small>Email</small>
              info@horizonhumanitycare.org
            </span>
          </a>

          <a href="tel:+2340000000000">
            <Phone size={16} />
            <span>
              <small>Telephone</small>
              +234 000 000 0000
            </span>
          </a>

          <div>
            <MapPin size={16} />
            <span>
              <small>Location</small>
              Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP CTA */}

      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span>PARTNER WITH PURPOSE</span>

            <h2>
              Help build a more dignified future after service.
            </h2>
          </div>

          <Link
            href="/partnerships"
            className="footer-cta-button"
          >
            Explore Partnerships
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {year} Horizon Humanity Care. All rights reserved.
          </p>

          <div>
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}