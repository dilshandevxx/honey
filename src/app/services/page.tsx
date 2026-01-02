"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";
import  { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-honey-black text-white">
      <Header />
      
      {/* Services Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8"
           >
             Our Services
           </motion.h1>
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl font-light leading-relaxed"
           >
             We build digital products that define the future. From strategy to execution, our services are designed to help you innovate and grow.
           </motion.p>
        </div>
      </section>

      <Capabilities />
      
      <ContactSection />
      <Footer />
    </main>
  );
}
