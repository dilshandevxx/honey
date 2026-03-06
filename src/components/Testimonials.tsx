"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just build a website; they built a revenue engine. The ROI was immediate.",
    author: "Sarah Jenkins",
    role: "CEO, FinTech Global",
  },
  {
    quote: "NEXUS operates at a different speed. What used to take months, they delivered in weeks. Truly elite.",
    author: "Marcus Thorne",
    role: "Founder, Velocity Apps",
  },
  {
    quote: "The design quality is unmatched. We are finally seen as the premium brand we actually are.",
    author: "Elena Rodriguez",
    role: "CMO, LuxEstate",
  }
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#030303] text-white py-32 relative overflow-hidden">
      
      {/* Background Ambience Removed for Ultra-Minimalism */}
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Simple, Elegant Header */}
        <div className="mb-24 flex flex-col items-center text-center">
            <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.4em] uppercase mb-8 flex items-center gap-6">
                <span className="w-12 h-px bg-white/20" />
                CLIENT STORIES
                <span className="w-12 h-px bg-white/20" />
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-bold tracking-tighter leading-none text-white uppercase">
                Voices from the<br/> Vanguard.
            </h2>
        </div>

        {/* Ultra-Minimalist Vertical List */}
        <div className="flex flex-col w-full">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 1, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 py-16 md:py-20 border-t border-white/10 group hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-default"
            >
               {/* Left: The Quote */}
               <div className="md:w-2/3 relative">
                   <div className="absolute -left-6 md:-left-10 top-0 text-white/10 group-hover:text-white/20 transition-colors duration-500">
                       <Quote className="w-8 h-8 md:w-12 md:h-12" />
                   </div>
                   <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.3] text-white/80 group-hover:text-white transition-colors duration-500">
                     "{t.quote}"
                   </p>
               </div>

               {/* Right: Author & Role */}
               <div className="md:w-1/3 flex flex-col justify-start md:border-l border-white/10 md:pl-8 pt-4 md:pt-0 mt-8 md:mt-0">
                   <h4 className="font-sans font-bold text-white text-lg tracking-tight mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">{t.author}</h4>
                   <p className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest leading-[1.8]">
                     {t.role}
                   </p>
               </div>
               
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
