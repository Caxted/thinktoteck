import Navbar from "@/components/ui/Navbar";
import Services from "@/components/sections/Services";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: "80px", background: "var(--bg-primary)" }}>
          <Services />
        </div>
      </main>
      <Footer />
    </>
  );
}
