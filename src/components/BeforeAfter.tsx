"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

const TRANSFORMATIONS = [
  {
    before: "CONFUSION",
    after: "CLARITY",
    desc: "From chaotic, scattered messaging to a crystal-clear brand narrative that cuts through the noise.",
    color: "from-gray-900 to-black" // Dark/Foggy
  },
  {
    before: "INVISIBLE",
    after: "ICONIC",
    desc: "Stop blending in. We forged visual identities that command attention and impossible-to-ignore presence.",
    color: "from-[#0A0A0A] to-[#050505]" // Deep
  },
  {
    before: "STATIC",
    after: "KINETIC",
    desc: "Your brand wasn't meant to stand still. We inject motion, life, and energy into every interaction.",
    color: "from-[#1a0505] to-black" // Red-tinted
  },
  {
    before: "SILENCE",
    after: "IMPACT",
    desc: "Don't just speak. Resonate. We turn passive visitors into active, engaged evangelists.",
    color: "from-[#050f1a] to-black" // Blue-tinted
  }
];

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#020202] text-white">
      
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Background Atmosphere */}
        {TRANSFORMATIONS.map((item, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, 
                [index * 0.25, (index * 0.25) + 0.1, (index + 1) * 0.25], 
                [0, 1, 0]
            );
            return (
                <motion.div 
                    key={`bg-${index}`}
                    style={{ opacity }}
                    className={`absolute inset-0 bg-gradient-to-b ${item.color} transition-colors duration-1000`}
                />
            )
        })}

        {/* Central Alchemy Stage */}
        <div className="relative z-10 text-center w-full px-4">
            
            {TRANSFORMATIONS.map((item, index) => {
                const start = index * 0.25;
                const end = start + 0.25;
                const mid = start + 0.125;

                // Scroll Ranges
                // 0.0 -> 0.1: "Before" fades in
                // 0.1 -> 0.15: "Before" blurs/distorts
                // 0.15 -> 0.2: "After" clarifies
                // 0.2 -> 0.25: Hold / Fade out

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const beforeOpacity = useTransform(scrollYProgress, [start, start + 0.05, mid - 0.02, mid], [0, 1, 1, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const beforeBlur = useTransform(scrollYProgress, [start + 0.05, mid], ["blur(0px)", "blur(20px)"]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const beforeScale = useTransform(scrollYProgress, [start, mid], [0.9, 1.1]);

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const afterOpacity = useTransform(scrollYProgress, [mid, mid + 0.02, end - 0.05, end], [0, 1, 1, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const afterBlur = useTransform(scrollYProgress, [mid, mid + 0.05], ["blur(20px)", "blur(0px)"]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const afterScale = useTransform(scrollYProgress, [mid, end], [1.1, 1]);

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const descOpacity = useTransform(scrollYProgress, [mid + 0.05, mid + 0.1, end - 0.05, end], [0, 1, 1, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const descY = useTransform(scrollYProgress, [mid, mid + 0.1], [20, 0]);

                return (
                    <div key={index} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        
                        {/* BEFORE WORD (Dissolving) */}
                        <motion.h2 
                            style={{ opacity: beforeOpacity, filter: beforeBlur, scale: beforeScale }}
                            className="absolute text-[12vw] md:text-[15vw] font-bold leading-none tracking-tighter text-white/10 select-none"
                        >
                            {item.before}
                        </motion.h2>

                        {/* AFTER WORD (Emerging) */}
                        <motion.h2 
                            style={{ opacity: afterOpacity, filter: afterBlur, scale: afterScale }}
                            className="absolute text-[12vw] md:text-[15vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 select-none mix-blend-overlay"
                        >
                            {item.after}
                        </motion.h2>

                         {/* Solid Overlay for After (Visibility) */}
                         <motion.h2 
                            style={{ opacity: afterOpacity, filter: afterBlur, scale: afterScale }}
                            className="absolute text-[12vw] md:text-[15vw] font-bold leading-none tracking-tighter text-white select-none"
                        >
                            {item.after}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            style={{ opacity: descOpacity, y: descY }}
                            className="absolute bottom-[20vh] max-w-md text-center text-lg md:text-xl text-white/60 font-light leading-relaxed hidden md:block"
                        >
                            {item.desc}
                        </motion.p>
                    </div>
                );
            })}
        </div>

        {/* Global Progress Indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
             {TRANSFORMATIONS.map((_, i) => (
                 <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
             ))}
        </div>

      </div>
    </section>
  );
}
