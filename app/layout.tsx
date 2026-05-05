import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "ThinkToTech — Freelance Tech Collective | Think. Build. Solve.",
  description:
    "ThinkToTech is a collective of engineers, designers, and AI specialists turning bold ideas into real products. Web development, mobile apps, AI integration, and ML solutions.",
  keywords: [
    "freelance tech collective",
    "web development",
    "app development",
    "AI integration",
    "machine learning",
    "Kerala India",
    "ThinkToTech",
  ],
  authors: [{ name: "ThinkToTech" }],
  openGraph: {
    title: "ThinkToTech — Think. Build. Solve.",
    description:
      "A collective of engineers, designers, and AI specialists turning bold ideas into real products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkToTech — Think. Build. Solve.",
    description: "A collective turning bold ideas into real products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
