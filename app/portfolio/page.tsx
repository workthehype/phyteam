import PortfolioSection from "../components/PortfolioSection";
import FooterSection from "../components/FooterSection";

export const metadata = {
  title: "Portfolio | Phyteam - Our Work Showcase",
  description:
    "Explore our portfolio of cutting-edge projects that blend innovation, design excellence, and technical mastery.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <PortfolioSection />
      <FooterSection />
    </main>
  );
}
