"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-honey-black text-white">
      <Header />
      
      <div className="pt-20">
          <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
