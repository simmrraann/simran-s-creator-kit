export const HeroSection = () => {
  const hero = {
    title: "Simran",
    subtitle: "AI & Productivity Creator",
    description: "I create viral content around AI tools, student life, productivity, and self-growth helping over 542k+ viewers learn smarter every month.",
    tags: ["AI Tools", "Student Life", "Productivity", "Self-Growth"],
    stats: {
      followers: "9.3k+",
      monthlyViews: "542k+",
      nonFollowerReach: "99.7%"
    },
    heroImage: "/images/simran-photo.jpg",
    backgroundStyle: {
      gradient: "linear-gradient(to bottom right, #fdf5ee, #fbead7)",
      textFont: "Playfair Display",
      bodyFont: "Inter"
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-background to-peach/20 overflow-hidden" style={{fontFamily: hero.backgroundStyle.bodyFont}}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        background: hero.backgroundStyle.gradient,
      }} />

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10 flex flex-col justify-center">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          <div className="lg:col-span-3 flex flex-col items-start text-left order-2 lg:order-1 animate-fade-in">
          <h2 className="font-handwriting text-2xl text-primary">{hero.subtitle}</h2>
            <h1 className="font-handwriting font-extrabold text-8xl md:text-9xl lg:text-[10rem] bg-gradient-to-r from-primary via-secondary to-peach bg-clip-text text-transparent tracking-tight leading-none mb-4" style={{
              textShadow: '2px 4px 8px rgba(0,0,0,0.05)',
              fontFamily: hero.backgroundStyle.textFont,
            }}>
              {hero.title}
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground mb-6">
              {hero.description}
            </p>
            <div className="flex flex-wrap justify-start gap-3 mb-8">
              {hero.tags.map((tag) => (
                <span key={tag} className="px-5 py-2 rounded-full bg-secondary/5 border border-secondary/15 text-secondary/80 font-medium text-sm tracking-wide hover:bg-secondary/10 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <button className="group relative bg-secondary text-secondary-foreground px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="font-display text-lg font-semibold tracking-widest uppercase">Media Kit</span>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-peach/30 to-cream/40 blur-3xl scale-110 translate-y-4" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, hsl(var(--cream)) 100%)' }} />
              <img src={hero.heroImage} alt="Simran" className="relative z-10 w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-16 animate-fade-in text-center" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto">
            <div>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">{hero.stats.followers}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">Followers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">{hero.stats.monthlyViews}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">Monthly Views</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">{hero.stats.nonFollowerReach}</p>
              <p className="text-muted-foreground text-sm md:text-base mt-2 tracking-wide">Non-Follower Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};