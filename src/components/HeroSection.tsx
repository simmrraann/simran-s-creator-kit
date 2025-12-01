import { Sparkle } from "./Sparkle";
import { DoodleArrow } from "./DoodleArrow";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-gold animate-float">
          <Sparkle size="lg" />
        </div>
        <div className="absolute top-40 right-20 text-primary animate-float-delayed">
          <Sparkle size="md" />
        </div>
        <div className="absolute bottom-40 left-1/4 text-gold animate-sparkle">
          <Sparkle size="sm" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-primary/60 animate-float">
          <Sparkle size="lg" />
        </div>
        
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main title */}
          <div className="animate-slide-up">
            <span className="font-handwriting text-3xl md:text-4xl text-primary mb-2 block">
              hey, I'm
            </span>
            <h1 className="font-display text-7xl md:text-9xl font-bold text-secondary tracking-tight mb-6">
              Simran
            </h1>
          </div>

          {/* Subtitle with tags */}
          <div className="animate-slide-up-delay-1 flex flex-wrap justify-center gap-3 mb-8">
            {["AI", "Student Life", "Productivity", "Self-Growth"].map((tag, i) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm md:text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Media Kit badge */}
          <div className="animate-slide-up-delay-2 relative">
            <div className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl shadow-card">
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide">
                MEDIA KIT
              </span>
            </div>
            <DoodleArrow 
              direction="curved" 
              className="absolute -top-8 -right-16 text-primary rotate-45 hidden md:block" 
            />
          </div>

          {/* Stats preview */}
          <div className="animate-slide-up-delay-3 mt-16 grid grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-secondary">6.4k+</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary">2M+</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">Top Views</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-secondary">98.9%</p>
              <p className="text-muted-foreground text-sm md:text-base mt-1">Non-Follower Reach</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
            <div className="w-6 h-10 rounded-full border-2 border-secondary/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-secondary/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
