import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "../data/gallery";
import { useGalleryFilter } from "../hooks/useGalleryFilter";
import GalleryFilter from "./GalleryFilter";
import Lightbox from "./Lightbox";

const SPAN_CLASSES: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const { filter, setFilter, filtered } = useGalleryFilter(gallery);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-[#0B1320]/35 backdrop-blur-sm py-28 border-b border-gold/15 text-cream">
      <div className="container-edit">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold text-cream sm:text-5xl">Moments at Tech Vedas</h2>
        </div>

        <div className="mb-10">
          <GalleryFilter value={filter} onChange={setFilter} />
        </div>

        <motion.div
          layout
          className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                layout
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-xl bg-beige ${
                  SPAN_CLASSES[img.span ?? "normal"]
                }`}
                data-cursor-image
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  onError={(e) => (e.currentTarget.style.opacity = "0")}
                />
                <div className="absolute inset-0 bg-olive/0 transition-colors duration-500 group-hover:bg-olive/40" />
                <span className="absolute bottom-2 left-2 rounded-full bg-espresso/70 px-2.5 py-1 text-[10px] font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
