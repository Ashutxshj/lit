"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface ThemeProfile {
  id: string;
  name: string;
  author: string;
  bgColor: string;
  cardColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: "sans" | "serif" | "mono";
  fontLabel: string;
  glowEnabled: boolean;
  glowIntensity: number;
  scanlines: boolean;
  ambientVideo: boolean;
  targetSites: string[];
}

const DEFAULT_THEMES: ThemeProfile[] = [
  {
    id: "cyber-matrix",
    name: "Cyber Matrix Pro",
    author: "You (Active)",
    bgColor: "#080C14",
    cardColor: "#0F172A",
    textColor: "#E2E8F0",
    accentColor: "#00FFCC",
    fontFamily: "mono",
    fontLabel: "JetBrains Mono",
    glowEnabled: true,
    glowIntensity: 18,
    scanlines: false,
    ambientVideo: true,
    targetSites: ["GitHub", "StackOverflow", "Dev.to"],
  },
  {
    id: "warm-editorial",
    name: "Warm Linen Editorial",
    author: "@olivia_paris",
    bgColor: "#F4EFE6",
    cardColor: "#EAE3D5",
    textColor: "#121212",
    accentColor: "#1649FF",
    fontFamily: "serif",
    fontLabel: "Playfair Display",
    glowEnabled: false,
    glowIntensity: 0,
    scanlines: false,
    ambientVideo: false,
    targetSites: ["ChatGPT", "Medium", "Substack"],
  },
  {
    id: "pitch-black-oled",
    name: "Pitch Black OLED",
    author: "@kuro_tokyo",
    bgColor: "#000000",
    cardColor: "#121212",
    textColor: "#F8FAFC",
    accentColor: "#D4FF00",
    fontFamily: "sans",
    fontLabel: "Figtree Modern",
    glowEnabled: true,
    glowIntensity: 14,
    scanlines: false,
    ambientVideo: true,
    targetSites: ["YouTube", "Reddit", "Twitch"],
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"studio" | "themes" | "sites" | "market" | "settings">("studio");
  
  // Customizer State
  const [themeName, setThemeName] = useState("My Custom Layer");
  const [bgColor, setBgColor] = useState("#0A0D14");
  const [cardColor, setCardColor] = useState("#131B2E");
  const [textColor, setTextColor] = useState("#F1F5F9");
  const [accentColor, setAccentColor] = useState("#00FFCC");
  const [fontFamily, setFontFamily] = useState<"sans" | "serif" | "mono">("mono");
  const [glowEnabled, setGlowEnabled] = useState(true);
  const [glowIntensity, setGlowIntensity] = useState(16);
  const [scanlines, setScanlines] = useState(false);
  const [ambientVideo, setAmbientVideo] = useState(true);
  const [previewSite, setPreviewSite] = useState<"github" | "youtube" | "chatgpt">("github");

  // Installed Themes list
  const [installedThemes, setInstalledThemes] = useState<ThemeProfile[]>(DEFAULT_THEMES);
  const [activeThemeId, setActiveThemeId] = useState<string>("cyber-matrix");
  const [saveToast, setSaveToast] = useState<string | null>(null);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lit_installed_themes");
      if (saved) {
        setInstalledThemes(JSON.parse(saved));
      }
      const savedActive = localStorage.getItem("lit_active_theme_id");
      if (savedActive) {
        setActiveThemeId(savedActive);
      }
    } catch {
      // ignore
    }
  }, []);

  const triggerToast = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 2400);
  };

  const handleSaveTheme = () => {
    const newTheme: ThemeProfile = {
      id: "custom-" + Date.now(),
      name: themeName,
      author: "You (Local)",
      bgColor,
      cardColor,
      textColor,
      accentColor,
      fontFamily,
      fontLabel: fontFamily === "mono" ? "Monospace" : fontFamily === "serif" ? "Playfair Serif" : "System Sans",
      glowEnabled,
      glowIntensity,
      scanlines,
      ambientVideo,
      targetSites: ["Universal"],
    };

    const updated = [newTheme, ...installedThemes];
    setInstalledThemes(updated);
    setActiveThemeId(newTheme.id);
    try {
      localStorage.setItem("lit_installed_themes", JSON.stringify(updated));
      localStorage.setItem("lit_active_theme_id", newTheme.id);
    } catch {
      // ignore
    }
    triggerToast(`"${themeName}" saved and activated!`);
  };

  const handleActivateTheme = (t: ThemeProfile) => {
    setActiveThemeId(t.id);
    setThemeName(t.name);
    setBgColor(t.bgColor);
    setCardColor(t.cardColor);
    setTextColor(t.textColor);
    setAccentColor(t.accentColor);
    setFontFamily(t.fontFamily);
    setGlowEnabled(t.glowEnabled);
    setGlowIntensity(t.glowIntensity);
    setScanlines(t.scanlines);
    setAmbientVideo(t.ambientVideo);
    try {
      localStorage.setItem("lit_active_theme_id", t.id);
    } catch {
      // ignore
    }
    triggerToast(`Activated "${t.name}"`);
  };

  const handleDeleteTheme = (id: string) => {
    if (installedThemes.length <= 1) {
      triggerToast("Cannot delete the last remaining theme.");
      return;
    }
    const updated = installedThemes.filter((t) => t.id !== id);
    setInstalledThemes(updated);
    if (activeThemeId === id) {
      setActiveThemeId(updated[0].id);
    }
    try {
      localStorage.setItem("lit_installed_themes", JSON.stringify(updated));
    } catch {
      // ignore
    }
    triggerToast("Theme removed.");
  };

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#121212] flex flex-col font-sans">
      
      {/* Top Application Bar */}
      <header className="h-16 border-b border-[#D8D2C5] bg-[#FAF7F2] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-sans text-xl font-black uppercase tracking-[0.22em] text-[#121212] hover:text-[#1649FF] transition-colors"
          >
            LIT
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-[1px] bg-[#121212] text-[#D4FF00]">
            MVP STUDIO v1.0
          </span>
        </div>

        {/* Live Engine Status Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#EAE3D5] rounded-[2px] border border-[#D8D2C5] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#121212] font-semibold">Engine Synced</span>
          <span className="text-[#736E65]">· 14 site adapters active</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xs font-mono font-semibold uppercase text-[#736E65] hover:text-[#121212] transition-colors"
          >
            ← Back to Web
          </Link>
          <div className="w-8 h-8 rounded-[2px] bg-[#121212] text-white flex items-center justify-center text-xs font-mono font-bold">
            PRO
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
        
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-2">
          <div className="p-4 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px]">
            <span className="chapter-label block text-[10px] text-[#736E65] mb-3">
              WORKSPACE
            </span>
            <div className="space-y-1">
              {[
                { id: "studio", label: "Theme Studio", icon: "✦" },
                { id: "themes", label: "My Themes", icon: "❖" },
                { id: "sites", label: "Site Overrides", icon: "⎔" },
                { id: "market", label: "Marketplace", icon: "◈" },
                { id: "settings", label: "Sync & Account", icon: "⚙" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#121212] text-[#F4EFE6] font-semibold"
                      : "hover:bg-[#EAE3D5] text-[#121212]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </span>
                  {tab.id === "themes" && (
                    <span className="text-[10px] px-1.5 py-0.2 bg-[#736E65]/20 rounded">
                      {installedThemes.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Active Theme Card */}
          <div className="p-4 border border-[#D8D2C5] bg-[#EAE3D5] rounded-[2px] text-xs space-y-2">
            <span className="chapter-label text-[10px] text-[#736E65]">ACTIVE PRESET</span>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-[#121212] truncate max-w-[140px]">
                {installedThemes.find((t) => t.id === activeThemeId)?.name || "Default Theme"}
              </span>
              <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: accentColor }} />
            </div>
            <p className="text-[11px] text-[#736E65] font-mono">Applied across all browser windows</p>
          </div>
        </aside>

        {/* Main Work Area */}
        <main className="flex-1 min-w-0">
          
          {/* TAB 1: THEME STUDIO */}
          {activeTab === "studio" && (
            <div className="space-y-8">
              
              {/* Studio Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D8D2C5]">
                <div>
                  <h1 className="font-sans text-3xl font-extrabold text-[#121212]">
                    Theme Studio
                  </h1>
                  <p className="text-sm text-[#736E65] mt-0.5">
                    Live visual customizer. Changes render in real-time on the preview stage.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSaveTheme}
                    className="px-4 py-2 bg-[#121212] text-[#F4EFE6] text-xs font-mono font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#1649FF] transition-colors cursor-pointer"
                  >
                    Save & Activate
                  </button>
                </div>
              </div>

              {/* Studio Grid: Controls Left (45%), Live Preview Right (55%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual Controls */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Theme Title */}
                  <div className="space-y-1.5">
                    <label className="chapter-label text-[10px]">THEME NAME</label>
                    <input
                      type="text"
                      value={themeName}
                      onChange={(e) => setThemeName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white border border-[#D8D2C5] rounded-[2px] font-medium text-[#121212] focus:outline-none focus:border-[#121212]"
                    />
                  </div>

                  {/* Color Palette Controls */}
                  <div className="p-4 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] space-y-4">
                    <span className="chapter-label block text-[10px]">COLOR FOUNDATION</span>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <span className="text-[#736E65] block mb-1">Canvas BG</span>
                        <div className="flex items-center gap-2 bg-white border border-[#D8D2C5] p-1.5 rounded-[2px]">
                          <input
                            type="color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="w-6 h-6 border-none cursor-pointer rounded"
                          />
                          <span className="text-[11px] uppercase font-semibold">{bgColor}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[#736E65] block mb-1">Card / Well</span>
                        <div className="flex items-center gap-2 bg-white border border-[#D8D2C5] p-1.5 rounded-[2px]">
                          <input
                            type="color"
                            value={cardColor}
                            onChange={(e) => setCardColor(e.target.value)}
                            className="w-6 h-6 border-none cursor-pointer rounded"
                          />
                          <span className="text-[11px] uppercase font-semibold">{cardColor}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[#736E65] block mb-1">Accent & Glow</span>
                        <div className="flex items-center gap-2 bg-white border border-[#D8D2C5] p-1.5 rounded-[2px]">
                          <input
                            type="color"
                            value={accentColor}
                            onChange={(e) => setAccentColor(e.target.value)}
                            className="w-6 h-6 border-none cursor-pointer rounded"
                          />
                          <span className="text-[11px] uppercase font-semibold">{accentColor}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[#736E65] block mb-1">Text Color</span>
                        <div className="flex items-center gap-2 bg-white border border-[#D8D2C5] p-1.5 rounded-[2px]">
                          <input
                            type="color"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                            className="w-6 h-6 border-none cursor-pointer rounded"
                          />
                          <span className="text-[11px] uppercase font-semibold">{textColor}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Control */}
                  <div className="p-4 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] space-y-3">
                    <span className="chapter-label block text-[10px]">TYPOGRAPHY LAYER</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "mono", label: "Monospace", sample: "JetBrains" },
                        { id: "serif", label: "Serif", sample: "Playfair" },
                        { id: "sans", label: "Sans", sample: "Figtree" },
                      ].map((font) => (
                        <button
                          key={font.id}
                          type="button"
                          onClick={() => setFontFamily(font.id as typeof fontFamily)}
                          className={`p-2.5 text-center border rounded-[2px] transition-colors cursor-pointer ${
                            fontFamily === font.id
                              ? "bg-[#121212] text-white border-[#121212]"
                              : "bg-white text-[#121212] border-[#D8D2C5] hover:border-[#121212]"
                          }`}
                        >
                          <span className="block text-xs font-bold">{font.label}</span>
                          <span className="block text-[10px] opacity-70 mt-0.5">{font.sample}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Shaders & Visual Effects */}
                  <div className="p-4 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] space-y-3">
                    <span className="chapter-label block text-[10px]">SHADERS & VISUAL FX</span>
                    
                    <div className="flex items-center justify-between text-xs py-1">
                      <div>
                        <span className="font-semibold block">Neon Hyperlink Glow</span>
                        <span className="text-[11px] text-[#736E65]">Ambient bloom on all interactive links</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setGlowEnabled(!glowEnabled)}
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                          glowEnabled ? "bg-[#1649FF]" : "bg-[#D8D2C5]"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            glowEnabled ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    {glowEnabled && (
                      <div className="pt-2">
                        <div className="flex justify-between text-[11px] font-mono text-[#736E65] mb-1">
                          <span>Glow Radius</span>
                          <span>{glowIntensity}px</span>
                        </div>
                        <input
                          type="range"
                          min="4"
                          max="32"
                          value={glowIntensity}
                          onChange={(e) => setGlowIntensity(Number(e.target.value))}
                          className="w-full accent-[#1649FF]"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-[#D8D2C5]">
                      <div>
                        <span className="font-semibold block">CRT Scanline Shader</span>
                        <span className="text-[11px] text-[#736E65]">Retro cathode ray raster overlay</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setScanlines(!scanlines)}
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                          scanlines ? "bg-[#1649FF]" : "bg-[#D8D2C5]"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            scanlines ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-3 border-t border-[#D8D2C5]">
                      <div>
                        <span className="font-semibold block">Ambient Video Edge Lighting</span>
                        <span className="text-[11px] text-[#736E65]">Diffuse backdrop lighting for streaming</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAmbientVideo(!ambientVideo)}
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                          ambientVideo ? "bg-[#1649FF]" : "bg-[#D8D2C5]"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                            ambientVideo ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Live Preview Canvas Right */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="chapter-label text-[10px]">LIVE SIMULATION CANVAS</span>
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      {(["github", "youtube", "chatgpt"] as const).map((site) => (
                        <button
                          key={site}
                          type="button"
                          onClick={() => setPreviewSite(site)}
                          className={`px-3 py-1 rounded-[1px] uppercase transition-colors cursor-pointer ${
                            previewSite === site
                              ? "bg-[#121212] text-[#D4FF00] font-bold"
                              : "bg-[#EAE3D5] text-[#121212] hover:bg-[#D8D2C5]"
                          }`}
                        >
                          {site}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Browser Mockup Canvas */}
                  <div className="border border-[#D8D2C5] rounded-[2px] overflow-hidden shadow-md">
                    
                    {/* Top Browser Bar */}
                    <div className="bg-[#EAE3D5] px-4 py-2.5 border-b border-[#D8D2C5] flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D8D2C5] border border-[#BFB8A9]" />
                      </div>
                      <span className="opacity-75">
                        https://{previewSite}.com/customized
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black text-[#D4FF00] uppercase font-bold">
                        LIT OVERRIDE
                      </span>
                    </div>

                    {/* Viewport Content */}
                    <div
                      className="p-6 sm:p-8 min-h-[460px] relative transition-colors duration-200 flex flex-col justify-between"
                      style={{
                        backgroundColor: bgColor,
                        color: textColor,
                        fontFamily: fontFamily === "mono" ? "monospace" : fontFamily === "serif" ? "var(--font-serif, 'Playfair Display', Georgia, serif)" : "sans-serif",
                      }}
                    >
                      {/* Scanlines Effect Overlay */}
                      {scanlines && (
                        <div
                          className="absolute inset-0 pointer-events-none opacity-25 z-10"
                          style={{
                            backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.6) 50%)",
                            backgroundSize: "100% 4px",
                          }}
                        />
                      )}

                      {/* Header inside simulation */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-7 h-7 rounded-[2px] flex items-center justify-center font-bold text-xs"
                              style={{ backgroundColor: accentColor, color: "#000" }}
                            >
                              L
                            </div>
                            <span className="font-bold text-sm tracking-tight">
                              {previewSite.toUpperCase()} · LIT LAYER ACTIVE
                            </span>
                          </div>
                          
                          {/* Glowing Link in Action */}
                          <a
                            href="#preview"
                            onClick={(e) => e.preventDefault()}
                            className="text-xs font-semibold underline"
                            style={{
                              color: accentColor,
                              textShadow: glowEnabled ? `0 0 ${glowIntensity}px ${accentColor}` : "none",
                            }}
                          >
                            Explore Custom Feed ↗
                          </a>
                        </div>

                        {/* Content Blocks */}
                        <div className="space-y-3">
                          <div
                            className="p-4 rounded-[2px] border transition-all"
                            style={{ backgroundColor: cardColor, borderColor: "rgba(255,255,255,0.08)" }}
                          >
                            <h4 className="font-bold text-sm">Hardware Acceleration Status</h4>
                            <p className="text-xs opacity-75 mt-1 leading-relaxed">
                              Scoped CSS variables injected seamlessly. Hyperlink glows rendered at 60fps via composite canvas layers.
                            </p>
                            <div className="mt-3 flex items-center gap-3 text-xs">
                              <span
                                className="underline font-medium"
                                style={{
                                  color: accentColor,
                                  textShadow: glowEnabled ? `0 0 ${glowIntensity}px ${accentColor}` : "none",
                                }}
                              >
                                View Commit Diff
                              </span>
                              <span className="opacity-50">·</span>
                              <span
                                className="underline font-medium"
                                style={{
                                  color: accentColor,
                                  textShadow: glowEnabled ? `0 0 ${glowIntensity}px ${accentColor}` : "none",
                                }}
                              >
                                Download Palette JSON
                              </span>
                            </div>
                          </div>

                          <div
                            className="p-4 rounded-[2px] border"
                            style={{ backgroundColor: cardColor, borderColor: "rgba(255,255,255,0.08)" }}
                          >
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-mono opacity-80">ACTIVE PALETTE OVERRIDE</span>
                              <span className="font-bold" style={{ color: accentColor }}>{accentColor}</span>
                            </div>
                            <div className="mt-2 grid grid-cols-4 gap-2 h-2">
                              <div className="rounded" style={{ backgroundColor: bgColor }} />
                              <div className="rounded" style={{ backgroundColor: cardColor }} />
                              <div className="rounded" style={{ backgroundColor: textColor }} />
                              <div className="rounded" style={{ backgroundColor: accentColor }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer inside simulation */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] opacity-75 font-mono">
                        <span>LIT Customizer Engine</span>
                        <span>0ms latency · client-side</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: MY THEMES */}
          {activeTab === "themes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#D8D2C5]">
                <div>
                  <h1 className="font-sans text-3xl font-extrabold text-[#121212]">
                    My Installed Themes
                  </h1>
                  <p className="text-sm text-[#736E65] mt-0.5">
                    Themes configured and active in your browser extension storage.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("studio")}
                  className="px-4 py-2 bg-[#121212] text-[#F4EFE6] text-xs font-mono font-semibold uppercase tracking-wider rounded-[2px] hover:bg-[#1649FF] transition-colors cursor-pointer"
                >
                  Create New Theme +
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {installedThemes.map((item) => {
                  const isActive = item.id === activeThemeId;
                  return (
                    <div
                      key={item.id}
                      className={`p-6 border rounded-[2px] flex flex-col justify-between transition-all ${
                        isActive
                          ? "border-[#121212] bg-[#FAF7F2] shadow-sm ring-1 ring-[#121212]"
                          : "border-[#D8D2C5] bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAE3D5] text-[#736E65] rounded-[1px]">
                            {item.fontLabel}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-mono uppercase font-bold text-[#1649FF]">
                              ● ACTIVE
                            </span>
                          )}
                        </div>

                        <h3 className="font-sans text-xl font-bold text-[#121212] mt-3">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#736E65] font-mono mt-0.5">
                          {item.author}
                        </p>

                        {/* Palette dots */}
                        <div className="mt-4 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.bgColor }} title="Background" />
                          <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.cardColor }} title="Card" />
                          <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.accentColor }} title="Accent" />
                          <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.textColor }} title="Text" />
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#D8D2C5] flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleActivateTheme(item)}
                          disabled={isActive}
                          className={`px-3 py-1.5 text-xs font-mono font-semibold uppercase rounded-[1px] transition-colors cursor-pointer ${
                            isActive
                              ? "bg-[#121212] text-[#D4FF00] cursor-default"
                              : "border border-[#121212] hover:bg-[#121212] hover:text-[#F4EFE6]"
                          }`}
                        >
                          {isActive ? "Active Layer" : "Activate"}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteTheme(item.id)}
                          className="text-xs font-mono text-red-600 hover:underline cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: SITE OVERRIDES */}
          {activeTab === "sites" && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#D8D2C5]">
                <h1 className="font-sans text-3xl font-extrabold text-[#121212]">
                  Site-Specific Redesigns
                </h1>
                <p className="text-sm text-[#736E65] mt-0.5">
                  Granular control over each major supported platform.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { name: "YouTube", domain: "youtube.com", desc: "Theater mode, ambient edge glow, hidden comment rails, custom progress bar." },
                  { name: "GitHub", domain: "github.com", desc: "Monokai Pro syntax, glowing line numbers, full-width distraction-free diff trees." },
                  { name: "ChatGPT", domain: "chatgpt.com", desc: "Bookish reading margins, warm linen texture, Playfair serif typography." },
                  { name: "Reddit", domain: "reddit.com", desc: "Clean media cards, glowing flairs, OLED pitch-black dark background." },
                  { name: "Google Search", domain: "google.com", desc: "Clean card layouts, glowing search button, zero sponsored noise." },
                ].map((site) => (
                  <div
                    key={site.name}
                    className="p-5 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-sans text-lg font-bold text-[#121212]">{site.name}</h3>
                        <span className="font-mono text-xs text-[#736E65]">({site.domain})</span>
                      </div>
                      <p className="text-xs text-[#736E65] mt-1">{site.desc}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-[#10B981] font-semibold">● ACTIVE</span>
                      <button
                        type="button"
                        onClick={() => triggerToast(`Configured overrides for ${site.name}`)}
                        className="px-3 py-1.5 text-xs font-mono uppercase border border-[#121212] rounded-[1px] hover:bg-[#121212] hover:text-[#F4EFE6] transition-colors cursor-pointer"
                      >
                        Customize ⚙
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MARKETPLACE */}
          {activeTab === "market" && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#D8D2C5]">
                <h1 className="font-sans text-3xl font-extrabold text-[#121212]">
                  Creator Marketplace
                </h1>
                <p className="text-sm text-[#736E65] mt-0.5">
                  Browse community themes and install them into your extension with one click.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Tokyo Synthwave", author: "@akira_tokyo", installs: "9.2k", accent: "#F43F5E", bg: "#0C071E", card: "#1B1238" },
                  { name: "Nordic Frost", author: "@oslo_design", installs: "4.7k", accent: "#38BDF8", bg: "#0B132B", card: "#1C2541" },
                  { name: "Monochrome OLED", author: "@minimalist", installs: "14.1k", accent: "#FFFFFF", bg: "#000000", card: "#121212" },
                  { name: "Solarized Linen", author: "@ethan_craft", installs: "6.0k", accent: "#D97706", bg: "#FDF6E3", card: "#EEE8D5" },
                ].map((item) => (
                  <div key={item.name} className="p-6 border border-[#D8D2C5] bg-white rounded-[2px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center text-xs font-mono text-[#736E65]">
                        <span>by {item.author}</span>
                        <span>{item.installs} installs</span>
                      </div>
                      <h3 className="font-sans text-xl font-bold text-[#121212] mt-2">{item.name}</h3>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.bg }} />
                        <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.card }} />
                        <span className="w-5 h-5 rounded-full border border-black/20" style={{ backgroundColor: item.accent }} />
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D8D2C5]">
                      <button
                        type="button"
                        onClick={() => {
                          const newTh: ThemeProfile = {
                            id: "market-" + Date.now(),
                            name: item.name,
                            author: item.author,
                            bgColor: item.bg,
                            cardColor: item.card,
                            textColor: item.bg === "#FDF6E3" ? "#121212" : "#FFFFFF",
                            accentColor: item.accent,
                            fontFamily: "sans",
                            fontLabel: "Figtree",
                            glowEnabled: true,
                            glowIntensity: 16,
                            scanlines: false,
                            ambientVideo: true,
                            targetSites: ["Universal"],
                          };
                          setInstalledThemes([newTh, ...installedThemes]);
                          handleActivateTheme(newTh);
                          triggerToast(`Installed & activated "${item.name}"!`);
                        }}
                        className="w-full py-2 bg-[#121212] text-[#F4EFE6] text-xs font-mono font-semibold uppercase tracking-wider rounded-[1px] hover:bg-[#1649FF] transition-colors cursor-pointer"
                      >
                        1-Click Install to Browser
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SYNC & SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#D8D2C5]">
                <h1 className="font-sans text-3xl font-extrabold text-[#121212]">
                  Sync & Account
                </h1>
                <p className="text-sm text-[#736E65] mt-0.5">
                  Cloud synchronization and browser extension status.
                </p>
              </div>

              <div className="space-y-4 max-w-xl">
                <div className="p-5 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Account Status</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#D4FF00] text-black rounded">
                      LIT PRO MEMBER
                    </span>
                  </div>
                  <p className="text-xs text-[#736E65]">
                    Unlimited cloud theme sync, hardware shader effects, and creator marketplace publishing privileges active.
                  </p>
                </div>

                <div className="p-5 border border-[#D8D2C5] bg-[#FAF7F2] rounded-[2px] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Export All Themes</span>
                    <button
                      type="button"
                      onClick={() => {
                        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(installedThemes, null, 2));
                        const downloadAnchor = document.createElement("a");
                        downloadAnchor.setAttribute("href", dataStr);
                        downloadAnchor.setAttribute("download", "lit-themes-backup.json");
                        document.body.appendChild(downloadAnchor);
                        downloadAnchor.click();
                        downloadAnchor.remove();
                        triggerToast("Downloaded lit-themes-backup.json");
                      }}
                      className="px-3 py-1.5 border border-[#121212] text-xs font-mono uppercase rounded-[1px] hover:bg-[#121212] hover:text-[#F4EFE6] transition-colors cursor-pointer"
                    >
                      Export JSON
                    </button>
                  </div>
                  <p className="text-xs text-[#736E65]">
                    Export your entire custom theme database to import into another device.
                  </p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Floating Save Notification Toast */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-[#D4FF00] px-4 py-2.5 rounded-[2px] border border-[#D4FF00] text-xs font-mono font-bold shadow-xl">
          {saveToast}
        </div>
      )}

    </div>
  );
}
