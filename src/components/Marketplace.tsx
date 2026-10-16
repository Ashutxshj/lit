"use client";

import React, { useState } from "react";
import Link from "next/link";

interface MarketplaceTheme {
  id: string;
  name: string;
  creator: string;
  category: "all" | "cyber" | "oled" | "editorial" | "retro";
  downloads: string;
  rating: string;
  tag: "FREE" | "PRO";
  palette: string[];
  gradientPreview: string;
  siteTarget: string;
  description: string;
}

const MARKETPLACE_THEMES: MarketplaceTheme[] = [
  {
    id: "sunset-glow",
    name: "Sunset Ember",
    creator: "@alexperry",
    category: "retro",
    downloads: "5.4k",
    rating: "4.9",
    tag: "FREE",
    palette: ["#141416", "#E85D26", "#F5A623", "#F4EFE6"],
    gradientPreview: "linear-gradient(135deg, #1C1310 0%, #E85D26 100%)",
    siteTarget: "YouTube & Reddit",
    description: "Warm gradient ambient lighting for late night media sessions with glowing orange hyperlinks.",
  },
  {
    id: "matrix-core",
    name: "Matrix Glitch",
    creator: "@marcus_dev",
    category: "cyber",
    downloads: "8.1k",
    rating: "5.0",
    tag: "PRO",
    palette: ["#05080E", "#00FFCC", "#10B981", "#1E293B"],
    gradientPreview: "linear-gradient(135deg, #070D18 0%, #00FFCC 100%)",
    siteTarget: "GitHub & StackOverflow",
    description: "High-voltage cyberpunk neon syntax with green glowing diff trees and jetbrains mono override.",
  },
  {
    id: "atelier-linen",
    name: "Atelier Paper",
    creator: "@olivia_paris",
    category: "editorial",
    downloads: "3.2k",
    rating: "4.8",
    tag: "FREE",
    palette: ["#F4EFE6", "#EAE3D5", "#1649FF", "#121212"],
    gradientPreview: "linear-gradient(135deg, #F4EFE6 0%, #D8D2C5 100%)",
    siteTarget: "ChatGPT & Medium",
    description: "Generous margins, Cormorant Garamond serif headers, and high-legibility linen background.",
  },
  {
    id: "pitch-black-oled",
    name: "Pitch Black OLED",
    creator: "@kuro_tokyo",
    category: "oled",
    downloads: "12.7k",
    rating: "5.0",
    tag: "PRO",
    palette: ["#000000", "#121212", "#D4FF00", "#F8FAFC"],
    gradientPreview: "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
    siteTarget: "Universal 100+ Sites",
    description: "Absolute #000000 zero-power OLED dark mode with acid yellow accent highlights.",
  },
];

export default function Marketplace() {
  const [filter, setFilter] = useState<string>("all");
  const [installedTheme, setInstalledTheme] = useState<string | null>(null);

  const filteredThemes = filter === "all"
    ? MARKETPLACE_THEMES
    : MARKETPLACE_THEMES.filter((t) => t.category === filter);

  const handleInstall = (themeId: string) => {
    setInstalledTheme(themeId);
    setTimeout(() => {
      setInstalledTheme(null);
    }, 2500);
  };

  return (
    <section id="marketplace" className="w-full bg-[#F4EFE6] text-[#121212] py-24 md:py-36 border-b border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-[#D8D2C5]">
          <div>
            <span className="chapter-label block mb-4">
              CHAPTER 04 / THE MARKETPLACE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-[-0.035em] text-[#121212] leading-[1.05]">
              <span className="block font-sans font-bold">Themes from</span>
              <span className="block font-serif italic font-normal">the community.</span>
            </h2>
          </div>

          <p className="max-w-md text-base md:text-lg text-[#736E65] leading-relaxed md:pb-2">
            Browse, test, and install community designs. Or publish your own and earn royalties from creator downloads.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
          {[
            { id: "all", label: "All Themes" },
            { id: "cyber", label: "Cyberpunk Matrix" },
            { id: "oled", label: "OLED Pitch-Black" },
            { id: "editorial", label: "Warm Editorial" },
            { id: "retro", label: "Retro Synthwave" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer border ${
                filter === cat.id
                  ? "bg-[#121212] text-[#F4EFE6] border-[#121212]"
                  : "bg-white text-[#736E65] border-[#D8D2C5] hover:border-[#121212] hover:text-[#121212]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredThemes.map((theme) => {
            const isInstalled = installedTheme === theme.id;
            return (
              <article
                key={theme.id}
                className="editorial-card border border-[#D8D2C5] bg-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between rounded-[2px]"
              >
                <div>
                  {/* Top Preview Banner */}
                  <div
                    className="w-full h-44 rounded-[2px] p-4 flex flex-col justify-between text-white relative overflow-hidden border border-black/10"
                    style={{ background: theme.gradientPreview }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded-[1px] bg-black/40 backdrop-blur-xs">
                        {theme.siteTarget}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-[1px] font-bold text-[10px] ${
                          theme.tag === "PRO"
                            ? "bg-[#D4FF00] text-black"
                            : "bg-white text-black"
                        }`}
                      >
                        {theme.tag}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {theme.palette.map((color, i) => (
                          <span
                            key={i}
                            className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono opacity-80">★ {theme.rating} ({theme.downloads})</span>
                    </div>
                  </div>

                  {/* Theme Info */}
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-[#121212] tracking-tight">
                        {theme.name}
                      </h3>
                      <p className="text-xs text-[#736E65] font-mono mt-0.5">
                        by {theme.creator} · verified creator
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-[#736E65] leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-4 border-t border-[#D8D2C5] flex items-center justify-between gap-4">
                  <Link
                    href={`/dashboard?theme=${theme.id}`}
                    className="text-xs font-semibold font-mono uppercase tracking-wider text-[#121212] hover:text-[#1649FF] transition-colors"
                  >
                    Test in Studio ↗
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleInstall(theme.id)}
                    className={`px-4 py-2 text-xs font-semibold font-mono uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer border ${
                      isInstalled
                        ? "bg-[#10B981] text-white border-[#10B981]"
                        : "bg-[#121212] text-[#F4EFE6] border-[#121212] hover:bg-[#1649FF] hover:border-[#1649FF]"
                    }`}
                  >
                    {isInstalled ? "Applied to Layer ✓" : "Install Theme"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Creator Callout */}
        <div className="mt-16 p-8 border border-[#D8D2C5] bg-[#EAE3D5] rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-sans text-lg font-bold text-[#121212]">
              Are you a digital designer or CSS craftsman?
            </h4>
            <p className="text-sm text-[#736E65] mt-1">
              Publish your themes on the LIT Marketplace. Keep 85% of premium sales directly via Stripe or Razorpay.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="px-5 py-2.5 bg-[#121212] text-[#F4EFE6] text-xs font-mono font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#1649FF] transition-colors shrink-0"
          >
            Open Creator Studio ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
