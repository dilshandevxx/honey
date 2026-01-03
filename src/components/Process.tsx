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
    <section className="w-full bg-[#050505] text-white py-32 relative overflow-hidden" id="process">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-honey-red/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-honey-blue/5 rounded-full blur-[100px]" />
      </div>

      {/* Container */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Meta */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="block font-mono text-xs text-honey-red tracking-[0.2em] mb-4">
               [ 06 / 09 ]
            </span>
            <h2 className="text-[6vw] md:text-8xl leading-[0.85] font-bold tracking-tighter uppercase relative z-10">
              From Idea <br/>
              <span className="text-transparent stroke-text pl-4 md:pl-0">To Impact</span>
            </h2>
          </div>
          <p className="hidden md:block font-mono text-xs text-white/40 max-w-sm text-right leading-relaxed uppercase tracking-wide">
             From chaos to clarity.<br/>
             Our proven methodology for rapid deployment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "backOut" }}
              className="group relative h-full min-h-[400px] p-8 bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-honey-red/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-honey-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Top: ID */}
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xl text-white/20 group-hover:text-honey-red transition-colors duration-300">
                        {`// ${step.id}`}
                    </span>
                    {/* Status Dot */}
                    <div className="w-1.5 h-1.5 rounded-sm bg-white/10 group-hover:bg-honey-red group-hover:shadow-[0_0_10px_#FF3333] transition-all duration-300" />
                </div>

                {/* Middle: Title & Desc */}
                <div className="mt-12">
                     <h3 className="text-3xl font-bold uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {step.title}
                     </h3>
                     <p className="font-mono text-[10px] text-white/40 leading-relaxed uppercase tracking-wider group-hover:text-white/70 transition-colors duration-300">
                        {step.description}
                     </p>
                </div>

                {/* Bottom: Duration */}
                 <div className="mt-12 pt-6 border-t border-white/5 group-hover:border-honey-red/20 transition-colors duration-500">
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-honey-red/80">
                         <span>Timeline</span>
                         <span>{step.duration}</span>
                    </div>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
