"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";

export default function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
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
        background: "var(--bg-elevated)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "1.25rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
        cursor: "none",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(245,166,35,0.1)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            padding: "3px",
            background: hovered
              ? "linear-gradient(135deg, #F5A623, #FFD580)"
              : "linear-gradient(135deg, rgba(245,166,35,0.3), rgba(245,166,35,0.05))",
            boxShadow: hovered ? "0 0 25px rgba(245,166,35,0.4)" : "none",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={member.avatarUrl}
            alt={member.name}
            style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
        {member.name}
      </h3>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent-orange)", letterSpacing: "0.05em", lineHeight: 1.5 }}>
        {member.role}
      </span>
      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", justifyContent: "center" }}>
        {member.skills.map((skill) => (
          <span key={skill} className="pill-tag" style={{ fontSize: "0.6rem" }}>{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}
