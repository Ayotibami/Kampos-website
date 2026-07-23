import "./Chefs.css";
import "./Chefs1.css";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Header from "../../SubComponents/Header/Header";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";
import ChefOrbit from "../../SubComponents/ChefOrbit/ChefOrbit";
import Cards1 from "../../SubComponents/Cards1/Cards1";
import ChefsRoster from "../../SubComponents/ChefsRoster/ChefsRoster";
import TornPanel from "../../SubComponents/TornPanel/TornPanel";
import usePageMeta from "../../hooks/usePageMeta";
import { KAMPOS_APP_URL } from "../../constants/app";

const Chefs = () => {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Meet the Chefs — the team building Kampos",
    description:
      "Meet the students behind Kampos — the campus ecosystem connecting Nigerian students. Gist, updates, stories and vibes, all in one place.",
  });
  const handRef = useRef(null);
  const handInView = useInView(handRef, { once: true, amount: 0.2 });
  return (
    <main className="chefs-main">
      <Header />

      <section className="chefs-first-sec">
        <h1>Built by Students, for </h1>
        <a
          href={KAMPOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="kappy-home-cta-btn"
        >
          Hop into Kampos
        </a>
      </section>

      <section className="chefs-hero-orbit-sec">
        <ChefOrbit />
      </section>

      {/* Second Section */}
      <section className="chefs-second-sec">
        <TornPanel as="div" className="chefs-second-sec-div">
          <div>
            <div className="chefs-second-sec-child-div">
              <h1>Mission Statement</h1>
              <p>
                We’re building Kampos — a one-stop campus ecosystem for Nigerian
                students that packs all the gist, vibes, stories, learning, and
                everything campus into one place. Our passion? Making sure every
                student catches the best vibes and truly lives their best campus
                life
              </p>
            </div>
            <motion.figure
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 170, damping: 15 }}
            >
              <motion.img
                src="Images/mission-target-3d.webp"
                alt="Mission target"
                loading="lazy"
                decoding="async"
                animate={reduce ? {} : { y: [0, -14, 0], rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>
        </TornPanel>
      </section>
      {/* Third Section */}
      <section className="chefs-third-sec">
        <div className="chefs-third-intro">
          <h1>Meet the Chefs</h1>
          <p>
            Kampos would have been like the sci-fi time machine — the one that
            hasn’t been built yet but we all believe will come someday. But
            thanks to an amazing team that keeps cooking, building, and pushing,
            Kampos is no longer just an idea — it’s becoming reality. Meet the
            wonderful crew making it happen.
          </p>
        </div>
        <ChefsRoster />
      </section>

      {/* Fourth Section */}
      <TornPanel className="chefs-fourth-sec">
        <div>
          <div>
            <h1>Vision Statement</h1>
            <p>To make campus life smarter, fun, and more connected</p>
          </div>
          <motion.figure
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 170, damping: 15 }}
          >
            <motion.img
              src="Images/vision-bulb-3d.webp"
              alt="Vision lightbulb"
              loading="lazy"
              decoding="async"
              animate={reduce ? {} : { y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.figure>
        </div>
      </TornPanel>

      {/* Fifth Section */}
      <section className="chefs-fifth-sec">
        <div className="chefs-fifth-sec-div-1">
          <h1>You know Kampos right?</h1>
          <p>
            Kampos is the app where you catch the latest news, stories, school
            updates, and gist straight from your fellow students on campus. It’s
            the platform that finally connects students to their campus life —
            all in one place.
          </p>
        </div>

        <div className="chefs-fifth-sec-div-2">
          <Cards1
            card1Heading="Connect with students on your campus"
            card1Text="Build meaningful interactions with peers across different levels and departments, fostering a stronger sense of community."
            card1Img="card-globe"
          />
          <Cards1
            card1Heading="Catch every trending story"
            card1Text="Stay engaged with the latest conversations, stories, and happenings that define campus life."
            card1Img="card-chat"
          />
          <Cards1
            card1Heading="Share your voice and creativity"
            card1Text="Post stories, opinions, and content, giving students a platform to express themselves and be heard."
            card1Img="card-pencil"
          />
          <Cards1
            card1Heading="Stay updated on school news"
            card1Text="Get the latest updates, circulars, and information — no more being left out of what's happening."
            card1Img="card-clock"
          />
        </div>
      </section>

      {/* Sixth Section */}
      <section className="chefs-sixth-sec">
        <figure className="chefs-hand-figure" ref={handRef}>
          <motion.img
            src="Images/hand-phone-3d.webp"
            alt="Kappy holding a phone"
            loading="lazy"
            decoding="async"
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : "-80%" }}
            animate={
              handInView || reduce ? { opacity: 1, x: 0 } : undefined
            }
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />
        </figure>

        <div>
          <h1>Anything for us?</h1>
          <p>
            Got ideas, feedback, or just pure vibes? Hit us up anytime — we’ll
            always reply. After all, Kampos is something we’re building together
          </p>
          <Link to="/contactPage#contact-form" className="chefs-contact-btn">
            Contact us
          </Link>
        </div>
      </section>
      <KappyHomeFooter />
    </main>
  );
};

export default Chefs;
