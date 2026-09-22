import { Mail } from "lucide-react";
import Logo from "./Logo";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-[#060B12]/45 backdrop-blur-sm py-16 text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-olive/20 blur-3xl"
      />
      <div className="container-edit relative flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo height={40} />
          <p className="mt-4 max-w-xs text-sm text-beige/70">
            CSE (Artificial Intelligence &amp; Data Science)
            <br />
            Dayananda Sagar University
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-beige/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/techvedas_dsu?utm_source=qr&stkn=MTA0a3pxNzQ4dWVzMA==" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-beige/70 hover:text-gold">
            <InstagramIcon size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-beige/70 hover:text-gold">
            <LinkedinIcon size={18} />
          </a>
          <a href="#" aria-label="GitHub" className="text-beige/70 hover:text-gold">
            <GithubIcon size={18} />
          </a>
          <a href="mailto:techvedas@dsu.edu.in" aria-label="Email" className="text-beige/70 hover:text-gold">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="container-edit relative mt-12 text-xs text-beige/40">
        © 2026 Tech Vedas. All rights reserved.
      </p>
    </footer>
  );
}
