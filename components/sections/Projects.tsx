"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FeaturedProjectCard, GridProjectCard } from "@/components/common/ProjectCard";

const FILTERS = ["All", "Web", "App", "AI", "ML"] as const;
type Filter = typeof FILTERS[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const featured = projects.find((p) => p.featured)!;
  const gridProjects = projects
    .filter((p) => !p.featured)
    .filter((p) =>
      activeFilter === "All"
        ? true
        : p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()))
    );

  return (
    <section
      id="work"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-surface)",
        position: "relative",
      }}
    >
      {/* Top diagonal clip */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "80px",
        background: "var(--bg-primary)",
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Label + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <div className="section-label" style={{ marginBottom: "1rem" }}>SELECTED WORK</div>
          <h2 className="section-title">Our Projects</h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                padding: "0.45rem 1.1rem",
                borderRadius: "999px",
                border: activeFilter === f
                  ? "1px solid var(--accent-orange)"
                  : "1px solid rgba(245,166,35,0.15)",
                background: activeFilter === f ? "var(--accent-orange)" : "transparent",
                color: activeFilter === f ? "#0A0B0E" : "var(--text-secondary)",
                cursor: "none",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "2rem" }}
        >
          <FeaturedProjectCard project={featured} />
        </motion.div>

        {/* 2-column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {gridProjects.map((p, i) => (
            <GridProjectCard key={p.id} project={p} delay={i * 0.08} />
          ))}
          {gridProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "3rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
              }}
            >
              No projects match this filter yet.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
