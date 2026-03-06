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
    <section className="w-full bg-[#030303] text-white py-48 md:py-64 relative overflow-hidden flex flex-col items-center justify-center border-t border-neutral-900">
      
      {/* Ultra-Minimalist Layout (No Ambience) */}
      
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Eyebrow Text */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-500 flex items-center gap-6 justify-center">
                <span className="w-12 h-[1px] bg-neutral-800" />
                INITIATE SEQUENCE
                <span className="w-12 h-[1px] bg-neutral-800" />
            </span>
        </motion.div>

        {/* Massive Typography - No Gradients, Just Contrast */}
        <h2 className="text-[16vw] md:text-[14vw] leading-[0.85] font-light tracking-tighter uppercase mb-24 z-20 pointer-events-none flex flex-col items-center text-white">
            <span className="font-sans tracking-tight">
                Project In
            </span>
            <span className="font-mono italic lowercase text-neutral-600 -mt-2 md:-mt-8 pl-12 md:pl-48">
                mind?
            </span>
        </h2>

        {/* Minimalist Magnetic Button Structure */}
        <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="relative cursor-pointer group z-30"
        >
            <a 
                href="/contact"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-neutral-800 flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-out group-hover:scale-110 group-hover:bg-white group-hover:border-white"
            >
                {/* Button Content */}
                <div className="relative z-10 flex flex-col items-center gap-3 text-white group-hover:text-black transition-colors duration-500">
                     <span className="text-sm md:text-lg font-bold uppercase tracking-[0.2em] font-sans">
                        Let's Talk
                     </span>
                     <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-45 transition-transform duration-500" />
                </div>
            </a>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-32 font-mono text-xs text-neutral-600 uppercase tracking-[0.3em] flex flex-col items-center gap-4"
        >
            <span className="w-[1px] h-12 bg-neutral-800" />
            [ Start a New Timeline ]
        </motion.div>

      </div>
    </section>
  );
}
