export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "ravi",
    quote:
      "ThinkToTech built our entire SaaS MVP in under 6 weeks. The AI integration was miles ahead of what we expected.",
    author: "Ravi Kumar",
    role: "Founder",
    company: "AgriFlow AI",
    stars: 5,
  },
  {
    id: "sarah",
    quote:
      "Their Flutter app was pixel-perfect and shipped on time. The Firebase backend they set up still runs flawlessly.",
    author: "Sarah Thompson",
    role: "CTO",
    company: "QuickServe",
    stars: 5,
  },
  {
    id: "arjun",
    quote:
      "The ML model they delivered cut our processing errors by 30%. These guys genuinely understand the problem before coding.",
    author: "Arjun Menon",
    role: "Data Lead",
    company: "FinBridge",
    stars: 5,
  },
];
