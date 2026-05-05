export type TeamMember = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  avatarUrl: string;
};

export const team: TeamMember[] = [
  {
    id: "sangeeth",
    name: "Sangeeth",
    role: "Founder · Full-Stack & AI Engineer",
    skills: ["Flutter", "Next.js", "AI APIs", "n8n"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Sangeeth&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "alex",
    name: "Alex Mathew",
    role: "Mobile Developer",
    skills: ["Flutter", "Firebase", "Kotlin"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Alex+Mathew&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "priya",
    name: "Priya Nair",
    role: "AI/ML Engineer",
    skills: ["Python", "TensorFlow", "LLMs", "AWS"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Priya+Nair&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "rohan",
    name: "Rohan Das",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Rohan+Das&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "anjali",
    name: "Anjali Menon",
    role: "UI/UX Designer",
    skills: ["Figma", "Prototyping", "Design Systems"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Anjali+Menon&background=1A1E27&color=F5A623&size=200&bold=true",
  },
];
