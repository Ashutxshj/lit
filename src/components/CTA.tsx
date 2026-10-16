"use client";

import React from "react";
import Link from "next/link";

export default function CTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative w-full bg-[#D4FF00] text-[#121212] overflow-hidden"
    >
      {/* Cobalt Blue Accent Strip at the very top (matching Image 4) */}
      <div className="w-full h-3 bg-[#1649FF]" aria-hidden="true" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
        
        {/* Chapter label (matching Image 4) */}
        <p className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#121212]/70 mb-6 md:mb-10">
          FINAL CHAPTER — OR THE FIRST?
        </p>

        {/* Large Editorial Headline (matching Image 4) */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.75rem] leading-[0.92] tracking-[-0.045em] text-[#121212]">
          <span className="block font-sans font-extrabold">
            Have an idea
          </span>
          <span className="block mt-1 sm:mt-2">
            <span className="font-sans font-extrabold">with </span>
            <span className="font-serif italic font-normal">some spark?</span>
          </span>
        </h2>
      </div>

      {/* Full-width Giant Interactive Button Bar (matching Image 4) */}
      <div className="w-full border-t border-[#121212]/20 border-b border-[#121212]/20">
        <Link
          href="/dashboard"
          className="group flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 hover:bg-[#121212]/[0.06] transition-colors"
          aria-label="Launch Theme Studio & Build Themes"
        >
          <span className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight text-[#121212]">
            LET&apos;S BUILD IT
          </span>

          {/* Large Arrow ↗ (matching Image 4) */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-[#121212] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Integrated Editorial Metadata & Navigation Bar (matching Image 4 bottom bar) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-wrap items-center justify-between gap-4 text-[11px] sm:text-xs font-mono font-medium text-[#121212]/80">
        <span>LIT ENGINE © 2026</span>
        <span className="hidden sm:inline">LTNKFDTM ✓</span>
        <span className="hidden md:inline">CHROME STORE VERIFIED</span>
        <span>DELHI, INDIA</span>
        <button
          onClick={scrollToTop}
          type="button"
          className="uppercase tracking-wider hover:text-black underline underline-offset-4 cursor-pointer"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </section>
  );
}
