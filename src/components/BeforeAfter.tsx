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

  // 1. Warp Speed: 0.5 (slow) -> 50 (fast) -> 50 (stay fast)
  const rawSpeed = useTransform(scrollYProgress, [0.2, 0.5, 0.9], [0.5, 40, 40]);
  const speed = useSpring(rawSpeed, { stiffness: 60, damping: 20 });
  
  // 2. Is Warping Flag: Switches on during the jump
  // We can just rely on speed, but let's pass isWarping for the trail effect
  const isWarpingRaw = useTransform(scrollYProgress, [0, 0.3], [0, 1]); 
  // We'll manually check this value in the render, or just rely on speed visual.
  // Actually, let's keep it simple: if speed > 5, we are warping.

  // 3. Before Content Opacity: Visible -> Fade Out
  const beforeOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
  const beforeScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.8]);
  const beforeY = useTransform(scrollYProgress, [0.1, 0.3], [0, -100]);

  // 4. After Content Opacity: Invisible -> Fade In -> Stay
  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const afterScale = useTransform(scrollYProgress, [0.5, 0.7], [1.5, 1]); // Zoom in from "dimension"
  const afterY = useTransform(scrollYProgress, [0.5, 0.7], [100, 0]); 

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
            style={{ opacity: beforeOpacity, scale: beforeScale, y: beforeY }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
          >
              <h2 className="text-[10vw] md:text-[12vw] font-bold tracking-tighter leading-[0.85] text-[#333] mb-12 text-center">
                  INVISIBLE
                  <br />
                  <span className="text-[#666]">CONFUSION</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-8 opacity-80">
                  {/* Card 1 */}
                  <div className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 text-left grayscale">
                      <div className="flex justify-between items-start mb-6">
                           <h3 className="text-2xl font-bold text-white/60 uppercase tracking-tight">Gas Lighting.</h3>
                           <span className="font-mono text-white/20 text-sm">[01]</span>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-white/40">
                          As the contract dries, effort evaporates. Meetings never come. "R&D" hell becomes your reality.
                      </p>
                  </div>
                  {/* Card 2 */}
                  <div className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 text-left grayscale">
                      <div className="flex justify-between items-start mb-6">
                           <h3 className="text-2xl font-bold text-white/60 uppercase tracking-tight">Ghosting.</h3>
                           <span className="font-mono text-white/20 text-sm">[02]</span>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-white/40">
                          Founders watch budgets die. CMOs change status to "Open to Work". Silence is the only deliverable.
                      </p>
                  </div>
              </div>
          </motion.div>


          {/* ================= AFTER CONTENT (RIGHT PHASE) ================= */}
          <motion.div 
            style={{ opacity: afterOpacity, scale: afterScale, y: afterY }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
          >
               <h2 className="text-[10vw] md:text-[12vw] font-bold tracking-tighter leading-[0.85] text-[#FF4D00] mb-12 text-center mix-blend-screen drop-shadow-[0_0_50px_rgba(255,77,0,0.5)]">
                  ICONIC
                  <br />
                  <span className="text-white">CLARITY</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-8">
                  {/* Card 1 */}
                  <div className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-[#FF4D00]/30 text-left shadow-[0_0_50px_rgba(255,77,0,0.1)]">
                      <div className="flex justify-between items-start mb-6">
                           <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Sell Beautifully.</h3>
                           <span className="font-mono text-[#FF4D00] text-sm">[01]</span>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-white/70">
                          It's not creative unless it sells. Every work is built like a Ferrari. Speed meets precision.
                      </p>
                  </div>
                  {/* Card 2 */}
                  <div className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-[#FF4D00]/30 text-left shadow-[0_0_50px_rgba(255,77,0,0.1)]">
                      <div className="flex justify-between items-start mb-6">
                           <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Produce More.</h3>
                           <span className="font-mono text-[#FF4D00] text-sm">[02]</span>
                      </div>
                      <p className="font-mono text-sm leading-relaxed text-white/70">
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
