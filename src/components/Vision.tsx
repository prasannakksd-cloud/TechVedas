import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["LEARN", "BUILD", "INNOVATE", "SHARE"];

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight))
      );
      const next = Math.min(WORDS.length - 1, Math.floor(progress * WORDS.length));
      setIndex(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#164E63]/30 backdrop-blur-sm py-40 text-cream border-b border-gold/15">
      <div className="container-edit">
        <p className="mb-6 font-display text-3xl sm:text-4xl">Our vision</p>

        <div className="relative h-[16vw] max-h-40 min-h-24">
          <AnimatePresence mode="wait">
            <motion.h2
              key={WORDS[index]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute font-display text-[14vw] font-semibold leading-none sm:text-[8vw]"
            >
              {WORDS[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="mt-14 max-w-xl text-lg leading-relaxed text-cream/80">
          To build a strong student-driven technology community that inspires
          innovation, encourages continuous learning and prepares students to
          solve real-world problems using emerging technologies.
        </p>
      </div>
    </section>
  );
}
