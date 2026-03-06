"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StarWarp from "./StarWarp";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress over the entire tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Animation Phases ---
  // 0.0 - 0.3: BEFORE phase (static stars, chaotic cards)
  // 0.3 - 0.6: WARP phase (accelerating stars, dimension jump)
  // 0.6 - 1.0: AFTER phase (warp speed, clarity cards)

  // 1. Warp Speed: 0.5 (slow) -> 120 (extremely fast) -> 40 (cruising)
  const rawSpeed = useTransform(scrollYProgress, [0.2, 0.45, 0.9], [0.5, 120, 30]);
  const speed = useSpring(rawSpeed, { stiffness: 100, damping: 25 });
  
  // 2. Is Warping Flag: Switches on during the jump
  // We can just rely on speed, but let's pass isWarping for the trail effect
  const isWarpingRaw = useTransform(scrollYProgress, [0, 0.3], [0, 1]); 
  // We'll manually check this value in the render, or just rely on speed visual.
  // Actually, let's keep it simple: if speed > 5, we are warping.

  // 3. Before Content Opacity: Visible -> Fade Out (pulled back dramatically)
  const beforeOpacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
  const beforeScale = useTransform(scrollYProgress, [0.1, 0.25], [1, 0.5]);
  const beforeY = useTransform(scrollYProgress, [0.1, 0.25], [0, -150]);
  const beforeBlur = useTransform(scrollYProgress, [0.1, 0.25], ["blur(0px)", "blur(20px)"]);

  // 4. After Content Opacity: Invisible -> Massive impact Fade In -> Stay
  const afterOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const afterScale = useTransform(scrollYProgress, [0.4, 0.6], [2.5, 1]); // Dramatic slam-in from warp
  const afterY = useTransform(scrollYProgress, [0.4, 0.6], [200, 0]); 
  const afterBlur = useTransform(scrollYProgress, [0.4, 0.55], ["blur(30px)", "blur(0px)"]);
  const afterLetterSpacing = useTransform(scrollYProgress, [0.4, 0.6], ["0.5em", "-0.05em"]);

  // 5. Exit Phase: Fade out everything at the very end so it doesn't just cut off
  // const globalOpacity = useTransform(scrollYProgress, [0.9, 1.0], [1, 0]);


  return (
    <section 
        ref={containerRef}
        className="relative h-[400vh] bg-black" 
        id="nexus"
    >
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Background Stars (Controlled by Scroll) */}
          <motion.div className="absolute inset-0 z-0">
             {/* We can pass the raw spring value to a component if it accepts MotionValue, 
                 but StarWarp expects number. We can use a small wrapper or just let react re-render 
                 since scroll triggers frequent updates anyway. 
                 However, re-rendering canvas 60fps via props is fine. 
                 For smoothness, we will use a value listener or just standard react prop passing.
              */}
             <StarScrollWrapper speed={speed} />
          </motion.div>


          {/* ================= BEFORE CONTENT (LEFT PHASE) ================= */}
          <motion.div 
            style={{ opacity: beforeOpacity, scale: beforeScale, y: beforeY, filter: beforeBlur as any }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6"
          >
              <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] mb-16 text-center uppercase drop-shadow-2xl">
                  <span className="text-white/20">INVISIBLE</span>
                  <br />
                  <span className="bg-gradient-to-r from-neutral-500 to-neutral-700 bg-clip-text text-transparent">CONFUSION</span>
              </h2>

              <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 opacity-80 w-full max-w-5xl border-t border-neutral-800 pt-16">
                  {/* Card 1 */}
                  <div className="w-full md:w-1/2 text-left">
                      <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-4">
                           <h3 className="text-2xl md:text-3xl font-light text-neutral-400 tracking-tight font-sans">Gas Lighting.</h3>
                           <span className="font-mono text-neutral-500 text-xs tracking-[0.2em]">[01]</span>
                      </div>
                      <p className="font-mono text-sm md:text-base leading-[2] text-neutral-500">
                          As the contract dries, effort evaporates. Meetings never come. "R&D" hell becomes your reality.
                      </p>
                  </div>
                  {/* Card 2 */}
                  <div className="w-full md:w-1/2 text-left">
                      <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-4">
                           <h3 className="text-2xl md:text-3xl font-light text-neutral-400 tracking-tight font-sans">Ghosting.</h3>
                           <span className="font-mono text-neutral-500 text-xs tracking-[0.2em]">[02]</span>
                      </div>
                      <p className="font-mono text-sm md:text-base leading-[2] text-neutral-500">
                          Founders watch budgets die. CMOs change status to "Open to Work". Silence is the only deliverable.
                      </p>
                  </div>
              </div>
          </motion.div>


          {/* ================= AFTER CONTENT (RIGHT PHASE) ================= */}
          <motion.div 
            style={{ opacity: afterOpacity, scale: afterScale, y: afterY, filter: afterBlur as any }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-6"
          >
               <motion.h2 
                 style={{ letterSpacing: afterLetterSpacing as any }}
                 className="text-[14vw] md:text-[10vw] font-bold leading-[0.8] mb-16 text-center uppercase"
               >
                  <span className="bg-gradient-to-br from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent drop-shadow-lg">
                    ICONIC
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-honey-blue via-cyan-300 to-honey-blue bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,0.3)]">
                    CLARITY
                  </span>
              </motion.h2>

              <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 w-full max-w-5xl border-t border-white/10 pt-16">
                  {/* Card 1 */}
                  <div className="w-full md:w-1/2 text-left group">
                      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4 group-hover:border-honey-blue transition-colors duration-500">
                           <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight font-sans group-hover:text-honey-blue transition-colors duration-500">Sell Beautifully.</h3>
                           <span className="font-mono text-white/40 text-xs tracking-[0.2em] group-hover:text-honey-blue transition-colors duration-500">[01]</span>
                      </div>
                      <p className="font-mono text-sm md:text-base leading-[2] text-white/60 group-hover:text-white/90 transition-colors duration-500">
                          It's not creative unless it sells. Every work is built like a Ferrari. Speed meets precision.
                      </p>
                  </div>
                  {/* Card 2 */}
                  <div className="w-full md:w-1/2 text-left group">
                      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4 group-hover:border-honey-blue transition-colors duration-500">
                           <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight font-sans group-hover:text-honey-blue transition-colors duration-500">Produce More.</h3>
                           <span className="font-mono text-white/40 text-xs tracking-[0.2em] group-hover:text-honey-blue transition-colors duration-500">[02]</span>
                      </div>
                      <p className="font-mono text-sm md:text-base leading-[2] text-white/60 group-hover:text-white/90 transition-colors duration-500">
                          Picasso produced 50,000 works. We match that prolific energy. In 90 days, you'll outpace years of competition.
                      </p>
                  </div>
              </div>
          </motion.div>

      </div>
    </section>
  );
}

// Wrapper to bridging MotionValue speed to StarWarp prop
function StarScrollWrapper({ speed }: { speed: any }) {
    const [currentSpeed, setCurrentSpeed] = useState(0.5);

    useMotionValueEvent(speed, "change", (latest) => {
        setCurrentSpeed(latest);
    });

    return <StarWarp speed={currentSpeed} isWarping={currentSpeed > 5} />;
}

import { useState, useEffect as useMotionValueEventEffect } from "react";
// Polyfill or hook for motion value event if not available directly
function useMotionValueEvent(value: any, event: string, callback: (v: any) => void) {
    useMotionValueEventEffect(() => {
        const unsubscribe = value.on(event, callback);
        return unsubscribe;
    }, [value, event, callback]);
}
