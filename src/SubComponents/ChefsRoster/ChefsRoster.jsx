import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./ChefsRoster.css";

/* Real team data.
   TODO from user:
   - Confirm which face (Ellipse 29 / 30 / 36) belongs to Masterpiece Ayobami,
     Eric Alfred, Victor Abdul — assigned tentatively below.
   - Provide their intros + nicknames (placeholders for now).
   - Confirm the roles for the first five (inferred from their bios). */
const chefs = [
  {
    img: "kappy.png",
    role: "Mascot",
    name: "Kappy Avi",
    nick: "Blue Clown",
    // TODO: draft intro in Kappy's voice — swap in the real one.
    intro:
      "Heyyyy, na me be Kappy — the face of Kampos. You go see me for your feed, for your notifications, and probably for your head too. Dem dey call me ragebaiter; I prefer 'conversation starter' 😌. My job na simple: make sure campus life sweet you every single day. Blue clown, certified. 💙",
  },
  {
    img: "Ellipse 29.png",
    role: "Anything",
    name: "Masterpiece Ayobami",
    nick: "CookingApps",
    x: "https://x.com/CookingApps",
    intro:
      "Heyyyyy. I'm the guy on the team who handles everything and anything — I thought up this whole Kampos thing, and every day I've got to make sure it works. From making sure Kampos is so good you feel like eating it (literally), to ensuring things keep moving smoothly every day, to giving the team boring speeches to motivate them. I'm everywhere. Many would call me the CEO, but I'm simply just your boi. And yeah, I'm Kappy's best friend — no one else on the team can handle his ragebaits.",
  },
  {
    img: "Ellipse 36.png",
    role: "Engineering",
    name: "Eric Alfred",
    nick: "Alfred",
    x: "https://x.com/heyricky__",
    ig: "https://www.instagram.com/0xricky_",
    intro:
      "Heyyyyy. I'm the guy behind the screen making sure Kampos doesn't fall apart when you're not looking. Code, bugs, chaos, repeat. I don't do boring speeches — I do boring stack traces. I'm simply just the guy holding it all together, but the CEO thinks that's his job. To be honest, Kappy is actually a ragebaiter.",
  },
  {
    img: "Ellipse 30.png",
    role: "Product",
    name: "Victor Abdul",
    nick: "Oluwa_techie",
    x: "https://x.com/victorabdul054",
    ig: "https://www.instagram.com/abdulvictor054",
    intro:
      "Product designer by profession, anime fan by choice, music addict by default. I love creating things people genuinely enjoy using—and I'm probably already working on the next crazy idea.",
  },
  {
    img: "Ellipse 34.png",
    role: "Technology",
    name: "Peace Oloruntoba",
    nick: "PeaceCodes",
    x: "https://x.com/PeaceEdgeTech",
    ig: "https://www.instagram.com/peacecodes22",
    intro:
      "I'm a growing software engineer who has been in the tech space for more than 4 years. Building, Scaling, and Maintaining Tech products, with a passion for building tech solutions for everyone. PS: I love cars",
  },
  {
    img: "Ellipse 35.png",
    role: "Animations",
    name: "Emmanuel Omotunwase",
    nick: "Emmysam",
    x: "https://x.com/emmy_sam5",
    ig: "https://www.instagram.com/emmysam_",
    intro:
      "I'm Emmanuel Omotunwase, a 2D animator with a deep love for storytelling. Through motion and design, I blend creativity with technical skill to bring characters and ideas to life in ways that feel engaging and real.",
  },
  {
    img: "Ellipse 28.png",
    role: "Visuals",
    name: "Abraham Gabriel",
    nick: "DOXA",
    x: "https://x.com/Doxa0029",
    ig: "https://www.instagram.com/abraham_gabriel29",
    intro:
      "Hello guys my name is Abraham Gabriel I am honored to introduce myself as one amongst the very amazing team here on Kampos. I'm responsible for the amazing graphic visuals you see here on Kampos, na me dey cook the design, and the design dey done wella before I serve am to una 😌. Asides designing, I love drumming, amebo 👀, and analyzing movies... And luckily for me Kampos is a platform for me to connect with more friends who loves the same thing...\n\nI love you all, see you on Kampos",
  },
  {
    img: "Ellipse 31.png",
    role: "Operations",
    name: "Alhassan Chenemi",
    nick: "Chensy",
    ig: "https://www.instagram.com/chen_ency",
    intro:
      "Hey, I'm Chensy 👋. At Kampos, I'm basically the glue holding everything together. Events, deadlines, random chaos — I keep it all running smooth (or at least looking smooth 😅). Call me the logistics plug.",
  },
  {
    img: "Ellipse 32.png",
    role: "Content & Community",
    name: "Favour Odokina",
    nick: "Tenuojo",
    x: "https://x.com/FOdokina",
    ig: "https://instagram.com/odokinafavour",
    intro:
      "Hiiii my name is Favour Odokina and I'm just a girl who is currently jobless (I just graduated from uni 🥲😭📸)\n\nI write content and manage the community for KAMPOS",
  },
];

const DURATION = 5000;

const ChefsRoster = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef();

  const select = (i) => {
    setActive(i);
    setProgress(0);
  };

  useEffect(() => {
    if (paused || reduce) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      setProgress(p);
      if (p >= 1) {
        setActive((a) => (a + 1) % chefs.length);
        setProgress(0);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused, reduce]);

  const chef = chefs[active];

  return (
    <div
      className="roster"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Roles selector */}
      <div className="roster-roles">
        <p className="roster-roles-title">Roles</p>
        <div className="roster-roles-list">
          {chefs.map((c, i) => (
            <button
              key={c.name}
              className={`roster-role ${i === active ? "is-active" : ""}`}
              onClick={() => select(i)}
            >
              {i === active && (
                <motion.span
                  layoutId="roster-pill"
                  className="roster-role-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              <span className="roster-role-label">{c.role}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail card */}
      <div className="roster-detail">
        <div className="roster-progress">
          <div
            className="roster-progress-fill"
            style={{ transform: `scaleX(${reduce ? 1 : progress})` }}
          />
        </div>

        <span className="roster-index" aria-hidden="true">
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="roster-detail-inner">
          <div className="roster-photo">
            <div className="roster-photo-ring" />
            <div className="roster-photo-hole">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={`Images/${chef.img}`}
                  alt={chef.name}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduce ? 1 : 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                />
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="roster-text"
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="roster-head">
                <h3>{chef.name}</h3>
                <div className="roster-tags">
                  <span className="roster-role-tag">{chef.role}</span>
                  {chef.nick && <span className="roster-nick">{chef.nick}</span>}
                  {/* Only render a handle that actually links somewhere, so
                      chefs without socials don't show dead icons. */}
                  {(chef.x || chef.ig) && (
                    <span className="roster-socials">
                      {chef.x && (
                        <a
                          className="roster-social"
                          href={chef.x}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${chef.name} on X`}
                        >
                          <FaXTwitter />
                        </a>
                      )}
                      {chef.ig && (
                        <a
                          className="roster-social"
                          href={chef.ig}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${chef.name} on Instagram`}
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <p className="roster-intro">{chef.intro}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ChefsRoster;
