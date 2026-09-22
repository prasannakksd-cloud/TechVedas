import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  ChartSpline,
  Code2,
  Smartphone,
  Cloud,
  Trophy,
  Users,
  FolderGit2,
} from "lucide-react";

const CATEGORIES = [
  { label: "AI & Machine Learning", Icon: BrainCircuit, note: "Neural networks, model training, applied research." },
  { label: "Data Science", Icon: ChartSpline, note: "Analysis, visualisation and data-driven decision making." },
  { label: "Web Development", Icon: Code2, note: "Modern, production-grade websites and web apps." },
  { label: "App Development", Icon: Smartphone, note: "Mobile experiences built for real users." },
  { label: "Cloud", Icon: Cloud, note: "Deploying and scaling projects beyond a laptop." },
  { label: "Hackathons", Icon: Trophy, note: "Time-boxed builds that turn ideas into demos." },
  { label: "Workshops", Icon: Users, note: "Peer-led sessions that build practical skill." },
  { label: "Projects", Icon: FolderGit2, note: "Long-term builds members carry across semesters." },
];

function CategoryVisual({ index }: { index: number }) {
  const category = CATEGORIES[index];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-espresso">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.label}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 p-10 text-center"
        >
          <category.Icon size={64} className="text-gold" strokeWidth={1.3} />
          <p className="max-w-xs text-beige/80">{category.note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#0B1320]/35 backdrop-blur-sm py-28 border-b border-gold/15 text-cream">
      <div className="container-edit">
        <h2 className="mb-14 font-display text-4xl font-semibold text-cream sm:text-5xl">What we do</h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="order-2 h-72 lg:order-1 lg:h-[420px]">
            <CategoryVisual index={active} />
          </div>

          <ul className="order-1 divide-y divide-beige/15 lg:order-2">
            {CATEGORIES.map((cat, i) => (
              <li key={cat.label}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between py-4 text-left transition-colors duration-300"
                >
                  <span
                    className={`font-display text-xl sm:text-2xl transition-colors ${
                      active === i ? "text-gold font-semibold" : "text-beige/70"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <cat.Icon
                    size={20}
                    className={active === i ? "text-gold" : "text-beige/30"}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
