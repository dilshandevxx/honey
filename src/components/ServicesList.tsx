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
    <section className="relative w-full bg-transparent py-32 px-4 md:px-12 z-0 pb-64">
      <div className="max-w-7xl mx-auto flex flex-col gap-0 relative z-10">
        <div className="mb-20 pl-1 border-l border-honey-blue/30">
             <h2 className="text-sm font-mono tracking-widest text-honey-blue uppercase pl-4">Process / Capabilities</h2>
        </div>

        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="group relative flex flex-col md:flex-row items-baseline justify-between border-t border-white/10 py-16 transition-all duration-500 cursor-none"
            onMouseEnter={() => setActiveService(index)}
            onMouseLeave={() => setActiveService(null)}
          >
            {/* Hover Background */}
            <div className="absolute inset-0 -mx-6 px-6 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500 rounded-sm" />
            
            {/* Left: Phase & Title */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 relative z-10 pointer-events-none pl-6 md:pl-0">
                 <div className="flex items-center gap-4">
                     <span className="font-mono text-honey-dim text-xs tracking-widest opacity-50 group-hover:text-honey-blue transition-colors">{service.phase}</span>
                     <div className="h-[1px] w-12 bg-white/10 group-hover:w-24 group-hover:bg-honey-blue/50 transition-all duration-500" />
                 </div>
                 <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white group-hover:text-transparent group-hover:stroke-text transition-all duration-300">
                    {service.title}
                 </h3>
            </div>

            {/* Right: Description & Tags */}
             <div className="w-full md:w-1/3 flex flex-col gap-8 mt-8 md:mt-0 relative z-10 pointer-events-none pl-6 md:pl-0">
                <p className="text-lg text-white/60 font-light leading-relaxed group-hover:text-white/90 transition-colors">
                    {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/10 rounded-sm text-[10px] font-mono text-white/40 uppercase bg-black/20 group-hover:border-white/20 group-hover:text-white/70 transition-colors">
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
        className="fixed top-0 left-0 w-[400px] h-[500px] pointer-events-none z-[50] hidden md:block overflow-hidden"
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
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute inset-0 bg-neutral-900 border border-white/10 shadow-2xl shadow-black/80"
                >
                    <Image 
                        src={services[activeService].image} 
                        alt={services[activeService].title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        priority
                    />
                    
                    {/* Overlay Graphics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 border border-white/5 m-2" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                         <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                             <span className="font-mono text-honey-blue text-xs uppercase tracking-widest">{services[activeService].phase}</span>
                             <span className="font-mono text-white/40 text-xs">0{activeService + 1}/04</span>
                         </div>
                         <h4 className="text-2xl font-bold uppercase">{services[activeService].title}</h4>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
