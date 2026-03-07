"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    target: "STARTUPS & SCALE-UPS",
    name: "Venture Velocity",
    price: "From $20k",
    description: "Rapid deployment of high-performance digital assets designed specifically for funding rounds and aggressive market entry. Speed without compromise.",
  },
  {
    target: "ENTERPRISE & GLOBAL",
    name: "Digital Transformation",
    price: "From $75k",
    description: "Total overhaul of user experience, frontend architecture, and brand positioning. For market leaders requiring complex, scalable systems built with ruthless precision.",
  }
];

export default function Investment() {
  return (
    <section className="w-full bg-[#050505] text-white py-32 px-6 lg:px-12 relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32">
            <div>
                <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase mb-8 flex items-center gap-6">
                    <span className="w-12 h-px bg-white/20" />
                    THE INVESTMENT
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-[0.9] text-white uppercase drop-shadow-md">
                    Premium Quality.<br/> 
                    <span className="text-white/40">zero compromises.</span>
                </h2>
            </div>
            <div className="max-w-xs mt-12 md:mt-0">
                <p className="font-mono text-xs md:text-sm leading-[1.8] text-white/50 border-l border-white/20 pl-6">
                    We do not compete on price. We compete on speed, precision, and ROI.
                </p>
            </div>
        </div>

        {/* High-End Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mt-16 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="group border border-white/10 p-10 md:p-16 hover:bg-white/[0.02] transition-colors duration-500 cursor-default flex flex-col relative overflow-hidden bg-[#030303]"
                >
                    {/* Subtle Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Top Label */}
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-12 flex items-center gap-4 relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500" />
                        {tier.target}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-8 relative z-10">
                        {tier.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline mb-12 relative z-10">
                        <span className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:scale-105 origin-left transition-transform duration-500">
                            {tier.price}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10 mt-auto mb-8 relative z-10" />

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base leading-[2] text-white/50 group-hover:text-white/80 transition-colors duration-500 relative z-10">
                        {tier.description}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
