import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { InsightsSection } from "@/components/InsightsSection";
import { RatesSection } from "@/components/RatesSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CollaborationsSection />
      <InsightsSection />
      <RatesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
