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
    <section ref={containerRef} className="w-full py-32 px-6 md:px-12 flex flex-col md:flex-row gap-16 justify-between items-start bg-honey-black">
      <div className="md:w-1/3">
        <span className="font-mono text-honey-blue text-sm tracking-widest uppercase mb-4 block">
            Our Mission
        </span>
      </div>
      
      <div className="md:w-2/3">
        <motion.p 
            style={{ opacity, y }}
            className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white"
        >
            We empower businesses to <span className="text-honey-blue">adapt to the future</span>. 
            From Generative AI to intelligent software systems, we build the tools you need to stay ahead.
            <br/><br/>
            Bridging the gap between <span className="text-transparent stroke-text">human potential</span> and artificial intelligence.
        </motion.p>

        <div className="mt-16 flex gap-4">
             <div className="px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                Our Story
             </div>
             <div className="px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                Full Capabilities
             </div>
        </div>
      </div>
    </section>
  );
}
