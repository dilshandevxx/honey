"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Ethos() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#030303] text-white py-40 md:py-64 relative overflow-hidden flex items-center justify-center border-y border-white/5"
    >
      
      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
         <motion.div 
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
            className="w-[120vw] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
         />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
      >
        
        {/* Label */}
        <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.4em] uppercase mb-16 flex items-center gap-6">
            <span className="w-12 h-px bg-white/20" />
            THE ETHOS
            <span className="w-12 h-px bg-white/20" />
        </span>

        {/* The Manifesto */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[1.1] md:leading-[1.15] text-white max-w-5xl">
            We don't build websites. We engineer <span className="font-serif italic text-white/60">revenue engines</span>. In a landscape of noise, clarity is the ultimate luxury. Speed is our weapon. Aesthetics are our baseline.
        </h2>

        {/* Signature/Ending */}
        <div className="mt-24 md:mt-32 flex flex-col items-center">
            <div className="w-px h-24 bg-gradient-to-b from-white/30 to-transparent mb-8" />
            <p className="font-mono text-xs text-white/30 uppercase tracking-[0.3em]">
                NO COMPROMISE.
            </p>
        </div>

      </motion.div>
    </section>
  );
}
