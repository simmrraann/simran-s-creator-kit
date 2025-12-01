import { Sparkle } from "./Sparkle";
import { DoodleArrow } from "./DoodleArrow";

const StatBar = ({ label, value, percentage, color }: { label: string; value: string; percentage: number; color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{label}</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
    <div className="h-3 bg-muted rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const CircleStat = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div className="flex flex-col items-center">
    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${color} flex items-center justify-center shadow-card`}>
      <span className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground">{value}</span>
    </div>
    <span className="mt-3 text-sm text-muted-foreground font-medium">{label}</span>
  </div>
);

export const InsightsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-32 left-8 text-primary/40 rotate-12">
        <DoodleArrow direction="right" />
      </div>
      <div className="absolute top-20 right-16 text-gold animate-float">
        <Sparkle size="lg" />
      </div>
      <div className="absolute bottom-40 right-8 text-primary/30 -rotate-45">
        <DoodleArrow direction="curved" />
      </div>
      <div className="absolute bottom-20 left-20 text-gold/50">
        <Sparkle size="md" />
      </div>

      {/* Hand-drawn circle decoration */}
      <svg className="absolute top-1/4 left-1/4 w-40 h-40 text-primary/10 -translate-x-1/2" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-handwriting text-2xl text-primary">the numbers</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
            Insights & Analytics
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main stats grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Bar chart style */}
            <div className="bg-background rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-semibold text-secondary mb-6">
                Reach Breakdown
              </h3>
              <div className="space-y-6">
                <StatBar 
                  label="Non-Followers" 
                  value="99.7%" 
                  percentage={99.7} 
                  color="bg-primary" 
                />
                <StatBar 
                  label="Followers" 
                  value="0.3%" 
                  percentage={30} 
                  color="bg-gold" 
                />
                <StatBar 
                  label="Accounts Reached" 
                  value="1.6M+" 
                  percentage={85} 
                  color="bg-secondary" 
                />
              </div>
              
              {/* Mini doodle */}
              <div className="absolute -right-4 top-1/2 text-gold/60 hidden md:block">
                <DoodleArrow direction="left" className="w-16 h-8" />
              </div>
            </div>

            {/* Right: Circle stats */}
            <div className="bg-background rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-semibold text-secondary mb-6">
                Engagement Stats
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <CircleStat value="63K" label="Likes" color="bg-primary" />
                <CircleStat value="58K" label="Saves" color="bg-gold" />
                <CircleStat value="67K" label="Shares" color="bg-secondary" />
              </div>
            </div>
          </div>

          {/* Bottom: Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Views", value: "2M+", icon: "👁" },
              { label: "Interactions", value: "190K+", icon: "💬" },
              { label: "Profile Activity", value: "6,355", icon: "👤" },
              { label: "Comments", value: "256+", icon: "💭" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-peach to-background rounded-2xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <p className="font-display text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Audience demographics */}
          <div className="mt-16 bg-background rounded-3xl p-8 shadow-card border border-border">
            <h3 className="font-display text-2xl font-semibold text-secondary mb-6 text-center">
              Audience Demographics
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="font-handwriting text-4xl text-primary">16-28</span>
                <p className="text-muted-foreground mt-2">Age Range</p>
              </div>
              <div>
                <span className="font-handwriting text-4xl text-primary">Female Majority</span>
                <p className="text-muted-foreground mt-2">Gender Split</p>
              </div>
              <div>
                <span className="font-handwriting text-4xl text-primary">India 🇮🇳</span>
                <p className="text-muted-foreground mt-2">Top Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
