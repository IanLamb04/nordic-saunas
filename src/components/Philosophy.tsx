import natureImg from "../images/nature.png";

const principles = [
  {
    title: "Structural honesty",
    body: "Every joint visible. Every line intentional. We reject ornament that obscures load-bearing truth.",
  },
  {
    title: "Thermal intelligence",
    body: "Heat moves through wood differently than steel. Our enclosures are engineered around convection.",
  },
  {
    title: "Ritual over routine",
    body: "A sauna is a threshold between the engineered world and the elemental — not a product category.",
  },
];

const Philosophy = () => (
  <section id="philosophy" className="border-b border-zinc-800">
    <div className="grid lg:grid-cols-2">
      <div className="section-pad bg-black">
        <p className="section-label">Philosophy</p>

        <h2 className="mt-4 max-w-md font-industrial text-3xl font-bold leading-tight text-stone-200 sm:text-4xl">
          Two materials. One conviction.
        </h2>

        <p className="mt-6 max-w-lg font-mono-industrial text-sm leading-relaxed text-zinc-500">
          We pair industrial precision with organic materials — sharp steel frames wrapped in
          warm cedar, basalt, and ash.
        </p>

        <div className="mt-12 space-y-8">
          {principles.map((item, i) => (
            <div key={item.title} className="border-l border-zinc-800 pl-6">
              <span className="font-mono-industrial text-[11px] text-zinc-600">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-industrial text-base font-semibold text-stone-200">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="relative flex-1 min-h-[40vh]">
          <img
            src={natureImg}
            alt="Forest canopy filtering light through ancient timber"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        </div>

        <div className="bg-orange-950/20 px-6 py-10 lg:px-16">
          <p className="max-w-lg font-organic text-2xl leading-relaxed text-stone-200">
            We build rooms that slow time — where steam rises from cedar and silence has texture.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;
