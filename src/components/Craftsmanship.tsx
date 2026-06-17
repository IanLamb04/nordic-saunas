import heroBg from "../images/hero-bg.png";

const steps = [
  {
    phase: "Survey",
    detail: "Site geometry mapped. Solar path traced. Ventilation modeled in three dimensions.",
  },
  {
    phase: "Select",
    detail: "Timber graded by grain density, moisture content, and thermal expansion coefficient.",
  },
  {
    phase: "Fabricate",
    detail: "CNC-cut steel frames. Hand-fitted cedar panels. Zero visible fasteners.",
  },
  {
    phase: "Calibrate",
    detail: "First fire cycle. Heat distribution mapped. Bench ergonomics refined to the millimeter.",
  },
];

const Craftsmanship = () => (
  <section id="craftsmanship" className="border-t border-zinc-800">
    <div className="grid lg:grid-cols-12">
      {/* Organic image — left, reversed from philosophy */}
      <div className="relative order-2 lg:order-1 lg:col-span-6">
        <div className="relative h-[60vh] lg:h-full lg:min-h-[80vh]">
          <div className="grain-organic absolute inset-4 right-0 lg:inset-8 lg:right-16">
            <img
              src={heroBg}
              alt="Handcrafted sauna interior detail showing timber joinery"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-amber-950/30" />
          </div>

          {/* Vertical industrial label */}
          <div className="absolute top-8 left-0 hidden lg:block">
            <div className="bg-black px-3 py-8">
              <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-500 [writing-mode:vertical-lr] rotate-180">
                Craftsmanship
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial process panel — right */}
      <div className="order-1 flex flex-col justify-center bg-black px-8 py-16 lg:order-2 lg:col-span-6 lg:px-16 xl:px-24">
        <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          Process / 03
        </span>

        <h2 className="mt-6 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Four phases.
          <br />
          <span className="text-zinc-600">Infinite precision.</span>
        </h2>

        <div className="mt-12">
          {steps.map((step, i) => (
            <div key={step.phase} className="group flex gap-0">
              <div className="flex w-16 shrink-0 flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center border border-zinc-800 bg-black font-mono-industrial text-[10px] text-zinc-500 transition-colors group-hover:border-white/20 group-hover:text-stone-200">
                  0{i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-zinc-800" />
                )}
              </div>

              <div className="border-b border-zinc-800 pb-10 pl-6 pt-1">
                <h3 className="font-industrial text-lg font-semibold uppercase tracking-[0.1em] text-stone-200">
                  {step.phase}
                </h3>
                <p className="mt-2 max-w-md font-mono-industrial text-xs leading-relaxed text-zinc-500">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-zinc-800 p-6">
          <div className="flex items-baseline justify-between">
            <span className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Lead time
            </span>
            <span className="font-industrial text-2xl font-bold text-stone-200">
              14–18 wks
            </span>
          </div>
          <div className="mt-4 h-px w-full bg-zinc-800">
            <div className="h-full w-3/4 bg-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Craftsmanship;
