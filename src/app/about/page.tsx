"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { motion } from "framer-motion";
import StarWarp from "@/components/StarWarp";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-honey-blue selection:text-black relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <StarWarp speed={0.15} />
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* About Hero */}
        <section className="pt-48 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
             >
               <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-8">
                 ABOUT<br/>
                 <span className="text-transparent stroke-text hover:text-white transition-colors duration-700">NEXUS</span>
               </h1>
               <p className="max-w-2xl text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                 We are a collective of rogue designers, engineers, and strategists obsessed with the future of digital interaction.
               </p>
             </motion.div>
          </div>
        </section>

        {/* Reuse existing About component */}
        <div className="-mt-20 relative z-20"> 
          <About />
        </div>

        {/* Philosophy & Approach Grid */}
        <section className="py-32 px-6 md:px-12 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="group">
                    <h3 className="text-sm font-mono tracking-widest text-honey-blue uppercase mb-6">01 / Our Philosophy</h3>
                    <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed group-hover:text-white transition-colors">
                        We believe in the power of <span className="text-white font-bold">code and design</span> to transform businesses. 
                        Our approach is deeply collaborative, ensuring that we build not just for today, but for the future.
                    </p>
                </div>
                <div className="group">
                    <h3 className="text-sm font-mono tracking-widest text-honey-blue uppercase mb-6">02 / Our Approach</h3>
                    <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed group-hover:text-white transition-colors">
                        From partial ideas to fully realized products, we handle every step of the process with precision and care.
                        We combine <span className="text-white font-bold">technical expertise</span> with creative vision.
                    </p>
                </div>
             </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
