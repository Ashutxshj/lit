"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Redesigns", href: "#features" },
  { name: "Engine", href: "#engine" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
        isScrolled
          ? "bg-[#F4EFE6]/95 backdrop-blur-md border-[#D8D2C5]"
          : "bg-[#F4EFE6] border-[#D8D2C5]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-sans text-xl sm:text-2xl font-black uppercase tracking-[0.22em] text-[#121212] hover:text-[#1649FF] transition-colors select-none"
          >
            LIT
          </Link>
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-[1px] bg-[#EAE3D5] text-[#736E65]">
            LAYER V1.0
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium uppercase tracking-wider text-[#121212] hover:text-[#1649FF] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center justify-center rounded-[2px] bg-[#121212] px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:bg-[#1649FF] transition-colors"
          >
            Theme Studio ↗
          </Link>

          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-[2px] border border-[#121212] px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#121212] hover:bg-[#121212] hover:text-[#F4EFE6] transition-colors"
          >
            Waitlist
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-[2px] text-[#121212] hover:text-[#1649FF] transition-colors focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8D2C5] bg-[#F4EFE6] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-[#121212] hover:text-[#1649FF]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#D8D2C5] flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-center bg-[#121212] text-[#F4EFE6] text-xs font-mono font-semibold uppercase tracking-wider rounded-[2px]"
            >
              Launch Theme Studio ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
