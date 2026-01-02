"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-honey-black text-white">
      <Header />
      
      {/* About Hero */}
      <section className="pt-40 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8"
           >
             About Us
           </motion.h1>
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl font-light leading-relaxed"
           >
             We are a collective of designers, engineers, and strategists.
           </motion.p>
        </div>
      </section>

      {/* Reuse existing About component */}
      <div className="-mt-20"> 
        <About />
      </div>

      {/* Additional Content - e.g., Team or History could go here */}
      <section className="py-20 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                  <h3 className="text-2xl font-bold uppercase mb-4">Our Philosophy</h3>
                  <p className="text-white/70 leading-relaxed">
                      We believe in the power of code and design to transform businesses. 
                      Our approach is deeply collaborative, ensuring that we build not just for today, but for the future.
                  </p>
              </div>
              <div>
                  <h3 className="text-2xl font-bold uppercase mb-4">Our Approach</h3>
                  <p className="text-white/70 leading-relaxed">
                      From partial ideas to fully realized products, we handle every step of the process with precision and care.
                      We combine technical expertise with creative vision.
                  </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
