import { BookOpen, Hammer, Sparkles } from "lucide-react";
import ValueCard from "./ValueCard";

const VALUES = [
  {
    index: "01",
    title: "Learn",
    description: "Workshops and peer sessions that turn curiosity about AI and data into working knowledge.",
    Icon: BookOpen,
  },
  {
    index: "02",
    title: "Build",
    description: "Hands-on projects and hackathons where members ship real, working software together.",
    Icon: Hammer,
  },
  {
    index: "03",
    title: "Innovate",
    description: "Space to experiment with emerging tools and turn ideas into solutions worth sharing.",
    Icon: Sparkles,
  },
];

export default function Values() {
  return (
    <section className="relative bg-[#0B1320]/30 backdrop-blur-sm pb-28 border-b border-gold/15">
      <div className="container-edit grid gap-6 sm:grid-cols-3">
        {VALUES.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </section>
  );
}
