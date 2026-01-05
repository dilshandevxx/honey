"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for the slider position (0 to 1)
  const x = useMotionValue(0.5);
  const smoothX = useSpring(x, { damping: 30, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const progress = Math.min(Math.max(offsetX / rect.width, 0), 1);
    x.set(progress);
  };

  const clipPath = useTransform(smoothX, (value) => `inset(0 0 0 ${value * 100}%)`);
  const inverseClipPath = useTransform(smoothX, (value) => `inset(0 ${100 - value * 100}% 0 0)`);
  const dividerPosition = useTransform(smoothX, (value) => `${value * 100}%`);

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-screen w-full bg-black overflow-hidden cursor-ew-resize select-none"
    >
      
      {/* ================= CLARITY LAYER (RIGHT / ORDER) ================= */}
      {/* Visible on the RIGHT side of the slider (inset from left) */}
      <motion.div 
        style={{ clipPath }}
        className="absolute inset-0 z-20 bg-[#020202] flex items-center justify-center pointer-events-none"
      >
          {/* Content Container */}
          <div className="relative w-full max-w-[1400px] px-12 flex flex-col items-center text-center">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-honey-blue/10 rounded-full blur-[120px]" />

              <span className="font-mono text-honey-blue text-sm tracking-[0.5em] uppercase mb-8 relative z-10">
                  // The New Standard
              </span>
              
              <h2 className="text-[12vw] font-bold tracking-tighter leading-[0.9] text-white relative z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                  ICONIC
                  <br />
                  CLARITY
              </h2>
              
              <p className="max-w-xl mx-auto mt-12 text-white/70 font-light text-xl leading-relaxed relative z-10">
                  Precision-engineered digital experiences that cut through the noise. 
                  Every pixel has a purpose. Every interaction tells a story.
              </p>

              {/* Grid Lines Overlay */}
               <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "linear-gradient(to right, #00FFFF 1px, transparent 1px), linear-gradient(to bottom, #00FFFF 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
          </div>
      </motion.div>


      {/* ================= CONFUSION LAYER (LEFT / CHAOS) ================= */}
      {/* Visible on the LEFT side of the slider (inset from right) */}
      <motion.div 
         style={{ clipPath: inverseClipPath }}
         className="absolute inset-0 z-10 bg-[#0a0a0a] flex items-center justify-center overflow-hidden pointer-events-none"
      >
          {/* Content Container */}
          <div className="relative w-full max-w-[1400px] px-12 flex flex-col items-center text-center filter blur-[4px] contrast-150 saturate-0 scale-[1.02]">
              
              <span className="font-mono text-gray-500 text-sm tracking-[0.5em] uppercase mb-8 opacity-50">
                  // Legacy Systems
              </span>
              
              <h2 className="text-[12vw] font-bold tracking-tighter leading-[0.9] text-white/50 relative z-10 animate-pulse">
                   INVISIBLE
                  <br />
                   CONFUSION
              </h2>
              
              <p className="max-w-xl mx-auto mt-12 text-gray-500 font-light text-xl leading-relaxed opacity-60">
                  Generic templates lost in the void. Bloated code, slow load times, 
                  and messaging that no one remembers.
              </p>

               {/* Static Noise Overlay */}
               <div className="absolute inset-0 z-20 opacity-30 mix-blend-overlay pointer-events-none" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
               />
          </div>
      </motion.div>


      {/* ================= DIVIDER HANDLE ================= */}
      <motion.div
        style={{ left: dividerPosition }} 
        className="absolute top-0 bottom-0 w-px bg-white/50 z-30 pointer-events-none"
      >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
               <MoveHorizontal className="w-6 h-6 text-black" />
          </div>
          <div className="absolute top-0 bottom-0 -translate-x-1/2 w-[100px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
      </motion.div>

      {/* Helper Text */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 font-mono text-xs uppercase tracking-widest transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          Drag to Reveal
      </div>

    </section>
  );
}
