export const HeroSection = () => {
  const hero = {
    title: "Simran",
    subtitle: "AI & Productivity Creator",
    description: "Creating content around AI, productivity, student growth, and documenting the process while helping over 764.2K+ viewers learn smarter every 30 days.",
    tags: ["AI Tools", "Student Life", "Productivity", "Self-Growth"],
    stats: {
      followers: "15.8K+",
      monthlyViews: "764.2K+",
      nonFollowerReach: "88.8%"
    },
    heroImage: "/images/simran-photo.jpg",
    backgroundStyle: {
      gradient: "linear-gradient(to bottom right, #fdf5ee, #fbead7)",
      textFont: "Playfair Display",
      bodyFont: "Inter"
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff4e8] text-secondary" style={{ fontFamily: hero.backgroundStyle.bodyFont }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,239,216,0.96),transparent_35%)]" />
        <div className="absolute inset-0 hero-sand-grid opacity-18" />
        <div className="absolute inset-0 hero-grain opacity-20" />
        <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#fff1df]/60 blur-3xl" />
        <div className="absolute right-0 bottom-12 h-72 w-72 rounded-full bg-[#ffe7cd]/55 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 py-20">
        <div className="mx-auto text-center">
          <h1 className="font-display text-8xl md:text-9xl lg:text-[7rem] font-extrabold tracking-tight mb-4" style={{ fontFamily: hero.backgroundStyle.textFont, fontWeight: 900, color: 'hsl(220 45% 20%)' }}>Simran</h1>

          <div className="inline-flex items-center gap-3 rounded-full border border-secondary/10 bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.35em] text-secondary/70 shadow-sm mb-6">AI Creator • Community Builder • Student Engineer</div>

          <p className="max-w-2xl mx-auto text-lg text-secondary/75 mb-10">A visual digital scrapbook for an AI creator — layered, personal, and built in public.</p>

          <div className="relative mx-auto w-[72vw] max-w-[980px] h-[68vh] max-h-[720px]">
            {/* background floating info cards (sticky-note style) */}
            <div className="absolute -left-10 top-8 z-20">
              <div className="relative hero-info-card hero-card-blue -rotate-2 animate-float-slight">
                <svg className="hero-card-doodle w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="2" fill="#bfe9ff" />
                  <path d="M2 18c4-6 12-6 16 0" stroke="#a0d8ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>Content Creator 💡</h3>
                <p>Turning ideas into impactful content.</p>
              </div>
            </div>

            <div className="absolute right-8 top-10 z-20">
              <div className="relative hero-info-card hero-card-pink rotate-3 animate-float-slower">
                <svg className="hero-card-doodle w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="1.6" fill="#ffdce6" />
                  <path d="M3 10c3-3 8-3 11 0" stroke="#ffc1d6" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <h3>Building Community ♡</h3>
                <p>Through AI Playbook, workshops & real conversations.</p>
              </div>
            </div>

            <div className="absolute left-16 bottom-8 z-20">
              <div className="relative hero-info-card hero-card-green -rotate-5 animate-float-delayed">
                <svg className="hero-card-doodle w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="4" r="1.6" fill="#d8ffe6" />
                  <path d="M4 14c4-5 10-5 14 0" stroke="#b2f0c7" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <h3>Building AIjugaad 🚀</h3>
                <p>An AI agency helping businesses leverage AI to grow smarter.</p>
              </div>
            </div>

            {/* central portrait cutout */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
              <div className="hero-portrait rounded-[2.5rem] overflow-hidden border border-white/60 shadow-[0_50px_120px_rgba(92,79,72,0.12)] bg-white">
                <img src={hero.heroImage} alt="Simran portrait" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* floating tags */}
            <div className="absolute top-8 left-1/3 transform -translate-x-1/2 -rotate-6">
              <div className="hero-tag">15.8K+ creator</div>
            </div>
            <div className="absolute top-20 right-1/4 transform rotate-3">
              <div className="hero-tag">AI Playbook</div>
            </div>
            <div className="absolute bottom-28 left-1/4 transform -rotate-2">
              <div className="hero-tag">2.4M reel views</div>
            </div>
            <div className="absolute bottom-16 right-1/3 transform rotate-2">
              <div className="hero-tag">Building in public</div>
            </div>

            {/* doodles / sparkles */}
            <svg className="absolute left-8 top-24 w-24 h-24 opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="rgba(92,79,72,0.12)" strokeWidth="1.2" />
            </svg>
            <div className="absolute right-12 top-44 w-6 h-6 bg-[#ffdca8] rounded-full opacity-90 shadow-sm animate-float" />
            <div className="absolute left-28 bottom-40 w-10 h-10 border border-secondary/10 rounded-full opacity-90 shadow-sm animate-float-delayed" />

            {/* handwritten label */}
            <div className="absolute right-36 top-6 -rotate-8">
              <span className="text-[0.85rem] font-handwriting text-secondary/70">documenting the process</span>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="text-sm text-secondary/60">Third Year Engineering Student</div>
            <div className="h-px w-6 bg-secondary/10" />
            <div className="text-sm text-secondary/60">AI + Creativity</div>
          </div>
        </div>
      </div>
    </section>
  );
};