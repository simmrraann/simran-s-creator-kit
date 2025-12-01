import { Sparkle } from "./Sparkle";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 text-gold/40">
        <Sparkle size="lg" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-handwriting text-2xl text-primary">get to know</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
              About Me
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder with decorative frame */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-peach to-primary/20 shadow-card overflow-hidden relative">
                <div className="absolute inset-4 border-2 border-secondary/10 rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-handwriting text-4xl text-secondary/30">Your Photo</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold/30 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hi, I'm <span className="font-semibold text-primary">Simran</span>, a student and content creator sharing relatable content around AI tools, student life, productivity, and personal growth.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I started creating content in <span className="font-semibold">October 2025</span>, and in a short time I've built a community of students who relate to my honest, practical approach to learning and self-improvement.
              </p>

              <div className="pt-4">
                <h3 className="font-display text-2xl font-semibold text-secondary mb-4">My Niche</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Tools & Automation",
                    "Study Productivity",
                    "Student Lifestyle",
                    "Self-Improvement",
                    "Motivation & Routines"
                  ].map((niche) => (
                    <span
                      key={niche}
                      className="px-4 py-2 bg-peach rounded-full text-sm font-medium text-secondary border border-primary/10"
                    >
                      {niche}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-display text-2xl font-semibold text-secondary mb-4">Best Performing Content</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    AI tool breakdowns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Study tips & hacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Productivity routines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
