"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_LINES = [
  "> Initializing ThinkToTech...",
  "> Loading modules: [AI] [WEB] [MOBILE]",
  "> Systems online. Welcome.",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) {
      // All lines done - wait then finish
      const timeout = setTimeout(() => {
        setDone(true);
        setTimeout(onComplete, 700);
      }, 600);
      return () => clearTimeout(timeout);
    }

    const currentLine = TERMINAL_LINES[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      // Line done — move to next line after pause
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div style={{ textAlign: "left", maxWidth: "500px", width: "100%", padding: "0 2rem" }}>
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#F5A623",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Think<span style={{ color: "#F5A623" }}>To</span>
              <span style={{ color: "#F0F2F6" }}>Tech</span>
            </motion.div>

            {/* Terminal text */}
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                color: "#4E5668",
                lineHeight: 2,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              <span style={{ color: "#F5A623" }}>{displayedText}</span>
              {showCursor && (
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1.1em",
                    background: "#F5A623",
                    marginLeft: "2px",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </pre>

            {/* Progress bar */}
            <motion.div
              style={{
                marginTop: "2rem",
                height: "1px",
                background: "rgba(245,166,35,0.15)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "#F5A623",
                  borderRadius: 999,
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${((lineIndex) / TERMINAL_LINES.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
