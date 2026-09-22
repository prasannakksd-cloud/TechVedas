import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  index: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ValueCard({ index, title, description, Icon }: ValueCardProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setActive((v) => !v)}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-beige/15 bg-espresso/60 backdrop-blur-md p-8 text-left transition-colors duration-500 hover:border-gold/40"
      animate={{
        backgroundColor: active ? "rgba(35, 48, 68, 0.85)" : "rgba(11, 19, 32, 0.6)",
        y: active ? -6 : 0,
        borderColor: active ? "rgba(245, 199, 107, 0.5)" : "rgba(185, 216, 229, 0.15)",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between w-full">
        <span
          className={`font-display text-sm font-semibold tracking-wider transition-colors duration-500 ${
            active ? "text-gold" : "text-gold/70"
          }`}
        >
          {index}
        </span>
        <motion.span
          animate={{ rotate: active ? 12 : 0, color: active ? "#F5C76B" : "#2DD4BF" }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={26} />
        </motion.span>
      </div>

      <div className="mt-4">
        <h3
          className={`font-display text-2xl font-semibold transition-colors duration-500 ${
            active ? "text-gold" : "text-cream"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-beige/80">
          {description}
        </p>
      </div>
    </motion.button>
  );
}
