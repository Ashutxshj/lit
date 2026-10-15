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
    setTimeout(() => {
      setStatus("success");
      setMessage("You're on the list! We'll notify you when early access is ready.");
      setEmail("");
    }, 600);
  };

  return (
    <section id="hero" className="relative w-full bg-[#F5F0E8] text-[#141414] pt-32 pb-24 md:pt-44 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Chapter label */}
        <div className="mb-10 md:mb-16">
          <span className="chapter-label hero-line block">
            01 / THE VISION
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Headline 60% */}
          <div className="w-full lg:w-[60%] shrink-0">
            <h1 className="font-sans font-bold text-[3.25rem] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-[-0.03em] leading-[0.92]">
              <span className="hero-line block">Why does every</span>
              <span className="hero-line block">screen look</span>
              <span className="hero-line block font-serif italic font-normal text-[#E8612E]">
                the same?
              </span>
            </h1>
          </div>

          {/* Description + Form 40% */}
          <div className="w-full lg:w-[40%] flex flex-col justify-end lg:pt-24 xl:pt-28">
            <p className="hero-desc text-base sm:text-lg leading-relaxed text-[#7A756D] font-sans max-w-md">
              LIT is a browser customization layer that lets you completely
              personalize how the web looks and feels. Visual modes, animated
              effects, custom wallpapers, glowing hyperlinks, fonts, colors,
              and site-specific redesigns.
            </p>

            <form onSubmit={handleSubmit} id="waitlist" className="hero-form mt-8 md:mt-10 w-full">
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
                  className="h-12 w-full flex-1 px-4 text-sm sm:text-base bg-[#F5F0E8] border border-[#D4CEC4] text-[#141414] placeholder:text-[#7A756D] font-sans focus:outline-none focus:border-[#141414] transition-colors duration-200"
                  aria-label="Email address for early access waitlist"
                  disabled={status === "submitting"}
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-12 px-6 sm:px-7 bg-[#141414] text-[#F5F0E8] text-sm sm:text-base font-medium font-sans transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 disabled:opacity-75 disabled:cursor-not-allowed hover:bg-[#E8612E] active:scale-[0.98]"
                >
                  {status === "submitting"
                    ? "Joining..."
                    : status === "success"
                    ? "You're in"
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

        {/* Separator */}
        <div
          className="separator-grow mt-20 md:mt-32 w-full border-t border-[#D4CEC4]"
          role="separator"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
