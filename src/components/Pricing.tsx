"use client";

import React from "react";
import Link from "next/link";

const FREE_FEATURES = [
  "Visual modes (Dark, Light, Warm Linen, Cool Steel)",
  "Core color, background, and font controls",
  "3 site-specific redesigns (YouTube, GitHub, Reddit)",
  "Local theme saving & JSON export",
  "Access to 50+ free community marketplace themes",
  "0ms local client rendering with zero telemetry",
];

const PRO_FEATURES = [
  "Everything in Free forever",
  "Hardware-accelerated ambient video lighting & glow effects",
  "All site-specific redesigns (YouTube, GitHub, ChatGPT, Reddit, Google)",
  "CRT scanline shaders & particle effects engine",
  "Cloud theme sync across unlimited desktop browsers",
  "Curated premium wallpaper catalog & creator collections",
  "Marketplace creator publishing & 85% revenue share",
  "Early access to newly released platform adapters",
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#F4EFE6] text-[#121212] py-24 md:py-36 border-b border-[#D8D2C5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#D8D2C5]">
          <div className="lg:col-span-7">
            <span className="chapter-label block mb-4">
              05 / PRICING & MEMBERSHIP
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-[-0.035em] text-[#121212] leading-[1.05]">
              <span className="block font-sans font-bold">Start free,</span>
              <span className="block font-serif italic font-normal">go further.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-base sm:text-lg text-[#736E65] leading-relaxed">
              LIT is free forever for core browser personalization. LIT Pro unlocks our hardware-accelerated shader engine and creator marketplace tools.
            </p>
          </div>
        </div>

        {/* 2-Tier Pricing Cards (Strictly 2 cards per anti-AI guide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-12 items-stretch">
          
          {/* FREE PLAN */}
          <div className="border border-[#D8D2C5] border-t-[3px] border-t-[#121212] bg-[#FAF7F2] p-8 sm:p-12 flex flex-col justify-between rounded-[2px] transition-all">
            <div>
              <div className="flex items-baseline justify-between pb-6 border-b border-[#D8D2C5]">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-[#121212]">
                    FREE
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#736E65] mt-1">
                    Universal Client Edition
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold font-mono">$0</span>
                  <span className="text-xs text-[#736E65] block font-mono">forever</span>
                </div>
              </div>

              {/* Feature List with en-dash (strictly no checkmarks per anti-AI rule 16) */}
              <ul className="space-y-4 py-8 text-sm text-[#121212] font-sans">
                {FREE_FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#736E65] mr-3 font-mono select-none">–</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#D8D2C5]">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center w-full py-3.5 px-6 text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider text-[#121212] border border-[#121212] bg-transparent hover:bg-[#121212] hover:text-[#F4EFE6] transition-colors rounded-[2px]"
              >
                Download Free Extension
              </a>
            </div>
          </div>

          {/* LIT PRO PLAN */}
          <div className="border border-[#121212] bg-[#121212] text-[#F4EFE6] p-8 sm:p-12 flex flex-col justify-between rounded-[2px] relative shadow-lg">
            
            {/* Top Accent Pill */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#D4FF00] text-[#121212] px-3 py-0.5 rounded-[1px] text-[10px] font-mono font-bold tracking-widest uppercase">
              RECOMMENDED
            </div>

            <div>
              <div className="flex items-baseline justify-between pb-6 border-b border-white/15">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-white">
                    LIT PRO
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#D4FF00] mt-1">
                    For Power Users & Creators
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-white">$4</span>
                  <span className="text-xs text-white/60 block font-mono">/month billed yearly</span>
                </div>
              </div>

              {/* Feature List with en-dash */}
              <ul className="space-y-4 py-8 text-sm text-white/90 font-sans">
                {PRO_FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#D4FF00] mr-3 font-mono select-none">–</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/15">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center w-full py-3.5 px-6 text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider text-[#121212] bg-[#D4FF00] hover:bg-[#bce600] transition-colors rounded-[2px]"
              >
                Get LIT Pro in Studio ↗
              </Link>
            </div>
          </div>

        </div>

        {/* 100% Privacy Guarantee */}
        <div className="mt-12 text-center text-xs text-[#736E65] font-mono">
          <span>ZERO TRACKING · OPEN THEME SPECIFICATION · 14-DAY MONEY-BACK GUARANTEE</span>
        </div>

      </div>
    </section>
  );
}
