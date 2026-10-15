import React from "react";

interface FeatureItem {
  title: string;
  subtitle: string;
}

const columnOneFeatures: FeatureItem[] = [
  {
    title: "Visual Modes",
    subtitle: "Dark, light, warm, cool, and custom color schemes across every site",
  },
  {
    title: "Animated Effects",
    subtitle: "Subtle particle trails, glow effects, smooth transitions that make browsing feel alive",
  },
  {
    title: "Custom Wallpapers",
    subtitle: "Set any image as your new tab or site background",
  },
];

const columnTwoFeatures: FeatureItem[] = [
  {
    title: "Typography Control",
    subtitle: "Swap fonts, adjust sizes, change weights across the entire web",
  },
  {
    title: "Site Redesigns",
    subtitle: "Purpose-built visual overhauls for YouTube, GitHub, Reddit, Google, and ChatGPT",
  },
  {
    title: "Save and Share",
    subtitle: "Create your perfect setup, save it, share it with a link",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full bg-[#F5F0E8] text-[#141414] border-b border-[#D4CEC4]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16 pb-16 md:pb-24">
          <div>
            <span className="chapter-label block text-xs uppercase tracking-[0.12em] font-medium text-[#7A756D] mb-4 md:mb-6">
              02 / THE EXTENSION
            </span>
            <h2 className="text-5xl md:text-7xl tracking-[-0.03em] text-[#141414] leading-[1.08]">
              <span className="block font-sans font-bold">Your web,</span>
              <span className="block font-serif italic font-normal">your rules.</span>
            </h2>
          </div>

          <p className="max-w-md text-base md:text-lg text-[#7A756D] leading-relaxed md:pb-2">
            One extension. Total control over how every website looks and feels. No code required.
          </p>
        </div>

        {/* Feature Grid: Asymmetric 2-column layout (55% / 45%), offset by 80px on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-6 md:gap-8 items-start">
          {/* Column 1 (~55% width) */}
          <div className="flex flex-col gap-6 md:gap-8">
            {columnOneFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-[#D4CEC4] p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-[#141414]/40"
              >
                <h3 className="text-2xl font-bold font-sans text-[#141414] tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#7A756D] leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 (~45% width, offset down by 80px) */}
          <div className="flex flex-col gap-6 md:gap-8 md:pt-20">
            {columnTwoFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-[#D4CEC4] p-8 md:p-10 lg:p-12 transition-colors duration-200 hover:border-[#141414]/40"
              >
                <h3 className="text-2xl font-bold font-sans text-[#141414] tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#7A756D] leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
