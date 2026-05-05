"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const HERO_WORDS = ["We Think.", "We Build.", "We Solve."];

const stats = [
  { value: "12+", label: "Projects\nDelivered" },
  { value: "8",   label: "Services\nOffered" },
  { value: "5",   label: "Team\nMembers" },
  { value: "100%",label: "Client\nSatisfaction" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blob1X = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const blob1Y = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const blob2X = useSpring(useMotionValue(0), { stiffness: 25, damping: 20 });
  const blob2Y = useSpring(useMotionValue(0), { stiffness: 25, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const blobParallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(((e.clientX - cx) / cx) * 20);
      mouseY.set(((e.clientY - cy) / cy) * 20);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "var(--bg-primary)",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 1: SVG Circuit Grid ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5A623" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="2" fill="#F5A623" />
              <circle cx="30" cy="30" r="1.5" fill="#F5A623" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* ── Layer 2: Gradient Blobs ───────────────────────────────── */}
      <motion.div style={{ y: blobParallaxY, position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {/* Orange blob — top right */}
        <motion.div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.09) 0%, transparent 70%)",
            x: blob1X,
            y: blob1Y,
            filter: "blur(40px)",
          }}
        />
        {/* Blue blob — bottom left */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,127,165,0.07) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>

      {/* ── Layer 3: Hero Content ─────────────────────────────────── */}
      <motion.div
        style={{ y: heroTextY, position: "relative", zIndex: 2, padding: "0 2rem" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingTop: "8rem", paddingBottom: "2rem" }}>
          {/* Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "var(--accent-orange)",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--accent-orange)" }} />
            FREELANCE TECH COLLECTIVE — EST. 2023
          </motion.div>

          {/* Headline — per-word stagger */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              color: "var(--text-primary)",
            }}
          >
            {HERO_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 1.2 + i * 0.12, ease: "easeOut" }}
                style={{ display: "block" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-secondary)",
              maxWidth: "540px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            ThinkToTech is a collective of engineers, designers, and AI specialists turning bold ideas into real products.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <button className="btn-primary" onClick={scrollToWork}>
              View Our Work <ChevronDown size={16} />
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Talk to Us <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              cursor: "none",
            }}
            onClick={scrollToWork}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={20} color="var(--accent-orange)" />
            </motion.div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
              }}
            >
              SCROLL
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Stats Bar ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid var(--border-subtle)",
          background: "rgba(17,19,24,0.6)",
          backdropFilter: "blur(12px)",
          padding: "1.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                borderRight: i < 3 ? "1px solid var(--border-subtle)" : "none",
                padding: "0.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "var(--accent-orange)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  marginTop: "0.4rem",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
