const Philosophy = () => (
  <section id="philosophy" className="bg-cream text-charcoal">
    <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-24 lg:px-16 lg:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm">Our Philosophy</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Two worlds,
          <br />
          one ritual.
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
          We believe the finest sauna experience lives at the intersection of
          precision and patience. Blackened steel frames meet hand-selected
          cedar. Floor-to-ceiling glass dissolves the boundary between shelter
          and forest.
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
          Every board is chosen for its grain. Every joint is cut by craftsmen
          who understand that wellness isn't manufactured — it's cultivated,
          one quiet session at a time.
        </p>
      </div>

      <div className="relative bg-charcoal px-6 py-24 lg:px-16 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(201,169,110,0.08))]" />
        <div className="relative space-y-12">
          {[
            {
              num: "01",
              title: "Precision",
              desc: "CNC-cut steel and engineered glass assemblies with tolerances measured in millimeters.",
            },
            {
              num: "02",
              title: "Patience",
              desc: "Kiln-dried timber, hand-sanded benches, and traditional joinery that improves with age.",
            },
            {
              num: "03",
              title: "Presence",
              desc: "Spaces designed to slow time — where heat, wood, and breath become the only agenda.",
            },
          ].map((item) => (
            <div key={item.num} className="border-l border-warm/30 pl-8">
              <span className="text-xs font-medium tracking-[0.2em] text-warm">{item.num}</span>
              <h3 className="mt-2 font-display text-2xl text-cream">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;
