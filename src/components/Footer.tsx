"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#000000] text-white pt-32 pb-12 relative overflow-hidden">
        
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[60vh]">
        
        {/* Top Section: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">
            
            {/* Contact - Taking prominent space */}
            <div className="md:col-span-6">
                <span className="block font-mono text-xs text-honey-red uppercase tracking-[0.2em] mb-8">
                   [ Start a Conversation ]
                </span>
                <a 
                    href="mailto:hello@nexus.agency" 
                    className="group block text-5xl md:text-7xl font-light tracking-tight hover:italic transition-all duration-500 ease-out"
                >
                    <span className="group-hover:text-honey-blue transition-colors duration-500">hello</span>
                    <span className="text-white/30 group-hover:text-white transition-colors duration-500">@nexus.agency</span>
                </a>
            </div>

            {/* Navigation - Minimalist List */}
            <div className="md:col-span-3 md:col-start-8">
                <span className="block font-mono text-xs text-white/40 uppercase tracking-[0.2em] mb-8">
                    Explore
                </span>
                <ul className="space-y-4">
                    {["Work", "Services", "About", "Contact"].map((item) => (
                        <li key={item}>
                             <a href={`/${item.toLowerCase()}`} className="group flex items-center gap-2 text-lg text-white/60 hover:text-white transition-colors">
                                <span className="uppercase tracking-widest text-xs font-mono opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-honey-red">//</span>
                                {item}
                             </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Socials - Minimalist List */}
            <div className="md:col-span-2">
                 <span className="block font-mono text-xs text-white/40 uppercase tracking-[0.2em] mb-8">
                    Follow
                </span>
                <ul className="space-y-4">
                    {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                        <li key={item}>
                             <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider font-mono">
                                {item}
                                <ArrowUpRight className="w-3 h-3 opacity-50" />
                             </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

        {/* Bottom Section: Massive Typography */}
        <div className="relative border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end">
            
            <div className="flex gap-8 mb-8 md:mb-0">
                <button onClick={scrollToTop} className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Back to Top
                </button>
                <span className="font-mono text-xs uppercase tracking-widest text-white/20">
                    © 2024 Nexus
                </span>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] w-full text-center pointer-events-none select-none mix-blend-difference">
                 <h1 className="text-[25vw] font-bold leading-none tracking-tighter text-white opacity-10">
                    NEXUS
                 </h1>
            </div>

        </div>

      </div>
    </footer>
  );
}
