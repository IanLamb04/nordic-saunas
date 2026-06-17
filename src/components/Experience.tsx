import heroBg from "../images/hero-bg.png";

const sensations = [
  {
    temp: "60°C",
    zone: "Transition",
    desc: "The anteroom. Cool air meets warm timber. Breath deepens.",
  },
  {
    temp: "80°C",
    zone: "Ascent",
    desc: "Bench level two. Heat wraps the shoulders. Vision softens.",
  },
  {
    temp: "100°C",
    zone: "Peak",
    desc: "Upper bench. Löyly released. The room becomes a single organism.",
  },
];

const Experience = () => (
  <section id="experience" className="border-b border-zinc-800">
    <div className="relative h-56 sm:h-72 lg:h-80">
      <img
        src={heroBg}
        alt="Sauna steam rising in warm ambient light"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-end section-pad !py-10">
        <div>
          <p className="section-label text-zinc-400">Experience</p>
          <h2 className="mt-2 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
            Three temperatures. One journey.
          </h2>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3">
      {sensations.map((item, i) => (
        <div
          key={item.zone}
          className={`section-pad !py-10 ${
            i < sensations.length - 1 ? "md:border-r md:border-zinc-800" : ""
          } ${i === 1 ? "bg-orange-950/10" : "bg-black"}`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-industrial text-4xl font-bold text-stone-200">
              {item.temp}
            </span>
            <span className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
              Zone {i + 1}
            </span>
          </div>

          <h3 className="mt-6 font-industrial text-sm font-semibold uppercase tracking-[0.1em] text-zinc-400">
            {item.zone}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="border-t border-zinc-800 bg-stone-950 section-pad">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <p className="max-w-xl font-organic text-2xl leading-snug text-stone-200 sm:text-3xl">
          You do not visit a Nordic Sauna.{" "}
          <span className="italic text-stone-400">You are received by one.</span>
        </p>

        <a
          href="#contact"
          className="shrink-0 border border-zinc-700 px-8 py-4 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-stone-200 transition-colors hover:border-zinc-500 hover:bg-black"
        >
          Begin commission
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
