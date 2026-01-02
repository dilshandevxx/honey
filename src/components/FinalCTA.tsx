"use client";

import { motion } from "framer-motion";
// Assuming you have a Button component or using standard button for now. 
// Actually, I'll build a custom one here to match the vibe.

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#050505] text-white py-48 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] bg-honey-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-12">
            <span className="block text-transparent stroke-text">Project In</span>
            <span className="block text-white">Mind?</span>
        </h2>

        <div className="mt-12">
             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-honey-red text-black font-bold text-xl uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300"
            >
                Initiate Protocol
            </motion.button>
        </div>

      </div>
    </section>
  );
}
