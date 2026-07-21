import "./FeedbackForm.css";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";

import Header from "../Header/Header";
import KappyHomeFooter from "../KappyHomeFooter/KappyHomeFooter";

/* Page shell shared by the Bug report and Feature request pages: hero,
   the form card, the "what happens next" strip and the success state.

   It owns the form state so the pages stay declarative — they hand over
   `initialValues` and a `validate` function, and render their own fields
   through the `children` render prop. */

const HONEYPOT = "website";

const FeedbackShell = ({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  formTitle,
  formIntro,
  submitLabel,
  steps,
  successTitle,
  successBody,
  initialValues,
  validate,
  onSubmit,
  children,
}) => {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(() => ({
    ...initialValues,
    [HONEYPOT]: "",
  }));
  const [errors, setErrors] = useState({});
  // idle → submitting → done
  const [status, setStatus] = useState("idle");

  const setField = useMemo(
    () => (name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      // Clear a field's error as soon as the user starts fixing it, rather
      // than leaving red text sitting under a field they've already sorted.
      setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
    },
    [],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    // Bots fill every field they find, including ones hidden from humans.
    // Pretend it worked so they don't learn to work around it.
    if (values[HONEYPOT]) {
      setStatus("done");
      return;
    }

    const nextErrors = validate(values);
    const firstBad = Object.keys(nextErrors).find((key) => nextErrors[key]);
    if (firstBad) {
      setErrors(nextErrors);
      document
        .getElementById(firstBad)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      document.getElementById(firstBad)?.focus?.({ preventScroll: true });
      return;
    }

    setErrors({});
    setStatus("submitting");

    const { [HONEYPOT]: _honeypot, ...payload } = values;
    await onSubmit({ ...payload, submittedAt: new Date().toISOString() });

    setStatus("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Scroll reveal for the steps strip only.
     It is never applied to the form: `whileInView` starts the element at
     opacity 0 and only reveals it once the viewport observer fires, and the
     form card is taller than the viewport, so on a phone the whole form could
     sit invisible. Decoration may fade in; the thing the page exists for may
     not. `amount: "some"` fires as soon as any part is visible, which a tall
     element can always satisfy. */
  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: "some" },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <main className="fb-page">
      <Header />

      {status === "done" ? (
        <section className="fb-success">
          <motion.div
            className="fb-success-card"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <span className="fb-success-tick" aria-hidden="true">
              <FaCheck />
            </span>
            <h1>{successTitle}</h1>
            <p>{successBody}</p>
            <figure>
              <img src="Images/kappy-contact.webp" alt="" />
            </figure>
            <div className="fb-success-actions">
              <Link className="fb-btn fb-btn-primary" to="/">
                Back to home
              </Link>
              <Link className="fb-btn fb-btn-ghost" to="/contactPage">
                Contact page
              </Link>
            </div>
          </motion.div>
        </section>
      ) : (
        <>
          {/* Sits above the hero rather than inside its text column, so it
              stays the first thing on the page once the hero stacks. */}
          <nav className="fb-crumb">
            <Link className="fb-back" to="/contactPage">
              <FaArrowLeft aria-hidden="true" />
              Back to contact
            </Link>
          </nav>

          {/* Hero */}
          <section className="fb-hero">
            <div className="fb-hero-text">
              <p className="fb-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="fb-hero-intro">{intro}</p>
            </div>

            <motion.figure
              className="fb-hero-figure"
              initial={reduce ? false : { opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 170, damping: 15 }}
            >
              <motion.img
                src={image}
                alt={imageAlt}
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.figure>
          </section>

          {/* Tinted band holding the form and the steps */}
          <div className="fb-lower">
            {/* Form — no reveal, see the note on `reveal` above. */}
            <section className="fb-form-sec">
              <div className="fb-form-card">
                <h2>{formTitle}</h2>
                <p className="fb-form-intro">{formIntro}</p>

                <form onSubmit={handleSubmit} noValidate>
                  {children({ values, setField, errors })}

                  {/* Honeypot — hidden from people, irresistible to bots. */}
                  <div className="fb-honeypot" aria-hidden="true">
                    <label htmlFor={HONEYPOT}>Leave this empty</label>
                    <input
                      id={HONEYPOT}
                      name={HONEYPOT}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={values[HONEYPOT]}
                      onChange={(e) => setField(HONEYPOT, e.target.value)}
                    />
                  </div>

                  <div className="fb-submit-row">
                    <p className="fb-privacy">
                      By sending this you agree we can contact you about it. We
                      never share your details.
                    </p>
                    <button
                      className="fb-btn fb-btn-primary fb-submit"
                      type="submit"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : submitLabel}
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* What happens next */}
            <motion.section className="fb-steps-sec" {...reveal}>
              <h2>What happens next</h2>
              <ol className="fb-steps">
                {steps.map((step, i) => (
                  <li key={step.title} className="fb-step">
                    <span className="fb-step-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </motion.section>
          </div>
        </>
      )}

      <KappyHomeFooter />
    </main>
  );
};

export default FeedbackShell;
