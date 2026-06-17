import natureImg from "../images/nature.png";

const materials = [
  {
    name: "Western Red Cedar",
    origin: "Pacific Northwest",
    property: "Natural antimicrobial. Low thermal conductivity. Aromatic at temperature.",
    industrial: "Janka: 350 lbf",
  },
  {
    name: "Thermally Modified Ash",
    origin: "Scandinavian sourced",
    property: "Dimensional stability to 200°C. Deep amber patina under sustained heat.",
    industrial: "Moisture: <8%",
  },
  {
    name: "Blackened Steel",
    origin: "In-house fabrication",
    property: "Structural frame. Heat shielding. Oxidized finish — no coatings.",
    industrial: "Gauge: 3mm",
  },
  {
    name: "Basalt Stone",
    origin: "Nordic quarries",
    property: "Thermal mass for löyly generation. Holds heat 4× longer than ceramic.",
    industrial: "Density: 2.9 g/cm³",
  },
];

const Materials = () => (
  <section id="materials" className="border-t border-zinc-800 bg-stone-900">
    <div className="grid lg:grid-cols-2">
      {/* Industrial spec column */}
      <div className="border-b border-zinc-800 bg-black p-8 lg:border-b-0 lg:border-r lg:p-16 xl:p-20">
        <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          Materials / 04
        </span>

        <h2 className="mt-6 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Specified.
          <br />
          Not sourced.
        </h2>

        <p className="mt-6 max-w-md font-mono-industrial text-xs leading-relaxed text-zinc-500">
          Every material in a Nordic Sauna installation is selected against measurable performance
          criteria — then validated by hand before it enters your build.
        </p>

        <div className="mt-12 space-y-0">
          {materials.map((mat, i) => (
            <div
              key={mat.name}
              className={`grid grid-cols-12 gap-4 border-t border-zinc-800 py-6 ${i === materials.length - 1 ? "border-b" : ""}`}
            >
              <div className="col-span-5">
                <h3 className="font-industrial text-sm font-semibold text-stone-200">
                  {mat.name}
                </h3>
                <p className="mt-1 font-mono-industrial text-[10px] text-zinc-600">
                  {mat.origin}
                </p>
              </div>
              <div className="col-span-5">
                <p className="font-mono-industrial text-[11px] leading-relaxed text-zinc-500">
                  {mat.property}
                </p>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-mono-industrial text-[10px] text-zinc-700">
                  {mat.industrial}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organic material showcase */}
      <div className="relative min-h-[70vh]">
        <div className="grain-organic absolute inset-0">
          <img
            src={natureImg}
            alt="Natural timber grain and forest materials"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-amber-950/60" />
        </div>

        <div className="relative flex h-full flex-col justify-end p-8 lg:p-16">
          <div className="space-y-6">
            {["Grain", "Heat", "Patina", "Time"].map((word, i) => (
              <div key={word} className="flex items-center gap-6">
                <span className="font-mono-industrial text-[10px] text-zinc-600">
                  0{i + 1}
                </span>
                <span className="font-organic text-4xl italic text-stone-200 sm:text-5xl lg:text-6xl">
                  {word}
                </span>
                <div className="h-px flex-1 bg-amber-900/30" />
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-sm font-organic text-xl text-stone-400">
            Materials are not ingredients. They are collaborators in a decades-long conversation
            with heat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Materials;
