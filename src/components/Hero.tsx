"use client";

import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    // Simulate early access waitlist submission
    setTimeout(() => {
      setStatus("success");
      setMessage("You're on the list! We'll notify you when early access is ready.");
      setEmail("");
    }, 600);
  };

  return (
    <section id="hero" className="relative w-full bg-[#F5F0E8] text-[#141414] py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Chapter label at top */}
        <div className="mb-10 md:mb-16">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] text-[#7A756D] font-sans">
            01 / THE VISION
          </span>
        </div>

        {/* Two-column layout: 60% headline on desktop, 40% description + form positioned lower */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Main Headline (60% on desktop) */}
          <div className="w-full lg:w-[60%] shrink-0">
            <h1 className="font-sans font-bold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.96] text-[#141414]">
              <span className="block">Why does every</span>
              <span className="block">screen look</span>
              <span className="block font-serif italic font-normal text-[#E8612E]">
                the same?
              </span>
            </h1>
          </div>

          {/* Description & Waitlist Form (40% on desktop, positioned lower) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-end lg:pt-24 xl:pt-28">
            <p className="text-base sm:text-lg leading-relaxed text-[#7A756D] font-sans">
              LIT is a browser customization layer that lets you completely
              personalize how the web looks and feels. Visual modes, animated
              effects, custom wallpapers, glowing hyperlinks, fonts, colors,
              and site-specific redesigns.
            </p>

            {/* Waitlist email form */}
            <form onSubmit={handleSubmit} id="waitlist" className="mt-8 md:mt-10 w-full">
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  className="h-12 w-full flex-1 px-4 text-sm sm:text-base bg-[#F5F0E8] border border-[#D4CEC4] text-[#141414] placeholder:text-[#7A756D] font-sans focus:outline-none focus:border-[#141414] transition-colors"
                  aria-label="Email address for early access waitlist"
                  disabled={status === "submitting"}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-12 px-6 sm:px-7 bg-[#141414] text-[#F5F0E8] text-sm sm:text-base font-medium font-sans hover:bg-[#2e2e2e] active:scale-[0.99] transition-all whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? "Joining..."
                    : status === "success"
                    ? "Joined ✓"
                    : "Get Early Access"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-2 text-xs sm:text-sm text-[#E8612E] font-medium font-sans">
                  {message}
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-xs sm:text-sm text-red-600 font-medium font-sans">
                  {message}
                </p>
              )}

              <p className="mt-3 text-xs sm:text-sm text-[#7A756D] font-sans">
                Join 2,400+ waiting. No spam, ever.
              </p>
            </form>
          </div>
        </div>

        {/* Section separator */}
        <div
          className="mt-20 md:mt-32 w-full border-t border-[#D4CEC4]"
          role="separator"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
