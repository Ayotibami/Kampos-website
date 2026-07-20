import "./KappyHomeFooter.css";
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

const linkColumns = [
  {
    heading: "Company",
    links: ["Contact us", "About us", "Terms and conditions"],
  },
  {
    heading: "Support",
    links: ["Bug report", "Feature Requests", "Support center"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy"],
  },
];

const linkTargets = {
  "Contact us": "/contactPage#contact-form",
  "About us": "/chefs",
};

const socials = [
  { icon: FaXTwitter, label: "X", href: "https://x.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me" },
  { icon: FaEnvelope, label: "Email", href: "mailto:hello@kampos.app" },
];

const KappyHomeFooter = () => {
  return (
    <footer className="kappy-home-footer">
      <div className="kappy-footer-accent" />
      <main className="kappy-home-footer-main">
        <section className="kappy-footer-top">
          <div className="kappy-footer-brand">
            <Link to="/" className="kappy-footer-logo-link" aria-label="Kampos home">
              <img src="Images/logo.png" alt="Kampos" className="kappy-footer-logo" />
            </Link>
            <p className="kappy-footer-tagline">
              Your campus life in one app — gist, news, and vibes, all in one
              place.
            </p>
          </div>

          <div className="kappy-footer-columns">
            {linkColumns.map((col) => (
              <div className="kappy-footer-col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((label) => (
                    <li key={label}>
                      {linkTargets[label] ? (
                        <Link to={linkTargets[label]}>{label}</Link>
                      ) : (
                        <Link>{label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="kappy-footer-bottom">
          <p>© {new Date().getFullYear()} Ayoti. All rights reserved.</p>
          <div className="kappy-footer-socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <a href={href} aria-label={label} key={label} className="kappy-footer-social">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </main>
    </footer>
  );
};

export default KappyHomeFooter;
