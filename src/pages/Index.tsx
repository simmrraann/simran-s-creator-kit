import { HeroSection } from "@/components/HeroSection";
import { InsightsSection } from "@/components/InsightsSection";


import { AIPlaybookSection } from "@/components/AIPlaybookSection";
import { AgencySection } from "@/components/AgencySection";
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

      <div id="ai-playbook">
        <AIPlaybookSection />
      </div>
      <div id="insights">
        <InsightsSection />
      </div>
      <div id="rates">
        <RatesSection />
      </div>
      <div id="agency">
        <AgencySection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;