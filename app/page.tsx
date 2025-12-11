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
      <HeroSection />
      <ExpertiseSection />

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
