import { Sparkle } from "./Sparkle";
import { Users, CalendarDays, BookOpen, MessageCircle } from "lucide-react";

const FeatureCard = ({ icon: Icon, title }: { icon: typeof Users; title: string }) => (
  <div className="flex items-start gap-4 rounded-3xl border border-[hsl(330_60%_90%)] bg-white/80 p-5 shadow-sm shadow-secondary/10 transition-shadow duration-300 hover:shadow-lg">
    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary/10 text-secondary shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
    <p className="text-sm md:text-base font-medium text-foreground">{title}</p>
  </div>
);

export const AIPlaybookSection = () => {
  return (
    <section id="ai-playbook" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-white/90 px-4 py-2 text-sm text-secondary shadow-sm shadow-secondary/5">
              <Sparkle size="sm" className="text-gold" />
              <span className="font-medium uppercase tracking-[0.35em] text-secondary/80">AI Playbook</span>
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary tracking-tight">
                A student-first AI community built for learning, sharing, and growing together.
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground leading-8">
                AI Playbook is an AI community focused on helping students, creators, and curious people stay updated with AI through collaborative learning, weekly events, and daily discovery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={Users} title="300+ community members" />
              <FeatureCard icon={CalendarDays} title="Weekly online workshops & meetups" />
              <FeatureCard icon={MessageCircle} title="Daily AI news and updates" />
              <FeatureCard icon={BookOpen} title="AI learning resources and discussions" />
            </div>

            <div className="space-y-4 max-w-xl">
              <p className="text-sm text-muted-foreground leading-7">
                Join a community-driven learning environment where ideas, tools, and AI insights come together for students and creators who want to stay ahead.
              </p>
              <a
                href="https://chat.whatsapp.com/E2O9u5yujTU8BSIdsJB0zv?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-4 text-lg font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
              >
                Become Part of AI Playbook
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-xl shadow-secondary/10 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-secondary/10 to-transparent" />
              <div className="flex items-center justify-between mb-5 relative z-10">
                <p className="text-xs uppercase tracking-[0.35em] text-secondary/60">Community preview</p>
                <Sparkle className="h-6 w-6 text-gold" />
              </div>

                <div className="relative grid gap-4 z-10">
                  <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-background/70 p-4 shadow-inner">
                    <div className="carousel-mask overflow-hidden rounded-[2rem]">
                      <div className="carousel-track flex gap-5 animate-carousel will-change-transform">
                        <div className="carousel-card min-w-[260px] md:min-w-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/20 bg-white shadow-lg shadow-secondary/10">
                          <img src="/images/playbook-1.jpeg" alt="AI Playbook community screenshot 1" className="h-64 w-full object-cover" />
                          <div className="bg-white/95 p-4">
                            <p className="text-sm font-semibold text-secondary">Live workshop snapshot</p>
                            <p className="text-xs text-muted-foreground mt-1">A high-energy session capture with real attendees.</p>
                          </div>
                        </div>
                        <div className="carousel-card min-w-[260px] md:min-w-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/20 bg-white shadow-lg shadow-secondary/10">
                          <img src="/images/playbook-2.jpeg" alt="AI Playbook community screenshot 2" className="h-64 w-full object-cover" />
                          <div className="bg-white/95 p-4">
                            <p className="text-sm font-semibold text-secondary">Workshop stage</p>
                            <p className="text-xs text-muted-foreground mt-1">Weekly sessions packed with AI learning moments.</p>
                          </div>
                        </div>
                        <div className="carousel-card min-w-[260px] md:min-w-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/20 bg-white shadow-lg shadow-secondary/10">
                          <img src="/images/playbook-3.jpeg" alt="AI Playbook community screenshot 3" className="h-64 w-full object-cover" />
                          <div className="bg-white/95 p-4">
                            <p className="text-sm font-semibold text-secondary">Member discussion</p>
                            <p className="text-xs text-muted-foreground mt-1">Community conversations and daily AI updates.</p>
                          </div>
                        </div>
                        <div className="carousel-card min-w-[260px] md:min-w-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/20 bg-white shadow-lg shadow-secondary/10">
                          <img src="/images/playbook-4.jpeg" alt="AI Playbook community screenshot 4" className="h-64 w-full object-cover" />
                          <div className="bg-white/95 p-4">
                            <p className="text-sm font-semibold text-secondary">Group catchups</p>
                            <p className="text-xs text-muted-foreground mt-1">Clear, visual community moments for every attendee.</p>
                          </div>
                        </div>
                        <div className="carousel-card min-w-[260px] md:min-w-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden border border-white/20 bg-white shadow-lg shadow-secondary/10">
                          <img src="/images/playbook-1.jpeg" alt="AI Playbook community screenshot 1" className="h-64 w-full object-cover" />
                          <div className="bg-white/95 p-4">
                            <p className="text-sm font-semibold text-secondary">Live workshop snapshot</p>
                            <p className="text-xs text-muted-foreground mt-1">A high-energy session capture with real attendees.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 rounded-[2rem] border border-secondary/10 bg-secondary/10 p-4 shadow-sm">
                      <p className="text-sm font-medium text-secondary">A creative glimpse into AI Playbook’s workshops, member sessions, and collaboration energy.</p>
                    </div>
                  </div>

                  <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-xl shadow-secondary/10 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-secondary/60 mb-4">Why join</p>
                    <div className="space-y-4">
                      <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4 shadow-sm">
                        <p className="text-sm font-medium text-secondary">Build AI habits with curated daily updates.</p>
                      </div>
                      <div className="rounded-3xl bg-gradient-to-br from-gold/10 to-cream/10 p-4 shadow-sm">
                        <p className="text-sm font-medium text-secondary">Attend live workshops designed for students and creators.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-xl shadow-secondary/10 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary/60 mb-4">Why join</p>
              <div className="space-y-4">
                <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-4 shadow-sm">
                  <p className="text-sm font-medium text-secondary">Build AI habits with curated daily updates.</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-gold/10 to-cream/10 p-4 shadow-sm">
                  <p className="text-sm font-medium text-secondary">Attend live workshops designed for students and creators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
