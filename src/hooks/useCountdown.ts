import { useEffect, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isPast: boolean;
}

function diffToParts(diffMs: number): CountdownParts {
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isPast: false };
  }
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);
  return { days, hours, minutes, seconds, isLive: false, isPast: false };
}

/** Live-updating countdown to a target ISO date string. */
export function useCountdown(targetDate: string): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>(() =>
    diffToParts(new Date(targetDate).getTime() - Date.now())
  );

  useEffect(() => {
    const tick = () => setParts(diffToParts(new Date(targetDate).getTime() - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return parts;
}
