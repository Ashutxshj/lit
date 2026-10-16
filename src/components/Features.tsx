"use client";

import React, { useState } from "react";
import Link from "next/link";

interface RedesignProject {
  id: string;
  chapter: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  previewUrl: string;
  themeStyle: {
    bg: string;
    headerBg: string;
    border: string;
    accent: string;
    textColor: string;
  };
}

const REDESIGNS: RedesignProject[] = [
  {
    id: "youtube-theater",
    chapter: "01 / STREAMING",
    title: "YOUTUBE THEATER",
    category: "Cinema & Video",
    tags: ["Ambient Glow", "OLED Pitch-Black", "Distraction-Free"],
    description: "Replaces YouTube's chaotic clutter with a clean cinema theater view, ambient video edge lighting, floating volume sliders, and hidden comments until hovered.",
    previewUrl: "youtube.com/watch",
    themeStyle: {
      bg: "#050505",
      headerBg: "#0E0E10",
      border: "#202025",
      accent: "#E85D26",
      textColor: "#F1F1F1",
    },
  },
  {
    id: "github-matrix",
    chapter: "02 / DEVELOPER",
    title: "GITHUB MATRIX",
    category: "Code & Engineering",
    tags: ["Monokai Pro", "Glowing Syntax", "JetBrains Mono"],
    description: "Transforms repository trees into a sleek IDE-grade workstation with neon syntax highlighting, glowing git diff trees, and collapsible distraction-free file trees.",
    previewUrl: "github.com/kernel/lit",
    themeStyle: {
      bg: "#0A0D14",
      headerBg: "#0F1524",
      border: "#1C253B",
      accent: "#00FFCC",
      textColor: "#E2E8F0",
    },
  },
  {
    id: "chatgpt-editorial",
    chapter: "03 / AI INTERFACE",
    title: "CHATGPT EDITORIAL",
    category: "AI & Reading",
    tags: ["Warm Linen Paper", "Playfair Serif", "Focus Mode"],
    description: "Turns sterile AI chat into an exquisite reading room with warm paper textures, generous bookish margins, elegant serif typography, and distraction-free prompt bars.",
    previewUrl: "chatgpt.com/c/research-note",
    themeStyle: {
      bg: "#F4EFE6",
      headerBg: "#EAE3D5",
      border: "#D8D2C5",
      accent: "#1649FF",
      textColor: "#121212",
    },
  },
  {
    id: "reddit-elevated",
    chapter: "04 / SOCIAL FEED",
    title: "REDDIT ELEVATED",
    category: "Community & Media",
    tags: ["Magazine Cards", "Neon Flair", "OLED Dark"],
    description: "Reimagines Reddit as a high-end digital publication with edge-to-edge media cards, glowing vote indicators, and instant comment thread collapsing.",
    previewUrl: "reddit.com/r/technology",
    themeStyle: {
      bg: "#08080A",
      headerBg: "#111116",
      border: "#22222E",
      accent: "#D4FF00",
      textColor: "#F5F5FA",
    },
  },
];

export default function Features() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="features" className="w-full bg-[#F4EFE6] text-[#121212] py-24 md:py-36 border-b border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (matching Image 2) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-24 border-b border-[#D8D2C5]">
          <div>
            <span className="chapter-label block mb-4">
              CHAPTER 02 / SELECTED REDESIGNS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-[-0.035em] text-[#121212] leading-[1.05]">
              <span className="block font-sans font-bold">Real websites,</span>
              <span className="block font-serif italic font-normal">drawn differently.</span>
            </h2>
          </div>

          <p className="max-w-md text-base md:text-lg text-[#736E65] leading-relaxed md:pb-2">
            Four live browser experiences across streaming, developer tools, and creative media. Hover to open a window into each customized world.
          </p>
        </div>

        {/* 2-Column Showcase Cards Grid (matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-12 md:pt-16">
          {REDESIGNS.map((item) => {
            const isHovered = activeCard === item.id;
            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="editorial-card border border-[#D8D2C5] bg-[#FAF7F2] p-5 sm:p-7 flex flex-col justify-between rounded-[2px]"
              >
                {/* Simulated Interactive Window Preview */}
                <div
                  className="w-full h-[260px] sm:h-[320px] rounded-[2px] border overflow-hidden p-4 flex flex-col justify-between transition-all duration-300 relative select-none"
                  style={{
                    backgroundColor: item.themeStyle.bg,
                    borderColor: isHovered ? item.themeStyle.accent : item.themeStyle.border,
                    color: item.themeStyle.textColor,
                  }}
                >
                  {/* Window Bar */}
                  <div
                    className="flex items-center justify-between pb-3 border-b text-[11px] font-mono"
                    style={{ borderColor: item.themeStyle.border }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full opacity-60 bg-current" />
                      <span className="w-2 h-2 rounded-full opacity-40 bg-current" />
                      <span className="w-2 h-2 rounded-full opacity-40 bg-current" />
                    </div>
                    <span className="opacity-75 truncate max-w-[200px]">{item.previewUrl}</span>
                    <span
                      className="px-2 py-0.5 rounded-[1px] font-semibold text-[10px] uppercase"
                      style={{
                        backgroundColor: item.themeStyle.accent,
                        color: item.id === "chatgpt-editorial" ? "#FFF" : "#000",
                      }}
                    >
                      LIVE REDESIGN
                    </span>
                  </div>

                  {/* Visual Content Representation */}
                  <div className="flex-1 py-4 flex flex-col justify-center">
                    {item.id === "youtube-theater" && (
                      <div className="space-y-3">
                        <div className="h-28 rounded-[2px] bg-[#141418] border border-[#272730] relative overflow-hidden flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-red-500/20" />
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                            ▶
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="h-2 w-2/3 bg-white/40 rounded-[1px]" />
                          <div className="h-1.5 w-16 bg-orange-500 rounded-[1px]" />
                        </div>
                      </div>
                    )}

                    {item.id === "github-matrix" && (
                      <div className="font-mono text-xs space-y-1.5 p-3 rounded-[2px] bg-[#070A0F] border border-[#161F33]">
                        <p className="text-[#00FFCC]">const litEngine = new BrowserLayer({'{'}</p>
                        <p className="text-[#94A3B8] pl-4">mode: &quot;matrix-cyber&quot;,</p>
                        <p className="text-[#F43F5E] pl-4">glowLinks: true,</p>
                        <p className="text-[#00FFCC]">{'}'});</p>
                        <div className="h-1.5 w-1/2 bg-[#00FFCC]/40 rounded-[1px] mt-2" />
                      </div>
                    )}

                    {item.id === "chatgpt-editorial" && (
                      <div className="font-serif space-y-2.5 p-4 rounded-[2px] bg-[#EAE3D5] border border-[#D8D2C5] text-[#121212]">
                        <p className="text-sm italic font-normal leading-relaxed">
                          &ldquo;Every document deserves breathing room, balanced contrast, and bookish dignity.&rdquo;
                        </p>
                        <div className="h-1 w-1/3 bg-[#1649FF] rounded-[1px]" />
                      </div>
                    )}

                    {item.id === "reddit-elevated" && (
                      <div className="space-y-2">
                        <div className="p-3 rounded-[2px] bg-[#121218] border border-[#272735] flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-[10px] text-[#D4FF00] font-mono">r/webdesign · 4.8k upvotes</span>
                            <p className="text-xs font-bold text-white">Why did everyone accept flat gray interfaces?</p>
                          </div>
                          <span className="text-xs px-2 py-1 rounded bg-[#D4FF00] text-black font-bold">▲ 4.8k</span>
                        </div>
                        <div className="h-2 w-4/5 bg-white/20 rounded-[1px]" />
                      </div>
                    )}
                  </div>

                  {/* Window Bottom State */}
                  <div className="pt-2 border-t flex items-center justify-between text-[11px] opacity-70" style={{ borderColor: item.themeStyle.border }}>
                    <span>LIT Extension Override</span>
                    <span className="font-mono">100% Client-Rendered</span>
                  </div>
                </div>

                {/* Card Details & Footer (matching Image 2) */}
                <div className="mt-6 pt-4 border-t border-[#D8D2C5]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="chapter-label text-[10px] text-[#736E65]">
                        {item.chapter}
                      </span>
                      <h3 className="font-sans text-2xl font-bold text-[#121212] tracking-tight mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    {/* Circular Action Button with ↗ (matching Image 2) */}
                    <Link
                      href="/dashboard"
                      className="w-10 h-10 rounded-full border border-[#D8D2C5] hover:border-[#121212] hover:bg-[#121212] hover:text-[#F4EFE6] flex items-center justify-center transition-colors duration-200 text-sm"
                      aria-label={`Open ${item.title} in Studio`}
                    >
                      ↗
                    </Link>
                  </div>

                  <p className="mt-2 text-xs text-[#736E65] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech / Aesthetic Tags */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#EAE3D5] text-[#121212] rounded-[1px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
