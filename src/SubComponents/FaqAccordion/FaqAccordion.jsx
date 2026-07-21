import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "./FaqAccordion.css";

/* Accessible accordion: one panel open at a time, click an open question to
   close it. Built on real <button>s with aria-expanded/aria-controls so it
   works with a keyboard and screen readers. */
const FaqAccordion = ({ items, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const reduce = useReducedMotion();

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div
            key={item.q}
            className={`faq-item${open ? " faq-item-open" : ""}`}
          >
            <h3 className="faq-question-heading">
              <button
                type="button"
                id={`faq-trigger-${i}`}
                className="faq-question"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <FiChevronDown className="faq-icon" aria-hidden="true" />
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="faq-answer"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
