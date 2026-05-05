export type Service = {
  id: string;
  title: string;
  iconType: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    iconType: "code",
    description:
      "We craft blazing-fast, responsive web applications using React, Next.js, and modern stacks. From landing pages to full-scale SaaS platforms.",
    tags: ["React", "Next.js", "Node.js", "Tailwind"],
  },
  {
    id: "app",
    title: "App Development",
    iconType: "smartphone",
    description:
      "Native-quality mobile apps built with Flutter for both iOS and Android. Smooth, beautiful, and production-ready.",
    tags: ["Flutter", "Firebase", "Kotlin", "Dart"],
  },
  {
    id: "ai",
    title: "AI Integration",
    iconType: "brain",
    description:
      "We embed intelligence into products — chatbots, recommendation engines, document AI, and custom LLM pipelines using OpenAI, Gemini, and Claude APIs.",
    tags: ["OpenAI", "Gemini", "Claude", "Sarvam AI"],
  },
  {
    id: "ml",
    title: "ML & Data",
    iconType: "bar-chart",
    description:
      "End-to-end machine learning solutions from data prep to model deployment. Predictive analytics, classification, and NLP pipelines.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "AWS SageMaker"],
  },
  {
    id: "consulting",
    title: "Problem Solving",
    iconType: "lightbulb",
    description:
      "Custom automation, n8n workflow pipelines, system architecture design, and technical consulting for startups and product teams.",
    tags: ["n8n", "System Design", "APIs", "Automation"],
  },
];
