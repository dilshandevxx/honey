"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "Next.js", logo: "Next.js" },
  { name: "React", logo: "React" },
  { name: "TypeScript", logo: "TypeScript" },
  { name: "Tailwind", logo: "Tailwind" },
  { name: "Framer Motion", logo: "Framer" },
  { name: "Node.js", logo: "Node" },
  { name: "Vercel", logo: "Vercel" },
  { name: "Three.js", logo: "Three.js" },
];

export default function TechStack() {
  return (
    <section className="w-full py-12 bg-black overflow-hidden border-b border-white/5 relative z-20">
      <div className="container mx-auto px-4 mb-8 text-center">
         <p className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em]">
             Partners in Crime
         </p>
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden mask-gradient-x">
        <motion.div
          className="flex items-center gap-16 md:gap-24 pl-16 md:pl-24"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, 
          }}
        >
          {/* Quadruple the list for ultra-smooth seamless loop on wide screens */}
          {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-default">
                {/* 
                   Using text as logos to ensure clean look without external assets.
                   Styled to look like wordmarks.
                */}
                <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
                    {tech.logo}
                </span>
                
                {/* Optional: Small dot separator or icon placeholder if needed */}
                {/* <div className="w-1 h-1 bg-gray-800 rounded-full" /> */}
            </div>
          ))}
        </motion.div>
        
        {/* Fog Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
