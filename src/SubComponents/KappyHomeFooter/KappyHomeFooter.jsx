import "./KappyHomeFooter.css";
import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { CONTACT, EMAIL_ADDRESS } from "../../constants/contactLinks";

const linkColumns = [
  {
    heading: "Company",
    links: ["Contact us", "About us", "Terms and conditions"],
  },
  {
    heading: "Support",
    links: ["Bug report", "Feature Requests", "FAQ"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Community Guidelines"],
  },
];

/* Labels without an entry here have no page yet, so they render as plain text
   rather than an anchor that goes nowhere. */
const linkTargets = {
  "Contact us": "/contactPage#contact-form",
  "About us": "/chefs",
  FAQ: "/contactPage#faq",
  "Bug report": "/report-bug",
  "Feature Requests": "/request-feature",
  "Terms and conditions": "/terms",
  "Privacy Policy": "/privacy",
  "Community Guidelines": "/community-guidelines",
};

/* `title` shows the actual destination on hover. It matters most for Email:
   mailto: silently does nothing on devices with no mail app registered, so the
   tooltip is the only way to read the address from an icon-only link. */
const socials = [
  { icon: FaXTwitter, label: "X", title: "Kampos on X (@Kamposapp)", href: CONTACT.x },
  {
    icon: FaInstagram,
    label: "Instagram",
    title: "Kampos on Instagram (@Kamposapp)",
    href: CONTACT.instagram,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    title: "Chat with Kampos on WhatsApp",
    href: CONTACT.whatsapp,
  },
  {
    icon: FaEnvelope,
    label: "Email",
    title: EMAIL_ADDRESS,
    href: CONTACT.email,
  },
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
                        <span className="kappy-footer-soon">{label}</span>
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
            {socials.map(({ icon: Icon, label, title, href }) => (
              <a
                href={href}
                aria-label={label}
                title={title}
                key={label}
                className="kappy-footer-social"
              >
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
