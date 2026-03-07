"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Core glow behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-gradient-radial from-honey-blue/10 via-honey-blue/5 to-transparent rounded-full blur-[80px] animate-pulse-glow" />
        
        {/* Subtle accent glows for depth */}
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-honey-red/10 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-honey-blue/15 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10 w-full px-4">

        {/* Central Geometric Element */}
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
           className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 xl:w-64 xl:h-64 flex items-center justify-center group"
        >
            {/* Outer rings with glowing trails */}
            <div className="absolute inset-0 border border-honey-blue/20 rounded-full animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-transparent shadow-[0_0_40px_rgba(0,255,255,0.05)] animate-pulse" />
            
            <div className="absolute inset-4 md:inset-6 border border-honey-blue/15 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-4 md:inset-6 rounded-full border border-transparent shadow-[0_0_30px_rgba(0,255,255,0.05)] animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Inner Core */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 bg-gradient-to-br from-[#0a1128]/80 to-black/90 backdrop-blur-xl border border-honey-blue/30 rounded-full shadow-[0_0_60px_rgba(0,255,255,0.15)] flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(0,255,255,0.25)] group-hover:scale-105">
                {/* Core particle */}
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-cyan-300 rounded-full shadow-[0_0_25px_#00FFFF,inset_0_0_8px_#ffffff] animate-pulse" />
                
                {/* Micro orbiting particles */}
                <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
                     <div className="absolute top-1/2 left-0 -ml-1 w-1 h-1 bg-white/60 rounded-full shadow-[0_0_5px_#fff]" />
                </div>
            </div>
        </motion.div>

        {/* Big Headline */}
        <div className="relative w-full px-2 sm:px-0 z-10 flex flex-col items-center text-center mt-8 md:mt-12">
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14.5vw] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.85] font-bold tracking-tighter uppercase drop-shadow-md"
            >
              <span className="text-white">
                ENGINEERING
              </span>
              <br />
              <span className="text-white/40">
                INTELLIGENCE
              </span>
            </motion.h1>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="group relative px-8 py-4 sm:px-10 sm:py-5 mt-4 sm:mt-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-mono font-bold tracking-widest uppercase overflow-hidden hover:bg-white hover:text-black hover:border-white transition-all duration-500"
        >
          {/* Subtle button glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-honey-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10 flex items-center gap-3 text-sm sm:text-base">
            Start a Project
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />
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
