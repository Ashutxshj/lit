"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTA() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>(0.15);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full bg-[#E2E84C] text-[#141414] overflow-hidden"
    >
      {/* Blue accent strip */}
      <div className="w-full h-2 bg-[#1A237E]" aria-hidden="true" />

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-20 pb-16 md:pt-32 md:pb-24">
        <p className={`reveal ${isVisible ? "visible" : ""} text-[0.6875rem] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#141414]/50 mb-6 md:mb-8`}>
          FINAL CHAPTER
        </p>

        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.04em] text-[#141414]">
          <span className={`reveal-left ${isVisible ? "visible" : ""} block font-sans font-bold`}>
            Be different.
          </span>
          <span className={`reveal-left ${isVisible ? "visible" : ""} stagger-2 block mt-1 sm:mt-2 md:mt-3`}>
            <span className="font-sans font-bold">Be </span>
            <span className="font-serif italic font-normal">Lit.</span>
          </span>
        </h2>
      </div>

      {/* Bottom bar */}
      <a
        href="#hero"
        className="group block w-full border-t border-[#141414]/20 transition-colors duration-200 hover:bg-[#141414]/[0.06] focus-visible:outline-none"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-10 flex items-center justify-between gap-4">
          <span className={`reveal-left ${isVisible ? "visible" : ""} stagger-3 text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414]`}>
            JOIN THE WAITLIST
          </span>

          <div className={`reveal-right ${isVisible ? "visible" : ""} stagger-3 shrink-0 flex items-center justify-center w-8 h-8 text-[#141414]`}>
            <svg
              className="w-8 h-8 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 24L24 8M24 8H12M24 8V20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </a>
    </section>
  );
}
