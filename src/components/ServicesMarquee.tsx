"use client";

import { motion } from "framer-motion";

const services = ["WEB DEVELOPMENT", "MOBILE APPS", "GENERATIVE AI", "UI/UX DESIGN", "DEVOPS", "CLOUD SYSTEMS", "STRATEGY"];

export default function ServicesMarquee() {
  return (
    <section className="w-full py-24 overflow-hidden bg-honey-black">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex gap-16 md:gap-32 items-center"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, 
          }}
        >
          {/* Double the list to create seamless loop */}
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center gap-16 md:gap-32">
                <span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-transparent stroke-text hover:text-honey-blue transition-colors duration-300 cursor-default">
                    {service}
                </span>
                <div className="w-4 h-4 bg-white/20 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
