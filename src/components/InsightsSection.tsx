import { Sparkle } from "./Sparkle";
import { DoodleArrow } from "./DoodleArrow";

const HandwrittenNote = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-handwriting text-lg md:text-xl text-[hsl(25_80%_65%)] ${className}`}>
    {children}
  </span>
);

const StatBar = ({ label, value, percentage, color }: { label: string; value: string; percentage: number; color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{label}</span>
      <span className="text-muted-foreground font-semibold">{value}</span>
    </div>
    <div className="h-4 bg-white/60 rounded-full overflow-hidden shadow-inner">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const CircleStat = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div className="flex flex-col items-center">
    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${color} flex items-center justify-center shadow-lg border-4 border-white/50`}>
      <span className="font-display text-xl md:text-2xl font-bold text-white">{value}</span>
    </div>
    <span className="mt-3 text-sm text-foreground font-medium">{label}</span>
  </div>
);

const DonutChart = ({ segments, centerText }: { segments: { value: number; color: string; label: string }[]; centerText: string }) => {
  const total = segments.reduce((acc, seg) => acc + seg.value, 0);
  let currentAngle = 0;
  
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((segment, index) => {
          const angle = (segment.value / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;
          
          const startRad = (startAngle * Math.PI) / 180;
          const endRad = ((startAngle + angle) * Math.PI) / 180;
          
          const x1 = 50 + 40 * Math.cos(startRad);
          const y1 = 50 + 40 * Math.sin(startRad);
          const x2 = 50 + 40 * Math.cos(endRad);
          const y2 = 50 + 40 * Math.sin(endRad);
          
          const largeArc = angle > 180 ? 1 : 0;
          
          return (
            <path
              key={index}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={segment.color}
              className="drop-shadow-sm"
            />
          );
        })}
        <circle cx="50" cy="50" r="25" fill="white" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-lg md:text-xl font-bold text-secondary">{centerText}</span>
      </div>
    </div>
  );
};

export const InsightsSection = () => {
  const reachSegments = [
    { value: 77.8, color: "hsl(280 60% 70%)", label: "Non-Followers" },
    { value: 22.2, color: "hsl(45 90% 65%)", label: "Followers" },
  ];

  return (
    <section className="py-24 relative overflow-hidden insights-grid-bg">
      <div className="absolute top-32 left-8 text-[hsl(25_80%_65%)] rotate-12">
        <DoodleArrow direction="right" />
      </div>
      <div className="absolute top-20 right-16 text-gold animate-float">
        <Sparkle size="lg" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <HandwrittenNote className="block mb-2">the numbers ✨</HandwrittenNote>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary mt-2">
            Insights & Analytics
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[hsl(330_60%_90%)]">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl font-semibold text-secondary">Reach Breakdown</h3>
                <HandwrittenNote className="text-base">Targeted! 🚀</HandwrittenNote>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <DonutChart segments={reachSegments} centerText="77.8%" />
                <div className="space-y-4 flex-1">
                  <StatBar label="Non-Followers" value="77.8%" percentage={77.8} color="bg-[hsl(280_60%_70%)]" />
                  <StatBar label="Followers" value="22.2%" percentage={22.2} color="bg-[hsl(45_90%_65%)]" />
                  <StatBar label="Accounts Reached" value="290K+" percentage={85} color="bg-[hsl(200_70%_70%)]" />
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[hsl(330_60%_90%)]">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-display text-2xl font-semibold text-secondary">Engagement Stats</h3>
                <HandwrittenNote className="text-base">Growing fast 🌱</HandwrittenNote>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <CircleStat value="14K+" label="Engaged" color="bg-[hsl(200_70%_70%)]" />
                <CircleStat value="5.8K" label="Saves" color="bg-[hsl(330_70%_75%)]" />
                <CircleStat value="9.3K" label="Followers" color="bg-[hsl(280_60%_70%)]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { label: "Total Views", value: "542K+", icon: "👁", color: "from-[hsl(200_70%_85%)] to-[hsl(200_70%_95%)]" },
              { label: "Accounts Reached", value: "290K+", icon: "💬", color: "from-[hsl(330_70%_85%)] to-[hsl(330_70%_95%)]" },
              { label: "Profile Activity", value: "9.3K+", icon: "👤", color: "from-[hsl(280_60%_85%)] to-[hsl(280_60%_95%)]" },
              { label: "Interactions", value: "20.6K+", icon: "💭", color: "from-[hsl(45_90%_80%)] to-[hsl(45_90%_92%)]" },
              { label: "Non-Follower Reach", value: "77.8%", icon: "📈", color: "from-green-200 to-green-300" },
            ].map((stat) => (
              <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 md:p-6 text-center shadow-md border border-white/50 hover:shadow-lg transition-shadow hover:-translate-y-1`}>
                <span className="text-2xl md:text-3xl mb-2 block">{stat.icon}</span>
                <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};