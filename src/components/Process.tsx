"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, audience, and challenges. We ask the hard questions to uncover the core opportunities.",
    duration: "1-2 WEEKS"
  },
  {
    id: "02",
    title: "Strategy",
    description: "We map out the technical architecture and user experience. No guessing—just a solid blueprint for success.",
    duration: "2 WEEKS"
  },
  {
    id: "03",
    title: "Design",
    description: "We craft visual systems that are as beautiful as they are functional. Expect high-fidelity prototypes and immersive interactions.",
    duration: "4 WEEKS"
  },
  {
    id: "04",
    title: "Development",
    description: "Our engineers build with modern, scalable tech stacks. We prioritize performance, security, and clean code.",
    duration: "8 WEEKS"
  },
  {
    id: "05",
    title: "Evolution",
    description: "Launch is just the beginning. We continually optimize and iterate based on real user data and changing market needs.",
    duration: "ONGOING"
  }
];

export default function Process() {
  return (
    <section className="w-full bg-honey-black text-white py-32" id="process">
      {/* Container */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="w-full h-[1px] bg-white/20 mb-8 origin-left"
        />

        {/* Header Meta */}
        <div className="flex justify-between items-start mb-24 font-mono text-xs text-white/50 tracking-widest uppercase">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            [ 06 / 09 ]
          </motion.span>
          <motion.span
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
          >
            How We Sprint
          </motion.span>
        </div>

        {/* Main Title */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] leading-[0.85] font-bold tracking-tighter"
          >
            <span className="block text-transparent stroke-text hover:text-white transition-colors duration-700 cursor-default">
              HOW WE
            </span>
            <span className="block text-white">
              SPRINT
            </span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-white/10 pt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col justify-between h-full group min-h-[300px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-sm text-honey-red">
                    [{step.id}]
                  </span>
                  <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-honey-red transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-dashed border-white/10">
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
                  Est. {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
