"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const capabilities = [
  {
    title: "GENERATIVE AI",
    description: "Custom Large Language Model (LLM) integration, RAG pipelines, and autonomous agents that revolutionize specific business workflows.",
    tags: ["Custom LLMs", "AI Agents", "RAG Systems", "Automation"]
  },
  {
    title: "WEB & MOBILE APPS",
    description: "High-performance digital products built for scale. From complex web platforms to native mobile applications, we engineer for the future.",
    tags: ["Full-Stack Dev", "iOS & Android", "React & Next.js", "PWA"]
  },
  {
    title: "MACHINE LEARNING",
    description: "Predictive analytics and computer vision models trained on your proprietary data to uncover insights and automate decision-making.",
    tags: ["Predictive Models", "Computer Vision", "Data Science", "Python"]
  },
  {
    title: "CLOUD & DEVOPS",
    description: "Resilient cloud architecture and CI/CD automation. We ensure your infrastructure is secure, scalable, and cost-optimized.",
    tags: ["AWS/Azure/GCP", "Kubernetes", "Docker", "Security"]
  },
  {
    title: "UI/UX DESIGN",
    description: "Award-winning design that bridges utility and beauty. We create design systems and interfaces that users naturally understand.",
    tags: ["Product Design", "Prototyping", "Design Systems", "User Research"]
  }
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-honey-black text-white" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-honey-blue uppercase mb-16">
          Our Capabilities
        </h2>

        <div className="flex flex-col border-t border-white/20">
          {capabilities.map((item, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-12 flex items-center justify-between group hover:bg-white/5 transition-colors px-4"
              >
                <span className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:pl-4 transition-all duration-300">
                  {item.title}
                </span>
                <span className="p-2 border border-white/20 rounded-full text-honey-blue">
                  {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 px-4 md:pl-8 flex flex-col md:flex-row gap-8 md:gap-32">
                       <p className="md:w-1/2 text-xl text-white/70 font-light leading-relaxed">
                         {item.description}
                       </p>
                       <div className="md:w-1/2 flex flex-wrap gap-2 content-start">
                         {item.tags.map(tag => (
                           <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm font-mono text-xs uppercase text-honey-blue">
                             {tag}
                           </span>
                         ))}
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
