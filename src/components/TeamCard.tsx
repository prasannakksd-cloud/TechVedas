import type { TeamMember } from "../data/team";

interface TeamCardProps {
  member: TeamMember;
  active: boolean;
  onSelect: (member: TeamMember) => void;
}

export default function TeamCard({ member, active, onSelect }: TeamCardProps) {
  const imagePosition =
    member.id === "chinmay-suryawanshi"
      ? "center 18%"
      : member.id === "anmol-karthik"
        ? "center 24%"
        : "center center";

  return (
    <button
      onClick={() => onSelect(member)}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 ${
        active ? "bg-gold text-espresso font-semibold" : "hover:bg-beige/10 text-cream"
      }`}
      data-cursor-hover
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border text-xs font-semibold ${
          active ? "border-espresso bg-espresso text-gold" : "border-beige/25 bg-espresso/60 text-gold"
        }`}
      >
        {member.image ? (
          <img
            src={member.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          member.name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold">{member.name}</span>
        <span className={`block truncate text-xs ${active ? "text-espresso/80" : "text-beige/70"}`}>
          {member.designation}
        </span>
      </span>
    </button>
  );
}
