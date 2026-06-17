import heroBg from "../images/hero-bg.png";

const Hero = () => (
  <section className="relative flex min-h-screen items-end">
    <img
      src={heroBg}
      alt="Modern glass-fronted sauna glowing warmly in a forest at dusk"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
      <div className="max-w-3xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-warm">
          Artisanal Wellness Architecture
        </p>
        <h1 className="font-display text-5xl leading-[1.1] text-cream md:text-7xl lg:text-8xl">
          Where glass meets
          <br />
          <span className="italic text-warm">grain.</span>
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
          Handcrafted saunas that balance stark modern lines with the warmth of
          natural timber — built for stillness, designed for living.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#craft"
            className="bg-warm px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:bg-amber"
          >
            Explore Craft
          </a>
          <a
            href="#contact"
            className="border border-cream/25 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur-sm transition hover:border-warm/50"
          >
            Request a Consultation
          </a>
        </div>
      </div>

      <div className="mt-16 hidden items-end justify-between border-t border-white/10 pt-8 lg:flex">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">Founded</p>
          <p className="mt-1 font-display text-2xl text-cream">2018</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">Saunas Built</p>
          <p className="mt-1 font-display text-2xl text-cream">140+</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">Wood Species</p>
          <p className="mt-1 font-display text-2xl text-cream">12</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">Scroll</p>
          <p className="mt-1 text-cream/60">↓</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
