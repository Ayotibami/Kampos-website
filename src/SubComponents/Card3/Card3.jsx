import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./Card3.css";

const CYCLE_SECONDS = 5;
const RADIUS = 18;

const Card3 = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, CYCLE_SECONDS * 1000);
    return () => clearTimeout(id);
  }, [index, slides.length]);

  const slide = slides[index];

  return (
    <div className="card-3-div" style={{ backgroundColor: slide.bgColor }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="card-3-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <h2>{slide.title}</h2>
          <figure className="card-3-icon">
            <img src={`Images/${slide.icon}.webp`} alt="" loading="lazy" decoding="async" />
          </figure>
          <p>{slide.text}</p>
        </motion.div>
      </AnimatePresence>

      <div className="card-3-timer-row">
        {slides.map((_, i) => {
          const isActive = i === index;
          return (
            <button
              key={i}
              type="button"
              className={`card-3-timer${isActive ? " card-3-timer-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
            >
              <svg width="44" height="44" viewBox="0 0 44 44">
                <circle
                  className="card-3-timer-track"
                  cx="22"
                  cy="22"
                  r={RADIUS}
                  fill="none"
                  strokeWidth="4"
                />
                {isActive && (
                  <motion.circle
                    key={index}
                    className="card-3-timer-progress"
                    cx="22"
                    cy="22"
                    r={RADIUS}
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : CYCLE_SECONDS,
                      ease: "linear",
                    }}
                  />
                )}
              </svg>
              <span className="card-3-timer-number">{i + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Card3;
