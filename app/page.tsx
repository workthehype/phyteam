"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import BookCallModal from "./components/BookCallModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1e2e] text-white">
      {/* Book Call Modal */}
      <BookCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Header */}
      <Header onBookCallClick={() => setIsModalOpen(true)} />

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
      <CTASection onBookCallClick={() => setIsModalOpen(true)} />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}


