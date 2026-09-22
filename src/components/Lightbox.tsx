import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../data/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index];
  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-espresso/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 text-cream/80 hover:text-cream"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="absolute left-3 text-cream/70 hover:text-gold sm:left-8"
      >
        <ChevronLeft size={32} />
      </button>

      <motion.div
        key={image.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-3xl"
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[70vh] w-full rounded-lg object-contain"
          onError={(e) => (e.currentTarget.style.opacity = "0.2")}
        />
        <div className="mt-4 text-center text-cream/80">
          <p className="font-medium">{image.title}</p>
          <p className="text-xs uppercase tracking-wide text-gold/80">{image.category}</p>
        </div>
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="absolute right-3 text-cream/70 hover:text-gold sm:right-8"
      >
        <ChevronRight size={32} />
      </button>
    </motion.div>
  );
}
