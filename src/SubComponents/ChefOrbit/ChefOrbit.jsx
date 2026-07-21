import { motion, useReducedMotion } from "framer-motion";
import "./ChefOrbit.css";

const avatars = [
  "Ellipse 28.webp",
  "Ellipse 29.webp",
  "Ellipse 30.webp",
  "Ellipse 31.webp",
  "Ellipse 32.webp",
  "Ellipse 34.webp",
  "Ellipse 35.webp",
  "Ellipse 36.webp",
];

/* Elliptical arc geometry, as percentages of the container box.
   Avatars are laid out from the left side, over the top, to the right. */
const CX = 50; // arc centre X
const CY = 52; // arc centre Y (baseline the ends sit on)
const RX = 41; // horizontal radius
const RY = 38; // vertical radius
const START = 180; // left end (degrees)
const END = 0; // right end (degrees)

const ChefOrbit = () => {
  const reduceMotion = useReducedMotion();
  const n = avatars.length;

  return (
    <div className="chef-orbit">
      {avatars.map((src, i) => {
        const t = n === 1 ? 0.5 : i / (n - 1);
        const angle = ((START + t * (END - START)) * Math.PI) / 180;
        const left = CX + RX * Math.cos(angle);
        const top = CY - RY * Math.sin(angle);

        // deterministic, de-synced float per avatar: up/down + a little side drift
        const amp = 9 + (i % 3) * 2;
        const drift = 4 + (i % 2) * 2;
        const duration = 3.8 + (i % 4) * 0.4;
        const delay = (i * 0.28) % 1.4;

        return (
          <motion.div
            key={src}
            className="chef-orbit-avatar"
            style={{ top: `${top}%`, left: `${left}%` }}
            transformTemplate={(_, generated) =>
              `translate(-50%, -50%) ${generated}`
            }
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -amp, 0, amp * 0.5, 0],
                    x: [0, drift, 0, -drift, 0],
                  }
            }
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={`Images/${src}`} alt="Kampos team member" />
          </motion.div>
        );
      })}

      <img src="Images/kappy-chef.webp" alt="Kappy" className="chef-orbit-kappy" />
    </div>
  );
};

export default ChefOrbit;
