import { HeroSection } from "@/components/HeroSection";
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
      {/* Collaborations section and its div container have been removed */}
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