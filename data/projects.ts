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
    title: "CowTrack – Smart Cattle Monitoring System",
    shortTitle: "CowTrack",
    category: ["Web", "AI"],
    year: 2024,
    tags: ["Python", "AI", "IoT", "Dashboard"],
    client: "SIMAT Research Lab",
    award: "🏆 Best Project Award — ASTHRA'26",
    description:
      "CowTrack is an AI and IoT-based solution that monitors dairy cattle health in real time using a wearable smart collar. It tracks vital signs like temperature and heart rate, detects diseases early with machine learning, and provides alerts through a mobile app. The system helps farmers improve productivity, reduce losses, and manage livestock efficiently.",
    platform: "Web Dashboard + Mobile App",
    timeframe: "5 months",
    results: "40% reduction in manual monitoring time. 98% health alert accuracy.",
    accentColor: "#F5A623",
    imageUrl: "/cowtrack.png",
    featured: true,
  },
  {
    id: "underwater-ai",
    title: "AI-Based Underwater Species Detection System",
    shortTitle: "Underwater AI",
    category: ["AI", "Computer Vision"],
    year: 2025,
    tags: ["YOLOv8", "Python", "Marine Biology", "Real-time"],
    client: "Research Organization",
    description:
      "This system uses AI and computer vision to detect and classify underwater species in real time. Built on YOLOv8, it handles challenges like low visibility and color distortion while improving accuracy and efficiency. It helps researchers monitor marine biodiversity, automate species counting, and support better conservation decisions.",
    platform: "Desktop & Web",
    timeframe: "4 months",
    results: "High accuracy in low visibility conditions.",
    accentColor: "#4A7FA5",
    imageUrl: "/underwater.png",
    featured: false,
  },
  {
    id: "fake-wifi",
    title: "Fake WiFi Detection App",
    shortTitle: "Fake WiFi Detector",
    category: ["App", "Security"],
    year: 2025,
    tags: ["Flutter", "Dart", "Cybersecurity", "Network Analysis"],
    client: "Open Source",
    description:
      "A Flutter-based mobile application designed to identify and warn users about fake or insecure WiFi networks. The app analyzes network parameters and security indicators to detect suspicious hotspots in real time, helping users avoid potential cyber threats and ensuring safer internet connectivity.",
    platform: "Android & iOS",
    timeframe: "3 months",
    results: "Real-time threat detection with 95%+ accuracy.",
    accentColor: "#F5A623",
    imageUrl: "/wifi.jpg",
    featured: false,
  },
  {
    id: "securesight-ai",
    title: "SecureSight AI",
    shortTitle: "SecureSight AI",
    category: ["AI", "Computer Vision"],
    year: 2025,
    tags: ["Python", "Computer Vision", "Real-time", "Security"],
    client: "Internal Product",
    description:
      "An AI-powered surveillance system that analyzes CCTV footage in real time to detect human activity, identify anomalies, and enhance security with instant alerts and actionable insights.",
    platform: "Web Dashboard",
    timeframe: "3 months",
    results: "Real-time anomaly detection with high accuracy.",
    accentColor: "#4A7FA5",
    imageUrl: "/securesight.jpg",
    featured: false,
  },
];
