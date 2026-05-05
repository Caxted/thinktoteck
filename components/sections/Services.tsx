"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/common/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
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
          style={{ marginBottom: "3.5rem", maxWidth: "600px" }}
        >
          <div className="section-label" style={{ marginBottom: "1rem" }}>SERVICES</div>
          <h2 className="section-title">What We Do Best</h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginTop: "1rem",
            }}
          >
            From concept to production — we cover the full tech stack so you don't have to juggle multiple vendors.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
