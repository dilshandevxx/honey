"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-white pt-16 md:pt-24 pb-8 relative overflow-hidden border-t border-white/5">
        
        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-full h-[50vh] bg-gradient-to-t from-honey-blue/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-between min-h-[50vh]">
            
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-24">
                
                {/* Brand & Newsletter */}
                <div className="w-full md:w-1/3 flex flex-col gap-8">
                    <h3 className="text-4xl md:text-3xl font-light tracking-tight leading-tight">
                        Stay ahead of<br className="hidden md:block"/> the curve.
                    </h3>
                    <div className="relative w-full max-w-md mt-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-none px-6 py-4 md:py-3 text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/30 font-sans"
                        />
                        <button className="absolute right-0 top-0 bottom-0 px-6 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center">
                            Join
                        </button>
                    </div>
                </div>

                {/* Sitemaps */}
                {/* Sitemaps - Premium Mobile Accordion / Desktop Grid */}
                <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4 inline-block">Sitemap</h4>
                        <ul className="space-y-4">
                            {["Work", "Services", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase()}`} className="text-sm md:text-base font-light text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4 inline-block">Socials</h4>
                        <ul className="space-y-4">
                            {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm md:text-base font-light text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Full width on mobile, 3rd col on desktop */}
                    <div className="col-span-2 md:col-span-1 flex flex-col">
                         <h4 className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-4 inline-block">Legal</h4>
                        <ul className="space-y-4 flex flex-col md:block">
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm md:text-base font-light text-white/60 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

            {/* Bottom Section - Masked Typography */}
            <div className="mt-auto border-t border-white/10 pt-8 md:pt-12">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0">
                     
                     <div className="flex flex-col md:flex-row gap-2 md:gap-8 font-mono text-[10px] uppercase text-white/40 tracking-[0.2em] order-2 md:order-1 text-center md:text-left w-full md:w-auto">
                         <span>© {new Date().getFullYear()} Nexus.</span>
                         <span className="hidden md:inline">|</span>
                         <span>All Rights Reserved</span>
                     </div>

                     {/* Radiant Text tailored for mobile scale */}
                     <h1 className="text-[18vw] md:text-[12vw] leading-[0.75] font-bold tracking-tighter select-none bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent opacity-90 order-1 md:order-2 w-full md:w-auto text-center md:text-right">
                        NEXUS
                     </h1>
                </div>
            </div>

        </div>
    </footer>
  );
}
