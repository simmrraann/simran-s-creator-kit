import { HeroSection } from "@/components/HeroSection";
import { CollaborationsSection } from "@/components/CollaborationsSection";
import { InsightsSection } from "@/components/InsightsSection";
import { RatesSection } from "@/components/RatesSection";
import { ContactSection } from "@/components/ContactSection";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="collaborations">
        <CollaborationsSection />
      </div>
      <div id="insights">
        <InsightsSection />
      </div>
      <div id="rates">
        <RatesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
