"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ToolkitItem {
  title: string;
  subtitle: string;
  detail: string;
  siteOverride: string;
}

const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    title: "MANIFEST V3",
    subtitle: "Lightweight sandbox",
    detail: "Zero telemetry, zero remote code injection. Runs locally inside Chrome, Brave, Edge & Firefox.",
    siteOverride: "Universal Core",
  },
  {
    title: "CSS INJECTION",
    subtitle: "0ms style engine",
    detail: "Dynamic scoped CSS variables injected before paint to eliminate white flashes completely.",
    siteOverride: "YouTube & Google",
  },
  {
    title: "CANVAS SHADERS",
    subtitle: "Real-time visual FX",
    detail: "Hardware-accelerated ambient video lighting, neon bloom, and customizable CRT scanline filters.",
    siteOverride: "Video & Media",
  },
  {
    title: "FONT SWAPPER",
    subtitle: "Zero-FOUC typography",
    detail: "Instantly override system fonts with high-contrast serifs, monospaces, and premium typefaces.",
    siteOverride: "ChatGPT & Medium",
  },
  {
    title: "LOCAL STORAGE",
    subtitle: "Offline-first engine",
    detail: "Active themes, custom palettes, and site preferences work seamlessly even offline.",
    siteOverride: "chrome.storage.local",
  },
  {
    title: "SITE ADAPTERS",
    subtitle: "DOM mutation guards",
    detail: "Smart observers ensure your custom visual layers persist across single-page app route transitions.",
    siteOverride: "GitHub & Reddit SPAs",
  },
];

export default function SupportedSites() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="engine" className="w-full bg-[#1649FF] text-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (matching Image 3) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-20">
          <div>
            <span className="chapter-label block text-white/60 mb-4 tracking-[0.2em] font-mono">
              CHAPTER 03 / INVENTORY & ENGINE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-[-0.035em] text-white leading-[1.05]">
              <span className="block font-sans font-bold">What&apos;s in</span>
              <span className="block font-serif italic font-normal">the toolkit?</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 md:pb-2">
            {/* Center circle indicator matching Image 3 */}
            <div className="hidden lg:flex w-8 h-8 rounded-full border border-white/30 items-center justify-center text-white/70 text-xs">
              ○
            </div>
            <p className="max-w-sm text-sm sm:text-base text-white/80 leading-relaxed">
              Everything engineered for a journey from initial prototype to a zero-latency client-side browser layer.
            </p>
          </div>
        </div>

        {/* 6-Grid with Shared 1px Borders (matching Image 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
          {TOOLKIT_ITEMS.map((item) => {
            const isHovered = activeItem === item.title;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveItem(item.title)}
                onMouseLeave={() => setActiveItem(null)}
                className="cobalt-cell bg-[#1649FF] p-8 sm:p-10 md:p-12 min-h-[220px] md:min-h-[260px] flex flex-col justify-between transition-colors duration-200 cursor-default"
              >
                <div>
                  <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-white/75 mt-2 tracking-wide">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/60">
                  <span className="font-mono">{item.siteOverride}</span>
                  <span className="text-white/40">{isHovered ? "ACTIVE" : "0ms"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/15 text-sm text-white/70">
          <span>Supported Platforms: YouTube, GitHub, Reddit, ChatGPT, Google Search, Medium, Twitter/X + any custom domain.</span>
          <Link
            href="/dashboard"
            className="font-mono text-xs font-semibold uppercase tracking-wider text-white underline hover:text-[#D4FF00] transition-colors"
          >
            Inspect Engine Architecture ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
