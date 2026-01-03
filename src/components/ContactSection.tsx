"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-transparent text-white relative z-10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        
        {/* Left Side Info */}
        <div className="md:w-1/3 flex flex-col gap-12">
           <h2 className="text-sm font-mono tracking-widest text-honey-blue uppercase pl-4 border-l border-honey-blue/50">
             Start a Project
           </h2>
           <h3 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
             Future-proof<br/> your business<br/> 
             <span className="text-transparent stroke-text hover:text-white transition-colors duration-500">today.</span>
           </h3>

           <div className="flex flex-col gap-4 font-mono text-sm text-white/60 pt-12 border-t border-white/10">
             <p className="uppercase tracking-widest text-xs opacity-50">Inquiries</p>
             <a href="mailto:hello@nexus.agency" className="text-white hover:text-honey-blue transition-colors text-2xl font-light">
               hello@nexus.agency
             </a>
           </div>

           <div className="flex flex-wrap gap-4 pt-4">
             {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-[10px] font-mono uppercase border border-white/10 px-4 py-2 rounded-sm bg-white/5 hover:bg-honey-blue hover:text-black hover:border-honey-blue transition-all duration-300">
                  {social}
                </a>
             ))}
           </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-2/3">
           <form className="flex flex-col gap-8 p-12 bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-sm shadow-2xl shadow-black/50">
              <div className="group relative">
                <label className="text-xs font-mono uppercase text-white/40 mb-2 block tracking-widest">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-black/20 border-b border-white/10 py-4 text-xl md:text-2xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/10 text-white"
                />
              </div>
              
              <div className="group relative">
                <label className="text-xs font-mono uppercase text-white/40 mb-2 block tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-black/20 border-b border-white/10 py-4 text-xl md:text-2xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/10 text-white"
                />
              </div>

              <div className="group relative">
                <label className="text-xs font-mono uppercase text-white/40 mb-2 block tracking-widest">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-black/20 border-b border-white/10 py-4 text-xl md:text-2xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/10 text-white resize-none"
                />
              </div>

              <div className="pt-8 flex justify-end">
                 <button className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-honey-blue transition-colors overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        Send Message
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                 </button>
              </div>
           </form>
        </div>

      </div>
    </section>
  );
}
