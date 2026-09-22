import { motion } from "framer-motion";
import type { EventFilterOption } from "../hooks/useEventFilter";

const OPTIONS: EventFilterOption[] = [
  "All",
  "Workshops",
  "Hackathons",
  "Tech Talks",
  "Coding",
  "AI/ML",
  "Projects",
];

interface EventFilterProps {
  value: EventFilterOption;
  onChange: (v: EventFilterOption) => void;
}

export default function EventFilter({ value, onChange }: EventFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {OPTIONS.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
          >
            {isActive && (
              <motion.span
                layoutId="event-filter-pill"
                className="absolute inset-0 rounded-full bg-terracotta"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-cream" : "text-beige/70 hover:text-cream"}`}>
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}
