import { ArrowRight } from "lucide-react";
import { DoodleArrow } from "./DoodleArrow";
import { Sparkle } from "./Sparkle";

export const AgencySection = () => {
  return (
    <section id="agency" className="relative overflow-hidden bg-[#f6ede0] py-24 text-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(248,239,225,0.88),transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.55) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.55) 1px,transparent 1px)] bg-[length:36px_36px] pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)] bg-[length:14px_14px] pointer-events-none opacity-80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-secondary/70 shadow-sm shadow-secondary/10">
              Creative AI Agency
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-secondary">
                AI Jugaad
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-secondary/80">
                Helping businesses leverage AI through premium websites, AI visuals, and intelligent digital experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-[2rem] border border-[#74815d] bg-white/85 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-secondary">Website Design</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f2d8] text-[#4f663d] text-sm font-semibold">
                    W
                  </div>
                </div>
                <p className="text-sm leading-7 text-secondary/75">
                  Modern high-converting websites crafted for businesses and creators.
                </p>
              </div>

              <div className="group rounded-[2rem] border border-[#74815d] bg-white/85 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-secondary">AI Media Production</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f2d8] text-[#4f663d] text-sm font-semibold">
                    AI
                  </div>
                </div>
                <p className="text-sm leading-7 text-secondary/75">
                  AI-generated images, videos, and visual assets built for modern brands.
                </p>
              </div>
            </div>

            <a
              href="https://aijugaaad.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#5d7050] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#5d70501a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4d603f]"
            >
              Visit AI Jugaad
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute left-0 top-12 h-28 w-28 rounded-full bg-[#eaf0dc]/70 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-20 w-20 rounded-full bg-[#ffdca8]/40 blur-3xl" />
            <div className="absolute -left-8 top-16 text-[#6c7d4d] opacity-80">
              <DoodleArrow direction="curved" className="text-[#6c7d4d]" />
            </div>
            <div className="absolute right-12 top-6 text-[#8a9c65] opacity-90">
              <Sparkle className="text-[#8a9c65]" />
            </div>

            <div className="relative w-full max-w-[520px] rounded-[2.5rem] border border-[#d8d0c2] bg-white/85 p-6 shadow-xl shadow-secondary/10">
              <div className="flex items-center justify-between rounded-3xl border border-[#eef0e7] bg-[#f8f2e7] p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e7f2d8] text-[#4f663d] font-bold">AIJ</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-secondary/70">AI Jugaad</p>
                    <p className="text-xs text-secondary/60">Premium creative agency</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.35em] text-secondary/60">AI Jugaad logo</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#d7e2b8] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#3f5131]">
                  Brand
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[2rem] border border-[#f1e7d9] bg-[#fbf6ef] p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-secondary">AI-powered visuals</p>
                      <p className="mt-2 text-xs text-secondary/60">Tailored imagery and motion for business stories.</p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#e7f2d8] text-[#4f663d] text-xs font-semibold">
                      ✦
                    </span>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-[#f1e7d9] bg-[#fbf6ef] p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-secondary">Creative automation</p>
                      <p className="mt-2 text-xs text-secondary/60">Systems that scale storytelling across web and social.</p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#e7f2d8] text-[#4f663d] text-xs font-semibold">
                      ✦
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[2rem] bg-[#fbf6ef] p-5 shadow-sm border border-[#f1e7d9]">
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#e7f2d8] text-[#4f663d]">•</span>
                    <span>Built with AI</span>
                  </div>
                  <p className="mt-3 text-sm text-secondary/75">Beautiful product previews with subtle motion and premium polish.</p>
                </div>
                <div className="rounded-[2rem] bg-[#fff7ec] p-5 shadow-sm border border-[#f4e8d8]">
                  <p className="text-xs uppercase tracking-[0.35em] text-secondary/60">Digital alchemy</p>
                  <p className="mt-3 text-sm font-semibold text-secondary">Strategic visuals that feel tactile, not templated.</p>
                </div>
              </div>
            </div>

            <div className="absolute right-[-3rem] top-[40%] h-40 w-40 rounded-full bg-[#dde4b9]/70 blur-3xl" />
            <div className="absolute left-[-3rem] bottom-10 h-28 w-28 rounded-full bg-[#fff1dd]/60 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
