"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import StarWarp from "@/components/StarWarp";

const allProjects = [
  {
    id: "01",
    title: "NEURAL SEARCH",
    category: "AI SaaS",
    image: "/placeholder-1.jpg",
    tags: ["Generative AI", "Python", "React"],
    year: "2024"
  },
  {
    id: "02",
    title: "PREDICTIVE FLOW",
    category: "Machine Learning",
    image: "/placeholder-2.jpg",
    tags: ["ML", "Data Science", "Dashboard"],
    year: "2023"
  },
  {
    id: "03",
    title: "SYNTHETIC VISION",
    category: "Computer Vision",
    image: "/placeholder-3.jpg",
    tags: ["Computer Vision", "Edge IoT"],
    year: "2023"
  },
  {
    id: "04",
    title: "FINTECH CORE",
    category: "Web App",
    image: "",
    tags: ["Next.js", "Banking", "Security"],
    year: "2024"
  },
  {
    id: "05",
    title: "HEALTH PULSE",
    category: "Mobile",
    image: "",
    tags: ["iOS", "HealthKit", "React Native"],
    year: "2022"
  },
  {
    id: "06",
    title: "ECOM ENGINE",
    category: "Web Platform",
    image: "",
    tags: ["Shopify Headless", "Next.js", "Analytics"],
    year: "2023"
  }
];

const filters = ["ALL", "AI/ML", "WEB", "MOBILE"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Filter logic
  const filteredProjects = allProjects.filter(p => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "AI/ML") return ["AI SaaS", "Machine Learning", "Computer Vision"].includes(p.category);
    if (activeFilter === "WEB") return ["Web App", "Web Platform"].includes(p.category);
    if (activeFilter === "MOBILE") return ["Mobile"].includes(p.category);
    return true;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-honey-blue selection:text-black relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-40">
        <StarWarp speed={0.2} />
      </div>

      <div className="relative z-10">
        <Header />
        
        <section className="pt-48 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Title */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="mb-24"
            >
              <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-6">
                SELECTED<br/>
                <span className="text-transparent stroke-text hover:text-white transition-colors duration-700">WORKS</span>
              </h1>
              <p className="max-w-xl text-xl text-white/50 font-light">
                A curation of digital products, AI systems, and interactive experiences engineered for the next generation of the web.
              </p>
            </motion.div>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-4 mb-24 sticky top-24 z-20 mix-blend-difference">
              <div className="p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex gap-2">
                {filters.map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className="relative px-6 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-colors"
                  >
                    {activeFilter === filter && (
                      <motion.div 
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors ${activeFilter === filter ? "text-black font-bold" : "text-white/60 hover:text-white"}`}>
                      {filter}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                  >
                    <Link 
                      href={`#`} 
                      className="group block"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {/* Card Container */}
                      <div className="relative w-full aspect-[4/3] bg-neutral-900/50 backdrop-blur-sm border border-white/5 overflow-hidden rounded-sm mb-6 transition-all duration-500 group-hover:border-honey-blue/30">
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                        
                        {/* Active Glow */}
                        <div className="absolute inset-0 bg-honey-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Image Placeholder / Content */}
                        <motion.div 
                          className="absolute inset-0 flex flex-col items-center justify-center text-white/20 z-0"
                          animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                          transition={{ duration: 0.7 }}
                        >
                            <span className="font-mono text-xs mb-2">PROJECT_{project.id}</span>
                            <div className="w-16 h-16 border border-current rounded-full flex items-center justify-center">
                                <span className="text-2xl">+</span>
                            </div>
                        </motion.div>

                        {/* Top Right ID */}
                        <div className="absolute top-4 right-4 z-20">
                            <span className="font-mono text-xs text-white/40 border border-white/10 px-2 py-1 rounded-sm bg-black/50 backdrop-blur-md">
                                {project.id}
                            </span>
                        </div>

                        {/* Bottom Info (Slide Up effect) */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <div className="flex justify-between items-end">
                                <span className="font-mono text-honey-blue text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.year} • View Case Study
                                </span>
                             </div>
                        </div>
                      </div>
                      
                      {/* Metadata below card */}
                      <div className="flex justify-between items-start pl-1">
                          <div>
                              <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-honey-blue transition-colors duration-300">
                                {project.title}
                              </h3>
                              <div className="flex gap-2">
                                  {project.tags.map(tag => (
                                      <span key={tag} className="text-[10px] font-mono tracking-wider text-white/40 uppercase">
                                        / {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                          <span className="text-sm text-white/30 font-light">{project.category}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
