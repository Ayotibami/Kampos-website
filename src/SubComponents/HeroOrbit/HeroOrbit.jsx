import { motion, useReducedMotion } from "framer-motion";
import { FiHeart, FiBarChart2, FiFlag } from "react-icons/fi";
import "./HeroOrbit.css";

const StatsRow = ({ likes, views, flags }) => (
  <div className="hero-card-stats">
    <span className="hero-stat">
      <FiHeart /> <span className="hero-stat-label">Likes</span> {likes}
    </span>
    <span className="hero-stat">
      <FiBarChart2 /> <span className="hero-stat-label">Views</span> {views}
    </span>
    <span className="hero-stat">
      <FiFlag /> <span className="hero-stat-label">Flags</span> {flags}
    </span>
  </div>
);

const HeroReplyCard = ({ name, handle, time, tag, text }) => (
  <div className="hero-card hero-reply-card">
    <div className="hero-card-header">
      <div className="hero-card-avatar" />
      <div className="hero-card-id">
        <p className="hero-card-name">{name}</p>
        <p className="hero-card-handle">{handle}</p>
      </div>
      <div className="hero-card-meta">
        <p className="hero-card-time">{time}</p>
        <p className="hero-card-tag">{tag}</p>
      </div>
    </div>
    <p className="hero-reply-text">{text}</p>
  </div>
);

const HeroPhotoCard = ({ name, handle, school, time, tag, likes, views, flags, text }) => (
  <div className="hero-card hero-photo-card">
    <div className="hero-card-header">
      <div className="hero-card-avatar" />
      <div className="hero-card-id">
        <p className="hero-card-name hero-card-name-dark">{name}</p>
        <div className="hero-card-subrow">
          <p className="hero-card-handle">{handle}</p>
          <p className="hero-card-school">{school}</p>
        </div>
      </div>
      <div className="hero-card-meta">
        <p className="hero-card-time">{time}</p>
        <p className="hero-card-tag hero-card-tag-blue">{tag}</p>
      </div>
    </div>
    <StatsRow likes={likes} views={views} flags={flags} />
    <p className="hero-photo-text">{text}</p>
    <div className="hero-photo-placeholder" />
  </div>
);

const HeroTextCard = ({ name, handle, school, time, tag, likes, views, flags, text, tone }) => (
  <div className="hero-card hero-text-card">
    <div className="hero-card-header">
      <div className="hero-card-avatar" />
      <div className="hero-card-id">
        <p className="hero-card-name hero-card-name-dark">{name}</p>
        <div className="hero-card-subrow">
          <p className="hero-card-handle">{handle}</p>
          <p className="hero-card-school">{school}</p>
        </div>
      </div>
      <div className="hero-card-meta">
        <p className="hero-card-time">{time}</p>
        <p className="hero-card-tag hero-card-tag-blue">{tag}</p>
      </div>
    </div>
    <StatsRow likes={likes} views={views} flags={flags} />
    <div className={`hero-text-box hero-text-box-${tone}`}>
      <p>{text}</p>
    </div>
  </div>
);

const cardDefs = [
  {
    top: "26%",
    left: "83%",
    width: "14%",
    amp: 11,
    duration: 4.2,
    delay: 0.8,
    rotate: 5,
    render: () => (
      <HeroPhotoCard
        name="Tresy Jane"
        handle="@Tresyjane_Official"
        school="UNILAG"
        time="2 hrs ago"
        tag="MOB 300L"
        likes="19"
        views="235"
        flags="3"
        text="Barr lecture way suppose serious, but na pulse we dey catch 😅 Na who dey broadcast? Tag your classmate wey dey always sleep for front seat 😅"
      />
    ),
  },
  {
    top: "24%",
    left: "23%",
    width: "21%",
    amp: 12,
    duration: 4.6,
    delay: 0.4,
    rotate: -5,
    render: () => (
      <HeroPhotoCard
        name="Lookay"
        handle="@lookayphotographer"
        school="OAU"
        time="2 hrs ago"
        tag="300L"
        likes="78"
        views="235"
        flags="9"
        text="Who need restaurant when indomie + egg dey? Chef vibes don load 🔥 Today na noodles, tomorrow na noodles with pride 😎 #HostelChef"
      />
    ),
  },
  {
    top: "20%",
    left: "9%",
    width: "13%",
    amp: 8,
    duration: 3.8,
    delay: 0,
    rotate: 4,
    render: () => (
      <HeroTextCard
        name="Josiah 56433"
        handle="@Joshthehistorian"
        school="FUL"
        time="2 hrs ago"
        tag="CSC 300L"
        likes="19"
        views="235"
        flags="2"
        text="Why my roommate dey do DJ every night?"
        tone="navy"
      />
    ),
  },
  {
    top: "90%",
    left: "94%",
    width: "16%",
    amp: 10,
    duration: 4.7,
    delay: 0.6,
    rotate: 5,
    render: () => (
      <HeroTextCard
        name="Ayomide Junior"
        handle="Kampos official"
        school="UI"
        time="2 hrs ago"
        tag="CSC 300L"
        likes="76"
        views="235"
        flags="3"
        text="Na Friday be this o! Who wan go class again?"
        tone="olive"
      />
    ),
  },
  {
    top: "62%",
    left: "13%",
    width: "22%",
    amp: 10,
    duration: 4.4,
    delay: 1.2,
    rotate: -4,
    render: () => (
      <HeroReplyCard
        name="Obinna true son"
        handle="@Obinna_300L"
        time="2 hrs ago"
        tag="Csc 300 L"
        text="I just wan know if I go see who go help me with PHY 301 for here 😭. But vibes first sha!"
      />
    ),
  },
  {
    top: "65%",
    left: "80%",
    width: "25%",
    amp: 9,
    duration: 3.9,
    delay: 0.2,
    rotate: 6,
    render: () => (
      <HeroReplyCard
        name="Titilayo Akintunde"
        handle="@TeeTalks"
        time="2 hrs ago"
        tag="Csc 300 L"
        text="So na here cruise go dey this semester ?? Say no more 😄"
      />
    ),
  },
  {
    top: "88%",
    left: "20%",
    width: "25%",
    amp: 11,
    duration: 5,
    delay: 0.9,
    rotate: -4,
    render: () => (
      <HeroReplyCard
        name="Fola_shade"
        handle="@FolaThePlug"
        time="2 hrs ago"
        tag="Csc 300 L"
        text="E choke 🔥🔥 This app go scatter campus o. Make I go set my profile sharp sharp!"
      />
    ),
  },
  {
    top: "8%",
    left: "65%",
    width: "16%",
    amp: 9,
    duration: 4.1,
    delay: 1.1,
    rotate: -6,
    render: () => (
      <HeroPhotoCard
        name="Chidinma Blessing"
        handle="@Chidinma_naturally"
        school="UNIBEN"
        time="3 hrs ago"
        tag="ACC 200L"
        likes="42"
        views="310"
        flags="1"
        text="NEPA don bring light for hostel and everybody dey rejoice like say na public holiday 😭🙌 Make we enjoy am before e vanish again"
      />
    ),
  },
  {
    top: "42%",
    left: "92%",
    width: "20%",
    amp: 12,
    duration: 4.8,
    delay: 0.3,
    rotate: 5,
    render: () => (
      <HeroReplyCard
        name="Tobenna Okafor"
        handle="@Toby_codes"
        time="4 hrs ago"
        tag="CSC 400L"
        text="Group project WhatsApp group don turn ghost town, everybody dey type... and nothing dey send 😩 Who go carry final year project?"
      />
    ),
  },
  {
    top: "50%",
    left: "3%",
    width: "18%",
    amp: 10,
    duration: 3.6,
    delay: 0.7,
    rotate: -5,
    render: () => (
      <HeroTextCard
        name="Emmanuel Dara"
        handle="@Big_Manny"
        school="ABU"
        time="5 hrs ago"
        tag="MEE 200L"
        likes="58"
        views="402"
        flags="0"
        text="GST lecturer don cancel class again, na who be the real MVP?"
        tone="olive"
      />
    ),
  },
  {
    top: "76%",
    left: "58%",
    width: "21%",
    amp: 13,
    duration: 5.2,
    delay: 0.5,
    rotate: 6,
    render: () => (
      <HeroReplyCard
        name="Blessing Nkem"
        handle="@BlessingReads"
        time="6 hrs ago"
        tag="LAW 200L"
        text="Constitutional law CA don shock person well well. E don pain me finish, make we hope for better mark 🙏"
      />
    ),
  },
  {
    top: "4%",
    left: "36%",
    width: "13%",
    amp: 8,
    duration: 3.9,
    delay: 1.4,
    rotate: 4,
    render: () => (
      <HeroPhotoCard
        name="Zainab Yusuf"
        handle="@Zeephotography"
        school="LASU"
        time="1 hr ago"
        tag="MBBS 100L"
        likes="91"
        views="560"
        flags="2"
        text="First anatomy practical don finish and I dey alive to tell the story 💀 Cadaver no send us today"
      />
    ),
  },
  {
    top: "95%",
    left: "72%",
    width: "17%",
    amp: 10,
    duration: 4.4,
    delay: 0.15,
    rotate: -5,
    render: () => (
      <HeroTextCard
        name="Kelechi Praise"
        handle="@KelvinTheBarber"
        school="FUTA"
        time="30 mins ago"
        tag="ENG 300L"
        likes="35"
        views="289"
        flags="1"
        text="Weekend don land! Who dey go house party for hostel B tonight?"
        tone="navy"
      />
    ),
  },
];

const HeroOrbit = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-orbit">
      <img src="Images/Kappy Mascot.png" alt="Kappy" className="hero-orbit-kappy" />

      {cardDefs.map((card, i) => (
        <motion.div
          key={i}
          className={`hero-orbit-float${i === 6 ? " hero-orbit-hide-mobile" : ""}`}
          style={{
            top: card.top,
            left: card.left,
            width: card.width,
            minWidth: `${Math.max(88, parseFloat(card.width) * 4.5)}px`,
          }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -card.amp, 0, card.amp * 0.6, 0],
                  x: [0, card.amp * 0.5, 0, -card.amp * 0.5, 0],
                  rotate: [0, card.rotate, 0, -card.rotate, 0],
                }
          }
          transition={{
            duration: card.duration,
            delay: card.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {card.render()}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroOrbit;
