import Link from "next/link";

import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1e2e] text-white">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a1e2e]/80 
        backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider hover:opacity-80 transition"
            aria-label="Phyteam Homepage"
          >
            Phy<span className="text-cyan-400">team</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-cyan-400 font-semibold"
              prefetch={true}
            >
              Home
            </Link>

            <a
              href="#services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </a>

            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition"
              prefetch={true}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition"
              prefetch={true}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link
              href="/contact"
              prefetch={true}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 
              rounded-full font-medium transition"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      {/* Sections */}
      <HeroSection />
      <ExpertiseSection />
      
      {/* Give Services ID to scroll smoothly */}
      <div id="services">
        <WhyChooseSection />
      </div>

      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
