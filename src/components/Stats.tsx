"use client";

import { motion } from "framer-motion";

const stats = [
  {
    id: "01",
    value: "15+",
    label: "Years of Experience",
    suffix: ""
  },
  {
    id: "02",
    value: "200+",
    label: "Projects Shipped",
    suffix: ""
  },
  {
    id: "03",
    value: "500M",
    label: "User Interactions",
    suffix: "+"
  },
  {
    id: "04",
    value: "98%",
    label: "Client Retention",
    suffix: ""
  }
];

export default function Stats() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 opacity-50">
            <div className="h-[1px] w-12 bg-white" />
            <span className="font-mono text-xs uppercase tracking-widest text-white">Impact by the Numbers</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 border-t border-white/10 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col gap-2 group"
            >
              <span className="font-mono text-xs text-honey-blue/50 mb-2">{stat.id}</span>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white group-hover:text-honey-blue transition-colors duration-500">
                {stat.value}<span className="text-3xl text-white/40 ml-1">{stat.suffix}</span>
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-white/60 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
