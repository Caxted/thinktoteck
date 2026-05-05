"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, ExternalLink, MessageCircle, X as XIcon, ArrowRight, Send } from "lucide-react";

const services = ["Web Development", "App Development", "AI Integration", "ML & Data", "Other"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-elevated)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "0.75rem",
    padding: "0.85rem 1.1rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-surface)",
        position: "relative",
      }}
    >
      {/* Background orange glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(245,166,35,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: CTA + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>GET IN TOUCH</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Have an idea?{" "}
              <span style={{ color: "var(--accent-orange)" }}>Let's build it</span>{" "}
              together.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Whether you're a startup with a bold vision or an established company looking to modernize — we'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                { icon: <Mail size={16} />, label: "hello@thinktotech.dev" },
                { icon: <Phone size={16} />, label: "+91 98765 43210" },
                { icon: <MapPin size={16} />, label: "Kerala, India · Remote Worldwide" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ color: "var(--accent-orange)" }}>{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <GitBranch size={18} />, label: "GitHub" },
                { icon: <ExternalLink size={18} />, label: "LinkedIn" },
                { icon: <MessageCircle size={18} />, label: "WhatsApp" },
                { icon: <XIcon size={18} />, label: "Twitter" },
              ].map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.1, color: "#F5A623" }}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    cursor: "none",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "1.5rem",
                padding: "2.5rem",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "3rem 1rem" }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.15)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.15)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                      SERVICE NEEDED
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.15)")}
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#1A1E27" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "0.5rem" }}>
                      YOUR PROJECT
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5A623")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(245,166,35,0.15)")}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(245,166,35,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: "var(--accent-orange)",
                      color: "#0A0B0E",
                      border: "none",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor: "none",
                    }}
                  >
                    <Send size={16} />
                    Send Message →
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        select option { background: #1A1E27; color: #F0F2F6; }
      `}</style>
    </section>
  );
}
