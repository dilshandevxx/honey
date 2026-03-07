"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import StarWarp from "./StarWarp";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress over a tall container for a long, buttery smooth animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add multiple cards for the long scroll
  const confusionCards = [
    { title: "Gas Lighting.", num: "01", desc: "As the contract dries, effort evaporates. Meetings never come. 'R&D' hell becomes your reality." },
    { title: "Ghosting.", num: "02", desc: "Founders watch budgets die. CMOs change status to 'Open to Work'. Silence is the only deliverable." },
    { title: "Death by Committee.", num: "03", desc: "Endless wireframes. Zero code. Your product vision is mutilated by middle management." },
    { title: "The Hand-off Drop.", num: "04", desc: "The 'A-Team' pitches you. The 'C-Team' builds it. Quality plummets, timelines double." },
    { title: "Tech Debt Traps.", num: "05", desc: "Spaghetti code shipped as an 'MVP'. You'll spend next year rewriting yesterday's mistakes." }
  ];

  // --- Animation Physics ---
  
  // Stars start slow and get beautiful and fast during the transition (0.4 to 0.6)
  const rawSpeed = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.2, 40, 0.2]);
  const speed = useSpring(rawSpeed, { stiffness: 60, damping: 20 });

  // ==== PHASE 1: INVISIBLE CONFUSION ====
  // Title stays locked while cards scroll naturally. 
  // We fade it out entirely by 0.5 when the cards are gone.
  const confusionOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
  const confusionY = useTransform(scrollYProgress, [0.4, 0.5], [0, -100]);

  // Card Column wrapper fades out cleanly at 0.5
  const scrollWrapperOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);

  // ==== PHASE 2: THE VOID ====
  // 0.5 to 0.6 is a gap where just the beautiful stars warp past.

  // ==== PHASE 3: ICONIC CLARITY ====
  // Clarity title and cards fade in gently as we hit 0.6
  const clarityOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const clarityY = useTransform(scrollYProgress, [0.6, 0.7], [100, 0]);

  return (
    <section 
        ref={containerRef}
        className="relative h-[500vh] bg-[#020202] border-t border-neutral-900" 
        id="nexus"
    >
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Beautiful Star Background */}
          <motion.div className="absolute inset-0 z-0 opacity-60">
             <div className="absolute inset-0 bg-radial-gradient from-honey-blue/5 to-transparent mix-blend-screen pointer-events-none" />
             <StarScrollWrapper speed={speed} />
          </motion.div>

          {/* ================= SEQUENCE 1: INVISIBLE CONFUSION ================= */}
          <motion.div 
            style={{ 
                opacity: confusionOpacity,
                y: confusionY,
                pointerEvents: useTransform(scrollYProgress, v => v < 0.5 ? "auto" : "none") as any
            }}
            className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 h-full max-w-[1800px] mx-auto"
          >
              {/* Left Side: Sticky Title */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full pt-24 md:pt-0">
                   {/* Minimalist Section Label */}
                   <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-600 flex items-center gap-6 justify-start mb-12">
                        THE REALITY
                        <span className="w-12 h-[1px] bg-neutral-800" />
                   </span>
                   {/* High Contrast Typography */}
                  <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-center uppercase">
                      <span className="text-white block font-sans tracking-tight">INVISIBLE</span>
                      <span className="text-neutral-500 block font-sans tracking-tight ml-[10%]">CONFUSION.</span>
                  </h2>
              </div>

              {/* Right Side: Naturally Scrolling Card Column */}
              <motion.div 
                 style={{ opacity: scrollWrapperOpacity }}
                 className="w-full md:w-1/2 h-full overflow-hidden relative"
              >
                  {/* The cards translate based on scroll allowing many to pass by */}
                  <motion.div 
                    style={{ 
                        // Map scroll 0 -> 0.4 to a massive upward translation
                        y: useTransform(scrollYProgress, [0, 0.45], ["20%", "-120%"]) 
                    }}
                    className="flex flex-col gap-24 pt-[80vh] pb-[50vh] px-4 md:pl-24"
                  >
                      {confusionCards.map((card, i) => (
                          <div key={i} className="w-full text-left border-t border-neutral-800 pt-8 group cursor-default">
                              <div className="flex justify-between items-end mb-6">
                                  <h3 className="text-3xl font-light text-neutral-400 font-sans tracking-tight group-hover:text-white transition-colors duration-500">{card.title}</h3>
                                  <span className="font-mono text-neutral-600 text-xs tracking-[0.2em] group-hover:text-white transition-colors duration-500">[{card.num}]</span>
                              </div>
                              <p className="font-mono md:text-lg leading-[2] text-neutral-500 group-hover:text-neutral-300 transition-colors duration-500 max-w-md">
                                  {card.desc}
                              </p>
                          </div>
                      ))}
                  </motion.div>
                  
                  {/* Gradient faders at top and bottom so cards disappear smoothly */}
                  <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-10" />
              </motion.div>
          </motion.div>


          {/* ================= SEQUENCE 2: ICONIC CLARITY (SIMPLE & BEAUTIFUL) ================= */}
          <motion.div 
            style={{ 
                opacity: clarityOpacity,
                y: clarityY,
                pointerEvents: useTransform(scrollYProgress, v => v >= 0.5 ? "auto" : "none") as any
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center origin-center w-full px-6 md:px-12"
          >
              <div className="w-full max-w-[1000px] flex flex-col items-center relative z-10 text-center">
                  
                  {/* Minimal Label */}
                  <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-white/50 mb-6">
                       [ THE SOLUTION ]
                  </span>

                  {/* Clean, Elegant Title */}
                  <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9vw] font-bold tracking-tighter leading-none text-white mb-12 md:mb-20 drop-shadow-2xl">
                       ICONIC CLARITY.
                  </h2>

                  {/* Simple Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 w-full text-left max-w-sm md:max-w-none mx-auto">
                      
                      {/* Card 1 */}
                      <div className="flex flex-col border-t border-white/20 pt-6 md:pt-8 w-full">
                          <span className="font-mono text-white/40 text-xs md:text-sm mb-3 md:mb-4">01</span>
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4 tracking-tight">Sell Beautifully.</h3>
                          <p className="font-sans text-sm md:text-base leading-[1.8] md:leading-[2] text-white/60 font-light">
                              It's not creative unless it sells. Every work is built like a precision machine. Speed meets aesthetic perfection. We build legendary assets designed for ultimate performance.
                          </p>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col border-t border-white/20 pt-6 md:pt-8 w-full">
                          <span className="font-mono text-white/40 text-xs md:text-sm mb-3 md:mb-4">02</span>
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-3 md:mb-4 tracking-tight">Produce More.</h3>
                          <p className="font-sans text-sm md:text-base leading-[1.8] md:leading-[2] text-white/60 font-light">
                              Picasso produced 50,000 works. We match that prolific energy. In 90 days, you'll outpace years of your competition. Velocity is the ultimate luxury.
                          </p>
                      </div>

                  </div>
              </div>
          </motion.div>

      </div>
    </section>
  );
}

// Wrapper to bridging MotionValue speed to StarWarp prop
import { useState, useEffect as useMotionValueEventEffect } from "react";

function StarScrollWrapper({ speed }: { speed: any }) {
    const [currentSpeed, setCurrentSpeed] = useState(0.5);

    useMotionValueEvent(speed, "change", (latest) => {
        setCurrentSpeed(latest);
    });

    return <StarWarp speed={currentSpeed} isWarping={currentSpeed > 5} />;
}

// Polyfill bridging Framer Motion value events
function useMotionValueEvent(value: any, event: string, callback: (v: any) => void) {
    useMotionValueEventEffect(() => {
        const unsubscribe = value.on(event, callback);
        return unsubscribe;
    }, [value, event, callback]);
}
