import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiHeart, FiBarChart2, FiFlag, FiMessageSquare } from "react-icons/fi";
import "./AppShowcase.css";

/* ---- horizontal "swipe" pager: hold on a post, quick slide to the next ---- */
const HOLD = 2.8;
const MOVE = 0.55;

const buildPagerKeyframes = (count, name) => {
  const segment = 50 / count;
  const cycle = HOLD + MOVE;
  const total = count * cycle;
  const stops = [];
  for (let i = 0; i < count; i++) {
    const pos = -(i * segment);
    const holdStart = i * cycle;
    const holdEnd = holdStart + HOLD;
    stops.push(
      `${((holdStart / total) * 100).toFixed(3)}%{transform:translateX(${pos.toFixed(
        3
      )}%);animation-timing-function:linear}`
    );
    stops.push(
      `${((holdEnd / total) * 100).toFixed(3)}%{transform:translateX(${pos.toFixed(
        3
      )}%);animation-timing-function:cubic-bezier(0.65,0,0.35,1)}`
    );
  }
  stops.push(`100%{transform:translateX(-50%)}`);
  return { css: `@keyframes ${name}{${stops.join("")}}`, duration: total };
};

const feedPosts = [
  {
    name: "Kampos Official Account",
    handle: "Kampos Official",
    meta: "FUL  Csc 300 L",
    likes: "78",
    views: "235",
    flags: "2",
    body:
      "Welcome to Kampos, your new home for everything happening on campus! Whether you're looking to meet new friends, ace your studies, or just stay in the loop, we've got you covered. So go ahead, create your profile, explore the features, and",
    image: true,
  },
  {
    name: "Aisha",
    handle: "Doc_Aisha",
    meta: "OAU  MBBS",
    likes: "304",
    views: "2k",
    flags: "9",
    body:
      "Omooo 😭 Anatomy no dey play at all o. Today we dissected the thoracic cavity and I legit held a real human heart 😳. At first I was lowkey scared, but it was mad fascinating! The way the body is just organized ehn… God is truly the greatest Designer 🙌",
    image: true,
  },
  {
    name: "Chioma",
    handle: "Chioma_89",
    meta: "FUL  CSC",
    likes: "20",
    views: "345",
    flags: "2",
    body:
      "If I hear \"Computer Science is just coding\" again, I go scream 😭😭. Data Structures is dragging me like small gen 😩. And don't even get me started on this assignment wey Dr. Eze drop without warning. Any CSC student here that understands recursion?",
    image: true,
  },
];

const comments = [
  {
    name: "Fresherman",
    school: "Federal University Lokoja",
    meta: "Csc 300L",
    body: "Omoooo...I can’t wait to connect here",
  },
  {
    name: "Zainab O.",
    school: "Ahmadu Bello University",
    meta: "Law 200L",
    body: "Finally one place for everything. No more scrolling 5 group chats 😮‍💨",
  },
  {
    name: "Tunde",
    school: "University of Ibadan",
    meta: "Medicine 400L",
    body: "Person wey get this idea sabi. Circulars for my phone? Say less 🙌",
  },
  {
    name: "Amaka",
    school: "Nnamdi Azikiwe University",
    meta: "Mass Comm 100L",
    body: "As a fresher this is exactly what I needed abeg",
  },
  {
    name: "Seyi",
    school: "Obafemi Awolowo University",
    meta: "Eng 500L",
    body: "Wait so I fit see gist from other schools too? 👀",
  },
];

const StatusBar = ({ dark }) => (
  <div className={`aps-sb${dark ? " aps-sb-dark" : ""}`}>
    <span className="aps-sb-time">11:07</span>
    <span className="aps-sb-icons">
      <span className="aps-sb-wifi" />
      <span className="aps-sb-signal" />
      <span className="aps-sb-batt" />
    </span>
  </div>
);

const Stat = ({ icon: Icon, label, value }) => (
  <span className="aps-stat">
    <Icon /> {label} {value}
  </span>
);

const FeedPost = ({ post }) => (
  <div className="aps-feed-page">
    <div className="aps-post">
      <div className="aps-post-head">
        <div className="aps-post-avatar" />
        <div className="aps-post-id">
          <p className="aps-post-name">{post.name}</p>
          <p className="aps-post-handle">{post.handle}</p>
        </div>
        <div className="aps-post-meta">
          <p className="aps-post-time">2 hrs ago</p>
          <p className="aps-post-course">{post.meta}</p>
        </div>
      </div>
      <div className="aps-post-stats">
        <Stat icon={FiHeart} label="Likes" value={post.likes} />
        <Stat icon={FiBarChart2} label="Views" value={post.views} />
        <Stat icon={FiFlag} label="Flags" value={post.flags} />
      </div>
      <p className="aps-post-body">{post.body}</p>
      {post.image && <div className="aps-post-image" />}
    </div>
  </div>
);

const FeedScreen = ({ pagerCss, pagerName, pagerDuration }) => (
  <div className="aps-screen aps-screen-feed">
    <style>{pagerCss}</style>
    <StatusBar />
    <div className="aps-feed-top">
      <div className="aps-compose">
        <div className="aps-compose-avatar" />
        <span className="aps-compose-text">you no go talk your mind?</span>
      </div>
      <div className="aps-tabs">
        <span className="aps-tab aps-tab-active">Gist</span>
        <span className="aps-tab">Amebo</span>
      </div>
    </div>
    <div className="aps-pager">
      <div
        className="aps-pager-track"
        style={{ animationName: pagerName, animationDuration: `${pagerDuration}s` }}
      >
        {[...feedPosts, ...feedPosts].map((post, i) => (
          <FeedPost key={i} post={post} />
        ))}
      </div>
    </div>
    <div className="aps-bottombar">
      <div className="aps-bb-chat">
        <FiMessageSquare />
      </div>
      <div className="aps-bb-input">Drop your comment</div>
      <div className="aps-bb-heart">
        <FiHeart />
      </div>
    </div>
  </div>
);

const CommentBubble = ({ comment }) => (
  <div className="aps-comment">
    <div className="aps-comment-head">
      <div className="aps-comment-avatar" />
      <div className="aps-comment-id">
        <p className="aps-comment-name">{comment.name}</p>
        <p className="aps-comment-school">{comment.school}</p>
      </div>
      <div className="aps-comment-meta">
        <p className="aps-comment-time">2 hrs ago</p>
        <p className="aps-comment-course">{comment.meta}</p>
      </div>
    </div>
    <p className="aps-comment-body">{comment.body}</p>
  </div>
);

const CommentsScreen = () => (
  <div className="aps-screen aps-screen-comments">
    <StatusBar dark />
    <div className="aps-comments-header">
      Comments <span>165</span>
    </div>
    <div className="aps-vscroll">
      <div className="aps-vtrack">
        {[...comments, ...comments].map((comment, i) => (
          <CommentBubble key={i} comment={comment} />
        ))}
      </div>
    </div>
  </div>
);

/* ---- stuff that flies OUT of the phones ---- */

/* card chips drift outward, blur into focus, dissolve */
const drift = (fx, fy, r0, r1) => ({
  x: [fx, 0, -fx * 0.2, -fx * 0.34],
  y: [fy, 0, -10, -18],
  opacity: [0, 1, 1, 0],
  scale: [0.45, 1, 1, 0.8],
  rotate: [r0, (r0 + r1) / 2, r1, r1],
  filter: ["blur(7px)", "blur(0px)", "blur(0px)", "blur(4px)"],
});
const driftT = (duration, delay) => ({
  duration,
  times: [0, 0.26, 0.64, 1],
  repeat: Infinity,
  delay,
  ease: "easeInOut",
});

/* emojis pop in and float up-and-out */
const pop = (dx, rot) => ({
  x: [0, dx * 0.5, dx],
  y: [14, -18, -50],
  scale: [0.2, 1.25, 0.5],
  opacity: [0, 1, 0],
  rotate: [0, rot * 0.5, rot],
});
const popT = (duration, delay) => ({
  duration,
  times: [0, 0.4, 1],
  repeat: Infinity,
  delay,
  ease: "easeOut",
});

const EmComment = ({ name, text }) => (
  <>
    <div className="aps-em-avatar" />
    <div className="aps-em-body">
      <p className="aps-em-name">{name}</p>
      <p className="aps-em-text">{text}</p>
    </div>
  </>
);

const EmPost = ({ name, text }) => (
  <>
    <div className="aps-em-avatar aps-em-avatar-light" />
    <div className="aps-em-body">
      <p className="aps-em-name aps-em-name-dark">{name}</p>
      <p className="aps-em-text aps-em-text-muted">{text}</p>
    </div>
  </>
);

const EmActivity = ({ name, action }) => (
  <>
    <span className="aps-em-activity-name">{name}</span> {action}
  </>
);

const leftChips = [
  { type: "comment", name: "Pelumi77", text: "Omo una just dey hot dey go" },
  { type: "post", name: "Davyy", text: "This school wan take my life" },
  { type: "activity", name: "Oau_boy", action: "liked your gist" },
  { type: "comment", name: "Fola", text: "E choke 🔥🔥" },
  { type: "post", name: "Chioma", text: "Who else dey fear this DS exam? 😭" },
  { type: "comment", name: "Nkechi", text: "Abeg who get past questions?" },
  { type: "post", name: "Zainab", text: "Anatomy no dey smile at all 💀" },
  { type: "comment", name: "Tolu", text: "This gist sweet die 😂" },
];

const rightChips = [
  { type: "post", name: "Prince", text: "CSC vs MBBS 🥲" },
  { type: "comment", name: "Alexa@1", text: "God help me oooooooooooooo" },
  { type: "post", name: "Ayo", text: "Just bagged my 5.0, God did! 🎓" },
  { type: "activity", name: "Ayo", action: "posted a gist" },
  { type: "comment", name: "Obinna", text: "Say no more 😄" },
  { type: "post", name: "Tobi", text: "Lecturer cancelled class 🙌" },
  { type: "comment", name: "Emeka", text: "Who be my Val this year? 👀" },
  { type: "post", name: "Aisha", text: "Everybody for this school dey mad 😂" },
];

const chipContent = (chip) => {
  if (chip.type === "comment") return <EmComment name={chip.name} text={chip.text} />;
  if (chip.type === "post") return <EmPost name={chip.name} text={chip.text} />;
  return <EmActivity name={chip.name} action={chip.action} />;
};
const chipClass = (chip) =>
  chip.type === "comment"
    ? "aps-em-comment"
    : chip.type === "post"
    ? "aps-em-post"
    : "aps-em-activity";

const buildChip = (chip, side, i, total) => {
  const top = 4 + i * (86 / (total - 1));
  const inset = `${i % 3}%`;
  const pos = side === "left" ? { top: `${top}%`, left: inset } : { top: `${top}%`, right: inset };
  const fx = side === "left" ? 66 + (i % 3) * 7 : -(66 + (i % 3) * 7);
  const fy = (i % 2 ? 1 : -1) * (10 + (i % 3) * 6);
  const r0 = side === "left" ? -8 + (i % 3) : 8 - (i % 3);
  return {
    cls: chipClass(chip),
    pos,
    anim: drift(fx, fy, r0, r0 / 2),
    t: driftT(6 + (i % 4) * 0.5, (i * 0.7) % 5.5),
    content: chipContent(chip),
  };
};

const emojiList = ["🔥", "❤️", "😭", "😂", "📚", "✏️", "😘", "💀", "🙌", "😩", "🎓", "✨", "👀", "🥰"];
const emojiEmitters = emojiList.map((emoji, i) => {
  const side = i % 2 === 0 ? "left" : "right";
  const idx = Math.floor(i / 2);
  const top = 8 + idx * 12;
  const inset = `${4 + (idx % 3) * 4}%`;
  const pos = side === "left" ? { top: `${top}%`, left: inset } : { top: `${top}%`, right: inset };
  const dx = side === "left" ? -(26 + (idx % 3) * 12) : 26 + (idx % 3) * 12;
  const rot = side === "left" ? -16 : 16;
  return {
    cls: "aps-em-emoji",
    pos,
    anim: pop(dx, rot),
    t: popT(4.4 + (i % 4) * 0.4, (i * 0.45) % 5),
    content: emoji,
  };
});

const emitters = [
  ...leftChips.map((c, i) => buildChip(c, "left", i, leftChips.length)),
  ...rightChips.map((c, i) => buildChip(c, "right", i, rightChips.length)),
  ...emojiEmitters,
];

const Emitters = ({ style }) => (
  <motion.div className="aps-emitters" style={style}>
    {emitters.map((e, i) => (
      <motion.div
        key={i}
        className={`aps-em ${e.cls}`}
        style={e.pos}
        animate={e.anim}
        transition={e.t}
      >
        {e.content}
      </motion.div>
    ))}
  </motion.div>
);

/* broadcast pulse rings expanding from behind the phones */
const Rings = () => (
  <div className="aps-rings">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="aps-ring"
        animate={{ scale: [0.4, 1.5], opacity: [0.45, 0] }}
        transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "easeOut" }}
      />
    ))}
  </div>
);

const Phone = ({ variant, children, wrapClass, float, transition }) => (
  <motion.div className={`aps-phone-wrap ${wrapClass}`} animate={float} transition={transition}>
    <div className={`aps-phone aps-phone-${variant}`}>
      <div className="aps-bezel">
        {variant === "ios" ? <div className="aps-island" /> : <div className="aps-punch" />}
        <div className="aps-screen-clip">{children}</div>
        {variant === "ios" && <div className="aps-home" />}
      </div>
    </div>
  </motion.div>
);

const AppShowcase = () => {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef(null);
  const pager = useMemo(
    () => buildPagerKeyframes(feedPosts.length, "aps-feed-pager"),
    []
  );

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;
  const interactive = !reduceMotion && !isTouch;

  /* ---- #3 mouse parallax ---- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [11, -11]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-7, 7]), {
    stiffness: 120,
    damping: 18,
  });

  const handleMove = (e) => {
    if (!interactive || !sceneRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  /* ---- #1 scroll reveal ---- */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "start center"],
  });
  const revealY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const revealScale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const revealOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="app-showcase"
      ref={sceneRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="app-showcase-glow"
        animate={reduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {!reduceMotion && <Rings />}
      <motion.div
        className="aps-parallax"
        style={interactive ? { rotateX, rotateY } : undefined}
      >
        <motion.div
          className="aps-reveal"
          style={
            reduceMotion
              ? undefined
              : { y: revealY, scale: revealScale, opacity: revealOpacity }
          }
        >
          <div className="aps-cluster">
            <Phone
              variant="ios"
              wrapClass="aps-phone-front"
              float={reduceMotion ? {} : { y: [0, -16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FeedScreen
                pagerCss={pager.css}
                pagerName="aps-feed-pager"
                pagerDuration={pager.duration}
              />
            </Phone>
            <Phone
              variant="android"
              wrapClass="aps-phone-back"
              float={reduceMotion ? {} : { y: [0, 14, 0] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <CommentsScreen />
            </Phone>
          </div>
        </motion.div>
      </motion.div>
      {!reduceMotion && <Emitters style={{ opacity: revealOpacity }} />}
    </div>
  );
};

export default AppShowcase;
