import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — LIT",
  description: "Privacy policy for the LIT browser customization layer.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#121212] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-10">
        <div>
          <span className="chapter-label text-xs">LEGAL / PRIVACY POLICY</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2 font-sans">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#736E65] mt-2">
            Effective Date: October 2026 · Version 1.0
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#121212] leading-relaxed border-t border-[#D8D2C5] pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">1. Our Core Principle: Zero Browsing Telemetry</h2>
            <p className="text-[#736E65]">
              LIT is built on an uncompromising privacy foundation: your browsing activity belongs exclusively to you. The LIT browser extension runs locally within your browser client using Chrome Manifest V3 sandbox standards.
            </p>
            <p className="text-[#736E65]">
              We do not track, log, capture, or transmit the websites you visit, URLs you type, keystrokes you enter, or text you read.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">2. Data Stored Locally on Your Device</h2>
            <p className="text-[#736E65]">
              Theme configurations, custom CSS palettes, font preferences, and site override toggles are stored strictly in your browser&apos;s local storage (chrome.storage.local). This data never touches our servers unless you explicitly enable Cloud Sync.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">3. Optional Cloud Sync & Account Data</h2>
            <p className="text-[#736E65]">
              If you create an account to sync themes across multiple devices or purchase creator themes, we store only your email address, authentication identifiers, and encrypted theme JSON payloads.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">4. Third-Party Webhook & Payment Processors</h2>
            <p className="text-[#736E65]">
              Subscription payments are processed securely by PCI-compliant providers (Stripe / Razorpay). LIT never receives or stores your credit card numbers or banking credentials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-sans">5. Contact Information</h2>
            <p className="text-[#736E65]">
              Questions regarding our privacy standards can be sent to legal@litbrowser.org or via our GitHub repository.
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
