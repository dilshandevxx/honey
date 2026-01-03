"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import StarWarp from "@/components/StarWarp";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-honey-blue selection:text-black relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 z-0 opacity-40">
            <StarWarp speed={0.1} />
        </div>

      <div className="relative z-10 pt-20">
          <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
