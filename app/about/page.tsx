import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: "80px", background: "var(--bg-primary)" }}>
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
