"use client";

import { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import StarWarp from "./StarWarp";

const BEFORE_CARDS = [
  {
    id: "01",
    title: "THE WAITING GAME.",
    desc: "'In 2 weeks' becomes 2 months. You lose momentum while they make excuses. Your business can't afford to pause.",
    position: { top: "15%", left: "5%" },
    rotation: -5,
    exitX: -150
  },
  {
    id: "02",
    title: "COOKIE-CUTTER.",
    desc: "Your site looks exactly like a cheap template. It has no soul, no impact, and your customers forget it instantly.",
    position: { top: "50%", right: "5%" },
    rotation: 8,
    exitX: 200
  },
  {
    id: "03",
    title: "GHOSTING.",
    desc: "Once you pay the deposit, good luck getting them on the phone. You're left in the dark wondering if work is even happening.",
    position: { bottom: "10%", left: "10%" },
    rotation: -10,
    exitX: -100
  },
  {
    id: "04",
    title: "HIDDEN COSTS.",
    desc: "Every small change is an extra fee. The final bill is double what you expected and the budget is blown.",
    position: { top: "30%", left: "40%" },
    rotation: 5,
    exitX: 80
  },
];

const AFTER_CARDS = [
  {
    id: "05",
    title: "RAPID LAUNCH.",
    desc: "We ship fast. Your business starts growing while competitors are still planning. Momentum is your best asset.",
    position: { top: "10%", right: "10%" },
    rotation: 6,
    exitX: 120
  },
  {
    id: "06",
    title: "BUILT TO SELL.",
    desc: "We don't just make 'pretty' sites. We build high-performance sales machines designed to convert visitors into buyers.",
    position: { top: "45%", left: "5%" },
    rotation: -5,
    exitX: -80
  },
  {
    id: "07",
    title: "DIRECT ACCESS.",
    desc: "No middle-men. You talk directly to the experts building your future. Clear communication, zero fluff.",
    position: { bottom: "15%", right: "5%" },
    rotation: 12,
    exitX: 150
  },
  {
    id: "08",
    title: "TOTAL OWNERSHIP.",
    desc: "No ongoing traps. We build it, we hand it over, and you own it 100%. No monthly 'maintenance' hostages.",
    position: { top: "25%", left: "35%" },
    rotation: -8,
    exitX: -50

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
  // 0.00 - 0.45: Before Phase
  // 0.45 - 0.55: Transition Phase
  // 0.55 - 1.00: After Phase

  const beforeOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);
  const beforeScale = useTransform(scrollYProgress, [0.45, 0.5], [1, 0.8]);
  const beforeFilter = useTransform(scrollYProgress, [0.45, 0.5], ["blur(0px)", "blur(10px)"]);

  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const afterScale = useTransform(scrollYProgress, [0.5, 0.55], [1.2, 1]);
  const afterFilter = useTransform(scrollYProgress, [0.5, 0.55], ["blur(10px)", "blur(0px)"]);

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

          {/* Cards - Individual Lifecycles */}
          <div className="absolute inset-0 z-10">
              {BEFORE_CARDS.map((card, index) => {
                 // Sequence: 0.05 to 0.40 total
                 const duration = 0.08; 
                 const start = 0.05 + (index * duration);
                 const midEnter = start + 0.02; // Finish entering
                 const midExit = start + 0.06;  // Start exiting
                 const end = start + duration;  // Finish exiting

                 // 1. Enter: 120vh -> -5vh (Slow drift begins)
                 // 2. Read: -5vh -> -15vh (Slow drift continues)
                 // 3. Exit: -15vh -> -80vh (Accelerate out)
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const y = useTransform(scrollYProgress, [start, midEnter, midExit, end], ["120vh", "-5vh", "-15vh", "-80vh"]);
                 
                 // 1. Enter: Opacity 0 -> 1
                 // 2. Hold: Opacity 1
                 // 3. Exit: Opacity 1 -> 0
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const opacity = useTransform(scrollYProgress, [start, midEnter, midExit, end], [0, 1, 1, 0]);

                 // X-Axis Drift
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const x = useTransform(scrollYProgress, [midExit, end], [0, card.exitX]);

                 // Rotation & Twist using the card's specific rotation prop
                 // Stable during read, dramatic twist on exit
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const rotate = useTransform(scrollYProgress, [start, midExit, end], [card.rotation, card.rotation, card.rotation * 4]);

                 // Optional: Scale down slightly on exit
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const scale = useTransform(scrollYProgress, [midExit, end], [1, 0.8]);

                 return (
                     <motion.div
                        key={card.id}
                        style={{ 
                            y, 
                            x,
                            rotate,
                            opacity,
                            scale,
                            ...card.position 
                        }}
                        className="absolute w-[90vw] md:w-[450px] p-10 rounded-[2rem] z-20 group"
                     >
                         {/* Deep Onyx Card Style */}
                         <div className="absolute inset-0 bg-[#0A0A0A] opacity-95 rounded-[2rem] border border-white/5" />
                         
                         {/* Inner Glow */}
                         <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-20 rounded-[2rem]" />

                         <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">{card.title}</h3>
                                <span className="text-[#FF3333] font-mono text-xl tracking-widest">{`[${card.id}]`}</span>
                            </div>
                            <p className="font-mono text-sm text-gray-400 leading-relaxed uppercase tracking-wide">
                                {card.desc}
                            </p>
                         </div>
                     </motion.div>
                 )
              })}
          </div>
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

           {/* Cards - Individual Lifecycles */}
           <div className="absolute inset-0 z-10">
               {AFTER_CARDS.map((card, index) => {
                 // Sequence: 0.55 to 0.95 total
                 const duration = 0.09; 
                 const start = 0.55 + (index * duration);
                 const midEnter = start + 0.02;
                 const midExit = start + 0.07;
                 const end = start + duration;
                 
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                 const y = useTransform(scrollYProgress, [start, midEnter, midExit, end], ["120vh", "-5vh", "-15vh", "-80vh"]);
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const opacity = useTransform(scrollYProgress, [start, midEnter, midExit, end], [0, 1, 1, 0]);
                 
                 // X-Axis Drift
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const x = useTransform(scrollYProgress, [midExit, end], [0, card.exitX]);

                 // Rotation & Twist
                 // Stable during read, dramatic twist on exit
                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const rotate = useTransform(scrollYProgress, [start, midExit, end], [card.rotation, card.rotation, card.rotation * 4]);

                 // eslint-disable-next-line react-hooks/rules-of-hooks
                 const scale = useTransform(scrollYProgress, [midExit, end], [1, 0.8]);

                 return (
                     <motion.div
                        key={card.id}
                        style={{ 
                            y, 
                            x,
                            rotate,
                            opacity,
                            scale,
                            ...card.position 
                        }}
                        className="absolute w-[90vw] md:w-[450px] p-10 rounded-[2rem] z-20 group"
                     >
                         {/* Deep Onyx Card Style */}
                         <div className="absolute inset-0 bg-[#0A0A0A] opacity-95 rounded-[2rem] border border-[#FF3333]/20" />
                         
                         {/* Inner Glow */}
                         <div className="absolute inset-0 bg-radial-gradient from-[#FF3333]/10 to-transparent opacity-30 rounded-[2rem]" />

                         <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-3xl font-bold text-white tracking-tighter uppercase">{card.title}</h3>
                                <span className="text-[#FF3333] font-mono text-xl tracking-widest">{`[${card.id}]`}</span>
                            </div>
                            <p className="font-mono text-sm text-gray-400 leading-relaxed uppercase tracking-wide">
                                {card.desc}
                            </p>
                         </div>
                     </motion.div>
                 )
              })}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
