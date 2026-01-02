"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import StarWarp from "./StarWarp";

const BEFORE_CARDS = [
  {
    id: "01",
    title: "THE WAITING GAME.",
    desc: "'In 2 weeks' becomes 2 months. You lose momentum while they make excuses. Your business can't afford to pause.",
    position: { top: "15%", left: "5%" }
  },
  {
    id: "02",
    title: "COOKIE-CUTTER.",
    desc: "Your site looks exactly like a cheap template. It has no soul, no impact, and your customers forget it instantly.",
    position: { top: "50%", right: "5%" }
  },
  {
    id: "03",
    title: "GHOSTING.",
    desc: "Once you pay the deposit, good luck getting them on the phone. You're left in the dark wondering if work is even happening.",
    position: { bottom: "10%", left: "10%" }
  },
  {
    id: "04",
    title: "HIDDEN COSTS.",
    desc: "Every small change is an extra fee. The final bill is double what you expected and the budget is blown.",
    position: { top: "30%", left: "40%" }
  },
];

const AFTER_CARDS = [
  {
    id: "05",
    title: "RAPID LAUNCH.",
    desc: "We ship fast. Your business starts growing while competitors are still planning. Momentum is your best asset.",
    position: { top: "10%", right: "10%" }
  },
  {
    id: "06",
    title: "BUILT TO SELL.",
    desc: "We don't just make 'pretty' sites. We build high-performance sales machines designed to convert visitors into buyers.",
    position: { top: "45%", left: "5%" }
  },
  {
    id: "07",
    title: "DIRECT ACCESS.",
    desc: "No middle-men. You talk directly to the experts building your future. Clear communication, zero fluff.",
    position: { bottom: "15%", right: "5%" }
  },
  {
    id: "08",
    title: "TOTAL OWNERSHIP.",
    desc: "No ongoing traps. We build it, we hand it over, and you own it 100%. No monthly 'maintenance' hostages.",
    position: { top: "25%", left: "35%" }

  },
];

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isWarping, setIsWarping] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.45) {
      setIsWarping(false);
    } else {
      setIsWarping(true);
    }
  });

  // --- TRANSFORMS ---

  // Phase Control
  const beforeOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);
  const beforeScale = useTransform(scrollYProgress, [0.45, 0.5], [1, 0.8]);
  const beforeFilter = useTransform(scrollYProgress, [0.45, 0.5], ["blur(0px)", "blur(10px)"]);

  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const afterScale = useTransform(scrollYProgress, [0.5, 0.55], [1.2, 1]);
  const afterFilter = useTransform(scrollYProgress, [0.5, 0.55], ["blur(10px)", "blur(0px)"]);

  // --- Group Exit Animations ---
  // Before Cards exit: 0.35 -> 0.40
  const beforeCardsExitOpacity = useTransform(scrollYProgress, [0.35, 0.40], [1, 0]);
  const beforeCardsExitScale = useTransform(scrollYProgress, [0.35, 0.40], [1, 0.95]);

  // After Cards exit: 0.90 -> 0.95
  const afterCardsExitOpacity = useTransform(scrollYProgress, [0.90, 0.95], [1, 0]);
  const afterCardsExitScale = useTransform(scrollYProgress, [0.90, 0.95], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-honey-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Star Warp */}
        <div className="absolute inset-0 z-0">
          <StarWarp speed={isWarping ? 50 : 2} isWarping={isWarping} />
        </div>

        {/* ================= BEFORE PHASE ================= */}
        <motion.div
          style={{
            opacity: beforeOpacity,
            scale: beforeScale,
            filter: beforeFilter,
          }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {/* Main Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0">
             <div className="relative">
                <span className="absolute top-[-5rem] left-1/2 -translate-x-1/2 font-mono text-xs text-honey-blue/50 tracking-[0.2em]">
                    [ 05 / 09 ]
                </span>
                <h2 className="text-[12vw] leading-none font-bold text-transparent stroke-text font-sans tracking-tight opacity-30">
                  BEFORE
                  <br />
                  <span className="text-white/20 ml-20">// NEXUSⒸ</span>
                </h2>
             </div>
          </div>

          {/* Cards */}
          {/* Cards Group - Applies fade out to all cards */}
          <motion.div 
            style={{ opacity: beforeCardsExitOpacity, scale: beforeCardsExitScale }}
            className="absolute inset-0 z-10"
          >
              {BEFORE_CARDS.map((card, index) => {
                 // Adjusted Staggered Entrance
                 // Range: 0.05 -> 0.25 (To leave time for them to be read before exit at 0.35)
                 const start = 0.05 + (index * 0.05); 
                 const end = start + 0.1;
                 
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const y = useTransform(scrollYProgress, [start, end], ["120vh", "0vh"]);
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0, 1]);

                 return (
                     <motion.div
                        key={card.id}
                        style={{ 
                            y, 
                            opacity,
                            ...card.position 
                        }}
                        className="absolute w-[90vw] md:w-[400px] p-8 bg-black/80 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl"
                     >
                         <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                            <h3 className="text-xl font-bold text-white tracking-tighter">{card.title}</h3>
                            <span className="text-honey-red font-mono text-lg">{`[${card.id}]`}</span>
                         </div>
                         <p className="font-mono text-xs text-gray-400 leading-relaxed uppercase">
                            {card.desc}
                         </p>
                     </motion.div>
                 )
              })}
          </motion.div>
        </motion.div>

        {/* ================= AFTER PHASE ================= */}
        <motion.div
          style={{
            opacity: afterOpacity,
            scale: afterScale,
            filter: afterFilter,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
           {/* Main Title */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0">
             <span className="absolute top-[-5rem] left-1/2 -translate-x-1/2 font-mono text-xs text-honey-red/50 tracking-[0.2em]">
                    AFTER NEXUS
             </span>
             <h2 className="text-[12vw] leading-none font-bold text-honey-red tracking-tight drop-shadow-[0_0_30px_rgba(255,77,77,0.5)] opacity-50">
                  AFTER
                  <br />
                  <span className="ml-20">// NEXUSⒸ</span>
                </h2>
           </div>

           {/* Cards Group - Applies fade out to all cards */}
           <motion.div
             style={{ opacity: afterCardsExitOpacity, scale: afterCardsExitScale }}
             className="absolute inset-0 z-10"
           >
               {AFTER_CARDS.map((card, index) => {
                 // Adjusted Staggered Entrance
                 // Range: 0.60 -> 0.80
                 const start = 0.60 + (index * 0.05);
                 const end = start + 0.1;
                 
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const y = useTransform(scrollYProgress, [start, end], ["120vh", "0vh"]);
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0, 1]);

                 return (
                     <motion.div
                        key={card.id}
                        style={{ 
                            y, 
                            opacity,
                            ...card.position 
                        }}
                        className="absolute w-[90vw] md:w-[400px] p-8 bg-black/90 border border-honey-red/30 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(255,77,77,0.15)]"
                     >
                         <div className="flex justify-between items-start mb-6 border-b border-honey-red/20 pb-4">
                            <h3 className="text-xl font-bold text-white tracking-tighter">{card.title}</h3>
                            <span className="text-honey-red font-mono text-lg">{`[${card.id}]`}</span>
                         </div>
                         <p className="font-mono text-xs text-gray-400 leading-relaxed uppercase">
                            {card.desc}
                         </p>
                     </motion.div>
                 )
              })}
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
