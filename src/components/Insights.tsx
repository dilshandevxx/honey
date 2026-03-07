"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: "10.24.2024",
    title: "The Death of the Traditional Dashboard",
    readTime: "4 MIN READ",
    href: "#",
  },
  {
    date: "09.12.2024",
    title: "Why Speed is the Ultimate B2B Metric",
    readTime: "6 MIN READ",
    href: "#",
  },
  {
    date: "08.05.2024",
    title: "Brutalist UX: Engineering Trust through Frictionless Design",
    readTime: "8 MIN READ",
    href: "#",
  }
];

export default function Insights() {
  return (
    <section className="w-full bg-[#020202] text-white py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-12">
            <div>
                <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-[0.4em] uppercase mb-8 flex items-center gap-6">
                    <span className="w-12 h-px bg-white/20" />
                    THE JOURNAL
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-[7vw] font-bold tracking-tighter leading-[0.85] drop-shadow-md text-white">
                    Insights from<br /> 
                    <span className="text-white/40">the edge.</span>
                </h2>
            </div>
            
            <div className="mt-12 md:mt-0">
                <a href="#" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors flex items-center gap-4 group pb-4 border-b border-white/10 hover:border-white">
                    READ ALL OUTPUT
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white transition-all duration-300 group-hover:-rotate-45" />
                </a>
            </div>
        </div>

        {/* Minimalism List */}
        <div className="flex flex-col border-t border-white/5">
            {articles.map((article, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                    <a href={article.href} className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4">
                        
                        {/* Meta Data (Left) */}
                        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex md:flex-col justify-between md:justify-start">
                            <span className="font-mono text-xs text-white/40 tracking-widest">{article.date}</span>
                            <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase md:mt-2">{article.readTime}</span>
                        </div>
                        
                        {/* Title (Center) */}
                        <div className="w-full md:w-2/4 mb-6 md:mb-0">
                            <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                                {article.title}
                            </h3>
                        </div>
                        
                        {/* Arrow (Right) */}
                        <div className="w-full md:w-1/4 flex justify-end md:justify-end">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-black transition-colors duration-500 group-hover:-rotate-45" />
                            </div>
                        </div>

                    </a>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
