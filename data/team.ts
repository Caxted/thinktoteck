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
    id: "alen",
    name: "Alen C Bijoy",
    role: "Co-founder ·AI & ML Engineer ",
    skills: ["Python", "TensorFlow", "LLMs", "AWS"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Alen+C+Bijoy&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "sumesh",
    name: "Sumesh Ps",
    role: "Co-founder ·AI & ML Enginee ",
    skills: ["Python", "TensorFlow", "LLMs", "AWS"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Sumesh+Ps&background=1A1E27&color=F5A623&size=200&bold=true",
  },
  {
    id: "sreevishnu",
    name: "Sreevishnu",
    role: "Co-founder ·AI & ML Enginee",
    skills: ["Python", "TensorFlow", "LLMs", "AWS"],
    avatarUrl:
      "https://ui-avatars.com/api/?name=Sreevishnu&background=1A1E27&color=F5A623&size=200&bold=true",
  },
];
