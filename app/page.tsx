import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1e2e] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1e2e]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider hover:opacity-80 transition"
          >
            Phy<span className="text-cyan-400">team</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              prefetch={true}
              className="text-cyan-400 font-semibold"
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
              prefetch={true}
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              prefetch={true}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
            >
              Book a Call
            </Link>
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

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}