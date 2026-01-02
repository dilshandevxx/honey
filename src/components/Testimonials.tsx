"use client";

import { motion } from "framer-motion";

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
    <section className="w-full bg-[#050505] text-white py-32 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs text-honey-red tracking-[0.2em] uppercase block mb-4">
                 [ 08 / 09 ]
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                 Client <span className="text-transparent stroke-text">Stories</span>
              </h2>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 flex flex-col justify-between min-h-[400px] group hover:border-honey-red/30 transition-colors duration-500"
            >
               <div className="mb-8">
                   <div className="text-honey-red text-6xl font-serif leading-none opacity-50 mb-6">"</div>
                   <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                     {t.quote}
                   </p>
               </div>
               
               <div className="border-t border-white/10 pt-6">
                   <h4 className="font-bold text-white text-lg uppercase tracking-tight">{t.author}</h4>
                   <p className="font-mono text-xs text-honey-blue/80 uppercase tracking-widest mt-1">
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
