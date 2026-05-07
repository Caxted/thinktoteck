import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: "80px", background: "var(--bg-primary)" }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
