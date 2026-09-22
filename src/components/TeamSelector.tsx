import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";
import type { TeamMember } from "../data/team";

interface TeamSelectorProps {
  member: TeamMember;
}

export default function TeamSelector({ member }: TeamSelectorProps) {
  const imagePosition =
    member.id === "chinmay-suryawanshi"
      ? "center 18%"
      : member.id === "anmol-karthik"
        ? "center 24%"
        : "center center";

  return (
    <div className="relative h-full min-h-[520px] overflow-hidden rounded-3xl border border-gold/20 bg-espresso/80 text-cream backdrop-blur-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={member.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full flex-col justify-center p-8 sm:p-10"
        >
          <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-brown font-display text-3xl">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
                style={{ objectPosition: imagePosition }}
              />
            ) : (
              member.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
            )}
          </div>

          <h3 className="font-display text-4xl">{member.name}</h3>
          <p className="mt-1 text-gold">
            {member.designation}
            {member.year ? ` · ${member.year}` : ""}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-beige/80">{member.intro}</p>

          <div className="mt-6 flex gap-4">
            {member.socialLinks?.linkedin && (
              <a href={member.socialLinks.linkedin} aria-label="LinkedIn" className="text-beige/70 hover:text-gold">
                <LinkedinIcon size={18} />
              </a>
            )}
            {member.socialLinks?.github && (
              <a href={member.socialLinks.github} aria-label="GitHub" className="text-beige/70 hover:text-gold">
                <GithubIcon size={18} />
              </a>
            )}
            {member.socialLinks?.instagram && (
              <a href={member.socialLinks.instagram} aria-label="Instagram" className="text-beige/70 hover:text-gold">
                <InstagramIcon size={18} />
              </a>
            )}
            {member.socialLinks?.email && (
              <a href={`mailto:${member.socialLinks.email}`} aria-label="Email" className="text-beige/70 hover:text-gold">
                <Mail size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}