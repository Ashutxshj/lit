"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Features", href: "#features" },
  { name: "Themes", href: "#marketplace" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      className={`sticky top-0 z-50 w-full border-b border-[#D4CEC4] transition-colors duration-200 ${
        isScrolled
          ? "bg-[#F5F0E8]/95 backdrop-blur-sm"
          : "bg-[#F5F0E8]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: LIT logo text in bold sans-serif, all caps, tracked wide */}
        <Link
          href="/"
          className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-[#141414] hover:text-[#E8612E] transition-colors duration-150 select-none"
        >
          LIT
        </Link>

        {/* Center: Navigation links - Features, Themes, Pricing */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#141414] hover:text-[#E8612E] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: 'Join Waitlist' button & mobile hamburger toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-[5px] bg-[#141414] px-4 py-2 text-sm font-medium text-[#F5F0E8] hover:bg-[#E8612E] transition-colors duration-200"
          >
            Join Waitlist
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-[5px] text-[#141414] hover:text-[#E8612E] transition-colors duration-150 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
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

      {/* Mobile menu: slides down, shows links vertically, clean and simple */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#D4CEC4] ${
          isScrolled ? "bg-[#F5F0E8]/95 backdrop-blur-sm" : "bg-[#F5F0E8]"
        } ${
          isMobileMenuOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none !border-t-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-[#141414] hover:text-[#E8612E] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
