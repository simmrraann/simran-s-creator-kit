import { Sparkle } from "./Sparkle";
import { Check } from "lucide-react";

interface RateCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const RateCard = ({ title, price, features, popular }: RateCardProps) => (
  <div className={`relative rounded-3xl p-8 ${popular ? 'bg-secondary text-secondary-foreground' : 'bg-card border-2 border-border'} shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-gold text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <h3 className={`font-display text-2xl font-semibold ${popular ? 'text-secondary-foreground' : 'text-secondary'}`}>
      {title}
    </h3>
    <p className={`font-display text-4xl font-bold mt-4 ${popular ? 'text-gold' : 'text-primary'}`}>
      {price}
    </p>
    <ul className="mt-6 space-y-3">
      {features.map((feature, i) => (
        <li key={i} className={`flex items-center gap-3 ${popular ? 'text-secondary-foreground/90' : 'text-foreground'}`}>
          <Check className={`w-5 h-5 ${popular ? 'text-gold' : 'text-primary'}`} />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const RatesSection = () => {
  const instagramRates = [
    {
      title: "Instagram Reel",
      price: "₹5,000",
      features: ["High-quality reel content", "Engaging hook & CTA", "1 revision included"],
    },
    {
      title: "Reel + Story",
      price: "₹6,500",
      features: ["Instagram Reel", "Story Set (3-4 frames)", "Cross-promotion", "2 revisions included"],
      popular: true,
    },
    {
      title: "Story Set",
      price: "₹1,500",
      features: ["3-4 story frames", "Swipe-up CTA", "Product showcase"],
    },
  ];

  const ugcRates = [
    {
      title: "UGC Video",
      price: "₹4,500",
      features: ["Raw footage", "Professional editing", "Usage rights included"],
    },
    {
      title: "UGC Raw + Edit",
      price: "₹4,000",
      features: ["Raw footage", "Basic editing", "Quick turnaround"],
    },
    {
      title: "UGC Photo",
      price: "₹500",
      features: ["High-res photos", "Multiple angles", "Product focus"],
    },
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 right-20 text-gold">
        <Sparkle size="lg" />
      </div>
      <div className="absolute bottom-20 left-10 text-primary/40">
        <Sparkle size="md" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-handwriting text-2xl text-[hsl(25_80%_65%)]">let's work together ✨</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
            Rates & Packages
          </h2>
          <span className="font-handwriting text-lg text-[hsl(25_80%_65%)] mt-2 block">investment that converts! 💰</span>
        </div>

        {/* Instagram rates */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="font-display text-3xl font-semibold text-secondary text-center mb-10">
            Instagram Deliverables
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {instagramRates.map((rate) => (
              <RateCard key={rate.title} {...rate} />
            ))}
          </div>
        </div>

        {/* UGC rates */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display text-3xl font-semibold text-secondary text-center mb-10">
            UGC Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ugcRates.map((rate) => (
              <RateCard key={rate.title} {...rate} />
            ))}
          </div>
        </div>

        {/* Custom package CTA */}
        <div className="mt-16 text-center">
          <p className="font-handwriting text-2xl text-primary mb-4">
            Need something custom?
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Contact me to customize your packages — I'm happy to create tailored solutions for your brand's unique needs!
          </p>
        </div>
      </div>
    </section>
  );
};
