"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#F5F0E8] border-t border-[#D4CEC4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          {/* Left: Brand and year */}
          <span className="text-xs md:text-sm text-[#7A756D] font-sans">
            LIT 2026
          </span>

          {/* Center links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-[#7A756D] hover:text-[#141414] transition-colors duration-150 font-sans cta-underline"
            >
              Twitter/X
            </a>
            <a
              href="https://github.com/Ashutxshj/lit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-[#7A756D] hover:text-[#141414] transition-colors duration-150 font-sans cta-underline"
            >
              GitHub
            </a>
            <a
              href="/privacy"
              className="text-xs md:text-sm text-[#7A756D] hover:text-[#141414] transition-colors duration-150 font-sans cta-underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="text-xs md:text-sm text-[#7A756D] hover:text-[#141414] transition-colors duration-150 font-sans cta-underline cursor-pointer"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
