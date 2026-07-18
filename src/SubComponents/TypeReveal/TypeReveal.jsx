import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035 },
  },
};

const word = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TypeReveal = ({ text, className, as = "p", immediate = false }) => {
  const words = text.split(" ");
  const MotionTag = motion[as];

  const revealProps = immediate
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, amount: 0.6 } };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      {...revealProps}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default TypeReveal;
