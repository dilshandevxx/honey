"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Magnetic Button Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="w-full bg-[#000000] text-white py-48 md:py-64 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[150px] opacity-20 overflow-hidden" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-24 mix-blend-difference z-20 pointer-events-none">
            <span className="block text-white">Project In</span>
            <span className="block text-white/50">Mind?</span>
        </h2>

        {/* Magnetic Button Container */}
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="relative cursor-pointer group"
        >
            <a 
                href="/contact"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-honey-red flex items-center justify-center relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110"
            >
                {/* Button Content */}
                <div className="relative z-10 flex flex-col items-center gap-2 mix-blend-difference text-white">
                     <span className="text-xl md:text-2xl font-bold uppercase tracking-widest group-hover:tracking-[0.3em] transition-all duration-500">
                        Let's Talk
                     </span>
                     <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full scale-0 group-hover:scale-150 ease-out origin-center animate-pulse" />

            </a>
            
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/10 scale-125 group-hover:scale-[1.35] transition-transform duration-700 ease-out pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/5 scale-150 group-hover:scale-[1.6] transition-transform duration-700 ease-out pointer-events-none delay-100" />

        </motion.div>

      </div>
    </section>
  );
}
