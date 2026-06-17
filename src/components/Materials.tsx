const materials = [
  {
    tag: "Structure",
    name: "Blackened Steel",
    desc: "Powder-coated frames and hardware in matte charcoal — the architectural skeleton that holds light and glass in perfect tension.",
    accent: "border-l-warm",
  },
  {
    tag: "Envelope",
    name: "Low-Iron Glass",
    desc: "Ultra-clear panels with minimal tint, creating seamless views from heated interior to wild exterior.",
    accent: "border-l-cream/40",
  },
  {
    tag: "Interior",
    name: "Thermally Modified Ash",
    desc: "Chemical-free heat treatment deepens color and improves stability — richer tones that run through every fiber.",
    accent: "border-l-amber",
  },
  {
    tag: "Cladding",
    name: "Charred Cedar",
    desc: "Shou sugi ban finish on exterior boards — weather-resistant, deeply textured, and unmistakably handcrafted.",
    accent: "border-l-forest",
  },
];

const Materials = () => (
  <section id="materials" className="bg-iron py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm">Materials</p>
          <h2 className="mt-6 font-display text-4xl text-cream md:text-5xl">
            Performance meets
            <br />
            <span className="italic text-warm/80">patina.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-cream/50">
          We source materials that perform in harsh Nordic climates while aging
          gracefully — no compromise between durability and beauty.
        </p>
      </div>

      <div className="mt-16 grid gap-px bg-white/5 md:grid-cols-2">
        {materials.map((mat) => (
          <div
            key={mat.name}
            className={`group border-l-2 ${mat.accent} bg-charcoal p-10 transition hover:bg-slate`}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-warm/70">
              {mat.tag}
            </span>
            <h3 className="mt-4 font-display text-2xl text-cream">{mat.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/55">{mat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Materials;
