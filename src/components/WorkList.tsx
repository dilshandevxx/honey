"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "NEURAL SEARCH",
    category: "AI SaaS Platform",
    description: "Enterprise semantic search engine capable of indexing millions of documents with sub-second hybrid retrieval.",
    image: "/placeholder-1.jpg", 
  },
  {
    id: "02",
    title: "PREDICTIVE FLOW",
    category: "Machine Learning",
    description: "Supply chain optimization tool reducing logistics overhead by 30% using custom time-series forecasting models.",
    image: "/placeholder-2.jpg",
  },
  {
    id: "03",
    title: "SYNTHETIC VISION",
    category: "Computer Vision",
    description: "Automated QC system for manufacturing lines using edge-deployed object detection models.",
    image: "/placeholder-3.jpg",
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
                 whileHover={{ scale: 0.98 }}
                 className="w-full aspect-video bg-white/5 rounded-sm border border-white/10 overflow-hidden relative cursor-pointer"
               >
                 {/* Placeholder for project image */}
                 <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
                   [PROJECT IMAGE {project.id}]
                 </div>
               </motion.div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
