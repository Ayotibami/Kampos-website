import "./ContactPage.css";
import "./ContactPage1.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Header from "../../SubComponents/Header/Header";
import ContactOrbit from "../../SubComponents/ContactOrbit/ContactOrbit";
import TornPanel from "../../SubComponents/TornPanel/TornPanel";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";

const greetings = ["Wasssuppp", "Heyyy", "Bawo", "Kedu", "Sannu", "How far"];

const ContactPage = () => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const [greetIndex, setGreetIndex] = useState(0);

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
        <div>
          <h1>Contact form</h1>
          {/* <p>
            We’re building Kampos — a one-stop campus ecosystem for Nigerian
            students that packs all the gist, vibes, stories, learning, and
            everything campus into one place. Our passion? Making sure every
            student catches the best vibes and truly lives their best campus
            life
          </p> */}

          <div className="contact-page-second-sec-input-div">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea
            placeholder="Message"
            rows="6"
            className="contact-page-second-sec-main-input"
          />
          <button>Submit</button>
        </div>
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
          <button>Request a Feature</button>
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 170, damping: 15 }}
        >
          <motion.img
            src="Images/feature-request-3d.png"
            alt="Feature request"
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
            src="Images/bug-report-3d.png"
            alt="Bug report"
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
          <button>Report a bug</button>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="contact-page-fifth-sec">
        <div>
          <h1>Support center</h1>
          <p>
            This is Kampos — we know you’ve got lectures, deadlines, and maybe
            even crush problems to worry about 🤭. So we made this FAQ to keep
            things simple.If it’s about Kampos, chances are the answer is right
            here. And if not… well, we’re just a WhatsApp ping away. 🚀
          </p>
        </div>
      </section>
      <KappyHomeFooter />
    </main>
  );
};

export default ContactPage;
