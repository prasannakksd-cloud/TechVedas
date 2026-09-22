import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import type { ClubEvent } from "../data/events";
import Countdown from "./Countdown";

interface EventDetailsProps {
  event: ClubEvent;
  onClose: () => void;
}

export default function EventDetails({ event, onClose }: EventDetailsProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-cream"
      >
        <div className="relative h-52 bg-beige">
          <img
            src={event.image}
            alt=""
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.opacity = "0")}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-espresso/70 p-2 text-cream"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-7">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            {event.category}
          </span>
          <h3 className="mt-2 font-display text-3xl text-espresso">{event.title}</h3>
          <p className="mt-4 leading-relaxed text-brown/80">{event.description}</p>

          <div className="mt-6 space-y-2 text-sm text-brown/70">
            <div className="flex items-center gap-2">
              <Calendar size={15} /> {event.imageDateLabel ?? formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} /> {event.time}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} /> {event.venue}
            </div>
          </div>

          {event.details && (
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {event.details.map((detail) => (
                <div
                  key={detail}
                  className="border border-terracotta/15 bg-beige/25 px-3 py-2 text-xs leading-relaxed text-brown/80"
                >
                  {detail}
                </div>
              ))}
            </div>
          )}

          {event.status === "upcoming" && (
            <div className="mt-6">
              <Countdown date={event.date} />
            </div>
          )}

          {event.registrationUrl && event.status !== "past" && (
            <a
              href={event.registrationUrl}
              className="mt-7 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream"
            >
              Register now
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
