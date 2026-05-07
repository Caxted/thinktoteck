import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, Clock, Users, Award, MonitorSmartphone } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "120px", paddingBottom: "80px", background: "var(--bg-surface)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}>
          
          <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", textDecoration: "none", marginBottom: "2rem", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {project.award && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)", borderRadius: "999px", padding: "0.4rem 1rem", width: "fit-content", marginBottom: "1.5rem" }}>
              <Award size={14} color="#F5A623" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#F5A623" }}>{project.award}</span>
            </div>
          )}

          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {project.title}
          </h1>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {project.category.map(cat => <span key={cat} className="pill-tag">{cat}</span>)}
            <span className="pill-tag pill-tag-blue">{project.year}</span>
          </div>

          <div style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "21/9", borderRadius: "1.5rem", overflow: "hidden", marginBottom: "4rem", border: "1px solid var(--border-subtle)" }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
            <div style={{ flex: "1 1 min(100%, 500px)" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.2rem", color: "var(--text-primary)" }}>About the Project</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                {project.description}
              </p>

              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.2rem", color: "var(--text-primary)", marginTop: "1rem" }}>Technologies Used</h2>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {project.tags.map(tag => <span key={tag} className="pill-tag" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}>{tag}</span>)}
              </div>
            </div>

            <div style={{ flex: "1 1 min(100%, 300px)" }}>
              <div style={{ background: "var(--bg-elevated)", padding: "2rem", borderRadius: "1.5rem", border: "1px solid var(--border-subtle)" }}>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <Users size={16} color="var(--text-muted)" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Client</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--text-primary)" }}>{project.client}</div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <Clock size={16} color="var(--text-muted)" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Timeframe</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--text-primary)" }}>{project.timeframe}</div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <MonitorSmartphone size={16} color="var(--text-muted)" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Platform</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--text-primary)" }}>{project.platform}</div>
                </div>

                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(245,166,35,0.15)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-orange)", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Results</span>
                  <div style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>{project.results}</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
