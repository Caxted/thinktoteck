"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/common/TestimonialCard";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            TESTIMONIALS
          </div>
          <h2 className="section-title">What Clients Say</h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            We let our work — and our clients — speak for us.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
