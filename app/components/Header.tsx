"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onBookCallClick?: () => void;
}

export default function Header({ onBookCallClick }: HeaderProps) {
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
          className="text-2xl font-bold tracking-wider hover:opacity-80 transition text-white"
        >
          Phy<span className="text-cyan-400">team</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-cyan-400 font-semibold" : "text-gray-300"
            } hover:text-white transition`}
          >
            Home
          </Link>
          <a
            href="/#services"
            className="text-gray-300 hover:text-white transition"
          >
            Services
          </a>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            } hover:text-white transition`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            } hover:text-white transition`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          {onBookCallClick ? (
            <button
              onClick={onBookCallClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Book a Call
            </button>
          ) : (
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
