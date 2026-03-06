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
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row items-end justify-between gap-8 md:gap-0 relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-sm text-honey-blue tracking-[0.2em] uppercase block mb-12 flex items-center gap-4">
                 <span className="w-8 h-[1px] bg-honey-blue/50" /> CLIENT STORIES
              </span>
              <h2 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] uppercase">
                 <span className="bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent drop-shadow-sm font-sans">
                   Voices from the
                 </span>
                 <br/>
                 <span className="font-mono italic lowercase bg-gradient-to-r from-honey-blue via-cyan-400 to-honey-blue bg-clip-text text-transparent opacity-90 pb-2 drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                   vanguard.
                 </span>
              </h2>
            </div>
            <div className="hidden lg:block mb-4">
                 <p className="font-mono text-xs text-white/30 uppercase tracking-[0.2em] text-right leading-[2] border-l border-white/5 pl-8 border-b pb-4">
                     Trusted by Industry Leaders<br/>
                     Global Impact
                 </p>
            </div>
        </div>

        {/* Ultra-Minimalist List Layout */}
        <div className="flex flex-col border-t border-white/10 mt-16 md:mt-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 md:py-24 border-b border-white/10"
            >
               {/* Left/Top: Author & Role */}
               <div className="lg:col-span-4 flex flex-col justify-start">
                   <h4 className="font-bold text-white text-xl md:text-2xl tracking-tight mb-2 opacity-50 group-hover:opacity-100 transition-opacity duration-700">{t.author}</h4>
                   <p className="font-mono text-xs md:text-sm text-white/30 uppercase tracking-widest">
                     {t.role}
                   </p>
               </div>
               
               {/* Right/Bottom: The Quote */}
               <div className="lg:col-span-8 relative">
                   <div className="absolute -top-6 -left-6 md:-left-12 opacity-10 text-white pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
                       <Quote className="w-12 h-12 md:w-16 md:h-16" />
                   </div>
                   <p className="text-3xl md:text-[3.5rem] font-sans font-light tracking-tight leading-[1.2] text-white/90 group-hover:text-white transition-colors duration-700 max-w-5xl">
                     "{t.quote}"
                   </p>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
