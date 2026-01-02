"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    id: "01",
    phase: "PHASE 01",
    title: "STRATEGY",
    description: "We decode your market position and define the digital roadmap.",
    image: "https://picsum.photos/id/10/800/600", 
    tags: ["Brand Identity", "UX Research", "Technical Architecture"]
  },
  {
    id: "02",
    phase: "PHASE 02",
    title: "DESIGN",
    description: "Crafting interfaces that are as intuitive as they are beautiful.",
    image: "https://picsum.photos/id/14/800/600",
    tags: ["UI Systems", "Motion Design", "3D Visualization"]
  },
  {
    id: "03",
    phase: "PHASE 03",
    title: "ENGINEERING",
    description: "Building scalable, high-performance applications with modern stacks.",
    image: "https://picsum.photos/id/20/800/600",
    tags: ["Full Stack", "WebGL / Three.js", "AI Integration"]
  },
  {
    id: "04",
    phase: "PHASE 04",
    title: "GROWTH",
    description: "Launch strategies and data-driven iteration for maximum impact.",
    image: "https://picsum.photos/id/60/800/600",
    tags: ["Analytics", "Performance Tuning", "Scale"]
  }
];

export default function ServicesList() {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the preview image
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const previewX = useSpring(mouseX, springConfig);
  const previewY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const movePreview = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", movePreview);
    return () => window.removeEventListener("mousemove", movePreview);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full bg-honey-black py-40 px-4 md:px-12 z-0 pb-64">
      <div className="max-w-7xl mx-auto flex flex-col gap-0 relative z-10">
        <h2 className="text-sm font-mono tracking-widest text-honey-blue/50 uppercase mb-20 ml-1">Process / Capabilities</h2>

        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="group relative flex flex-col md:flex-row items-baseline justify-between border-t border-white/10 py-16 hover:bg-white/5 transition-colors duration-500 cursor-context-menu"
            onMouseEnter={() => setActiveService(index)}
            onMouseLeave={() => setActiveService(null)}
          >
            
            {/* Left: Phase & Title */}
            <div className="w-full md:w-1/2 flex flex-col gap-2 relative z-10 pointer-events-none">
                 <span className="font-mono text-honey-dim text-xs tracking-widest opacity-50">{service.phase}</span>
                 <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white group-hover:text-honey-blue transition-colors duration-300">
                    {service.title}
                 </h3>
            </div>

            {/* Right: Description & Tags */}
             <div className="w-full md:w-1/3 flex flex-col gap-6 mt-8 md:mt-0 relative z-10 pointer-events-none">
                <p className="text-lg text-white/60 font-light leading-relaxed">
                    {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-white/40 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>
             </div>

          </div>
        ))}
      </div>

      {/* Floating Preview (Desktop Only) */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[500px] pointer-events-none z-[50] hidden md:block overflow-hidden rounded-sm"
        style={{
            x: previewX,
            y: previewY,
            translateX: "10%",
            translateY: "-50%",
        }}
      >
        <AnimatePresence>
            {activeService !== null && (
                <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-honey-dark border border-honey-blue/20"
                >
                    <Image 
                        src={services[activeService].image} 
                        alt={services[activeService].title}
                        fill
                        className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-honey-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 font-mono text-honey-blue text-xs uppercase tracking-widest">
                        {services[activeService].phase} // ILLUSTRATION
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
