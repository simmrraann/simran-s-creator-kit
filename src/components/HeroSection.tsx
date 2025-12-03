import simranPhoto from "@/assets/simran-photo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-background to-peach/20 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[80vh]">
          
          {/* Left side - Name and tags */}
          <div className="flex flex-col items-center text-center order-2 lg:order-1 animate-fade-in">
            {/* Signature-style name */}
            <h1 className="font-handwriting font-bold text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-primary via-secondary to-peach bg-clip-text text-transparent tracking-tight leading-none mb-6" style={{
              textShadow: '2px 4px 8px rgba(0,0,0,0.05)',
            }}>
              Simran
            </h1>
            
            {/* Category tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["AI Tools", "Student Life", "Productivity", "Self-Growth"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full bg-secondary/5 border border-secondary/15 text-secondary/80 font-medium text-sm tracking-wide hover:bg-secondary/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Media Kit badge */}
            <div className="mt-4">
              <button className="group relative bg-secondary text-secondary-foreground px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-display text-lg font-semibold tracking-widest uppercase">
                  Media Kit
                </span>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Soft shadow behind image */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-peach/30 to-cream/40 blur-3xl scale-110 translate-y-4" />
              
              {/* Vignette overlay */}
              <div className="absolute inset-0 rounded-3xl" style={{
                background: 'radial-gradient(ellipse at center, transparent 50%, hsl(var(--cream)) 100%)',
              }} />
              
              {/* Photo */}
              <img
                src={simranPhoto}
                alt="Simran - Content Creator"
                className="relative z-10 w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))',
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">
                6.4k+
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">
                Followers
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
                2M+
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">
                Top Views
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">
                98.9%
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">
                Non-Follower Reach
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-secondary/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-secondary/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
