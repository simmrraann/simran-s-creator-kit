import { HeroSection } from "@/components/HeroSection";
import { InsightsSection } from "@/components/InsightsSection";
<<<<<<< HEAD
=======
import { AIPlaybookSection } from "@/components/AIPlaybookSection";
>>>>>>> ce9ce27 (Update AI Playbook carousel and portfolio content)
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
<<<<<<< HEAD
=======
      <div id="ai-playbook">
        <AIPlaybookSection />
      </div>
>>>>>>> ce9ce27 (Update AI Playbook carousel and portfolio content)
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