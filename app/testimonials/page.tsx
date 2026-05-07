import Navbar from "@/components/ui/Navbar";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ paddingTop: "80px", background: "var(--bg-primary)" }}>
          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}
