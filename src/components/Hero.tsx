"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-honey-blue/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center space-y-12">
        {/* Top Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-sm tracking-[0.2em] text-honey-blue/80 uppercase"
        >
          Generative AI & Future Tech
        </motion.p>

        {/* Central Geometric Element (Replacing 3D for now) */}
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
        >
            <div className="absolute inset-0 border border-honey-blue/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-honey-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-32 h-32 bg-gradient-to-br from-honey-dark to-honey-black border border-honey-blue/50 rounded-full shadow-[0_0_50px_rgba(0,255,255,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 bg-honey-blue rounded-full shadow-[0_0_20px_#00FFFF]" />
            </div>
        </motion.div>

        {/* Big Headline */}
        <div className="relative">
            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white"
            >
            ENGINEERING
            <br />
            INTELLIGENCE
            </motion.h1>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group relative px-8 py-4 bg-honey-red text-white font-mono font-bold tracking-widest uppercase overflow-hidden hover:bg-white hover:text-honey-black transition-colors duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-10 hidden md:block"
      >
        <span className="font-mono text-xs text-white/50 flex items-center gap-2">
            <span className="w-10 h-[1px] bg-white/20" /> SCROLL
        </span>
      </motion.div>
    </section>
  );
}
