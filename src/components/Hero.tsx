import heroBg from "../images/hero-bg.png";

const Hero = () => (
  <section className="relative min-h-screen">
    {/* Organic side — bleeds full width beneath industrial frame */}
    <div className="absolute inset-0 lg:left-[38%]">
      <div className="relative h-full w-full grain-organic">
        <img
          src={heroBg}
          alt="Raw timber sauna interior bathed in warm ambient light"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-stone-900/20 to-orange-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,transparent_0%,rgba(28,25,23,0.5)_100%)]" />
      </div>
    </div>

    {/* Industrial monolith — left architectural frame */}
    <div className="relative z-10 flex min-h-screen flex-col lg:w-[42%]">
      <div className="flex flex-1 flex-col justify-end border-r border-zinc-800 bg-black/60 backdrop-blur-xl">
        {/* Spacer for fixed nav */}
        <div className="h-16 lg:h-[57px]" />

        {/* Threshold portal frame */}
        <div className="relative mx-0 mt-auto">
          <div className="absolute -right-px top-0 bottom-0 w-px bg-white/10" />

          <div className="border-t border-zinc-800 p-8 lg:p-12 xl:p-16">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-zinc-700" />
              <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Threshold / 01
              </span>
            </div>

            <h1 className="mb-6 max-w-md font-industrial text-4xl font-bold leading-[0.95] tracking-tight text-stone-200 sm:text-5xl xl:text-6xl">
              Where
              <br />
              <span className="text-zinc-500">architecture</span>
              <br />
              meets heat
            </h1>

            <p className="mb-10 max-w-xs font-organic text-xl italic leading-relaxed text-stone-400">
              Precision-engineered enclosures for the ancient ritual of steam and stone.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-3 bg-black px-8 py-4 font-mono-industrial text-[10px] uppercase tracking-[0.25em] text-stone-200 transition-colors hover:bg-zinc-900"
              >
                Enter the craft
                <span className="text-zinc-600">→</span>
              </a>
              <span className="font-mono-industrial text-[10px] tracking-[0.15em] text-zinc-600">
                Est. Nordic tradition
              </span>
            </div>
          </div>

          {/* Bottom spec strip */}
          <div className="grid grid-cols-3 border-t border-zinc-800">
            {[
              { value: "220°C", label: "Max temp" },
              { value: "0mm", label: "Radius" },
              { value: "100%", label: "Hand-built" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="border-r border-zinc-800 px-4 py-5 last:border-r-0 lg:px-6"
              >
                <p className="font-industrial text-lg font-semibold text-stone-200">
                  {spec.value}
                </p>
                <p className="font-mono-industrial text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Diagonal threshold line — desktop only */}
    <div
      className="pointer-events-none absolute top-0 bottom-0 left-[38%] z-20 hidden w-24 -translate-x-1/2 lg:block"
      aria-hidden="true"
    >
      <div className="h-full w-full diagonal-rule" />
      <div className="absolute top-1/2 left-1/2 h-24 w-px -translate-x-1/2 -translate-y-1/2 bg-white/10" />
    </div>

    {/* Organic text overlay — floats on warm side */}
    <div className="pointer-events-none absolute right-0 bottom-0 z-10 hidden p-12 lg:block xl:p-20">
      <div className="timber-frame max-w-sm bg-stone-900/60 p-8 backdrop-blur-sm">
        <p className="font-organic text-3xl leading-snug text-stone-200">
          &ldquo;The body remembers what the room teaches.&rdquo;
        </p>
        <p className="mt-4 font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-amber-900/80">
          — Sauna philosophy
        </p>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 lg:left-[21%]">
      <span className="font-mono-industrial text-[9px] uppercase tracking-[0.3em] text-zinc-600">
        Scroll
      </span>
      <div className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
    </div>
  </section>
);

export default Hero;
