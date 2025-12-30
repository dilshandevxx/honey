"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const allProjects = [
  {
    id: "01",
    title: "NEURAL SEARCH",
    category: "AI SaaS",
    image: "/placeholder-1.jpg",
    tags: ["Generative AI", "Python", "React"]
  },
  {
    id: "02",
    title: "PREDICTIVE FLOW",
    category: "Machine Learning",
    image: "/placeholder-2.jpg",
     tags: ["ML", "Data Science", "Dashboard"]
  },
  {
    id: "03",
    title: "SYNTHETIC VISION",
    category: "Computer Vision",
    image: "/placeholder-3.jpg",
     tags: ["Computer Vision", "Edge IoT"]
  },
  // Additional projects to fill the grid
  {
    id: "04",
    title: "FINTECH CORE",
    category: "Web App",
    image: "",
     tags: ["Next.js", "Banking", "Security"]
  },
    {
    id: "05",
    title: "HEALTH PULSE",
    category: "Mobile",
    image: "",
     tags: ["iOS", "HealthKit", "React Native"]
  },
  {
    id: "06",
    title: "ECOM ENGINE",
    category: "Web Platform",
    image: "",
     tags: ["Shopify Headless", "Next.js", "Analytics"]
  }
];

const filters = ["ALL", "AI/ML", "WEB", "MOBILE"];

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    // Simple mock filter logic
    const filteredProjects = allProjects.filter(p => {
        if (activeFilter === "ALL") return true;
        if (activeFilter === "AI/ML") return ["AI SaaS", "Machine Learning", "Computer Vision"].includes(p.category);
        if (activeFilter === "WEB") return ["Web App", "Web Platform"].includes(p.category);
        if (activeFilter === "MOBILE") return ["Mobile"].includes(p.category);
        return true;
    });

  return (
    <main className="min-h-screen bg-honey-black text-white selection:bg-honey-blue selection:text-black">
      <Header />
      
      <section className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16">
                SELECTED<br/><span className="text-transparent stroke-text">WORKS</span>
            </h1>

            {/* Filter Bar */}
            <div className="flex gap-8 mb-24 overflow-x-auto pb-4">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`font-mono text-sm tracking-widest uppercase transition-colors ${activeFilter === filter ? "text-honey-blue border-b border-honey-blue" : "text-white/50 hover:text-white"}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {filteredProjects.map((project) => (
                    <Link href={`#`} key={project.id} className="group cursor-pointer block">
                        <div className="w-full aspect-[4/3] bg-white/5 border border-white/10 mb-8 overflow-hidden relative">
                             <div className="absolute inset-0 bg-honey-blue/0 group-hover:bg-honey-blue/10 transition-colors duration-500" />
                             {/* Placeholder Text */}
                             <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white/20">
                                [IMAGE: {project.title}]
                             </div>
                        </div>
                        
                        <div className="flex justify-between items-start border-t border-white/20 pt-6">
                            <div>
                                <h3 className="text-3xl font-bold uppercase mb-2 group-hover:text-honey-blue transition-colors">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-white/50 border border-white/10 px-2 py-1 rounded-sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <span className="font-mono text-xs tracking-widest text-honey-blue">{project.id}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
