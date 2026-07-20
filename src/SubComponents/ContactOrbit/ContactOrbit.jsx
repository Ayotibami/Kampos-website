import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
/* Only WhatsApp, Instagram and email are real Kampos channels — every other
   icon here is a generic communication glyph, not a third-party brand mark. */
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
  FaWifi,
  FaEnvelope,
  FaHeadset,
  FaBell,
  FaLocationDot,
  FaComments,
  FaCircleQuestion,
  FaMicrophone,
} from "react-icons/fa6";
import "./ContactOrbit.css";

/* --- Little floating pieces (Vibe 2: "his phone is blowing up") --- */

const Bubble = ({ text, tone }) => (
  <div className={`contact-bubble contact-bubble-${tone}`}>{text}</div>
);

const TypingBubble = () => (
  <div className="contact-bubble contact-bubble-white contact-typing">
    <span />
    <span />
    <span />
  </div>
);

const VoiceNote = ({ time }) => (
  <div className="contact-bubble contact-bubble-blue contact-voice">
    <span className="contact-voice-play">▶</span>
    <span className="contact-voice-wave">
      {Array.from({ length: 12 }).map((_, i) => (
        <i key={i} style={{ animationDelay: `${i * 0.09}s` }} />
      ))}
    </span>
    <span className="contact-voice-time">{time}</span>
  </div>
);

const ReadReceipt = ({ text }) => (
  <div className="contact-bubble contact-bubble-white contact-ticks">
    {text} <span className="contact-ticks-mark">✓✓</span>
  </div>
);

const IncomingCall = () => (
  <div className="contact-call">
    <span className="contact-call-icon">
      <FaPhone />
    </span>
    <span className="contact-call-text">
      <b>Kappy</b>
      <em>calling…</em>
    </span>
  </div>
);

const NotifBadge = ({ count }) => (
  <div className="contact-notif">
    <FaCommentDots />
    <span className="contact-notif-count">{count}</span>
  </div>
);

const Reaction = ({ emoji }) => <div className="contact-reaction">{emoji}</div>;

const MentionChip = ({ handle }) => (
  <div className="contact-mention">{handle}</div>
);

const PaperPlane = () => (
  <div className="contact-plane">
    <FaPaperPlane />
  </div>
);

const Social = ({ brand, children }) => (
  <div className={`contact-social contact-social-${brand}`}>{children}</div>
);

const OnlinePill = () => (
  <div className="contact-online">
    <span className="contact-online-dot" /> online
  </div>
);

/* Each element has a position (% of the box), an idle-float profile, a `group`
   (which batch it belongs to), and what to render. Only one group shows at a
   time — it pops in, holds, pops out, then the next group cycles in. Groups are
   spatially spread so each batch appears around Kappy, not clustered. */
const GROUP_COUNT = 8;
const CYCLE_MS = 2000;

const rawElements = [
  /* --- group 0 --- */
  { group: 0, top: "20%", left: "14%", amp: 8, duration: 4.4, rotate: -5,
    render: () => <Bubble text="Kappy how far" tone="blue" /> },
  { group: 0, top: "6%", left: "58%", amp: 7, duration: 4.1, rotate: -6,
    render: () => <TypingBubble /> },
  { group: 0, top: "72%", left: "84%", amp: 9, duration: 5, rotate: 6,
    render: () => <VoiceNote time="0:14" /> },
  { group: 0, top: "45%", left: "92%", amp: 7, duration: 3.6, rotate: 5,
    render: () => <Reaction emoji="🔥" /> },
  { group: 0, top: "56%", left: "7%", amp: 8, duration: 4.2, rotate: -5,
    render: () => (<Social brand="chat"><FaComments /></Social>) },

  /* --- group 1 --- */
  { group: 1, top: "22%", left: "86%", amp: 8, duration: 4.6, rotate: 5,
    render: () => <Bubble text="I need help" tone="green" /> },
  { group: 1, top: "48%", left: "6%", amp: 7, duration: 3.9, rotate: 6,
    render: () => (<Social brand="instagram"><FaInstagram /></Social>) },
  { group: 1, top: "74%", left: "16%", amp: 9, duration: 4.8, rotate: -4,
    render: () => <Bubble text="Heyyyy" tone="yellow" /> },
  { group: 1, top: "7%", left: "38%", amp: 6, duration: 3.5, rotate: -5,
    render: () => <Reaction emoji="👋" /> },
  { group: 1, top: "32%", left: "94%", amp: 7, duration: 4.1, rotate: 5,
    render: () => (<Social brand="question"><FaCircleQuestion /></Social>) },

  /* --- group 2 --- */
  { group: 2, top: "5%", left: "46%", amp: 6, duration: 3.8, rotate: -4,
    render: () => <NotifBadge count="5" /> },
  { group: 2, top: "32%", left: "8%", amp: 8, duration: 4.3, rotate: 6,
    render: () => <PaperPlane /> },
  { group: 2, top: "46%", left: "94%", amp: 8, duration: 4, rotate: -5,
    render: () => (<Social brand="whatsapp"><FaWhatsapp /></Social>) },
  { group: 2, top: "76%", left: "20%", amp: 9, duration: 4.5, rotate: -5,
    render: () => <Bubble text="Wetin dey" tone="blue" /> },
  { group: 2, top: "20%", left: "72%", amp: 7, duration: 3.5, rotate: 6,
    render: () => <Reaction emoji="😅" /> },

  /* --- group 3 --- */
  { group: 3, top: "8%", left: "70%", amp: 6, duration: 3.7, rotate: 5,
    render: () => <Reaction emoji="💬" /> },
  { group: 3, top: "62%", left: "10%", amp: 8, duration: 4.7, rotate: -4,
    render: () => <IncomingCall /> },
  { group: 3, top: "28%", left: "90%", amp: 7, duration: 4.2, rotate: -5,
    render: () => <MentionChip handle="@kampos" /> },
  { group: 3, top: "40%", left: "26%", amp: 7, duration: 3.4, rotate: 6,
    render: () => <Reaction emoji="😂" /> },
  { group: 3, top: "80%", left: "82%", amp: 8, duration: 4.4, rotate: -5,
    render: () => (<Social brand="mic"><FaMicrophone /></Social>) },

  /* --- group 4 --- */
  { group: 4, top: "36%", left: "24%", amp: 7, duration: 3.6, rotate: -5,
    render: () => <Reaction emoji="❤️" /> },
  { group: 4, top: "62%", left: "90%", amp: 8, duration: 4.5, rotate: 5,
    render: () => <ReadReceipt text="Read" /> },
  { group: 4, top: "9%", left: "30%", amp: 7, duration: 4, rotate: 5,
    render: () => (<Social brand="email"><FaEnvelope /></Social>) },
  { group: 4, top: "78%", left: "78%", amp: 9, duration: 4.9, rotate: -5,
    render: () => <Bubble text="Talk to us" tone="white" /> },

  { group: 4, top: "46%", left: "5%", amp: 7, duration: 3.5, rotate: 6,
    render: () => <Reaction emoji="🚀" /> },

  /* --- group 5 --- */
  { group: 5, top: "5%", left: "24%", amp: 7, duration: 4, rotate: 5,
    render: () => (<Social brand="signal"><FaWifi /></Social>) },
  { group: 5, top: "26%", left: "74%", amp: 6, duration: 3.8, rotate: -5,
    render: () => <OnlinePill /> },
  { group: 5, top: "66%", left: "92%", amp: 8, duration: 4.4, rotate: 6,
    render: () => <PaperPlane /> },
  { group: 5, top: "44%", left: "12%", amp: 7, duration: 3.6, rotate: -6,
    render: () => <Reaction emoji="🙏" /> },
  { group: 5, top: "80%", left: "26%", amp: 9, duration: 4.7, rotate: -4,
    render: () => <Bubble text="Sannu" tone="yellow" /> },

  /* --- group 6 --- */
  { group: 6, top: "22%", left: "8%", amp: 7, duration: 3.7, rotate: -6,
    render: () => <Reaction emoji="🙌" /> },
  { group: 6, top: "10%", left: "78%", amp: 8, duration: 4.3, rotate: 5,
    render: () => <Bubble text="Omo abeg" tone="yellow" /> },
  { group: 6, top: "54%", left: "5%", amp: 8, duration: 4.6, rotate: 6,
    render: () => <PaperPlane /> },
  { group: 6, top: "40%", left: "94%", amp: 7, duration: 4, rotate: -5,
    render: () => (<Social brand="headset"><FaHeadset /></Social>) },
  { group: 6, top: "76%", left: "66%", amp: 7, duration: 3.4, rotate: 5,
    render: () => <Reaction emoji="⭐" /> },

  /* --- group 7 --- */
  { group: 7, top: "5%", left: "42%", amp: 6, duration: 3.8, rotate: -4,
    render: () => (<Social brand="bell"><FaBell /></Social>) },
  { group: 7, top: "30%", left: "92%", amp: 7, duration: 3.6, rotate: 5,
    render: () => <Reaction emoji="😎" /> },
  { group: 7, top: "68%", left: "12%", amp: 9, duration: 4.8, rotate: -5,
    render: () => <Bubble text="How far" tone="blue" /> },
  { group: 7, top: "48%", left: "7%", amp: 7, duration: 4.1, rotate: 6,
    render: () => (<Social brand="location"><FaLocationDot /></Social>) },
  { group: 7, top: "82%", left: "84%", amp: 8, duration: 3.9, rotate: -6,
    render: () => <Reaction emoji="🤙" /> },
];

const elements = rawElements.map((el, id) => ({ ...el, id }));

const ContactOrbit = () => {
  const reduceMotion = useReducedMotion();
  const [group, setGroup] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setGroup((g) => (g + 1) % GROUP_COUNT),
      CYCLE_MS
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  // Reduced motion: show everything at once, no cycling or float.
  const visible = reduceMotion
    ? elements
    : elements.filter((el) => el.group === group);

  return (
    <div className="contact-orbit">
      <img
        src="Images/kappy-contact.png"
        alt="Kappy"
        className="contact-orbit-kappy"
      />

      <AnimatePresence>
        {visible.map((el) => (
          <motion.div
            key={el.id}
            className="contact-orbit-float"
            style={{ top: el.top, left: el.left }}
            transformTemplate={(_, generated) =>
              `translate(-50%, -50%) ${generated}`
            }
            initial={reduceMotion ? false : { opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -el.amp, 0, el.amp * 0.6, 0],
                      rotate: [0, el.rotate, 0, -el.rotate, 0],
                    }
              }
              transition={{
                duration: el.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {el.render()}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ContactOrbit;
