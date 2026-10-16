import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — LIT",
  description: "Terms of service and usage guidelines for LIT browser customization layer.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#121212] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-10">
        <div>
          <span className="chapter-label text-xs">LEGAL / TERMS OF SERVICE</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 font-sans">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#736E65] mt-2">
            Last Updated: October 2026 · Version 1.0
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#121212] leading-relaxed border-t border-[#D8D2C5] pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">1. License & Usage</h2>
            <p className="text-[#736E65]">
              LIT grants you a non-exclusive, non-transferable license to install and run the browser extension on personal and commercial workstations. You may personalize, create, and share custom CSS themes in accordance with platform policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">2. Creator Marketplace & Intellectual Property</h2>
            <p className="text-[#736E65]">
              When you publish themes on the LIT Marketplace, you retain full copyright ownership of your original visual layouts, palettes, and configurations. By publishing, you grant LIT a worldwide license to distribute and display the theme within the application catalog.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">3. Prohibited Content</h2>
            <p className="text-[#736E65]">
              Themes submitted to the marketplace must not contain executable malicious scripts, obfuscated tracking code, or deceptive styling intended to impersonate financial institutions or steal user credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">4. Subscriptions & Refunds</h2>
            <p className="text-[#736E65]">
              LIT Pro subscriptions are billed on a recurring annual or monthly basis. You may cancel at any time directly through your dashboard. We offer a no-questions-asked 14-day refund window on initial annual subscriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">5. Limitation of Liability</h2>
            <p className="text-[#736E65]">
              LIT is provided &ldquo;as is&rdquo; without warranties of any kind. As third-party websites periodically update their DOM structure, LIT provides updates and site adapters on a best-effort basis.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-[#D8D2C5]">
          <Link
            href="/"
            className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1649FF] hover:underline"
          >
            ← Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
