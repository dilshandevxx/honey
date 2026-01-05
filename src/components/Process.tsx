"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="w-full bg-[#030303] text-white py-48 relative overflow-hidden" id="process">
      
      {/* Moving Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <motion.div 
            style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]) }}
            className="absolute left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-honey-blue/10 rounded-full blur-[150px] mix-blend-screen transition-all duration-100 ease-linear" 
          />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-40">
            <span className="font-mono text-xs text-honey-blue tracking-[0.2em] uppercase block mb-6">
                 [ The Path ]
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase">
                 From Idea <span className="italic font-serif text-white/50">To Impact</span>
            </h2>
        </div>

        {/* Vertical Steps */}
        <div className="flex flex-col gap-32 md:gap-48">
            {steps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0.2, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.8 }}
                    className="group relative text-center"
                >
                    {/* Background Light Scale Trigger */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] bg-transparent" />

                    <div className="relative inline-block">
                        {/* Huge Number */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-serif text-white/[0.03] select-none -z-10 group-hover:text-white/[0.05] transition-colors duration-700">
                            {step.id}
                        </span>

                        {/* Title */}
                        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8 group-hover:text-honey-blue transition-colors duration-500">
                            {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="max-w-md mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                            {step.description}
                        </p>
                    </div>

                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
