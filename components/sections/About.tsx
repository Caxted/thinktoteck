"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import TeamCard from "@/components/common/TeamCard";
import MarqueeTicker from "@/components/common/MarqueeTicker";

const philosophy = [
  "Ship fast, iterate faster",
  "AI-first by default",
  "Open-source contributors",
  "Always learning",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-surface)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Split Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "5rem",
          }}
        >
          {/* Left: Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: "1rem" }}>ABOUT US</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                marginBottom: "1.75rem",
              }}
            >
              Built by Builders,<br />
              <span style={{ color: "var(--accent-orange)" }}>for Builders.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              ThinkToTech was born from a simple frustration — great ideas dying because of a lack of the right technical partner. We're a tight-knit collective of developers, AI engineers, and designers based in Kerala, India, working with startups and businesses globally.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              We don't just write code. We think deeply about your problem, architect the right solution, and build it to last.
            </p>

            {/* Philosophy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {philosophy.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span style={{ color: "var(--accent-orange)", fontSize: "1rem" }}>✦</span>
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Team Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "1.5rem" }}
            >
              <div className="section-label">THE TEAM</div>
            </motion.div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {team.map((member, i) => (
                <TeamCard key={member.id} member={member} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              padding: "0.75rem 0 0 1rem",
            }}
          >
            OUR TECH STACK
          </div>
          <MarqueeTicker />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
