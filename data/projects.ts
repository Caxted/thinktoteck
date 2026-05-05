export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string[];
  year: number;
  tags: string[];
  client: string;
  award?: string;
  description: string;
  platform: string;
  timeframe: string;
  results: string;
  accentColor: string;
  imageUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "cowtrack",
    title: "Cowtrack — Smart Dairy Farm Management System",
    shortTitle: "Cowtrack",
    category: ["Web", "AI"],
    year: 2024,
    tags: ["Python", "AI", "IoT", "Dashboard"],
    client: "SIMAT Research Lab",
    award: "🏆 Best Project Award — ASTHRA'26",
    description:
      "An AI-powered livestock management platform that monitors cow health, milk yield, feeding cycles, and farm analytics in real time using IoT sensors and a predictive ML model. Farmers get smart alerts, herd performance dashboards, and automated report generation.",
    platform: "Web Dashboard + Mobile App",
    timeframe: "5 months",
    results: "40% reduction in manual monitoring time. 98% health alert accuracy.",
    accentColor: "#F5A623",
    imageUrl: "https://picsum.photos/seed/cowtrack/800/600",
    featured: true,
  },
  {
    id: "faultline",
    title: "Fault Line — AI Decision Intelligence System",
    shortTitle: "Fault Line",
    category: ["AI", "ML"],
    year: 2024,
    tags: ["Multi-Agent AI", "LLM", "Python", "n8n"],
    client: "Internal Product",
    description:
      "A multi-agent AI system that ingests complex business scenarios, breaks them into sub-problems, assigns specialized AI agents, and synthesizes a final decision report with confidence scores and risk flags.",
    platform: "Web App",
    timeframe: "3 months",
    results: "Reduced decision cycle time by 65% in pilot testing.",
    accentColor: "#4A7FA5",
    imageUrl: "https://picsum.photos/seed/faultline/800/600",
    featured: false,
  },
  {
    id: "wifiguard",
    title: "WiFi Guard — Suspicious Network Detector",
    shortTitle: "WiFi Guard",
    category: ["App"],
    year: 2025,
    tags: ["Flutter", "Kotlin", "Firebase", "Cybersecurity"],
    client: "Open Source",
    description:
      "A real-time Android app that detects Evil Twin attacks, rogue access points, and suspicious WiFi networks. Uses signal pattern analysis, BSSID fingerprinting, and network history logging to alert users of threats instantly.",
    platform: "Android App",
    timeframe: "2 months",
    results: "Successfully detected 100% of simulated Evil Twin attacks in testing.",
    accentColor: "#4A7FA5",
    imageUrl: "https://picsum.photos/seed/wifiguard/800/600",
    featured: false,
  },
  {
    id: "storybot",
    title: "StoryBot — Telegram AI Storytelling Bot",
    shortTitle: "StoryBot",
    category: ["AI"],
    year: 2024,
    tags: ["Telegram API", "OpenAI", "Python", "Sarvam AI"],
    client: "Consumer Product",
    description:
      "An interactive Telegram bot that co-writes personalized stories with users using GPT-4, supporting genre selection, character naming, plot twists on demand, and multi-language output including Malayalam via Sarvam AI integration.",
    platform: "Telegram Bot",
    timeframe: "6 weeks",
    results: "500+ stories generated. 4.8/5 user rating in beta group.",
    accentColor: "#F5A623",
    imageUrl: "https://picsum.photos/seed/storybot/800/600",
    featured: false,
  },
  {
    id: "loanguard",
    title: "LoanGuard — ML Loan Default Predictor",
    shortTitle: "LoanGuard",
    category: ["ML"],
    year: 2025,
    tags: ["Python", "Scikit-learn", "React", "AWS"],
    client: "FinTech Startup (NDA)",
    description:
      "A machine learning pipeline that predicts loan default probability using applicant financial history, credit behavior, and employment patterns. Features an interactive dashboard for risk officers with explainability overlays.",
    platform: "Web Dashboard",
    timeframe: "2.5 months",
    results: "91.3% prediction accuracy. Reduced bad loan approvals by 28%.",
    accentColor: "#4A7FA5",
    imageUrl: "https://picsum.photos/seed/loanguard/800/600",
    featured: false,
  },
];
