import aarambhPoster from "../assets/aarambh poster.jpeg";

export type GalleryCategory =
  | "Workshops"
  | "Hackathons"
  | "Tech Talks"
  | "Events"
  | "Team";

export interface GalleryImage {
  id: string;
  image: string;
  category: GalleryCategory;
  title: string;
  date: string;
  span?: "tall" | "wide" | "normal";
}

export const gallery: GalleryImage[] = [
  { id: "aarambh-2026", image: aarambhPoster, category: "Hackathons", title: "Aarambh 36-hour hackathon", date: "2026-10-05", span: "tall" },
  { id: "g1", image: "/assets/gallery/g1.jpg", category: "Hackathons", title: "Datathon overnight build", date: "2025-11-08", span: "tall" },
  { id: "g2", image: "/assets/gallery/g2.jpg", category: "Workshops", title: "Git workshop, hands-on session", date: "2025-09-27" },
  { id: "g3", image: "/assets/gallery/g3.jpg", category: "Tech Talks", title: "AI products at scale, Q&A", date: "2025-09-20" },
  { id: "g4", image: "/assets/gallery/g4.jpg", category: "Team", title: "Core team planning session", date: "2025-08-14", span: "wide" },
  { id: "g5", image: "/assets/gallery/g5.jpg", category: "Events", title: "Project Expo showcase floor", date: "2024-09-05" },
  { id: "g6", image: "/assets/gallery/g6.jpg", category: "Hackathons", title: "VisionHack final demos", date: "2025-01-22", span: "tall" },
  { id: "g7", image: "/assets/gallery/g7.jpg", category: "Workshops", title: "ML bootcamp, day two", date: "2024-11-30" },
  { id: "g8", image: "/assets/gallery/g8.jpg", category: "Team", title: "Design & media team at work", date: "2025-07-02" },
  { id: "g9", image: "/assets/gallery/g9.jpg", category: "Events", title: "CodeSprint leaderboard moment", date: "2025-03-14", span: "wide" },
  { id: "g10", image: "/assets/gallery/g10.jpg", category: "Tech Talks", title: "Audience during the fireside chat", date: "2025-05-11" },
];
