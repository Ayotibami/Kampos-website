import "./ContactPage.css";
import "./ContactPage1.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../SubComponents/Header/Header";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <main className="contact-page-main">
      <Header />

      {/* First Section */}

      <section className="contact-page-first-sec">
        <div>
          <h1 className="contact-page-first-sec-h1-1">Wasssuppp , </h1>

          <h1 className="contact-page-first-sec-h1-2">Whats popping</h1>

          <p>
            Hey! Do you have questions, feedback, need support, or maybe you
            just want to rant about your day? Don’t worry — we’re always easy to
            reach. Feel free to contact us anytime.
          </p>
        </div>
        <figure>
          <img src="Images/kappy group 10.png" alt="Kappy" />
        </figure>
      </section>

      {/* Second Section */}
      <section id="contact-form" className="contact-page-second-sec">
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
          <input
            type="text"
            placeholder="Message"
            className="contact-page-second-sec-main-input"
          />
          <button>Submit</button>
        </div>
      </section>

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
        <figure>
          <img src="Images/green papers.png" alt="Newspaper" />
        </figure>
      </section>

      {/* Fourth Section */}
      <section className="contact-page-fourth-sec">
        <figure>
          <img src="Images/warning sign.png" alt="Newspaper" />
        </figure>
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
