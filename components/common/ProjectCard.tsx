"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowUpRight, Award, Clock, Users } from "lucide-react";

// ─── Featured Full-Width Card ───────────────────────────────────────────────
export function FeaturedProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(-percentY * 3);
    rotateY.set(percentX * 3);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        perspective: 800,
        borderRadius: "1.5rem",
        background: "var(--bg-elevated)",
        border: hovered ? "1px solid rgba(245,166,35,0.4)" : "1px solid var(--border-subtle)",
        boxShadow: hovered
          ? "0 0 60px rgba(245,166,35,0.12), 0 20px 80px rgba(0,0,0,0.4)"
          : "0 4px 30px rgba(0,0,0,0.3)",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
        cursor: "none",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "420px",
        }}
      >
        {/* Left: Content */}
        <div
          style={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            justifyContent: "center",
          }}
        >
          {/* Award badge */}
          {project.award && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(245,166,35,0.08)",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: "999px",
                padding: "0.35rem 0.9rem",
                width: "fit-content",
              }}
            >
              <Award size={12} color="#F5A623" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "#F5A623",
                  letterSpacing: "0.05em",
                }}
              >
                {project.award}
              </span>
            </div>
          )}

          {/* Category + Year */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {project.category.map((cat) => (
              <span key={cat} className="pill-tag">{cat}</span>
            ))}
            <span className="pill-tag pill-tag-blue">{project.year}</span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {project.shortTitle}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="pill-tag">{tag}</span>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              paddingTop: "0.5rem",
              borderTop: "1px solid rgba(245,166,35,0.08)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Clock size={12} color="var(--text-muted)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
                  TIMEFRAME
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 600 }}>
                {project.timeframe}
              </span>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Users size={12} color="var(--text-muted)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
                  CLIENT
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 600 }}>
                {project.client}
              </span>
            </div>
          </div>

          {/* Results */}
          <div
            style={{
              background: "rgba(245,166,35,0.05)",
              border: "1px solid rgba(245,166,35,0.15)",
              borderRadius: "0.75rem",
              padding: "0.75rem 1rem",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent-orange)", display: "block", marginBottom: "0.3rem" }}>
              RESULTS
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              {project.results}
            </span>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--accent-orange)",
              color: "#0A0B0E",
              border: "none",
              borderRadius: "999px",
              padding: "0.7rem 1.5rem",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "none",
              width: "fit-content",
            }}
          >
            View Project <ArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Right: Image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Image overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--bg-elevated) 0%, transparent 30%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Grid Project Card ───────────────────────────────────────────────────────
export function GridProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
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
        borderRadius: "1.25rem",
        background: "var(--bg-elevated)",
        border: hovered ? "1px solid rgba(245,166,35,0.35)" : "1px solid var(--border-subtle)",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 0 40px rgba(245,166,35,0.10), 0 10px 50px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.25)",
        cursor: "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,11,14,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--accent-orange)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            View Project <ArrowUpRight size={18} />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
          {project.category.map((cat) => (
            <span key={cat} className="pill-tag">{cat}</span>
          ))}
          <span className="pill-tag pill-tag-blue">{project.year}</span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {project.shortTitle}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            marginBottom: "1rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="pill-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
