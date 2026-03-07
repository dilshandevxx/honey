"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Architects() {
  return (
    <section className="w-full bg-[#020202] text-white py-32 md:py-48 px-6 md:px-12 border-t border-white/5 relative overflow-hidden flex flex-col items-center text-center">
      
        {/* Minimal Label */}
        <span className="font-mono text-[10px] md:text-xs text-white/30 tracking-[0.4em] uppercase mb-16 flex items-center justify-center gap-6 w-full">
            <span className="w-8 h-px bg-white/10" />
            THE ARCHITECTS
            <span className="w-8 h-px bg-white/10" />
        </span>

        {/* The Massive Quote Centerpiece */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.2] md:leading-[1.1] text-white max-w-6xl mb-16 px-4 drop-shadow-lg">
            "We didn't build this agency to blend in. We built it to rip the floorboards out of generic digital marketing and assemble something completely <span className="italic font-serif text-white/50">unstoppable.</span>"
        </h2>

        {/* The Identity */}
        <div className="flex flex-col items-center mb-24">
            <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-3 text-white/90">Dilshan</h3>
            <p className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] flex items-center gap-4">
                Founder <span className="w-1 h-1 bg-white/20 rounded-full" /> Chief Architect
            </p>
        </div>

        {/* The Portrait & Stats Divider */}
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 pt-16 border-t border-white/10">
            
            {/* Stats (Left on Desktop) */}
            <div className="flex gap-12 md:gap-20 text-center md:text-left order-2 md:order-1">
                <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter">10+</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Years Mastery</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter">50+</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Global Brands</span>
                </div>
            </div>
            
            {/* Sleek Portrait Placeholder (Right on Desktop) */}
            <div className="w-full max-w-[300px] aspect-[4/5] bg-[#050505] border border-white/10 rounded-sm relative overflow-hidden group order-1 md:order-2">
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                   className="w-full h-full relative"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900/50 p-6 text-center">
                         <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase leading-loose border border-white/10 px-4 py-2">
                             High-End<br/>Portrait
                         </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none opacity-50" />
                </motion.div>
            </div>

        </div>

    </section>
  );
}
