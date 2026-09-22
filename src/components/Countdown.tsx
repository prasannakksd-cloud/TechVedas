import { useCountdown } from "../hooks/useCountdown";

interface CountdownProps {
  date: string;
}

export default function Countdown({ date }: CountdownProps) {
  const { days, hours, minutes, seconds, isLive } = useCountdown(date);

  if (isLive) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold tracking-wide text-cream">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cream" />
        LIVE NOW
      </span>
    );
  }

  const units = [
    { label: "D", value: days },
    { label: "H", value: hours },
    { label: "M", value: minutes },
    { label: "S", value: seconds },
  ];

  return (
    <div className="flex items-center gap-2 text-espresso">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brown/60">
        Starts in
      </span>
      <div className="flex gap-1.5 font-display text-sm">
        {units.map((u) => (
          <span key={u.label} className="rounded-md bg-beige px-1.5 py-0.5">
            {String(u.value).padStart(2, "0")}
            <span className="text-[9px] text-brown/60">{u.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
