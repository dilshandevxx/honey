"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "NEURAL SEARCH",
    category: "AI SaaS Platform",
    description: "Enterprise semantic search engine capable of indexing millions of documents with sub-second hybrid retrieval.",
    image: "/images/project_brutal_1.png", 
  },
  {
    id: "02",
    title: "PREDICTIVE FLOW",
    category: "Machine Learning",
    description: "Supply chain optimization tool reducing logistics overhead by 30% using custom time-series forecasting models.",
    image: "/images/project_brutal_2.png",
  },
  {
    id: "03",
    title: "SYNTHETIC VISION",
    category: "Computer Vision",
    description: "Automated QC system for manufacturing lines using edge-deployed object detection models.",
    image: "/images/project_brutal_3.png",
  },
];

export default function WorkList() {
  return (
    <section className="w-full bg-honey-black py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative flex flex-col md:flex-row gap-12 md:gap-24 border-t border-white/10 pt-12">
            
            {/* Sticky/Pinned Number */}
            <div className="md:w-1/4 md:sticky md:top-32 h-fit mb-8 md:mb-0">
              <span className="text-8xl md:text-9xl font-bold text-transparent hover:text-white transition-colors duration-500 stroke-text outline-text block">
                {project.id}
              </span>
            </div>

            {/* Content */}
            <div className="md:w-3/4 flex flex-col gap-8">
               <div className="flex flex-col gap-2">
                 <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{project.title}</h2>
                 <span className="font-mono text-honey-blue text-sm tracking-widest uppercase">{project.category}</span>
               </div>
               
               <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
                 {project.description}
               </p>

               <motion.div 
                 whileHover="hover"
                 className="w-full aspect-video bg-neutral-900 rounded-sm overflow-hidden relative cursor-pointer border border-white/5"
               >
                 <motion.div
                   variants={{ hover: { scale: 1.02 } }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="w-full h-full relative"
                 >
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover opacity-80"
                   />
                 </motion.div>
                 
                 {/* Internal Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none" />
               </motion.div>
            </div>
            
          </div>
        ))}

        {/* View All Output Link */}
        <div className="flex justify-center mt-32 pt-16 border-t border-white/5">
            <Link 
                href="/projects"
                className="group flex flex-col items-center gap-6 cursor-pointer"
            >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-black transition-colors duration-500 group-hover:-rotate-45" />
                </div>
                <span className="font-mono text-xs text-white/40 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500">
                    View All Output
                </span>
            </Link>
        </div>

      </div>
    </section>
  );
}
