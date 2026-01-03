"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";
import  { motion } from "framer-motion";
import StarWarp from "@/components/StarWarp";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-honey-blue selection:text-black relative overflow-hidden">
       {/* Background */}
       <div className="fixed inset-0 z-0 opacity-40">
        <StarWarp speed={0.2} />
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* Services Hero */}
        <section className="pt-48 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
             >
               <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-8">
                 OUR<br/>
                 <span className="text-transparent stroke-text hover:text-white transition-colors duration-700">EXPERTISE</span>
               </h1>
               <p className="max-w-xl text-xl text-white/50 font-light leading-relaxed">
                 We build digital products that define the future. From strategy to execution, our services are designed to help you innovate and grow.
               </p>
             </motion.div>
          </div>
        </section>

        <Capabilities />
        
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
