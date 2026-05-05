"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#work",         label: "Work" },
  { href: "#services",     label: "Services" },
  { href: "#about",        label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem 2rem",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10, 11, 14, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(245,166,35,0.08)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.3rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "#F0F2F6" }}>Think</span>
              <span style={{ color: "#F5A623" }}>To</span>
              <span style={{ color: "#F0F2F6" }}>Tech</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div
            className="nav-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="nav-link"
                onClick={() => handleNavClick(link.href)}
                style={{ background: "none", border: "none" }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}
              onClick={() => handleNavClick("#contact")}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#F0F2F6",
              cursor: "pointer",
            }}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 85vw)",
              background: "var(--bg-elevated)",
              borderLeft: "1px solid var(--border-subtle)",
              zIndex: 1001,
              padding: "5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                color: "#F0F2F6",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#F0F2F6",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textAlign: "left",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(245,166,35,0.08)",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="btn-primary"
              style={{ marginTop: "1.5rem" }}
              onClick={() => handleNavClick("#contact")}
            >
              Let's Talk →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
