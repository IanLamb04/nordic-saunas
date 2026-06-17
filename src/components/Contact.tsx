const Contact = () => (
  <section id="contact" className="border-b border-zinc-800">
    <div className="grid lg:grid-cols-2">
      <div className="section-pad bg-black">
        <p className="section-label">Commission</p>

        <h2 className="mt-4 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Begin your build
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500">
          Each Nordic Sauna is a single commission. Share your site and vision — we respond
          within five business days.
        </p>

        <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-2 w-full border-b border-zinc-800 bg-transparent py-2 text-sm text-stone-200 outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full border-b border-zinc-800 bg-transparent py-2 text-sm text-stone-200 outline-none focus:border-zinc-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600"
            >
              Project location
            </label>
            <input
              id="location"
              type="text"
              className="mt-2 w-full border-b border-zinc-800 bg-transparent py-2 text-sm text-stone-200 outline-none focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600"
            >
              Vision
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 w-full resize-none border-b border-zinc-800 bg-transparent py-2 text-sm text-stone-200 outline-none focus:border-zinc-600"
              placeholder="Describe the site, the light, the ritual you imagine..."
            />
          </div>

          <button
            type="submit"
            className="bg-stone-200 px-8 py-4 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-black transition-colors hover:bg-stone-100"
          >
            Submit inquiry
          </button>
        </form>
      </div>

      <div className="section-pad flex flex-col justify-between bg-orange-950/15">
        <div>
          <h3 className="font-organic text-2xl text-stone-200">Direct line</h3>

          <div className="mt-10 space-y-8">
            {[
              { label: "Studio", value: "Portland, Oregon" },
              { label: "Email", value: "studio@nordicsaunas.com" },
              { label: "Phone", value: "+1 (503) 555-0147" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
                  {item.label}
                </p>
                <p className="mt-2 font-organic text-xl text-stone-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-zinc-800 bg-black/40 p-6">
          <p className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
            Current queue
          </p>
          <p className="mt-3 font-industrial text-2xl font-semibold text-stone-200">
            Accepting Q3 2026
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Two commission slots remain for autumn delivery.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
