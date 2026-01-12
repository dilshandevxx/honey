"use client";

import { motion } from "framer-motion";
import { ArrowIcons } from "lucide-react"; // Note: ArrowIcons isn't real, fixing imports
import { ArrowUpRight, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-white pt-24 pb-8 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-honey-red/10 via-honey-blue/5 to-transparent blur-[100px] pointer-events-none" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-between min-h-[60vh]">
            
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
                
                {/* Brand & Newsletter */}
                <div className="md:col-span-5 flex flex-col gap-8">
                    <h3 className="text-3xl font-light tracking-tight">Stay ahead of the curve.</h3>
                    <div className="relative max-w-md">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Sitemaps */}
                <div className="md:col-span-2 md:col-start-7">
                    <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Sitemap</h4>
                    <ul className="space-y-3">
                        {["Work", "Services", "About", "Contact", "Careers"].map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Socials</h4>
                    <ul className="space-y-3">
                        {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-2 md:col-start-11">
                     <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Legal</h4>
                    <ul className="space-y-3">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                            <li key={item}>
                                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom Section - Masked Typography */}
            <div className="mt-auto">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
                
                <div className="flex flex-col md:flex-row items-end justify-between">
                     <div className="flex gap-4 font-mono text-[10px] uppercase text-white/30 tracking-widest mb-4 md:mb-0">
                         <span>© 2024 Nexus Agency</span>
                         <span>All Rights Reserved</span>
                     </div>

                     {/* Radiant Text */}
                     <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter select-none pb-4 bg-gradient-to-br from-white via-white/50 to-white/10 bg-clip-text text-transparent opacity-80 backdrop-blur-sm">
                        NEXUS
                     </h1>
                </div>
            </div>

        </div>
    </footer>
  );
}
