import natureImg from "../images/nature.png";

const materials = [
  {
    name: "Western Red Cedar",
    origin: "Pacific Northwest",
    detail: "Natural antimicrobial. Low thermal conductivity. Aromatic at temperature.",
  },
  {
    name: "Thermally Modified Ash",
    origin: "Scandinavian sourced",
    detail: "Dimensional stability to 200°C. Deep amber patina under sustained heat.",
  },
  {
    name: "Blackened Steel",
    origin: "In-house fabrication",
    detail: "Structural frame and heat shielding. Oxidized finish — no coatings.",
  },
  {
    name: "Basalt Stone",
    origin: "Nordic quarries",
    detail: "Thermal mass for löyly generation. Holds heat longer than ceramic.",
  },
];

const Materials = () => (
  <section id="materials" className="border-b border-zinc-800 bg-stone-950">
    <div className="grid lg:grid-cols-2">
      <div className="section-pad bg-black">
        <p className="section-label">Materials</p>

        <h2 className="mt-4 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Specified. Not sourced.
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
          Every material is selected against measurable performance criteria, then validated by
          hand before it enters your build.
        </p>

        <div className="mt-10 divide-y divide-zinc-800 border-y border-zinc-800">
          {materials.map((mat) => (
            <div key={mat.name} className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-industrial text-base font-semibold text-stone-200">
                  {mat.name}
                </h3>
                <span className="font-mono-industrial text-[11px] text-zinc-600">
                  {mat.origin}
                </span>
              </div>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
                {mat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[40vh] lg:min-h-0">
        <img
          src={natureImg}
          alt="Natural timber grain and forest materials"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <p className="max-w-md font-organic text-2xl leading-relaxed text-stone-200">
            Materials are collaborators in a decades-long conversation with heat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Materials;
