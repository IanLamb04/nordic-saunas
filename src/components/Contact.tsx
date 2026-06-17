const Contact = () => (
  <section id="contact" className="border-t border-zinc-800">
    <div className="grid lg:grid-cols-12">
      {/* Industrial form panel */}
      <div className="bg-black p-8 lg:col-span-7 lg:p-16 xl:p-20">
        <span className="font-mono-industrial text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          Commission / 06
        </span>

        <h2 className="mt-6 font-industrial text-3xl font-bold text-stone-200 sm:text-4xl">
          Begin your build.
        </h2>

        <p className="mt-4 max-w-lg font-mono-industrial text-xs leading-relaxed text-zinc-500">
          Each Nordic Sauna is a single commission. Share your site, your vision, and your
          relationship to heat — we respond within five business days.
        </p>

        <form
          className="mt-12 space-y-0"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: "name", label: "Name", type: "text", half: true },
            { id: "email", label: "Email", type: "email", half: true },
            { id: "location", label: "Project location", type: "text", half: false },
            { id: "message", label: "Vision", type: "textarea", half: false },
          ].map((field) => (
            <div
              key={field.id}
              className={`border-t border-zinc-800 py-6 ${field.half ? "lg:inline-block lg:w-1/2 lg:pr-8" : ""}`}
            >
              <label
                htmlFor={field.id}
                className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-600"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  rows={4}
                  className="mt-3 w-full resize-none bg-transparent font-mono-industrial text-sm text-stone-200 outline-none placeholder:text-zinc-700"
                  placeholder="Describe the site, the light, the ritual you imagine..."
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  className="mt-3 w-full bg-transparent font-mono-industrial text-sm text-stone-200 outline-none placeholder:text-zinc-700"
                  placeholder="—"
                />
              )}
            </div>
          ))}

          <div className="border-t border-zinc-800 pt-8">
            <button
              type="submit"
              className="w-full bg-stone-200 px-8 py-5 font-mono-industrial text-[10px] uppercase tracking-[0.25em] text-black transition-colors hover:bg-stone-100 sm:w-auto"
            >
              Submit inquiry
            </button>
          </div>
        </form>
      </div>

      {/* Organic contact details */}
      <div className="flex flex-col justify-between bg-orange-950/20 p-8 lg:col-span-5 lg:p-16">
        <div>
          <h3 className="font-organic text-2xl text-stone-200">
            Direct line
          </h3>

          <div className="mt-10 space-y-8">
            {[
              { label: "Studio", value: "Portland, Oregon" },
              { label: "Email", value: "studio@nordicsaunas.com" },
              { label: "Phone", value: "+1 (503) 555-0147" },
            ].map((item) => (
              <div key={item.label} className="border-l border-amber-900/40 pl-6">
                <p className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {item.label}
                </p>
                <p className="mt-2 font-organic text-xl text-stone-200">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass-industrial p-8">
          <p className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Current queue
          </p>
          <p className="mt-3 font-industrial text-3xl font-bold text-stone-200">
            Accepting Q3 2026
          </p>
          <p className="mt-3 font-mono-industrial text-xs text-zinc-600">
            Two commission slots remain for autumn delivery.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
