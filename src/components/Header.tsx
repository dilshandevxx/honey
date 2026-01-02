"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "./Logo";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
    >
      <Link href="/" className="group flex items-center gap-3">
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

      <nav className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <li><Link href="/work" className="hover:text-honey-blue transition-colors">WORK</Link></li>
            <li><Link href="/services" className="hover:text-honey-blue transition-colors">SERVICES</Link></li>
            <li><Link href="/about" className="hover:text-honey-blue transition-colors">ABOUT</Link></li>
            <li><Link href="/contact" className="hover:text-honey-blue transition-colors">CONTACT</Link></li>
        </ul>

        <button className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-honey-blue transition-colors group">
            <span className="hidden md:block">Menu</span>
            <Menu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </nav>
    </motion.header>
  );
}
