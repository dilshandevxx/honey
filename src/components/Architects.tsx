"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Architects() {
  return (
    <section className="w-full bg-[#020202] text-white py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Minimal Header */}
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase mb-8 flex items-center gap-6">
                <span className="w-12 h-px bg-white/10" />
                THE ARCHITECTS
                <span className="w-12 h-px bg-white/10" />
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter leading-[0.85] text-white uppercase drop-shadow-lg">
                Built By The <br />
                <span className="text-white/40 italic font-serif lowercase pr-4">obsessed.</span>
            </h2>
        </div>

        {/* Editorial Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    
            {/* Left: Founder Stats & Details (Minimalist) */}
            <div className="lg:col-span-4 flex flex-col order-2 lg:order-1 border-t border-white/10 pt-12 mt-12 lg:mt-0 lg:border-t-0 lg:pt-0">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-12">
                   Leading the Vanguard
                </p>
                
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Dilshan</h3>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-12">
                    Founder & Chief Architect
                </p>

                <p className="text-lg md:text-xl font-light leading-[1.8] text-white/70 mb-12">
                    "We didn't build this agency to blend in. We built it to rip the floorboards out of generic digital marketing and assemble something completely unstoppable."
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-auto">
                    <div>
                        <span className="block font-bold text-3xl mb-1">10+</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Years Mastery</span>
                    </div>
                    <div>
                        <span className="block font-bold text-3xl mb-1">50+</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Global Brands</span>
                    </div>
                </div>
            </div>

            {/* Right: Massive Cinematic Portrait */}
            <div className="lg:col-span-8 order-1 lg:order-2 w-full h-[60vh] md:h-[80vh] bg-[#050505] border border-white/10 rounded-sm relative overflow-hidden group">
                <motion.div
                   whileHover={{ scale: 1.03 }}
                   transition={{ duration: 1, ease: "easeOut" }}
                   className="w-full h-full relative"
                >
                    {/* Placeholder for actual founder photo - needs a striking B&W photo */}
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                         <span className="font-mono text-sm text-white/20 tracking-widest uppercase">
                             [ High-End B&W Founder Portrait ]
                         </span>
                    </div>
                    
                    {/* Dark gradient mapping to make text pop if overlaying */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent pointer-events-none opacity-80" />
                </motion.div>
                
                {/* Decorative Elements on Photo */}
                <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/30 tracking-[0.4em] uppercase text-right pointer-events-none">
                    LOCATION: LKA<br />
                    EST: 2024
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
