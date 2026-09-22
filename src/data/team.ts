export interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  year?: string;
  team:
    | "Faculty"
    | "Core"
    | "Technical"
    | "Events"
    | "Web"
    | "Content"
    | "Outreach & PR"
    | "Design & Media"
    | "Photography & Videography";
  image?: string;
  intro: string;
  socialLinks?: SocialLinks;
}

export const team: TeamMember[] = [
  {
    id: "rishav-barnwal",
    name: "Rishav Barnwal",
    designation: "Faculty Advisor, Club Lead and Head (Prof.)",
    team: "Faculty",
    image: "/assets/team/rishav.jpeg",
    intro: "Guides Tech Vedas' direction and mentors the core team on every major initiative.",
  },
  {
    id: "shivam-mehta",
    name: "Shivam Kumar Mehta",
    designation: "President",
    year: "3rd Year",
    team: "Core",
    image: "/assets/team/shivam.jpeg",
    intro: "Sets the club's roadmap and represents Tech Vedas across the university.",
  },
  {
    id: "mohit-deokar",
    name: "Mohit Deokar",
    designation: "Vice President",
    year: "3rd Year",
    team: "Core",
    image: "/assets/team/mohit.jpeg",
    intro: "Coordinates across teams to keep every initiative moving in step.",
  },
  {
    id: "anmol-karthik",
    name: "Anmol Karthik",
    designation: "Secretary",
    year: "3rd Year",
    team: "Core",
    image: "/assets/team/anmol.jpeg",
    intro: "Keeps the club's records, communication and planning organised.",
  },
  {
    id: "krishabh-mahajan",
    name: "Krishabh Mahajan",
    designation: "Vice Secretary",
    year: "3rd Year",
    team: "Core",
    image: "/assets/team/krishab.jpeg",
    intro: "Supports day-to-day coordination and documentation for the club.",
  },
  {
    id: "sahana-bhoge",
    name: "Sahana Bhoge",
    designation: "Treasurer",
    year: "2nd Year",
    team: "Core",
    image: "/assets/team/sahana.jpeg",
    intro: "Manages the club's finances and event budgeting.",
  },
  {
    id: "aishwarya-a",
    name: "Aishwarya A",
    designation: "Vice Treasurer",
    year: "2nd Year",
    team: "Core",
    image: "/assets/team/aishwarya.jpeg",
    intro: "Assists with budgeting and financial planning for club activities.",
  },
  {
    id: "archismaan-kashyap",
    name: "Archismaan Kashyap",
    designation: "Technical Lead",
    year: "2nd Year",
    team: "Technical",
    image: "/assets/team/archisman.jpeg",
    intro: "Leads the technical direction for club projects, workshops and hackathons.",
  },
  {
    id: "prasanna-k",
    name: "Prasanna K",
    designation: "Co-Technical Lead",
    year: "2nd Year",
    team: "Technical",
    image: "/assets/team/Prasanna.jpeg",
    intro: "Works alongside the technical lead on the club's builds, tooling and technical events.",
  },
  {
    id: "chinmay-suryawanshi",
    name: "Chinmay Suryawanshi",
    designation: "Events Team",
    year: "3rd Year",
    team: "Events",
    image: "/assets/team/chinmay.jpeg",
    intro: "Plans and runs Tech Vedas events from concept to execution.",
  },
  {
    id: "aayush-gupta",
    name: "Aayush Gupta",
    designation: "Events Team",
    year: "2nd Year",
    team: "Events",
    image: "/assets/team/aayush.jpeg",
    intro: "Helps coordinate logistics and on-ground execution for events.",
  },
  {
    id: "dilip-s",
    name: "Dilip S",
    designation: "Web Team",
    year: "2nd Year",
    team: "Web",
    image: "/assets/team/dilip.jpeg",
    intro: "Builds and maintains the club's web presence.",
  },
  {
    id: "anjum-sharwar",
    name: "Anjum Sharwar",
    designation: "Content Team",
    year: "2nd Year",
    team: "Content",
    image: "/assets/team/anjum.jpeg",
    intro: "Writes and shapes the club's voice across posts and announcements.",
  },
  {
    id: "sushant",
    name: "Sushant",
    designation: "Content Team",
    year: "2nd Year",
    team: "Content",
    image: "/assets/team/sushanth.jpeg",
    intro: "Contributes to content planning and copy for club communications.",
  },
  {
    id: "anusha-m",
    name: "Anusha M",
    designation: "Outreach & PR",
    year: "2nd Year",
    team: "Outreach & PR",
    image: "/assets/team/anusha.jpeg",
    intro: "Builds relationships with sponsors, partners and the wider student community.",
  },
  {
    id: "suma-k",
    name: "Suma K",
    designation: "Outreach & PR",
    year: "2nd Year",
    team: "Outreach & PR",
    intro: "Manages outreach efforts and external communication.",
  },
  {
    id: "thrishika-s",
    name: "Thrishika S",
    designation: "Design & Media",
    year: "2nd Year",
    team: "Design & Media",
    image: "/assets/team/thrishika.jpeg",
    intro: "Shapes the visual identity behind Tech Vedas events and posts.",
  },
  {
    id: "suhasini",
    name: "Suhasini",
    designation: "Design & Media",
    year: "2nd Year",
    team: "Design & Media",
    image: "/assets/team/suhasini.jpeg",
    intro: "Designs visuals and creative assets for the club.",
  },
  {
    id: "darshan-gv",
    name: "Darshan G.V",
    designation: "Photography & Videography",
    year: "3rd Year",
    team: "Photography & Videography",
    image: "/assets/team/darshan.jpeg",
    intro: "Captures the moments that make up the Tech Vedas story.",
  },
  {
    id: "nakshatra-g",
    name: "Nakshatra G",
    designation: "Photography & Videography",
    year: "2nd Year",
    team: "Photography & Videography",
    image: "/assets/team/nakshatra.jpeg",
    intro: "Documents events and workshops through photo and video.",
  },
];
