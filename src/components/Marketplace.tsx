"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ThemeItem {
  id: string;
  name: string;
  creator: string;
  gradientStyle: string;
  tag: "Free" | "Premium";
  installs: string;
}

const themes: ThemeItem[] = [
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    creator: "@alexperry",
    gradientStyle: "linear-gradient(135deg, #E8612E 0%, #F5A623 100%)",
    tag: "Free",
    installs: "4.8k installs",
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean",
    creator: "@marcus_dev",
    gradientStyle: "linear-gradient(135deg, #1A237E 0%, #4A5FC1 100%)",
    tag: "Premium",
    installs: "2.4k installs",
  },
  {
    id: "forest-calm",
    name: "Forest Calm",
    creator: "@olivia_nordic",
    gradientStyle: "linear-gradient(135deg, #2D5F3E 0%, #68B87A 100%)",
    tag: "Free",
    installs: "1.2k installs",
  },
  {
    id: "midnight-mono",
    name: "Midnight Mono",
    creator: "@kuro_studio",
    gradientStyle: "linear-gradient(135deg, #141414 0%, #3A3A3A 100%)",
    tag: "Premium",
    installs: "3.9k installs",
  },
];

export default function Marketplace() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>(0.08);

  return (
    <section
      ref={sectionRef}
      id="marketplace"
      className="w-full bg-[#F5F0E8] text-[#141414] py-24 md:py-32 border-b border-[#D4CEC4]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20">
          <div className={`reveal-left ${isVisible ? "visible" : ""} lg:col-span-7`}>
            <p className="chapter-label mb-4 md:mb-5">
              04 / THE MARKETPLACE
            </p>
            <h2 className="heading-tight text-5xl md:text-7xl font-sans font-bold leading-[1.06] tracking-[-0.03em] text-[#141414]">
              Themes from <br />
              <span className="serif-italic font-serif italic font-normal">
                the community.
              </span>
            </h2>
          </div>
          <div className={`reveal-right ${isVisible ? "visible" : ""} lg:col-span-5 lg:pb-2`}>
            <p className="text-base md:text-lg text-[#7A756D] leading-relaxed max-w-md">
              Browse, install, and share custom themes. Premium users unlock
              exclusive redesigns, wallpapers, and creator content.
            </p>
          </div>
        </div>

        {/* Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {themes.map((theme, i) => (
            <article
              key={theme.id}
              className={`reveal-scale ${isVisible ? "visible" : ""} stagger-${i + 1} theme-card bg-[#F5F0E8] border border-[#D4CEC4] rounded-[3px] overflow-hidden cursor-pointer`}
            >
              {/* Preview strip */}
              <div
                className="h-[200px] w-full p-4 flex flex-col justify-between relative select-none"
                style={{ background: theme.gradientStyle }}
              >
                {/* Mini browser bar */}
                <div className="flex items-center gap-2 pb-2 border-b border-white/20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/45" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <div className="h-4 px-2.5 rounded-[2px] bg-black/25 text-white/85 font-mono text-[10px] flex items-center tracking-tight">
                    lit://themes/{theme.id}
                  </div>
                </div>

                {/* Wireframe content */}
                <div className="flex-1 pt-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-[1px] bg-white/35 flex items-center justify-center text-[8px] text-white font-bold">L</div>
                      <div className="h-1.5 w-16 bg-white/50 rounded-[1px]" />
                    </div>
                    <div className="h-3 w-3/5 bg-white/85 rounded-[1px]" />
                    <div className="h-1.5 w-2/5 bg-white/40 rounded-[1px]" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-11 rounded-[2px] bg-white/20 border border-white/15 p-1.5 flex flex-col justify-between">
                      <div className="h-1 w-3/4 bg-white/60 rounded-[1px]" />
                      <div className="h-1 w-1/2 bg-white/40 rounded-[1px]" />
                    </div>
                    <div className="h-11 rounded-[2px] bg-white/25 border border-white/20 p-1.5 flex flex-col justify-between">
                      <div className="h-1 w-2/3 bg-white/70 rounded-[1px]" />
                      <div className="h-1 w-1/3 bg-white/45 rounded-[1px]" />
                    </div>
                    <div className="h-11 rounded-[2px] bg-white/20 border border-white/15 p-1.5 flex flex-col justify-between">
                      <div className="h-1 w-4/5 bg-white/60 rounded-[1px]" />
                      <div className="h-1 w-2/5 bg-white/40 rounded-[1px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#141414] tracking-tight">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-[#7A756D] mt-0.5">
                    by {theme.creator}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D4CEC4]">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-[2px] ${
                      theme.tag === "Premium"
                        ? "bg-[#E8612E] text-white"
                        : "bg-transparent text-[#141414] border border-[#D4CEC4]"
                    }`}
                  >
                    {theme.tag}
                  </span>
                  <span className="text-xs text-[#7A756D] font-medium flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {theme.installs}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Notice */}
        <div className={`reveal ${isVisible ? "visible" : ""} mt-14 md:mt-16 text-center`}>
          <p className="text-sm md:text-base text-[#7A756D] font-medium">
            Marketplace launching soon. Create themes from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
