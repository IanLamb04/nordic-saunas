import natureImg from "../images/nature.png";

const Craftsmanship = () => (
  <section id="craft" className="relative">
    <div className="grid lg:grid-cols-2">
      <div className="relative min-h-[50vh] lg:min-h-[80vh]">
        <img
          src={natureImg}
          alt="Handcrafted log sauna on a lakeshore at dusk with warm light glowing from within"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      <div className="flex flex-col justify-center bg-linen px-6 py-24 text-charcoal lg:px-16 lg:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm">Craftsmanship</p>
        <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          Built by hand,
          <br />
          meant for decades.
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
          Not every sauna needs to be a glass box. Our traditional builds honor
          centuries of Nordic bathing culture — moss-roofed cabins on quiet
          lakes, smoke curling from stone chimneys, firewood stacked against
          weathered logs.
        </p>

        <ul className="mt-10 space-y-5">
          {[
            "Traditional log construction with chinked joinery",
            "Custom stone foundations and chimney work",
            "Lake-access decks in thermally modified hardwood",
            "Interior benches shaped for ergonomic heat distribution",
          ].map((item) => (
            <li key={item} className="flex items-start gap-4 text-sm text-charcoal/75">
              <span className="mt-1.5 block h-px w-6 shrink-0 bg-warm" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-12 inline-flex w-fit items-center gap-3 border-b border-charcoal/30 pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:border-warm hover:text-warm"
        >
          Discuss your vision
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  </section>
);

export default Craftsmanship;
