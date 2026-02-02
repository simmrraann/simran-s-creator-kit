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
      title: "Reel on My Page",
      price: "₹5,000",
      features: ["Posted on @failing_vlogs", "Collaborator invite", "High non-follower reach", "Engaging hook & CTA"],
      popular: true,
    },
    {
      title: "UGC Reel + 1 Story",
      price: "₹4,300",
      features: ["UGC Reel for brand", "Story frame with link", "Product showcase", "High conversion"],
    },
    {
      title: "Story Set (3 Frames)",
      price: "₹800",
      features: ["3 story frames", "Direct link / Swipe-up", "Relatable storytelling"],
    },
  ];

  const ugcRate = {
    title: "Standard UGC Reel",
    price: "₹4,000",
    features: ["Raw footage + Edited", "Professional voiceover", "Usage rights included"],
  };

  return (
    <section id="rates" className="py-24 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-handwriting text-2xl text-[hsl(25_80%_65%)]">let's work together ✨</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
            Rates & Packages
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {instagramRates.map((rate) => (
              <RateCard key={rate.title} {...rate} />
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto mb-20">
          <h3 className="font-display text-3xl font-semibold text-secondary text-center mb-10">UGC Only</h3>
          <RateCard {...ugcRate} />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl max-w-2xl mx-auto">
             <p className="font-display text-xl font-bold text-secondary mb-2">📢 Usage & Ads Note</p>
             <p className="text-muted-foreground">For paid ad usage rights, an extra **20-30% fee** will be applied to the base rate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};