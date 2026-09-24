import aarambhBanner from "../assets/aarambh banner.jpeg";

export type EventCategory =
  | "Workshops"
  | "Hackathons"
  | "Tech Talks"
  | "Coding"
  | "AI/ML"
  | "Projects";

export type EventStatus = "upcoming" | "live" | "past";

export interface ClubEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string; // ISO date
  time: string;
  venue: string;
  description: string;
  image: string;
  imageDateLabel?: string;
  details?: string[];
  registrationUrl?: string;
  status: EventStatus;
}

export const events: ClubEvent[] = [
  {
    id: "neural-nights",
    title: "Neural Nights: Intro to Deep Learning",
    category: "AI/ML",
    date: "2026-10-18",
    time: "5:00 PM",
    venue: "CSE Seminar Hall, DSU",
    description:
      "A hands-on evening building your first neural network from scratch — no framework magic, just the fundamentals.",
    image: "/assets/events/neural-nights.jpg",
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "datathon-2026",
    title: "Aarambh 2026",
    category: "Hackathons",
    date: "2026-10-05",
    time: "8:30 AM onwards",
    venue: "Lecture Hall 1, Block A, SOE, DSU",
    description:
      "A 36-hour hackathon themed AI for the Next Billion.",
    image: aarambhBanner,
    imageDateLabel: "5th & 6th October 2026",
    details: [
      "36-hour hackathon",
      "Theme: AI for the Next Billion",
      "Prize pool: Rs 55,000 including goodies",
      "Team size: 3",
      "Round 1: Idea submission, fee Rs 100",
      "Round 2: Hackathon, fee Rs 500 per team",
      "Convener: Dr. Poonmogi, Professor & Chairperson, CSE (AI & DS)",
      "Faculty coordinators: Dr. Aditya Pai and Mr. Rishav Barnwal",
      "Student coordinators: Shivam Kumar Mehta and Mohit Deodhar",
    ],
    registrationUrl: "#",
    status: "upcoming",
  },
  {
    id: "founders-talk",
    title: "Tech Talk: Building AI Products at Scale",
    category: "Tech Talks",
    date: "2026-09-20",
    time: "3:30 PM",
    venue: "Auditorium, DSU",
    description:
      "An industry engineer walks through what changes when an AI prototype has to serve real users.",
    image: "/assets/events/tech-talk.jpg",
    status: "upcoming",
  },
  {
    id: "codesprint-24",
    title: "CodeSprint '25",
    category: "Coding",
    date: "2025-03-14",
    time: "10:00 AM",
    venue: "CSE Seminar Hall, DSU",
    description:
      "A timed competitive programming sprint across three difficulty tiers, capped with a live leaderboard.",
    image: "/assets/events/codesprint.jpg",
    status: "past",
  },
  {
    id: "ml-bootcamp",
    title: "Machine Learning Bootcamp",
    category: "AI/ML",
    date: "2024-11-30",
    time: "10:00 AM",
    venue: "Room 204, CSE Block",
    description:
      "A three-day bootcamp covering regression to ensemble methods, ending in a mini project showcase.",
    image: "/assets/events/ml-bootcamp.jpg",
    status: "past",
  },
  {
    id: "project-expo",
    title: "Tech Vedas Project Expo",
    category: "Projects",
    date: "2024-09-05",
    time: "1:00 PM",
    venue: "DSU Innovation Lab",
    description:
      "Members showcased semester-long builds spanning web apps, ML models and embedded projects.",
    image: "/assets/events/project-expo.jpg",
    status: "past",
  },
];
