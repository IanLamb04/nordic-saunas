import heroBg from "../images/hero-bg.png";

const sensations = [
  {
    temp: "60°C",
    zone: "Transition",
    desc: "The anteroom. Cool air meets warm timber. Breath deepens involuntarily.",
  },
  {
    temp: "80°C",
    zone: "Ascent",
    desc: "Bench level two. Heat wraps the shoulders. Peripheral vision softens.",
  },
  {
    temp: "100°C",
    zone: "Peak",
    desc: "Upper bench. Löyly released. The room becomes a single, breathing organism.",
  },
];

const Experience = () => (
  <section id="experience" className="border-t border-zinc-800">
    {/* Full-bleed asymmetric header */}
    <div className="relative overflow-hidden">
      <div className="grid lg:grid-cols-3">
        <div className="bg-black p-8 lg:col-span-1 lg:p-16">
          <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            Experience / 05
          </span>
          <h2 className="mt-6 font-industrial text-3xl font-bold leading-tight text-stone-200 sm:text-4xl">
            Three
            <br />
            temperatures.
            <br />
            <span className="text-zinc-600">One journey.</span>
          </h2>
        </div>

        <div className="relative h-48 lg:col-span-2 lg:h-auto lg:min-h-[40vh]">
          <img
            src={heroBg}
            alt="Sauna steam rising in warm ambient light"
            className="h-full w-full object-cover clip-threshold"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
    </div>

    {/* Temperature journey — horizontal industrial panels */}
    <div className="grid md:grid-cols-3">
      {sensations.map((item, i) => (
        <div
          key={item.zone}
          className={`relative border-t border-zinc-800 p-8 lg:p-12 ${
            i < sensations.length - 1 ? "md:border-r" : ""
          } ${i === 1 ? "bg-orange-950/10" : "bg-black"}`}
        >
          <div className="flex items-start justify-between">
            <span className="font-industrial text-5xl font-bold text-stone-200 lg:text-6xl">
              {item.temp}
            </span>
            <span className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Zone {i + 1}
            </span>
          </div>

          <h3 className="mt-8 font-industrial text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400">
            {item.zone}
          </h3>

          <p className="mt-4 font-organic text-lg leading-relaxed text-stone-400">
            {item.desc}
          </p>

          <div className="mt-8 h-px w-full bg-zinc-800">
            <div
              className="h-full bg-gradient-to-r from-amber-900 to-amber-950"
              style={{ width: `${((i + 1) / sensations.length) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Organic pull-quote spanning full width */}
    <div className="border-t border-zinc-800 bg-stone-900 px-8 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl font-organic text-3xl leading-snug text-stone-200 sm:text-4xl lg:text-5xl">
          You do not visit a Nordic Sauna.
          <br />
          <span className="italic text-stone-400">You are received by one.</span>
        </p>

        <a
          href="#contact"
          className="shrink-0 border border-zinc-700 px-10 py-5 font-mono-industrial text-[10px] uppercase tracking-[0.25em] text-stone-200 transition-colors hover:border-white/20 hover:bg-black"
        >
          Begin commission
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
