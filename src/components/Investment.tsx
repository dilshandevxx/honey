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

        {/* High-End Horizontal Tiers */}
        <div className="flex flex-col border-t border-white/10 mt-16">
            {tiers.map((tier, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="group border-b border-white/10 py-16 md:py-24 hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4 -mx-4"
                >
                    <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-8 lg:gap-16">
                        
                        {/* Target & Name */}
                        <div className="flex flex-col lg:w-1/2">
                            <span className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500" />
                                {tier.target}
                            </span>
                            <h3 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                                {tier.name}
                            </h3>
                        </div>

                        {/* Price & Description */}
                        <div className="flex flex-col lg:w-1/2 lg:text-right mt-8 lg:mt-0">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight mb-8 group-hover:text-white transition-colors duration-500">
                                {tier.price}
                            </span>
                            <p className="font-mono text-sm leading-[2] text-white/50 lg:ml-auto max-w-md group-hover:text-white/80 transition-colors duration-500">
                                {tier.description}
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
