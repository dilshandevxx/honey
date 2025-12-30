import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import ServicesMarquee from "@/components/ServicesMarquee";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-honey-black">
      <Header />
      <Hero />
      <About />
      <ServicesMarquee />
      <Capabilities />
      <WorkList />
      <ContactSection />
      <Footer />
    </main>
  );
}
