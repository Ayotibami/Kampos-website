import "./ContactPage.css";
import "./ContactPage1.css";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import Header from "../../SubComponents/Header/Header";
import ContactOrbit from "../../SubComponents/ContactOrbit/ContactOrbit";
import TornPanel from "../../SubComponents/TornPanel/TornPanel";
import FaqAccordion from "../../SubComponents/FaqAccordion/FaqAccordion";
import { CONTACT, EMAIL_ADDRESS } from "../../constants/contactLinks";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";
import { submitFeedback } from "../../api/feedback";

const greetings = ["Wasssuppp", "Heyyy", "Bawo", "Kedu", "Sannu", "How far"];

const faqs = [
  {
    q: "What is Kampos?",
    a: "Kampos is a one-stop campus ecosystem for Nigerian students. It brings official updates and announcements, gists, rants and hot takes together in one place, so your entire campus life lives on your phone.",
  },
  {
    q: "Who can use Kampos?",
    a: "Kampos is built primarily for students in Nigerian universities and tertiary institutions. If you're a student at a university, polytechnic, college of education, or any tertiary institution — Kampos is for you. We're also working to expand access to alumni, aspirants, and a wider range of audiences over time.",
  },
  {
    q: "Is Kampos available now?",
    a: "Yes — Kampos is live as a web app. There's nothing to install: just open Kampos in your browser on your phone or laptop, sign up, and you're in.",
  },
  {
    q: "Is there a Kampos mobile app?",
    a: "Not yet — for now Kampos runs as a web app, so you just open it in your browser and go. A mobile app is coming soon, so keep an eye out.",
  },
  {
    q: "Is my school on Kampos?",
    a: "We're not on every campus just yet, but we're expanding rapidly. If your school isn't there when you sign up, hang tight — we're adding new institutions all the time. You can also reach out and let us know your school so we can prioritise it.",
  },
  {
    q: "What features does Kampos offer?",
    a: "Kampos gives you access to everything happening on your campus and beyond — from campus updates, info, stories, and gists to circulars and announcements, so you never miss what matters. You can even get updates from other schools, not just your own, keeping you plugged into the wider student community. On top of that, Kampos is a platform for student creators to showcase their work, giving talent a real stage to be seen.",
  },
  {
    q: "Is Kampos free to use?",
    a: "Yes, Kampos is completely free for students to use.",
  },
  {
    q: "How do I create a profile on Kampos?",
    a: "To create your profile, we just need the basics — your name, your school's name (obviously), your level, and your major. These help Kampos tailor your experience on the app and give you your identity within the community. Then you'll need a unique name on Kampos — your Avitag — that helps everyone, and Kampos itself, uniquely know you.",
  },
  {
    q: "Is Kampos affiliated with my university?",
    a: "No — Kampos is an independent platform and is not owned by, endorsed by, or officially affiliated with any university or institution. We bring campus updates and announcements together in one place, but we operate independently of the schools themselves.",
  },
  {
    q: "What happens when I flag a post?",
    a: "When you flag a post, it comes straight to our team for review. If it goes against our community guidelines, we take it down as fast as possible. Flagging is what helps us keep Kampos a space everybody can enjoy.",
  },
  {
    q: "How is my data protected?",
    a: "Your privacy matters to us. For the full details on what we collect, how we use it and how we keep it safe, please read our Privacy Policy and Terms and Conditions.",
  },
  {
    q: "How do I get support if I face issues?",
    a: "You can reach out to Kampos through the contact form, email, or WhatsApp. Our team is always ready to respond quickly and help resolve any problems.",
  },
];

const emptyContact = { name: "", email: "", message: "", website: "" };

const ContactPage = () => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const [greetIndex, setGreetIndex] = useState(0);

  const [contact, setContact] = useState(emptyContact);
  const [contactErrors, setContactErrors] = useState({});
  // idle → submitting → done
  const [contactStatus, setContactStatus] = useState("idle");
  const [contactError, setContactError] = useState("");

  const setContactField = (name, value) => {
    setContact((prev) => ({ ...prev, [name]: value }));
    setContactErrors((prev) =>
      prev[name] ? { ...prev, [name]: undefined } : prev,
    );
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (contactStatus === "submitting") return;

    // Honeypot: a bot filled a field humans can't see. Fake success.
    if (contact.website) {
      setContactStatus("done");
      return;
    }

    const nextErrors = {
      name: !contact.name.trim() ? "Let us know your name." : undefined,
      email: !contact.email.trim()
        ? "We need your email to reply."
        : !/^\S+@\S+\.\S+$/.test(contact.email.trim())
          ? "That email doesn't look right."
          : undefined,
      message:
        contact.message.trim().length < 10
          ? "Tell us a little more so we can help."
          : undefined,
    };
    const firstBad = Object.keys(nextErrors).find((k) => nextErrors[k]);
    if (firstBad) {
      setContactErrors(nextErrors);
      document.getElementById(`contact-${firstBad}`)?.focus();
      return;
    }

    setContactErrors({});
    setContactError("");
    setContactStatus("submitting");
    try {
      await submitFeedback({
        subject: `[Contact] Message from ${contact.name}`,
        fields: {
          form_type: "Contact",
          name: contact.name,
          email: contact.email,
          message: contact.message,
        },
      });
    } catch (err) {
      setContactError(err?.message || "Something went wrong. Please try again.");
      setContactStatus("idle");
      return;
    }
    setContactStatus("done");
  };

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setGreetIndex((i) => (i + 1) % greetings.length),
      3000,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <main className="contact-page-main">
      <Header />

      {/* First Section */}

      <section className="contact-page-first-sec">
        <div className="contact-page-first-sec-text">
          <h1 className="contact-page-first-sec-h1-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={greetings[greetIndex]}
                className="contact-greeting-word"
                initial={
                  reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {greetings[greetIndex]}
              </motion.span>
            </AnimatePresence>
            {" , "}
          </h1>

          <h1 className="contact-page-first-sec-h1-2">Whats popping?</h1>

          <p>
            Do you have questions, feedback, need support, or maybe you just
            want to rant about your day? Don’t worry — we’re always easy to
            reach. Feel free to contact us anytime.
          </p>
        </div>
        <ContactOrbit />
      </section>

      {/* Second Section */}
      <TornPanel id="contact-form" className="contact-page-second-sec">
        {contactStatus === "done" ? (
          <div className="contact-page-second-sec-success">
            <h1>Message sent 🎉</h1>
            <p>
              Thanks for reaching out — we’ve got your message and we’ll get
              back to you at <strong>{contact.email}</strong> soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setContact(emptyContact);
                setContactStatus("idle");
              }}
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} noValidate>
            <h1>Contact form</h1>

            <div className="contact-page-second-sec-input-div">
              <input
                id="contact-name"
                type="text"
                placeholder="Full name"
                value={contact.name}
                onChange={(e) => setContactField("name", e.target.value)}
                aria-invalid={contactErrors.name ? true : undefined}
                autoComplete="name"
              />
              <input
                id="contact-email"
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContactField("email", e.target.value)}
                aria-invalid={contactErrors.email ? true : undefined}
                autoComplete="email"
              />
            </div>
            {(contactErrors.name || contactErrors.email) && (
              <p className="contact-page-field-error" role="alert">
                {contactErrors.name || contactErrors.email}
              </p>
            )}

            <textarea
              id="contact-message"
              placeholder="Message"
              rows="6"
              className="contact-page-second-sec-main-input"
              value={contact.message}
              onChange={(e) => setContactField("message", e.target.value)}
              aria-invalid={contactErrors.message ? true : undefined}
            />
            {contactErrors.message && (
              <p className="contact-page-field-error" role="alert">
                {contactErrors.message}
              </p>
            )}

            {/* Honeypot — hidden from people, catnip for bots. */}
            <input
              type="text"
              className="contact-page-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={contact.website}
              onChange={(e) => setContactField("website", e.target.value)}
            />

            {contactError && (
              <p className="contact-page-submit-error" role="alert">
                {contactError}
              </p>
            )}

            <button type="submit" disabled={contactStatus === "submitting"}>
              {contactStatus === "submitting" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </TornPanel>

      {/* Third Section */}
      <section className="contact-page-third-sec">
        <div>
          <h1>Feature Request</h1>
          <p>
            Just so you know, we’re cooking Kampos for you, and your opinions
            always matter. Even Kappy fit chop sack  letter if you say so 😅. If
            there’s a feature or functionality you want us to add, just let us
            know—we’re listening.
          </p>
          <Link to="/request-feature">Request a Feature</Link>
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 170, damping: 15 }}
        >
          <motion.img
            src="Images/feature-request-3d.webp"
            alt="Feature request"
            loading="lazy"
            decoding="async"
            animate={reduce ? {} : { y: [0, -12, 0], rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.figure>
      </section>

      {/* Fourth Section */}
      <section className="contact-page-fourth-sec">
        <motion.figure
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 170, damping: 15 }}
        >
          <motion.img
            src="Images/bug-report-3d.webp"
            alt="Bug report"
            loading="lazy"
            decoding="async"
            animate={reduce ? {} : { y: [0, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.figure>
        <div>
          <h1>Bug report</h1>
          <p>
            If you run into any issues or bugs on Kampos—omo no vex 😅, making
            apps no easy at all! Just tell us about the bug here and we’ll start
            working on it immediately. We want you to have the smoothest
            experience possible while using Kampos
          </p>
          <Link to="/report-bug">Report a bug</Link>
        </div>
      </section>

      {/* Fifth Section */}
      <section id="faq" className="contact-page-fifth-sec">
        <div className="contact-page-faq-card">
          <h1>FAQ</h1>
          <p>
            This is Kampos — we know you’ve got lectures, deadlines, and maybe
            even crush problems to worry about 🤭. So we made this FAQ to keep
            things simple. If it’s about Kampos, chances are the answer is right
            here. And if not… well, we’re just a WhatsApp ping away. 🚀
          </p>
          <FaqAccordion items={faqs} />

          <p className="contact-page-faq-actions-lead">
            Oya do you need to reach us directly?
          </p>

          <div className="contact-page-faq-actions">
            <a
              className="contact-page-faq-action"
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a className="contact-page-faq-action" href={CONTACT.email}>
              <FaEnvelope aria-hidden="true" />
              Email us
            </a>
          </div>

          {/* mailto: only opens if the visitor has a mail app registered, which
              plenty of desktops don't — so show the address as selectable text
              too, and it can always be copied. */}
          <p className="contact-page-faq-email">
            or email us directly at <span>{EMAIL_ADDRESS}</span>
          </p>
        </div>
      </section>
      <KappyHomeFooter />
    </main>
  );
};

export default ContactPage;
