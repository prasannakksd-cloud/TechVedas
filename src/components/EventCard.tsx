import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import type { ClubEvent } from "../data/events";
import Countdown from "./Countdown";

interface EventCardProps {
  event: ClubEvent;
  onViewDetails: (event: ClubEvent) => void;
}

export default function EventCard({ event, onViewDetails }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-beige/15 bg-espresso/70 backdrop-blur-md transition-all duration-300 hover:border-gold/40"
      data-cursor-hover
    >
      <div className="relative h-44 overflow-hidden bg-espresso" data-cursor-image>
        <img
          src={event.image}
          alt=""
          className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
          onError={(e) => (e.currentTarget.style.opacity = "0")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-espresso/90 border border-gold/20 px-3 py-1 text-[11px] font-medium tracking-wide text-gold">
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-cream">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-beige/80">{event.description}</p>

        <div className="mt-4 space-y-1.5 text-xs text-beige/70">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-gold" /> {formattedDate}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-gold" /> {event.time}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold" /> {event.venue}
          </div>
        </div>

        {event.status === "upcoming" && (
          <div className="mt-4">
            <Countdown date={`${event.date}T${to24h(event.time)}`} />
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-beige/15 pt-4">
          <button
            onClick={() => onViewDetails(event)}
            className="text-sm font-semibold text-gold underline decoration-transparent underline-offset-4 transition-all duration-300 hover:decoration-gold"
          >
            View details
          </button>
          {event.registrationUrl && event.status !== "past" && (
            <a
              href={event.registrationUrl}
              className="flex items-center gap-1 rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-cream transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              Register <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Converts "5:00 PM" style time into 24-hour "17:00:00" for Date parsing. */
function to24h(time: string): string {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return "00:00:00";
  let [, h, m, meridiem] = match;
  let hour = parseInt(h, 10);
  if (meridiem.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (meridiem.toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${m}:00`;
}
