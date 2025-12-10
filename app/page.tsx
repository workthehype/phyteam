import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1e2e] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1e2e]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            Phy<span className="text-cyan-400">team</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              About
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <button className="flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">
                🌐
              </span>
              EN
            </button> */}
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Book a Call
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Footer */}
      <footer className="bg-[#0a1e2e] border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 phyteam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
