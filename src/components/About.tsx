import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.3);
  const words = ["ABOUT", "TECH", "VEDAS"];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#0B1320]/30 backdrop-blur-sm border-y border-gold/15 text-cream">
      <div ref={ref} className="container-edit">
        <div className="mb-14 font-display text-[13vw] font-semibold leading-[0.9] text-cream sm:text-[7vw]">
          {words.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={i === 2 ? "text-gold" : ""}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl text-lg leading-relaxed text-beige/90 sm:text-xl font-light"
        >
          Tech Vedas is the technical community of the Department of CSE
          (Artificial Intelligence &amp; Data Science) at Dayananda Sagar
          University. The club creates a collaborative environment where
          students explore emerging technologies, develop practical skills,
          build innovative solutions and learn from one another.
        </motion.p>
      </div>
    </section>
  );
}
