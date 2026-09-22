import { motion } from "framer-motion";
import type { GalleryFilterOption } from "../hooks/useGalleryFilter";

const OPTIONS: GalleryFilterOption[] = ["All", "Workshops", "Hackathons", "Tech Talks", "Events", "Team"];

interface GalleryFilterProps {
  value: GalleryFilterOption;
  onChange: (v: GalleryFilterOption) => void;
}

export default function GalleryFilter({ value, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {OPTIONS.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="relative rounded-full px-4 py-2 text-sm font-medium"
          >
            {isActive && (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full bg-olive"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-cream" : "text-beige/70 hover:text-cream"}`}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}
