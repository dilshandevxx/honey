"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Revenue Generated", value: "$500M+" },
  { label: "Client Retention", value: "98%" },
  { label: "Avg Conversion Lift", value: "40%" },
  { label: "Projects Shipped", value: "100+" },
];

export default function SocialProof() {
  return (
    <section className="w-full bg-[#050505] text-white py-32 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-xs text-honey-red tracking-[0.2em] uppercase block mb-4">
             [ 07 / 09 ]
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
             Impact by the <span className="text-transparent stroke-text">Numbers</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 relative group overflow-hidden"
            >
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-radial-gradient from-honey-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="relative z-10">
                   <h3 className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-4 group-hover:text-honey-red transition-colors duration-300">
                     {stat.value}
                   </h3>
                   <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                     {stat.label}
                   </p>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
