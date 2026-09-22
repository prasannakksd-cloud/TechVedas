import { useMemo, useState } from "react";
import type { ClubEvent, EventCategory } from "../data/events";

export type EventFilterOption = "All" | EventCategory;

export function useEventFilter(events: ClubEvent[]) {
  const [filter, setFilter] = useState<EventFilterOption>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return events;
    return events.filter((e) => e.category === filter);
  }, [events, filter]);

  return { filter, setFilter, filtered };
}
