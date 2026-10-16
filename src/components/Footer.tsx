"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#EAE3D5] text-[#121212] border-t border-[#D8D2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div>
            <span className="font-sans font-black tracking-widest uppercase text-base">
              LIT
            </span>
            <p className="text-xs text-[#736E65] mt-1">
              The visual personal layer for the web. Be different. Be Lit.
            </p>
          </div>

          {/* Legal and Project Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#736E65]">
            <Link
              href="/dashboard"
              className="hover:text-[#121212] transition-colors"
            >
              Theme Studio
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#121212] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#121212] transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://github.com/Ashutxshj/lit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#121212] transition-colors"
            >
              GitHub ↗
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              className="hover:text-[#121212] transition-colors uppercase tracking-wider cursor-pointer underline"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
