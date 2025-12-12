"use client"; // ONLY here

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-[#0a1e2e]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] py-2" : "bg-[#0a1e2e]/60 backdrop-blur-md py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all">
        <Link href="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition text-white">
          Phy<span className="text-cyan-400">team</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className={`${scrolled ? "text-cyan-300" : "text-cyan-400"} font-semibold transition`}>Home</Link>
          <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
          <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </nav>
        <div className="flex items-center">
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}  