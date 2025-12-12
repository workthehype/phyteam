"use client";

import { useEffect, useState, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onBookCallClick?: () => void;
}

function Header({ onBookCallClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-[#0a1e2e]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)] py-2"
            : "bg-[#0a1e2e]/80 backdrop-blur-md border-b border-gray-800 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wider text-white cursor-pointer"
        >
          Phy<span className="text-cyan-400">team</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className={`relative group ${
              pathname === "/" ? "text-cyan-400 font-semibold" : "text-gray-300"
            } hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:tracking-wider hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]`}
          >
            Home
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full ${
                pathname === "/"
                  ? "w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              }`}
            />
          </Link>
          <a
            href="#services"
            className="relative group text-gray-300 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:tracking-wider hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 rounded-full" />
          </a>
          <Link
            href="/about"
            className={`relative group ${
              pathname === "/about"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            } hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:tracking-wider hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]`}
          >
            About
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full ${
                pathname === "/about"
                  ? "w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              }`}
            />
          </Link>
          <Link
            href="/contact"
            className={`relative group ${
              pathname === "/contact"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            } hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:tracking-wider hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]`}
          >
            Contact
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full ${
                pathname === "/contact"
                  ? "w-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              }`}
            />
          </Link>
        </nav>
        <div className="flex items-center">
          {onBookCallClick ? (
            <button
              onClick={onBookCallClick}
              className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Book a Call</span>
            </button>
          ) : (
            <Link
              href="/contact"
              className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 overflow-hidden inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
