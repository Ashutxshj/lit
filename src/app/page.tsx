import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupportedSites from "@/components/SupportedSites";
import Marketplace from "@/components/Marketplace";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <SupportedSites />
      <Marketplace />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
