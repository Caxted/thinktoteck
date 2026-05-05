"use client";

const TECH_STACK = [
  "Flutter", "Firebase", "React", "Next.js", "Python",
  "TensorFlow", "OpenAI", "Gemini", "Claude API", "AWS",
  "n8n", "Figma", "Supabase", "Vercel", "Kotlin", "FastAPI",
];

export default function MarqueeTicker() {
  const items = [...TECH_STACK, ...TECH_STACK]; // duplicate for seamless loop

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
        padding: "1.5rem 0",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to right, var(--bg-primary), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "120px",
          background: "linear-gradient(to left, var(--bg-primary), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: "3rem",
          width: "max-content",
        }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: i % 3 === 0 ? "var(--accent-orange)" : "var(--text-muted)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
            >
              {tech}
            </span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--text-muted)",
                opacity: 0.4,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
