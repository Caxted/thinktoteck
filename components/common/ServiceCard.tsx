"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { Code2, Smartphone, Brain, BarChart2, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code:        <Code2 size={24} color="#F5A623" />,
  smartphone:  <Smartphone size={24} color="#F5A623" />,
  brain:       <Brain size={24} color="#F5A623" />,
  "bar-chart": <BarChart2 size={24} color="#F5A623" />,
  lightbulb:   <Lightbulb size={24} color="#F5A623" />,
};

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "1.25rem",
        padding: "2rem",
        cursor: "none",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(245,166,35,0.08)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Orange top border slide-in */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, var(--accent-orange), transparent)",
          transformOrigin: "left",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(245,166,35,0.08)",
          border: "1px solid rgba(245,166,35,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {iconMap[service.iconType]}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--text-primary)",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {service.tags.map((tag) => (
          <span key={tag} className="pill-tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}
