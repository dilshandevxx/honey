import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import ServicesMarquee from "@/components/ServicesMarquee";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";

import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-honey-black">
      <Header />
      <Hero />
      <About />
      <BeforeAfter />
      <ServicesMarquee />
      <Capabilities />
      <Process />
      <WorkList />
      <ContactSection />
      <Footer />
    </main>
  );
}
