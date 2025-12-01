import { Sparkle } from "./Sparkle";
import simranPhoto from "@/assets/simran-photo.png";

export const HeroSection = () => {
  const blurredStats = [
    "2.5M+ views this month",
    "98% non-follower reach",
    "Fastest-growing study & AI creator",
    "Student Productivity • AI Tools • Self Growth",
    "Community of 6.4k+",
    "High engagement rate",
    "Viral content creator",
    "Authentic storytelling",
  ];

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

      {/* Blurred background stats layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {blurredStats.map((stat, index) => (
          <span
            key={index}
            className="absolute font-handwriting text-secondary/[0.08] blur-[2px] text-2xl md:text-3xl whitespace-nowrap"
            style={{
              top: `${15 + (index * 12) % 70}%`,
              left: `${5 + (index * 17) % 85}%`,
              transform: `rotate(${-10 + (index * 7) % 20}deg)`,
            }}
          >
            {stat}
          </span>
        ))}
        {/* Additional scattered stats */}
        <span className="absolute top-[20%] right-[15%] font-handwriting text-primary/[0.06] blur-[3px] text-xl md:text-2xl rotate-12">
          2M+ Top Views
        </span>
        <span className="absolute bottom-[30%] left-[8%] font-handwriting text-secondary/[0.07] blur-[2px] text-xl md:text-2xl -rotate-6">
          Viral Reels
        </span>
        <span className="absolute top-[60%] right-[10%] font-handwriting text-primary/[0.05] blur-[3px] text-2xl rotate-3">
          Growing Fast
        </span>
        <span className="absolute top-[40%] left-[20%] font-handwriting text-secondary/[0.06] blur-[2px] text-xl -rotate-12">
          Content That Converts
        </span>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          
          {/* Left side - Name and tags */}
          <div className="hidden lg:flex flex-col items-end text-right space-y-4 animate-slide-up">
            <span className="font-handwriting text-3xl text-primary">hey, I'm</span>
            <h1 className="font-display text-6xl xl:text-7xl font-bold text-secondary tracking-tight">
              Sim
            </h1>
            <div className="flex flex-col gap-2">
              <span className="px-4 py-1.5 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm">
                AI Tools
              </span>
              <span className="px-4 py-1.5 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm">
                Student Life
              </span>
            </div>
          </div>

          {/* Center - Photo */}
          <div className="relative animate-slide-up-delay-1">
            <div className="relative z-10">
              <img
                src={simranPhoto}
                alt="Simran"
                className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </div>
            {/* Glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-gold/20 blur-3xl scale-110" />
            
            {/* Mobile name overlay */}
            <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 text-center">
              <span className="font-handwriting text-2xl text-primary block">hey, I'm</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary tracking-tight">
                Simran
              </h1>
            </div>
          </div>

          {/* Right side - Name continuation and tags */}
          <div className="hidden lg:flex flex-col items-start text-left space-y-4 animate-slide-up">
            <h1 className="font-display text-6xl xl:text-7xl font-bold text-secondary tracking-tight">
              ran
            </h1>
            <div className="flex flex-col gap-2">
              <span className="px-4 py-1.5 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm">
                Productivity
              </span>
              <span className="px-4 py-1.5 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm">
                Self-Growth
              </span>
            </div>
          </div>
        </div>

        {/* Mobile tags */}
        <div className="lg:hidden flex flex-wrap justify-center gap-3 mt-16 animate-slide-up-delay-1">
          {["AI", "Student Life", "Productivity", "Self-Growth"].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full border-2 border-secondary/20 text-secondary font-medium text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Media Kit badge */}
        <div className="animate-slide-up-delay-2 mt-12 lg:mt-16 flex justify-center">
          <div className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl shadow-card hover:scale-105 transition-transform cursor-pointer">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide">
              MEDIA KIT
            </span>
          </div>
        </div>

        {/* Stats preview */}
        <div className="animate-slide-up-delay-3 mt-16 grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="font-display text-3xl md:text-5xl font-bold text-secondary">6.4k+</p>
            <p className="text-muted-foreground text-sm md:text-base mt-1">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-5xl font-bold text-primary">2M+</p>
            <p className="text-muted-foreground text-sm md:text-base mt-1">Top Views</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-5xl font-bold text-secondary">98.9%</p>
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
    </section>
  );
};
