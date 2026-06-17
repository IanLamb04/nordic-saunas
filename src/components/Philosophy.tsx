import natureImg from "../images/nature.png";

const Philosophy = () => (
  <section id="philosophy" className="relative border-t border-zinc-800">
    <div className="grid min-h-[90vh] lg:grid-cols-12">
      {/* Industrial panel — left */}
      <div className="relative flex flex-col justify-between bg-black p-8 lg:col-span-5 lg:p-16 xl:p-20">
        <div>
          <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            Philosophy / 02
          </span>

          <h2 className="mt-8 font-industrial text-3xl font-bold leading-tight text-stone-200 sm:text-4xl xl:text-5xl">
            Two materials.
            <br />
            One conviction.
          </h2>
        </div>

        <div className="mt-12 space-y-0">
          {[
            {
              num: "I",
              title: "Structural honesty",
              body: "Every joint visible. Every line intentional. We reject ornament that obscures load-bearing truth.",
            },
            {
              num: "II",
              title: "Thermal intelligence",
              body: "Heat moves through wood differently than steel. Our enclosures are engineered around convection, not convention.",
            },
            {
              num: "III",
              title: "Ritual over routine",
              body: "A sauna is not a product category. It is a threshold between the engineered world and the elemental.",
            },
          ].map((item, i) => (
            <div
              key={item.num}
              className={`border-t border-zinc-800 py-8 ${i === 2 ? "border-b" : ""}`}
            >
              <div className="flex gap-6">
                <span className="font-mono-industrial text-xs text-zinc-700">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-industrial text-sm font-semibold uppercase tracking-[0.15em] text-stone-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-mono-industrial text-xs leading-relaxed text-zinc-500">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organic panel — right with asymmetric image */}
      <div className="relative lg:col-span-7">
        <div className="relative h-[50vh] lg:absolute lg:inset-0 lg:h-auto">
          <div className="grain-organic h-full w-full">
            <img
              src={natureImg}
              alt="Forest canopy filtering light through ancient timber"
              className="h-full w-full object-cover clip-threshold-reverse"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-amber-950/20" />
          </div>

          {/* Floating organic quote block */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="ml-auto max-w-lg lg:mr-8">
              <div className="border-l-2 border-amber-900/50 bg-orange-950/20 p-8 backdrop-blur-sm">
                <p className="font-organic text-2xl leading-relaxed text-stone-200 sm:text-3xl">
                  We build rooms that slow time — where steam rises from cedar and silence has
                  texture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial counter-block overlapping organic */}
        <div className="relative z-10 -mt-16 mx-8 mb-8 max-w-md glass-industrial p-8 lg:absolute lg:bottom-16 lg:left-0 lg:mx-0 lg:-ml-12 lg:mb-0">
          <p className="font-mono-industrial text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Design principle
          </p>
          <p className="mt-4 font-industrial text-2xl font-semibold text-stone-200">
            Asymmetry is honesty.
          </p>
          <p className="mt-3 font-mono-industrial text-xs leading-relaxed text-zinc-500">
            No two installations share the same footprint. Each commission begins with the land,
            the light, and the lineage of the wood.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;
