"use client";

import { GitBranch, ExternalLink, MessageCircle, X as XIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "3rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/logo.png"
                alt="ThinkToTech Logo"
                style={{ height: "40px", width: "auto" }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
                marginTop: "0.4rem",
              }}
            >
              THINK • BUILD • SOLVE
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {["Work", "Services", "About", "Contact"].map((link) => (
              <button
                key={link}
                className="nav-link"
                onClick={() =>
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                }
                style={{ background: "none", border: "none", fontSize: "0.85rem" }}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: <GitBranch size={16} />, label: "GitHub" },
              { icon: <ExternalLink size={16} />, label: "LinkedIn" },
              { icon: <MessageCircle size={16} />, label: "WhatsApp" },
              { icon: <XIcon size={16} />, label: "Twitter" },
            ].map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  cursor: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#F5A623";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,166,35,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)";
                }}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, var(--accent-orange), transparent)",
            opacity: 0.2,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            © 2024 ThinkToTech. All rights reserved. Built with ♥ in Kerala, India.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              letterSpacing: "0.05em",
            }}
          >
            thinktotechdev@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
