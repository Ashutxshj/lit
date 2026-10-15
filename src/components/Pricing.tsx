interface PricingProps {
  className?: string;
}

const freeFeatures = [
  "Visual modes (dark, light, warm, cool)",
  "Basic color and font controls",
  "3 site redesigns included",
  "Save themes locally",
  "Community themes access",
];

const premiumFeatures = [
  "Everything in Free",
  "All visual effects and animations",
  "Premium wallpaper collection",
  "All site redesigns (YouTube, GitHub, Reddit, Google, ChatGPT)",
  "Cloud sync across devices",
  "Exclusive creator themes",
  "Early access to new features",
];

export default function Pricing({ className = "" }: PricingProps) {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className={`relative w-full bg-[#F5F0E8] text-[#141414] py-24 md:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="chapter-label text-xs uppercase tracking-[0.12em] text-[#7A756D] font-medium mb-4">
              05 / PRICING
            </p>
            <h2 className="text-5xl md:text-7xl leading-[1.05] tracking-[-0.03em] heading-tight">
              <span className="block font-sans font-bold text-[#141414]">
                Start free,
              </span>
              <span className="block font-serif serif-italic italic font-normal text-[#141414]">
                go further.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-lg md:text-xl text-[#7A756D] leading-relaxed">
              LIT is free forever for core customization. Premium unlocks the
              full creative toolkit.
            </p>
          </div>
        </div>

        {/* Two-Column Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Column - FREE */}
          <div className="flex flex-col justify-between border border-[#D4CEC4] border-t-[3px] border-t-[#E8612E] bg-[#F5F0E8] p-10 md:p-12">
            <div>
              <div className="mb-8">
                <h3 className="text-4xl font-extrabold tracking-tight text-[#141414]">
                  FREE
                </h3>
                <p className="text-sm font-medium text-[#7A756D] mt-1.5">
                  Forever
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-10" aria-label="Free plan features">
                {freeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-base text-[#141414] leading-normal"
                  >
                    <span
                      aria-hidden="true"
                      className="mr-3 text-[#7A756D] font-normal select-none"
                    >
                      –
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <a
              href="#download"
              className="inline-flex items-center justify-center w-full py-3.5 px-6 text-sm md:text-base font-semibold text-[#141414] bg-transparent border border-[#141414] hover:bg-[#141414] hover:text-[#F5F0E8] transition-colors duration-200 text-center tracking-tight"
            >
              Download Free
            </a>
          </div>

          {/* Right Column - PREMIUM */}
          <div className="flex flex-col justify-between border border-[#141414] bg-[#141414] text-[#F5F0E8] p-10 md:p-12">
            <div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <h3 className="text-4xl font-extrabold tracking-tight text-[#F5F0E8]">
                    $4
                  </h3>
                  <span className="text-sm md:text-base font-medium text-[#7A756D]">
                    /mo
                  </span>
                </div>
                <p className="text-sm font-medium text-[#7A756D] mt-1.5">
                  Billed annually
                </p>
              </div>

              {/* Feature List */}
              <ul
                className="space-y-4 mb-10"
                aria-label="Premium plan features"
              >
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-base text-[#F5F0E8] leading-normal"
                  >
                    <span
                      aria-hidden="true"
                      className="mr-3 text-[#7A756D] font-normal select-none"
                    >
                      –
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center w-full py-3.5 px-6 text-sm md:text-base font-semibold text-white bg-[#E8612E] hover:bg-[#C94F22] transition-colors duration-200 text-center tracking-tight"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div
        className="w-full border-b border-[#D4CEC4] mt-24 md:mt-32"
        role="separator"
        aria-orientation="horizontal"
      />
    </section>
  );
}
