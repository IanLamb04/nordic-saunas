import heroBg from "../images/hero-bg.png";

const steps = [
  { step: "Heat", detail: "Gentle löyly rising from river stones" },
  { step: "Breathe", detail: "Cedar resin and cool forest air" },
  { step: "Restore", detail: "Silence deep enough to hear your pulse" },
];

const Experience = () => (
  <section id="experience" className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
    <div className="absolute inset-0 opacity-20">
      <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden />
      <div className="absolute inset-0 bg-charcoal/80" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm">The Experience</p>
        <h2 className="mt-6 font-display text-4xl text-cream md:text-6xl">
          Ritual, not routine.
        </h2>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {steps.map((item, i) => (
          <div
            key={item.step}
            className="border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md"
          >
            <span className="font-display text-5xl text-warm/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-3xl text-cream">{item.step}</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/55">{item.detail}</p>
          </div>
        ))}
      </div>

      <blockquote className="mx-auto mt-24 max-w-2xl text-center">
        <p className="font-display text-2xl italic leading-relaxed text-cream/80 md:text-3xl">
          "The sauna is not a room you enter. It's a state you return to."
        </p>
        <footer className="mt-6 text-xs uppercase tracking-[0.25em] text-warm/60">
          — Nordic bathing tradition
        </footer>
      </blockquote>
    </div>
  </section>
);

export default Experience;
