import Hero from "@/components/Hero";
import Ethos from "@/components/Ethos";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import ServicesMarquee from "@/components/ServicesMarquee";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";

import TechStack from "@/components/TechStack";
import Process from "@/components/Process";

// New Sections
import Architects from "@/components/Architects";
import Insights from "@/components/Insights";
import Investment from "@/components/Investment";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-honey-black">
      <Header />
      <Hero />
      <Ethos />
      <TechStack />
      <About />
      <ServicesMarquee />
      <Capabilities />

      <WorkList />
      <Process />
      <Architects />
      <BeforeAfter />
      <SocialProof />
      <Testimonials />
      <Insights />
      <Investment />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
