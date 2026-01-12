"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We immerse ourselves in your world. Uncovering hidden truths, defining the audience, and setting the North Star.",
  },
  {
    id: "02",
    title: "Strategy",
    description: "The blueprint for victory. We map user journeys, technical architecture, and the path of least resistance to impact.",
  },
  {
    id: "03",
    title: "Design",
    description: "Visual systems that breathe. We craft interfaces that feel inevitable, blending beauty with brutalist functionality.",
  },
  {
    id: "04",
    title: "Development",
    description: "Code as craft. We build scalable, bulletproof engines using modern stacks that prioritize speed and security.",
  },
  {
    id: "05",
    title: "Evolution",
    description: "Launch is day one. We iterate based on real-world data, ensuring your product grows sharper with time.",
  }
];

export default function Process() {
  return (
    <section className="w-full bg-[#050505] text-white py-32 md:py-48 relative overflow-hidden" id="process">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }} 
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-8 border-b border-white/10 pb-12">
            <div>
                <span className="font-mono text-sm text-white/40 tracking-widest uppercase block mb-4">
                     // The Path
                </span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
                     From Idea
                     <br />
                     <span className="text-white/30">To Impact</span>
                </h2>
            </div>
            <div className="max-w-md pb-2">
                <p className="text-white/60 text-lg leading-relaxed">
                    A systematic approach to chaos. We turn abstract concepts into tangible digital dominance through a five-stage refinement cycle.
                </p>
            </div>
        </div>

        {/* Vertical Steps */}
        <div className="grid grid-cols-1 gap-0 border-l border-white/10">
            {steps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative pl-8 md:pl-16 py-16 md:py-20 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-500"
                >
                    {/* Active Line Indicator */}
                    <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-24">
                        
                        {/* Number */}
                        <div className="flex-shrink-0">
                            <span className="font-mono text-xs md:text-sm text-white/30 tracking-widest group-hover:text-white transition-colors duration-300">
                                /{step.id}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                             <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                {step.title}
                             </h3>
                             <p className="max-w-xl text-lg text-white/50 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                                {step.description}
                             </p>
                        </div>

                    </div>

                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
