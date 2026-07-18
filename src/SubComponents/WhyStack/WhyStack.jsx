import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackCard = ({ scrollYProgress, index, total, className, children }) => {
  const segment = 1 / total;
  const windowStart = index * segment;
  const windowEnd = (index + 1) * segment;
  const holdEnd = windowStart + segment * 0.6;
  const entryStart = windowStart - segment * 0.4;
  const isFirst = index === 0;

  const inputRange = isFirst
    ? [0, holdEnd, windowEnd]
    : [entryStart, windowStart, holdEnd, windowEnd];

  const scaleRange = isFirst ? [1, 1, 0] : [0, 1, 1, 0];
  const opacityRange = isFirst ? [1, 1, 0] : [0, 1, 1, 0];
  const rotateRange = isFirst ? [0, 0, -14] : [14, 0, 0, -14];
  const xRange = isFirst ? ["0vw", "0vw", "-100vw"] : ["100vw", "0vw", "0vw", "-100vw"];

  const scale = useTransform(scrollYProgress, inputRange, scaleRange);
  const opacity = useTransform(scrollYProgress, inputRange, opacityRange);
  const rotate = useTransform(scrollYProgress, inputRange, rotateRange);
  const x = useTransform(scrollYProgress, inputRange, xRange);
  const transformOrigin = useTransform(scrollYProgress, (p) =>
    p < holdEnd ? "100% 100%" : "0% 100%"
  );

  return (
    <motion.div
      className={className}
      style={{
        x,
        scale,
        opacity,
        rotate,
        transformOrigin,
        zIndex: total - index,
      }}
    >
      {children}
    </motion.div>
  );
};

const WhyStack = ({ cards, containerClassName, stickyClassName, cardClassName }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className={containerClassName}
      ref={containerRef}
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className={stickyClassName}>
        {cards.map((card, i) => (
          <StackCard
            key={i}
            index={i}
            total={cards.length}
            scrollYProgress={scrollYProgress}
            className={`${cardClassName} ${card.className || ""}`}
          >
            {card.content}
          </StackCard>
        ))}
      </div>
    </div>
  );
};

export default WhyStack;
