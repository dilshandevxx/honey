"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/work", label: "Work", desc: "Case Studies" },
  { href: "/services", label: "Services", desc: "Our Capabilities" },
  { href: "/about", label: "About", desc: "Agency Culture" },
  { href: "/contact", label: "Contact", desc: "Start a Project" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-6 md:px-12 transition-colors duration-500 ${isOpen ? 'text-white' : 'mix-blend-difference text-white'}`}
      >
        <Link href="/" className="group flex items-center gap-3 relative z-[60]">
          <Logo className="w-8 h-8 group-hover:text-honey-red transition-colors duration-300" />
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-bold text-lg tracking-tighter leading-none">
              NEXUS
            </span>
            <span className="font-mono text-[10px] tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
              EST. 2024
            </span>
          </div>
        </Link>

        {/* Desktop Nav (Only visible when menu is closed) */}
        <nav className={`flex items-center gap-8 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-honey-blue transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Toggle Button */}
        <button 
            onClick={toggleMenu}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-honey-blue transition-colors group relative z-[60]"
        >
            <span className="hidden md:block transition-all duration-300">
                {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-6 h-6">
                 {/* Stack icons to ensure smooth transition if needed, or stick to conditional rendering/rotation */}
                 <motion.div 
                    animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                    className="absolute inset-0"
                 >
                     <Menu className="w-6 h-6" />
                 </motion.div>
                 <motion.div 
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                    className="absolute inset-0"
                 >
                     <X className="w-6 h-6" />
                 </motion.div>
            </div>
        </button>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Bezier for premium feel
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-center items-center"
          >
             {/* Background Ambience */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-honey-red/5 rounded-full blur-[120px]" />
                 <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-honey-blue/5 rounded-full blur-[120px]" />
             </div>

             <div className="container max-w-7xl px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-[70vh] items-center">
                 
                 {/* Left: Navigation Text */}
                 <nav className="flex flex-col gap-6">
                     {NAV_LINKS.map((link, index) => (
                         <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                         >
                             <Link 
                                href={link.href}
                                onClick={toggleMenu} 
                                className="group flex items-end gap-4 text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white/50 hover:text-white transition-all duration-300"
                            >
                                <span className="text-sm font-mono tracking-widest text-honey-red opacity-0 group-hover:opacity-100 -translate-y-4 transition-all duration-300">
                                    0{index + 1}
                                </span>
                                <span>{link.label}</span>
                             </Link>
                         </motion.div>
                     ))}
                 </nav>

                 {/* Right: Meta Info / Socials */}
                 <div className="hidden md:flex flex-col justify-between h-[60%] border-l border-white/10 pl-12">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                     >
                         <h4 className="font-mono text-sm text-honey-blue tracking-widest mb-6">CONTACT US</h4>
                         <a href="mailto:hello@nexus.com" className="text-2xl font-light hover:text-honey-red transition-colors block mb-2">hello@nexus.com</a>
                         <p className="text-white/40 font-mono">+1 (555) 000-0000</p>
                     </motion.div>

                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                     >
                        <h4 className="font-mono text-sm text-honey-blue tracking-widest mb-6">FOLLOW</h4>
                        <div className="flex gap-8">
                            {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                                <a key={social} href="#" className="flex items-center gap-2 group">
                                    <span className="text-white/60 group-hover:text-white transition-colors uppercase tracking-wider text-sm">{social}</span>
                                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-honey-red -translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            ))}
                        </div>
                     </motion.div>
                 </div>

             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
