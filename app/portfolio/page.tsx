import PortfolioHero from "../components/PortfolioHero";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioProcess from "../components/PortfolioProcess";
import PortfolioTechStack from "../components/PortfolioTechStack";
import PortfolioTestimonials from "../components/PortfolioTestimonials";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "Portfolio | Phyteam - Our Work Showcase",
  description:
    "Explore our portfolio of cutting-edge projects that blend innovation, design excellence, and technical mastery.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* <PortfolioHero /> */}
      <PortfolioSection />
      <PortfolioProcess />
      <PortfolioTechStack />
      <PortfolioTestimonials />
      {/* <CTASection /> */}
      <FooterSection />
    </main>
  );
}
