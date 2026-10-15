import type { Metadata } from "next";
import { Figtree, Playfair_Display } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIT — Make the Web Yours",
  description:
    "LIT is a browser customization layer that lets you completely personalize how the web looks and feels. Custom themes, visual effects, wallpapers, fonts, colors, and site-specific redesigns.",
  keywords: [
    "browser customization",
    "web themes",
    "browser extension",
    "dark mode",
    "custom CSS",
    "web personalization",
  ],
  openGraph: {
    title: "LIT — Make the Web Yours",
    description:
      "Why does every screen look the same? Be different. Be Lit.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
