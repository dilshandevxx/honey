"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Expanded dummy data for the dedicated page
const allProjects = [
  {
    id: "01",
    title: "NEURAL SEARCH",
    category: "AI SaaS Platform",
    client: "Nexus Corp",
    year: "2024",
    image: "/images/project_brutal_1.png", 
  },
  {
    id: "02",
    title: "PREDICTIVE FLOW",
    category: "Machine Learning",
    client: "Global Logistics",
    year: "2024",
    image: "/images/project_brutal_2.png",
  },
  {
    id: "03",
    title: "SYNTHETIC VISION",
    category: "Computer Vision",
    client: "Aura Dynamics",
    year: "2023",
    image: "/images/project_brutal_3.png",
  },
  {
    id: "04",
    title: "QUANTUM LEDGER",
    category: "Web3 Infrastructure",
    client: "Nova Chain",
    year: "2023",
    image: "/images/project_brutal_1.png", // Reusing image placeholder for demo
  },
  {
    id: "05",
    title: "AESTHETIC PROTOCOL",
    category: "Brand & Commerce",
    client: "Vogue Labs",
    year: "2023",
    image: "/images/project_brutal_2.png",
  },
  {
    id: "06",
    title: "SIGNAL INTELLIGENCE",
    category: "Data Visualization",
    client: "Apex Financial",
    year: "2022",
    image: "/images/project_brutal_3.png",
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-white selection:text-black">
      <Header />

      {/* Projects Header */}
      <section className="w-full pt-48 pb-24 px-6 md:px-12 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            <div className="flex flex-col">
                <Link href="/" className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors mb-12 w-fit">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                        <ArrowLeft className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">BACK TO INDEX</span>
                </Link>

                <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-bold tracking-tighter leading-[0.85] uppercase">
                    ALL<br />
                    <span className="text-white/40 italic font-serif lowercase">output.</span>
                </h1>
            </div>

            <div className="max-w-xs">
                <p className="font-mono text-xs leading-[2] text-white/50 border-l border-white/20 pl-6">
                    An archive of uncompromising digital products, built for market leaders who demand velocity and aesthetic perfection.
                </p>
            </div>

         </div>
      </section>

      {/* Massive Project Grid */}
      <section className="w-full px-6 md:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto flex flex-col border-t border-white/10">
            {allProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="group flex flex-col md:flex-row border-b border-white/10 py-12 md:py-24 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer px-4 -mx-4"
                >
                    {/* Left: Meta */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0 flex flex-col justify-between">
                        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-4">
                            [ {project.id} ]
                        </span>
                        
                        <div className="mt-auto">
                            <span className="block font-mono text-xs text-white/50 mb-2 uppercase tracking-widest">{project.client}</span>
                            <span className="block font-mono text-[10px] text-white/30 uppercase tracking-widest">{project.year}</span>
                        </div>
                    </div>

                    {/* Middle: Title & Image */}
                    <div className="w-full md:w-2/4 flex flex-col pe-0 md:pe-12">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-8 group-hover:translate-x-4 transition-transform duration-700">
                            {project.title}
                        </h2>
                        
                        <div className="w-full aspect-video bg-[#050505] relative overflow-hidden rounded-sm border border-white/5 mt-auto">
                             <motion.div
                               variants={{ hover: { scale: 1.05 } }}
                               transition={{ duration: 1.5, ease: "easeOut" }}
                               className="w-full h-full relative"
                             >
                               <Image 
                                 src={project.image} 
                                 alt={project.title}
                                 fill
                                 className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale"
                               />
                             </motion.div>
                             <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none opacity-50" />
                        </div>
                    </div>

                    {/* Right: Category & View Button */}
                    <div className="w-full md:w-1/4 mt-8 md:mt-0 flex flex-row md:flex-col justify-between items-end md:items-end">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 md:mb-auto">
                            /// {project.category}
                        </span>
                        
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                            <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-black transition-colors duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
