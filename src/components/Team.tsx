import { useMemo, useState } from "react";
import { team } from "../data/team";
import TeamCard from "./TeamCard";
import TeamSelector from "./TeamSelector";

const GROUP_ORDER = [
  "Faculty",
  "Core",
  "Technical",
  "Events",
  "Web",
  "Content",
  "Outreach & PR",
  "Design & Media",
  "Photography & Videography",
] as const;

export default function Team() {
  const [featured, setFeatured] = useState(team[0]);

  const groups = useMemo(() => {
    return GROUP_ORDER.map((groupName) => ({
      name: groupName,
      members: team.filter((m) => m.team === groupName),
    })).filter((g) => g.members.length > 0);
  }, []);

  return (
    <section id="team" className="relative bg-[#0B1320]/35 backdrop-blur-sm py-28 border-b border-gold/15 text-cream">
      <div className="container-edit">
        <h2 className="mb-16 text-center font-display text-4xl font-semibold text-cream sm:text-5xl">Team</h2>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <TeamSelector member={featured} />

          <div className="max-h-[520px] space-y-6 overflow-y-auto pr-1">
            {groups.map((group) => (
              <div key={group.name}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold/80">
                  {group.name === "Faculty" ? "Faculty Advisor" : `${group.name} Team`}
                </p>
                <div className="space-y-1">
                  {group.members.map((member) => (
                    <TeamCard
                      key={member.id}
                      member={member}
                      active={featured.id === member.id}
                      onSelect={setFeatured}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
