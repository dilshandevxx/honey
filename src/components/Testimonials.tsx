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
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-honey-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-honey-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-32 flex flex-col md:flex-row items-end justify-between">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-honey-red tracking-[0.2em] uppercase block mb-6">
                 [ Client Stories ]
              </span>
              <h2 className="text-5xl md:text-8xl font-light tracking-tighter">
                 Voices form the <br/>
                 <span className="italic font-serif text-white/50">Vanguard.</span>
              </h2>
            </div>
            <div className="hidden md:block mb-4">
                 <p className="font-mono text-xs text-white/40 uppercase tracking-widest text-right">
                     Trusted by Industry Leaders<br/>
                     Global Impact
                 </p>
            </div>
        </div>

        {/* Offset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative p-10 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:bg-white/[0.04] transition-colors duration-700 ${index === 1 ? 'md:translate-y-24' : ''}`}
            >
               {/* Hover Gradient Border Effect (Simulated via inset shadow or overlay) */}
               <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-white/10 transition-colors duration-700 pointer-events-none" />
               
               {/* Quote Icon */}
               <div className="mb-12 opacity-20 group-hover:opacity-100 group-hover:text-honey-red transition-all duration-500">
                   <Quote className="w-8 h-8 md:w-12 md:h-12" />
               </div>

               {/* Content */}
               <div className="relative z-10">
                   <p className="text-2xl md:text-3xl font-serif leading-snug text-white/90 mb-12 group-hover:text-white transition-colors duration-500">
                     "{t.quote}"
                   </p>
                   
                   <div className="flex items-center gap-4">
                       <div className="h-px w-8 bg-honey-red/50" />
                       <div>
                           <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t.author}</h4>
                           <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
                             {t.role}
                           </p>
                       </div>
                   </div>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
