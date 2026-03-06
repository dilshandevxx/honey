"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    id: "01",
    prefix: "$",
    value: 500,
    suffix: "M+",
    label: "Revenue Generated",
  },
  {
    id: "02",
    prefix: "",
    value: 98,
    suffix: "%",
    label: "Client Retention",
  },
  {
    id: "03",
    prefix: "",
    value: 40,
    suffix: "%",
    label: "Avg Conversion Lift",
  },
  {
    id: "04",
    prefix: "",
    value: 100,
    suffix: "+",
    label: "Projects Shipped",
  }
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="w-full bg-[#020202] text-white py-32 px-6 lg:px-12 relative z-20">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-20 opacity-60">
            <div className="w-12 h-px bg-white" />
            <h2 className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-light">
                Impact by the Numbers
            </h2>
        </div>

        {/* Beautiful Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-y md:divide-y-0 md:border-l md:border-r border-white/10 relative">
            
            {/* Desktop vertical dividers (since divide-x can be tricky with wrap) */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-white/10 pointer-events-none" />
            <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-white/10 pointer-events-none" />
            <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-white/10 pointer-events-none" />

            {/* Tablet vertical divider */}
            <div className="hidden md:block lg:hidden absolute top-0 bottom-0 left-1/2 w-px bg-white/10 pointer-events-none" />
            
            {/* Tablet horizontal divider */}
            <div className="hidden md:block lg:hidden absolute top-1/2 left-0 right-0 h-px bg-white/10 pointer-events-none" />

            {stats.map((stat, index) => (
                <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col p-10 md:p-14 group hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
                >
                    <span className="font-mono text-xs text-white/40 tracking-[0.2em] mb-12 flex items-center gap-4 group-hover:text-white transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500" />
                        [ {stat.id} ]
                    </span>
                    
                    <h3 className="text-7xl lg:text-[6vw] font-bold tracking-tighter leading-none text-white mb-6 group-hover:scale-[1.02] origin-left transition-transform duration-500 whitespace-nowrap">
                        <span className="text-[0.6em] text-white/60 align-baseline mr-1">{stat.prefix}</span>
                        <AnimatedNumber value={stat.value} />
                        <span className="text-[0.5em] text-white/40 align-baseline ml-1">{stat.suffix}</span>
                    </h3>
                    
                    <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/50 leading-[2] group-hover:text-white/80 transition-colors duration-500">
                        {stat.label}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
