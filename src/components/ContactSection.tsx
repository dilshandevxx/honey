"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-honey-black text-white" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        
        {/* Left Side Info */}
        <div className="md:w-1/3 flex flex-col gap-12">
           <h2 className="text-sm font-mono tracking-widest text-honey-blue uppercase">
             Start a Project
           </h2>
           <h3 className="text-4xl md:text-6xl font-bold uppercase leading-none">
             Future-proof<br/> your business<br/> <span className="text-transparent stroke-text">today.</span>
           </h3>

           <div className="flex flex-col gap-4 font-mono text-sm text-white/60 pt-12 border-t border-white/10">
             <p>Have an idea?</p>
             <a href="mailto:hello@example.com" className="text-white hover:text-honey-blue transition-colors text-lg">
               hello@example.com
             </a>
           </div>

           <div className="flex gap-4">
             {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-xs font-mono uppercase border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  {social}
                </a>
             ))}
           </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-2/3">
           <form className="flex flex-col gap-12">
              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="What's your name?" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/20"
                />
              </div>
              
              <div className="group relative">
                <input 
                  type="email" 
                  placeholder="What's your email?" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/20"
                />
              </div>

              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="Tell us about your project" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl focus:outline-none focus:border-honey-blue transition-colors placeholder:text-white/20"
                />
              </div>

              <div className="pt-12">
                 <button className="px-8 py-4 bg-white text-black font-mono font-bold uppercase tracking-widest hover:bg-honey-blue hover:text-black transition-colors flex items-center gap-2">
                    Send Message
                    <ArrowUpRight className="w-5 h-5" />
                 </button>
              </div>
           </form>
        </div>

      </div>
    </section>
  );
}
