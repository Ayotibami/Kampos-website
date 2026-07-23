import "./KappyHome.css";
import "./KappyHome1.css";
import Header from "../../SubComponents/Header/Header";
import Cards1 from "../../SubComponents/Cards1/Cards1";
import Card3 from "../../SubComponents/Card3/Card3";
import WhyStack from "../../SubComponents/WhyStack/WhyStack";
import TestimonialMarquee from "../../SubComponents/TestimonialMarquee/TestimonialMarquee";
import TypeReveal from "../../SubComponents/TypeReveal/TypeReveal";
import HeroOrbit from "../../SubComponents/HeroOrbit/HeroOrbit";
import PostMarquee from "../../SubComponents/PostMarquee/PostMarquee";
import AppShowcase from "../../SubComponents/AppShowcase/AppShowcase";
import CountUp from "../../SubComponents/CountUp/CountUp";
import KappyHomeFooter from "../../SubComponents/KappyHomeFooter/KappyHomeFooter";
import TornPanel from "../../SubComponents/TornPanel/TornPanel";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHeart, FiBarChart2, FiFlag } from "react-icons/fi";

import usePageMeta from "../../hooks/usePageMeta";
import { KAMPOS_APP_URL } from "../../constants/app";

const MotionLink = motion(Link);

const KappyHome = () => {
  const reduceMotion = useReducedMotion();
  usePageMeta();

  const revealContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const revealItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const whyCards = [
    {
      heading: "Think about it",
      name: "Ayo",
      handle: "Dr_ayo",
      time: "2 hrs ago",
      tag: "MBBS",
      level: "500L",
      likes: "3k",
      views: "5235",
      flags: "0",
      body: "That feeling when you check your results and the number you've been dreaming of is actually there. It's been a crazy journey, but I'm so grateful to announce I bagged a 5.0 GPA in MBBS.  Here's to the next chapter!",
      text: "Ayo just bagged a 5.0 in MBBS and wants to aura farm. How will thousands of students in his school know seconds later? Or maybe your VC is at the Faculty of Arts giving out scholarships because he’s aura farming too — how do you catch that gist in time?",
    },
    {
      heading: "What about Alexa, who wants to rant to other law students ?",
      name: "Alexandra",
      handle: "The_law",
      time: "8 hrs ago",
      tag: "LAW",
      level: "100 L",
      likes: "1.7k",
      views: "2223",
      flags: "1",
      body: "They said law school would be challenging. They didn't mention it would feel like trying to drink from a firehose of legal jargon. Currently questioning every life choice that led me here",
      text: "“Law stress wan take my life”? Let’s be honest — students need their own online social space to vibe, gist, and stay in the know about what’s happening on their campuses (and even in other schools across Nigeria).",
    },
    {
      heading: "And when your school drops an official circular or memo ?",
      name: "FUL Viral",
      handle: "Ful_viral",
      time: "1 hr ago",
      tag: "MBBS",
      level: "300 L",
      likes: "2.1k",
      views: "3003",
      flags: "0",
      body: "Future Great Ife Students, LISTEN UP! 🎉 Just saw the latest FUL Admission List is out/updated! If you applied, go check your portal NOW! Good luck to everyone. Hope to see you on campus soon! What faculty are you hoping for?",
      text: "we both know you miss 5 out of 10 times. Aren’t you tired of that? You wan make dem graduate leave you behind ba?",
    },
    {
      heading:
        "Sure, students already get updates on school WhatsApp TVs, X accounts, or Facebook groups.",
      name: "Rex",
      handle: "troublemaker1",
      time: "5 hrs ago",
      tag: "ENG",
      level: "200 L",
      likes: "4.5k",
      views: "9k",
      flags: "12",
      body: "Omo all this csc boys una go dey do like say na una guide pass . I just dey observe una especially final year. untop iphone 18 wey una dey carry?? . Una be clowns shaaaaaaaa. ",
      text: "That's cool. But Kampos is here to switch it up. We're not another X or Facebook.",
    },
  ];

  const whyImageCards = [
    {
      heading: "We're building a personalized platform for Nigerian students",
      text: "From the relatable pidgin & Gen Z slang, to academic profiles, to me — Kappy, the Kampos mascot — Kampos is cooking your unforgettable campus experience.",
    },
  ];

  const postMarqueePosts = [
    {
      name: "Zaria Bells",
      handle: "@zaria_thewriter",
      time: "10 mins ago",
      tag: "MASS COMM",
      level: "300 L",
      likes: "612",
      views: "1.4k",
      flags: "0",
      body: "Lecturer just waka comot for class 20 minutes early and no explanation. We no dey complain o, but who else dey rush go read for library sef 😭",
    },
    {
      name: "Tunde Sneakers",
      handle: "@Tundekicks",
      time: "25 mins ago",
      tag: "ARCH",
      level: "400 L",
      likes: "980",
      views: "2.3k",
      flags: "4",
      body: "New kicks just landed for hostel and I no fit sleep well tonight 😭👟 Who else dey guard their package like say na baby?",
    },
    {
      name: "Praise & Co",
      handle: "@Praise_thevibe",
      time: "40 mins ago",
      tag: "MKT",
      level: "200 L",
      likes: "1.2k",
      views: "3.1k",
      flags: "1",
      body: "Faculty week dey around the corner and una no dey ready for the kind gbedu wey go drop. Make I no talk more, just dey prepare 🕺🔥",
    },
    {
      name: "Debby Reads",
      handle: "@debby_reads",
      time: "1 hr ago",
      tag: "PSY",
      level: "100 L",
      likes: "455",
      views: "980",
      flags: "0",
      body: "First semester don almost finish and I don already know say textbook na scam — na past questions save my life 😌📚",
    },
    {
      name: "Chuka the GOAT",
      handle: "@Chuka_ballin",
      time: "2 hrs ago",
      tag: "SPORTS SCI",
      level: "300 L",
      likes: "2.8k",
      views: "5.6k",
      flags: "2",
      body: "We just win inter-faculty finals and person still dey ask if football no be course 😭🏆 Champions no dey rest sha.",
    },
    {
      name: "Amaka Vibes",
      handle: "@Amaka_thevibe",
      time: "3 hrs ago",
      tag: "MBBS",
      level: "400 L",
      likes: "1.5k",
      views: "3.9k",
      flags: "0",
      body: "Anatomy exam don pass, cadaver don rest, I don rest — na only sleep remain for my body abeg 😴",
    },
  ];

  const slides = [
    {
      id: 1,
      bgColor: "#165ABF",
      title: "A softer way for Learning",
      text: "Not only vibes and news — Kampos wants to see you wear that graduation gown.",
      icon: "sliderImg 1",
    },
    {
      id: 2,
      bgColor: "#8B0B0B",
      title: "Find true love",
      text: "Kampos could help you find your LOML — no promises sha",
      icon: "sliderImg 2",
    },
    {
      id: 3,
      bgColor: "#CEBB11",
      title: "From Campus to Career",
      text: "Yes — we’ll help you land SIWES and internships without stress",
      icon: "sliderImg 3",
    },
  ];

  const testimonials = [
    {
      quote:
        "The UI is smooth, but what I love most is the energy. It’s like campus gossip, but digital.",
      name: "Emeka, 100L Economics",
    },
    {
      quote:
        "Before, I had to rely on WhatsApp groups for updates. Now, I just check Kampos and I’m good.",
      name: "Tolu, 400L Business Admin",
    },
    {
      quote:
        "Kampos makes campus life fun. The banter, the gist, the hot takes—everything feels alive. It’s like Twitter but just for my school.",
      name: "Chisom, 300L Political Science",
    },
    {
      quote:
        "Honestly, Kampos makes me feel more connected to my school. Even when I’m off campus, I don’t feel left out.",
      name: "Faith, 300L Sociology",
    },
    {
      quote:
        "Kampos is like the pulse of my campus. If something is happening, I’ll see it here first.",
      name: "Joseph, 200L Computer Engineering",
    },
    {
      quote:
        "I don’t even need to scroll through multiple WhatsApp groups anymore. Kampos gathers everything in one place.",
      name: "Aisha, 300L Accounting",
    },
    {
      quote:
        "Even if you’re a fresher, Kampos helps you blend in fast. You just know what’s trending in school.",
      name: "Ifeanyi, 100L Medicine",
    },
    {
      quote:
        "It’s not just for fun; Kampos keeps me updated on deadlines and official news too.",
      name: "Gloria, 400L Chemistry",
    },
    {
      quote:
        "What I like is the balance. Serious school news + unserious campus banter = perfect combo.",
      name: "Fatima, 200L Law",
    },
    {
      quote:
        "Kampos is like our own campus Twitter. Only difference is—it’s just for us students.",
      name: "Chidera, 100L History",
    },
    {
      quote:
        "Whenever I open Kampos, I feel like I’m walking around school, hearing everyone’s gist in real time.",
      name: "Peter, 400L Mechanical Engineering",
    },
    {
      quote:
        "It’s like having campus radio in my pocket — gist, news, and drama non-stop.",
      name: "Nkechi, 100L Education",
    },
    {
      quote:
        "With Kampos, you don’t just hear the news—you feel the vibe of your campus.",
      name: "Grace, 400L Public Admin",
    },
  ];

  const whyStackCards = [
    ...whyCards.map((card) => ({
      content: (
        <>
          <h3>{card.heading}</h3>
          <motion.div
            className="why-post"
            animate={reduceMotion ? {} : { rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="why-post-header">
              <div className="why-post-avatar"></div>
              <div className="why-post-id">
                <p className="why-post-name">{card.name}</p>
                <p className="why-post-handle">{card.handle}</p>
              </div>
              <div className="why-post-meta">
                <p className="why-post-time">{card.time}</p>
                <p className="why-post-tag">
                  <span>{card.tag}</span> {card.level}
                </p>
              </div>
            </div>
            <div className="why-post-stats">
              <span className="why-post-stat">
                <FiHeart /> Likes {card.likes}
              </span>
              <span className="why-post-stat">
                <FiBarChart2 /> Views {card.views}
              </span>
              <span className="why-post-stat">
                <FiFlag /> Flags {card.flags}
              </span>
            </div>
            <p className="why-post-body">{card.body}</p>
          </motion.div>
          <p className="kappy-home-why-card-text">{card.text}</p>
        </>
      ),
    })),
    ...whyImageCards.map((card) => ({
      content: (
        <>
          <h3>{card.heading}</h3>
          <PostMarquee posts={postMarqueePosts} />
          <p className="kappy-home-why-card-text">{card.text}</p>
        </>
      ),
    })),
  ];

  return (
    <main className="kappy-home-main">
      <Header />
      <section className="kappy-home-first-sec">
        <motion.h1
          className="kappy-home-hero-title"
          initial={{ opacity: 0, scaleX: 1, scaleY: 1, y: 0 }}
          animate={{
            opacity: 1,
            scaleX: [1, 1.1, 0.92, 1.06, 1],
            scaleY: [1, 0.88, 1.16, 0.92, 1],
            y: [0, 4, -18, 0, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            default: {
              duration: 1.7,
              times: [0, 0.18, 0.5, 0.75, 1],
              ease: ["easeIn", "easeOut", "easeOut", "easeOut"],
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
        >
          Kampos
        </motion.h1>
        <TypeReveal as="h5" text="Your campus life in one app." immediate />
        <TypeReveal
          immediate
          text="Kampos connects students to their campuses. From official updates and announcements to wild rants, gists, and hot takes, Kampos drops you right in the middle of all the vibes — bringing your entire campus life straight to your phone."
        />

        <a
          href={KAMPOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="kappy-home-cta-btn"
        >
          Hop into Kampos
        </a>
      </section>
      <section className="kappy-home-second-sec">
        <HeroOrbit />
      </section>
      <TornPanel className="kappy-home-third-sec">
        <div></div>
      </TornPanel>

      <section className="kappy-home-fourth-sec">
        <h1>
          Why <span className="kappy-brand-text">Kampos</span>?
        </h1>
        <p>
          Students miss important updates, gist scatters across different
          platforms, and there’s no single space just for them. That’s the
          problem Kampos is solving.
        </p>

        <WhyStack
          cards={whyStackCards}
          containerClassName="kappy-home-fourth-sec-stack"
          stickyClassName="kappy-home-fourth-sec-stack-sticky"
          cardClassName="kappy-home-why-card"
        />
      </section>

      <section className="kappy-home-fifth-sec">
        <div className="kappy-home-fifth-sec-div-1">
          <h1>
            With <span className="kappy-brand-text">Kampos</span> you can ?
          </h1>
          <p>
            Connect with thousands of students on your campus. From freshers
            to finals, from your crush to your homies — everybody jams on
            Kampos.
          </p>
        </div>
        <div className="kappy-home-fifth-sec-div-2">
          <Cards1
            card1Heading="Be at the center of every trending gist and vibe"
            card1Text="From rants to banters to viral stories, you’ll never miss what’s popping on campus again."
            card1Img="card-trending"
          />
          <Cards1
            card1Heading="Stay updated on official school news"
            card1Text="Catch circulars, memos, and announcements the moment they drop — no more “I no hear.” "
            card1Img="card-news"
          />
          <Cards1
            card1Heading="Flex your Kampos identity"
            card1Text="Rep your school, flex your major & show off your level — Kampos is your ID card with vibes."
            card1Img="card-identity"
          />
        </div>
        <a
          href={KAMPOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="kappy-home-cta-btn"
        >
          Hop into Kampos
        </a>
      </section>

      <TornPanel className="kappy-home-sixth-sec">
        <div className="kappy-home-sixth-sec-div-1">
          <h1>Testimonials</h1>
          <p>
            We’re not building Kampos for ourselves or out of boredom — we’re
            building it for students. That’s why we’ve carried them along at
            every step of the journey, to truly satisfy their cravings. And
            guess what? They love it. From the hundreds in our community who
            have tested Kampos, the excitement is real. We even asked some of
            them to share their thoughts about
            Kampos — here’s what they had to say:
          </p>
        </div>

        <div className="kappy-home-sixth-sec-div-2">
          <TestimonialMarquee testimonials={testimonials} />
        </div>
      </TornPanel>

      <section className="kappy-home-seventh-sec">
        <motion.h1
          className="kappy-home-seventh-sec-mobile-h1"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Who are we?
        </motion.h1>
        <motion.figure
          initial={{ opacity: 0, x: reduceMotion ? 0 : -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="Images/chefs.webp"
            alt="kappy"
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.figure>

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="kappy-home-seventh-sec-h1" variants={revealItem}>
            Who are we?
          </motion.h1>
          <motion.p variants={revealItem}>
            Kampos is built by students, for students. We built Kampos because we
            knew students truly needed a space that actually feels like campus —
            with all the energy and vibes. Already trusted by{" "}
            <CountUp
              to={1000}
              suffix="+"
              reduce={reduceMotion}
              className="kappy-home-stat"
            />{" "}
            students across Nigeria.
          </motion.p>
          <MotionLink
            to="/chefs"
            className="kappy-home-cta-btn"
            variants={revealItem}
          >
            Meet the chefs
          </MotionLink>
        </motion.div>
      </section>
      <section className="kappy-home-eighth-sec">
        <h1 className="kappy-home-eighth-sec-h1">
          What is <span className="kappy-brand-text">Kampos</span> cooking?
        </h1>
        <div>
          <Card3 slides={slides} />
        </div>
      </section>

      <section className="kappy-home-ninth-sec">
        <h1 className="kappy-home-ninth-sec-mobile-h1">
          Ready to <span className="kappy-brand-text">vibe</span> with your campus?
        </h1>
        <div>
          <div className="kappy-home-ninth-sec-text">
            <h1 className="kappy-home-ninth-sec-h1">
              Ready to <span className="kappy-brand-text">vibe</span> with your campus?
            </h1>
            <a
              href={KAMPOS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kappy-home-cta-btn"
            >
              Hop into Kampos
            </a>
          </div>

          <AppShowcase />
        </div>
      </section>
      <KappyHomeFooter />
    </main>
  );
};

export default KappyHome;
