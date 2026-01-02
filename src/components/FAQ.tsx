"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How fast can you launch?",
    answer: "We sprint in 2-week intervals. Most projects are live within 4-8 weeks, depending on complexity. We don't drag things out."
  },
  {
    question: "Do you handle post-launch support?",
    answer: "Yes. We offer 'Evolution' packages to keep your site optimized, secure, and shipping new features. We don't ghost you."
  },
  {
    question: "What is your tech stack?",
    answer: "We are TypeScript natives. Next.js, React, Node.js, and specialized WebGL libraries for performance and visuals."
  },
  {
    question: "Do you work with startups?",
    answer: "Exclusively. We specialize in high-growth companies that need to move fast and look world-class."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#050505] text-white py-32 border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
            <span className="font-mono text-xs text-honey-red tracking-[0.2em] uppercase block mb-4">
                 [ 09 / 09 ]
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
               Interrogations
            </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
                <div key={index} className="border-b border-white/10">
                    <button 
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center py-8 text-left group"
                    >
                        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-honey-red" : "text-white group-hover:text-gray-300"}`}>
                            {faq.question}
                        </span>
                        <span className={`font-mono text-2xl transition-transform duration-300 ${isOpen ? "rotate-45 text-honey-red" : "text-white/30"}`}>
                            +
                        </span>
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="pb-8 text-gray-400 font-mono text-sm leading-relaxed max-w-[90%]">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
