import heroBg from "../images/hero-bg.png";

const Hero = () => (
  <section className="border-b border-zinc-800">
    <div className="grid min-h-[calc(100vh-57px)] lg:grid-cols-2">
      {/* Industrial panel */}
      <div className="flex flex-col justify-center section-pad bg-black">
        <p className="section-label">Modern artisanal wellness</p>

        <h1 className="mt-6 max-w-lg font-industrial text-4xl font-bold leading-tight text-stone-200 sm:text-5xl">
          Where architecture meets heat
        </h1>

        <p className="mt-6 max-w-md font-organic text-xl leading-relaxed text-stone-400">
          Precision-engineered sauna enclosures built from timber, steel, and stone — designed
          for the ritual of steam.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#philosophy"
            className="bg-stone-200 px-6 py-3 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-black transition-colors hover:bg-stone-100"
          >
            Explore the craft
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-stone-200"
          >
            Commission a build
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
          {[
            { value: "220°C", label: "Max temp" },
            { value: "14 wks", label: "Lead time" },
            { value: "100%", label: "Hand-built" },
          ].map((spec) => (
            <div key={spec.label}>
              <p className="font-industrial text-lg font-semibold text-stone-200">
                {spec.value}
              </p>
              <p className="mt-1 font-mono-industrial text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                {spec.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Organic panel */}
      <div className="relative min-h-[50vh] lg:min-h-0">
        <img
          src={heroBg}
          alt="Raw timber sauna interior bathed in warm ambient light"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-amber-950/20" />
      </div>
    </div>
  </section>
);

export default Hero;
