"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "1.25rem",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      {/* Large quote mark */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "16px",
          fontFamily: "Georgia, serif",
          fontSize: "8rem",
          color: "var(--accent-orange)",
          opacity: 0.12,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        "
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <span key={i} style={{ color: "#F5A623", fontSize: "0.9rem" }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
        }}
      >
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div style={{ borderTop: "1px solid rgba(245,166,35,0.08)", paddingTop: "1rem" }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
          {testimonial.author}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent-orange)", letterSpacing: "0.05em", marginTop: "0.2rem" }}>
          {testimonial.role} @ {testimonial.company}
        </div>
      </div>
    </motion.div>
  );
}
