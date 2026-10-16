"use client";

import React, { useState } from "react";
import Link from "next/link";

type ThemePreset = "default" | "cyberpunk" | "editorial" | "midnight" | "tokyo";

interface ThemeConfig {
  name: string;
  step: string;
  label: string;
  bg: string;
  cardBg: string;
  text: string;
  accent: string;
  fontFamily: string;
  fontName: string;
  glow: boolean;
  border: string;
  mockSiteName: string;
  mockUrl: string;
}

const THEMES: Record<ThemePreset, ThemeConfig> = {
  default: {
    name: "Default Web",
    step: "01 DEFAULT",
    label: "Standard Boring UI",
    bg: "#FFFFFF",
    cardBg: "#F3F4F6",
    text: "#1F2937",
    accent: "#2563EB",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontName: "System Default",
    glow: false,
    border: "#E5E7EB",
    mockSiteName: "Standard Web — Unstyled",
    mockUrl: "https://web.org/standard-feed",
  },
  cyberpunk: {
    name: "Cyber Matrix",
    step: "02 CYBER MATRIX",
    label: "High Voltage Neon",
    bg: "#080C14",
    cardBg: "#0F172A",
    text: "#E2E8F0",
    accent: "#00FFCC",
    fontFamily: "monospace",
    fontName: "JetBrains Mono",
    glow: true,
    border: "#1E293B",
    mockSiteName: "GitHub Pro // LIT Cyber Engine",
    mockUrl: "https://github.com/lit/kernel-v4",
  },
  editorial: {
    name: "Warm Editorial",
    step: "03 EDITORIAL",
    label: "Bookish Linen Paper",
    bg: "#F4EFE6",
    cardBg: "#EAE3D5",
    text: "#121212",
    accent: "#E85D26",
    fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
    fontName: "Playfair Display",
    glow: false,
    border: "#D8D2C5",
    mockSiteName: "ChatGPT // Editorial Linen Mode",
    mockUrl: "https://chatgpt.com/lit-reader-mode",
  },
  midnight: {
    name: "Midnight OLED",
    step: "04 OLED DARK",
    label: "True Black & Purple Glass",
    bg: "#000000",
    cardBg: "#111111",
    text: "#F8FAFC",
    accent: "#A855F7",
    fontFamily: "system-ui, sans-serif",
    fontName: "Figtree Modern",
    glow: true,
    border: "#27272A",
    mockSiteName: "YouTube Theater // OLED Cinema",
    mockUrl: "https://youtube.com/watch?v=lit-v1",
  },
  tokyo: {
    name: "Tokyo Neon",
    step: "05 TOKYO NEON",
    label: "Akihabara Synthwave",
    bg: "#0A0915",
    cardBg: "#16122E",
    text: "#FDF4FF",
    accent: "#F43F5E",
    fontFamily: "system-ui, sans-serif",
    fontName: "Tokyo Grotesk",
    glow: true,
    border: "#2E245E",
    mockSiteName: "Reddit Feed // Tokyo Night Grid",
    mockUrl: "https://reddit.com/r/webdesign",
  },
};

export default function Hero() {
  const [activeTheme, setActiveTheme] = useState<ThemePreset>("cyberpunk");
  const [glowEnabled, setGlowEnabled] = useState(true);
  const [crtEffect, setCrtEffect] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const current = THEMES[activeTheme];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setMessage("You're on the early access list! Check your inbox soon.");
      setEmail("");
    }, 500);
  };

  return (
    <section id="hero" className="relative w-full bg-[#F4EFE6] text-[#121212] pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Micro-Header (matching image 1) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-8 md:pb-12 border-b border-[#D8D2C5]">
          <span className="chapter-label text-[11px] uppercase tracking-[0.18em] text-[#736E65]">
            MY DIGITAL WORLD / BROWSER CUSTOMIZATION LAYER
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#736E65]">
            MANIFEST V3 · CHROME · BRAVE · EDGE · FIREFOX
          </span>
        </div>

        {/* Hero Editorial Typography & Tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="lg:col-span-8">
            <h1 className="font-sans font-bold text-[3rem] sm:text-[4.75rem] md:text-[5.75rem] lg:text-[6.5rem] tracking-[-0.04em] leading-[0.92] text-[#121212]">
              Why does every <br />
              screen look <br />
              <span className="font-serif italic font-normal text-[#121212]">
                the same?
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-3 flex flex-col justify-end">
            <p className="text-base sm:text-lg leading-relaxed text-[#736E65] font-sans">
              <strong className="text-[#121212] font-semibold">Be different. Be Lit.</strong> LIT is a browser customization layer that transforms how the web looks and feels. Custom visual modes, animated effects, wallpapers, glowing hyperlinks, and site-specific redesigns.
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-[3px] bg-[#121212] px-5 py-3 text-sm font-semibold text-[#F4EFE6] hover:bg-[#1649FF] transition-colors duration-200"
              >
                Launch Theme Studio ↗
              </Link>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-[3px] border border-[#121212] px-5 py-3 text-sm font-semibold text-[#121212] hover:bg-[#121212] hover:text-[#F4EFE6] transition-colors duration-200"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Panoramic Live Simulator (matching the wide centerpiece of Image 1) */}
        <div className="w-full border border-[#D8D2C5] rounded-[2px] bg-[#FAF7F2] overflow-hidden mt-6 shadow-sm">
          
          {/* Top Browser Control Bar */}
          <div className="bg-[#EAE3D5] px-4 py-3 border-b border-[#D8D2C5] flex flex-wrap items-center justify-between gap-3">
            
            {/* Traffic lights + Active Website Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9] inline-block" />
              </div>
              <span className="font-mono text-[11px] text-[#736E65] font-medium hidden sm:inline">
                LIT THEME SIMULATOR
              </span>
            </div>

            {/* Mock URL Input Bar */}
            <div className="flex-1 max-w-md mx-auto hidden md:flex items-center justify-center px-4 py-1.5 bg-[#F4EFE6] border border-[#D8D2C5] rounded-[2px] text-xs font-mono text-[#121212] truncate">
              <span className="text-[#736E65] mr-1.5">🔒</span>
              <span className="font-medium">{current.mockUrl}</span>
            </div>

            {/* Live Toggles (Glow, CRT) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGlowEnabled(!glowEnabled)}
                className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-[2px] border transition-colors cursor-pointer ${
                  glowEnabled
                    ? "bg-[#121212] text-[#D4FF00] border-[#121212]"
                    : "bg-[#F4EFE6] text-[#736E65] border-[#D8D2C5]"
                }`}
              >
                Glow: {glowEnabled ? "ON" : "OFF"}
              </button>
              <button
                type="button"
                onClick={() => setCrtEffect(!crtEffect)}
                className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-[2px] border transition-colors cursor-pointer ${
                  crtEffect
                    ? "bg-[#1649FF] text-white border-[#1649FF]"
                    : "bg-[#F4EFE6] text-[#736E65] border-[#D8D2C5]"
                }`}
              >
                Scanlines: {crtEffect ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* Interactive Multi-Step Scrubber Track (01 DEFAULT - 02 CYBER - 03 EDITORIAL - 04 OLED - 05 TOKYO) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[#D8D2C5] bg-[#FAF7F2]">
            {(Object.keys(THEMES) as ThemePreset[]).map((key) => {
              const item = THEMES[key];
              const isSelected = activeTheme === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTheme(key)}
                  className={`text-left px-4 py-3.5 border-r border-[#D8D2C5] last:border-r-0 transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#121212] text-[#F4EFE6]"
                      : "hover:bg-[#EAE3D5] text-[#121212]"
                  }`}
                >
                  <span className={`block text-[10px] font-mono font-semibold tracking-wider uppercase ${
                    isSelected ? "text-[#D4FF00]" : "text-[#736E65]"
                  }`}>
                    {item.step}
                  </span>
                  <span className="block text-xs font-semibold mt-0.5 truncate">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Simulated Webpage Stage */}
          <div
            className="p-6 sm:p-10 transition-all duration-300 relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-between"
            style={{
              backgroundColor: current.bg,
              color: current.text,
              fontFamily: current.fontFamily,
            }}
          >
            {/* Optional CRT Scanline Overlay */}
            {crtEffect && (
              <div
                className="absolute inset-0 pointer-events-none opacity-20 z-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%)",
                  backgroundSize: "100% 4px",
                }}
              />
            )}

            {/* Webpage Content Mockup */}
            <div className="relative z-0 space-y-6 max-w-4xl">
              
              {/* Header inside mockup */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: current.border }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-[2px] flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: current.accent, color: activeTheme === "default" ? "#FFF" : "#000" }}
                  >
                    L
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{current.mockSiteName}</h3>
                    <p className="text-xs opacity-60">Active Theme: {current.name} · Font: {current.fontName}</p>
                  </div>
                </div>

                {/* Glowing Hyperlinks row */}
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span
                    className="cursor-pointer underline"
                    style={{
                      color: current.accent,
                      textShadow: glowEnabled && current.glow ? `0 0 14px ${current.accent}` : "none",
                    }}
                  >
                    Trending Repos
                  </span>
                  <span
                    className="cursor-pointer underline"
                    style={{
                      color: current.accent,
                      textShadow: glowEnabled && current.glow ? `0 0 14px ${current.accent}` : "none",
                    }}
                  >
                    Watch Live (4K)
                  </span>
                  <span
                    className="cursor-pointer underline"
                    style={{
                      color: current.accent,
                      textShadow: glowEnabled && current.glow ? `0 0 14px ${current.accent}` : "none",
                    }}
                  >
                    Subscribed Redesigns
                  </span>
                </div>
              </div>

              {/* Grid of stylized simulated modules */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                
                {/* Module 1: Video / Project Card */}
                <div
                  className="p-5 rounded-[2px] border transition-all"
                  style={{ backgroundColor: current.cardBg, borderColor: current.border }}
                >
                  <div
                    className="h-24 w-full rounded-[2px] mb-3 flex items-center justify-center text-xs font-mono font-bold tracking-widest uppercase"
                    style={{
                      backgroundColor: activeTheme === "default" ? "#E5E7EB" : "#1A2234",
                      color: current.accent,
                      border: `1px dashed ${current.accent}`,
                      textShadow: glowEnabled && current.glow ? `0 0 8px ${current.accent}` : "none",
                    }}
                  >
                    {activeTheme === "midnight" ? "▶ 4K OLED PLAYER" : "[ SITE-OVERRIDE APPLIED ]"}
                  </div>
                  <h4 className="font-bold text-sm">Personalized Experience</h4>
                  <p className="text-xs opacity-70 mt-1 leading-relaxed">
                    Custom CSS variables injected into YouTube, GitHub, Reddit, Google and ChatGPT with 0ms delay.
                  </p>
                </div>

                {/* Module 2: Typography & Glow Inspector */}
                <div
                  className="p-5 rounded-[2px] border transition-all"
                  style={{ backgroundColor: current.cardBg, borderColor: current.border }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                    Engine Inspector
                  </span>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="opacity-70">Font Family</span>
                      <span className="font-semibold">{current.fontName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Accent Neon</span>
                      <span className="font-mono font-semibold" style={{ color: current.accent }}>
                        {current.accent}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Link Glow Effect</span>
                      <span className="font-semibold" style={{ color: glowEnabled ? current.accent : "inherit" }}>
                        {glowEnabled && current.glow ? "Active (Neon Bloom)" : "Disabled"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Module 3: Extension Quick Status */}
                <div
                  className="p-5 rounded-[2px] border flex flex-col justify-between"
                  style={{ backgroundColor: current.cardBg, borderColor: current.border }}
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                      Extension Sync
                    </span>
                    <h4 className="font-bold text-sm mt-1">LIT Extension Active</h4>
                    <p className="text-xs opacity-70 mt-1">
                      Local storage synced. 14 websites personalized.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs" style={{ borderColor: current.border }}>
                    <span className="font-mono text-[11px] opacity-75">v1.0.4 MV3</span>
                    <Link
                      href="/dashboard"
                      className="font-bold underline hover:opacity-80 transition-opacity"
                      style={{ color: current.accent }}
                    >
                      Open Studio ↗
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom notification inside simulator */}
            <div
              className="mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-2 text-xs opacity-75"
              style={{ borderColor: current.border }}
            >
              <span>Click the tabs above to preview how LIT completely transforms web interfaces.</span>
              <span className="font-mono text-[10px] uppercase tracking-wider">No reload required · Client-side engine</span>
            </div>
          </div>
        </div>

        {/* Waitlist Form Section */}
        <div id="waitlist" className="mt-14 pt-10 border-t border-[#D8D2C5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-md">
            <h2 className="text-xl font-bold font-sans text-[#121212]">
              Join the LIT Private Beta
            </h2>
            <p className="text-sm text-[#736E65] mt-1">
              Be among the first to personalize your browser. Free early access for Chrome, Brave & Edge users.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-lg">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email address"
                className="h-12 flex-1 px-4 text-sm bg-white border border-[#D8D2C5] rounded-[2px] text-[#121212] placeholder:text-[#736E65] font-sans focus:outline-none focus:border-[#121212] transition-colors"
                disabled={status === "submitting"}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-12 px-6 bg-[#121212] text-[#F4EFE6] text-sm font-semibold font-sans rounded-[2px] hover:bg-[#1649FF] transition-colors whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-75"
              >
                {status === "submitting" ? "Joining..." : status === "success" ? "Joined ✓" : "Get Early Access"}
              </button>
            </div>
            {status === "success" && (
              <p className="mt-2 text-xs text-[#1649FF] font-medium font-mono">{message}</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-red-600 font-medium font-mono">{message}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
