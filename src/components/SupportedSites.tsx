interface SupportedSite {
  name: string;
  subtitle: string;
  href?: string;
}

const SUPPORTED_SITES: SupportedSite[] = [
  {
    name: "YOUTUBE",
    subtitle: "Video reimagined",
  },
  {
    name: "GITHUB",
    subtitle: "Code in style",
  },
  {
    name: "REDDIT",
    subtitle: "Browse beautifully",
  },
  {
    name: "GOOGLE",
    subtitle: "Search, elevated",
  },
  {
    name: "CHATGPT",
    subtitle: "AI, personalized",
  },
  {
    name: "MORE SOON",
    subtitle: "Request a site",
    href: "#waitlist",
  },
];

export default function SupportedSites() {
  return (
    <section id="supported-sites" className="w-full bg-[#1A237E] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mb-4 font-sans">
            03 / SUPPORTED SITES
          </p>
          <h2 className="text-5xl md:text-7xl tracking-[-0.03em] text-white leading-[1.08]">
            <span className="block font-sans font-bold">Works on</span>
            <span className="block font-serif italic font-normal">your favorites.</span>
          </h2>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {SUPPORTED_SITES.map((site) => (
            <div
              key={site.name}
              className="group flex flex-col justify-between bg-[#1A237E] p-10 md:p-12 min-h-[190px] md:min-h-[220px] transition-colors duration-200 hover:bg-[#202b8c]"
            >
              <h3 className="font-sans text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
                {site.name}
              </h3>
              {site.href ? (
                <a
                  href={site.href}
                  className="text-sm font-normal text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/30 hover:decoration-white inline-block w-fit"
                >
                  {site.subtitle}
                </a>
              ) : (
                <p className="text-sm font-normal text-white/60 transition-colors duration-200 group-hover:text-white/80">
                  {site.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
