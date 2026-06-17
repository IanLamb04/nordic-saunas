import heroBg from "../images/hero-bg.png";

const steps = [
  {
    phase: "Survey",
    detail: "Site geometry mapped. Solar path traced. Ventilation modeled.",
  },
  {
    phase: "Select",
    detail: "Timber graded by grain density, moisture content, and thermal expansion.",
  },
  {
    phase: "Fabricate",
    detail: "CNC-cut steel frames. Hand-fitted cedar panels. Zero visible fasteners.",
  },
  {
    phase: "Calibrate",
    detail: "First fire cycle. Heat distribution mapped. Bench ergonomics refined.",
  },
];

const Craftsmanship = () => (
  <section id="craftsmanship" className="border-b border-zinc-800">
    <div className="grid lg:grid-cols-2">
      <div className="relative order-2 min-h-[40vh] lg:order-1 lg:min-h-[600px]">
        <img
          src={heroBg}
          alt="Handcrafted sauna interior detail showing timber joinery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="order-1 section-pad bg-black lg:order-2">
        <p className="section-label">Process</p>

        <h2 className="mt-4 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Four phases. Infinite precision.
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
          Every commission follows the same disciplined process — from first site visit to
          final heat calibration.
        </p>

        <div className="mt-12 space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.phase}
              className="flex gap-5 border-t border-zinc-800 pt-6 first:border-t-0 first:pt-0"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-zinc-800 font-mono-industrial text-[11px] text-zinc-500">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-industrial text-base font-semibold text-stone-200">
                  {step.phase}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-500">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border border-zinc-800 p-5">
          <span className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
            Typical lead time
          </span>
          <span className="font-industrial text-xl font-semibold text-stone-200">
            14–18 weeks
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Craftsmanship;
