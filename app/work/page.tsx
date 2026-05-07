import Navbar from "@/components/ui/Navbar";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: "80px", background: "var(--bg-surface)" }}>
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
