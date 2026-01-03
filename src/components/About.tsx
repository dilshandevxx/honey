"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section ref={containerRef} className="w-full py-32 px-6 md:px-12 flex flex-col md:flex-row gap-16 justify-between items-start">
      <div className="md:w-1/3">
        <span className="font-mono text-honey-blue text-xs tracking-widest uppercase mb-4 block pl-4 border-l border-honey-blue/50">
            Our Mission
        </span>
      </div>
      
      <div className="md:w-2/3">
        <motion.div 
            style={{ opacity, y }}
            className="flex flex-col gap-8"
        >
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] text-white tracking-tighter">
              We empower businesses to <span className="text-honey-blue">adapt to the future</span>.
          </p>
          <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed">
              From Generative AI to intelligent software systems, we build the tools you need to stay ahead.
              Bridging the gap between <span className="text-white font-medium">human potential</span> and artificial intelligence.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap gap-4">
             {["Our Story", "Full Capabilities", "The Team"].map((item) => (
                <div key={item} className="group relative px-8 py-4 border border-white/10 overflow-hidden cursor-pointer bg-white/5 hover:border-honey-blue/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-honey-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                        {item}
                    </span>
                </div>
             ))}
        </div>
      </div>
    </section>
  );
}
