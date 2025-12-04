
import { ExternalLink } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { DoodleArrow } from "./DoodleArrow";

interface CollabCardProps {
  brand: string;
  type: string;
  views: string;
  link: string;
  thumbnail?: string;
}

const CollabCard = ({ brand, type, views, link, thumbnail }: CollabCardProps) => {
  return (
    <div className="group relative">
      <div className="border-4 border-secondary rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
        <div className="aspect-[9/16] bg-gradient-to-br from-muted to-peach relative overflow-hidden">
          {thumbnail ? (
            <img src={thumbnail} alt={brand} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-handwriting text-2xl text-muted-foreground">Video Preview</span>
            </div>
          )}
          
          <div className="absolute bottom-3 left-3 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            👁 {views}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-display text-xl font-semibold text-secondary">{brand}</h3>
          <p className="text-muted-foreground text-sm mt-1">{type}</p>
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
          >
            View Reel <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const CollaborationsSection = () => {
  const collaborations = [
    {
      brand: "Kimi",
      type: "Instagram Reel",
      link: "https://www.instagram.com/reel/DQ_WS0_DOSJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/images/kimmy.png",
    },
    {
      brand: "LeapScholar",
      type: "Instagram Reel",
      link: "https://www.instagram.com/reel/DQ_WS0_DOSJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/images/leap.png",
    },
    {
      brand: "SuperProfileBio",
      type: "Instagram Reel",
      link: "https://www.instagram.com/reel/DQ_WS0_DOSJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      thumbnail: "/images/super.png",
    },
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute top-20 left-10 text-primary/30">
        <DoodleArrow direction="down" />
      </div>
      <div className="absolute bottom-20 right-20 text-gold">
        <Sparkle size="lg" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-handwriting text-2xl text-[hsl(25_80%_65%)]">brands I've worked with ✨</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
            Collaborations
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Delivering high-quality content that resonates with audiences and drives results
          </p>
          <span className="font-handwriting text-lg text-[hsl(25_80%_65%)] mt-2 block">see what we created! 🎬</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {collaborations.map((collab) => (
            <CollabCard key={collab.brand} {...collab} />
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8 font-handwriting text-xl">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['LeapScholar', 'SuperProfileBio', 'Kimi'].map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 bg-card rounded-xl shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <span className="font-display text-lg font-semibold text-secondary">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
