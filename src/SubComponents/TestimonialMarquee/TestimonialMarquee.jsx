import { useMemo } from "react";
import Card2 from "../Card2/Card2";
import "./TestimonialMarquee.css";

const HOLD_SECONDS = 5;
const MOVE_SECONDS = 0.7;

const buildScrollKeyframes = (count) => {
  const segment = 50 / count;
  const cycle = HOLD_SECONDS + MOVE_SECONDS;
  const total = count * cycle;
  const stops = [];

  for (let i = 0; i < count; i++) {
    const pos = -(i * segment);
    const holdStart = i * cycle;
    const holdEnd = holdStart + HOLD_SECONDS;

    stops.push(
      `${((holdStart / total) * 100).toFixed(4)}% { transform: translateX(${pos.toFixed(
        4
      )}%); animation-timing-function: linear; }`
    );
    stops.push(
      `${((holdEnd / total) * 100).toFixed(4)}% { transform: translateX(${pos.toFixed(
        4
      )}%); animation-timing-function: ease-in-out; }`
    );
  }

  stops.push(`100% { transform: translateX(-50%); }`);

  return {
    css: `@keyframes testimonial-marquee-scroll {\n${stops.join("\n")}\n}`,
    duration: total,
  };
};

const TestimonialMarquee = ({ testimonials }) => {
  const track = [...testimonials, ...testimonials];
  const { css, duration } = useMemo(
    () => buildScrollKeyframes(testimonials.length),
    [testimonials.length]
  );

  return (
    <div className="testimonial-marquee">
      <style>{css}</style>
      <div
        className="testimonial-marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((t, i) => (
          <Card2 key={i} quote={t.quote} name={t.name} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
