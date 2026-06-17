const Contact = () => (
  <section id="contact" className="bg-cream py-24 text-charcoal lg:py-32">
    <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-warm">Contact</p>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">
          Begin your
          <br />
          sanctuary.
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
          Whether you envision a glass pavilion in the pines or a lakeside log
          retreat, we'd love to hear about your project. Every build starts with
          a conversation.
        </p>

        <div className="mt-12 space-y-4 text-sm text-charcoal/60">
          <p>
            <span className="mr-4 text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Email</span>
            hello@nordicsaunas.com
          </p>
          <p>
            <span className="mr-4 text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Studio</span>
            Duluth, Minnesota
          </p>
        </div>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Name</span>
            <input
              type="text"
              className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal outline-none transition focus:border-warm"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Email</span>
            <input
              type="email"
              className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal outline-none transition focus:border-warm"
              placeholder="you@email.com"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Project Type</span>
          <select className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-charcoal outline-none transition focus:border-warm">
            <option>Modern Glass Pavilion</option>
            <option>Traditional Log Cabin</option>
            <option>Custom Hybrid Design</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40">Message</span>
          <textarea
            rows={4}
            className="mt-2 w-full resize-none border-b border-charcoal/20 bg-transparent py-3 text-charcoal outline-none transition focus:border-warm"
            placeholder="Tell us about your land, your vision, your timeline..."
          />
        </label>
        <button
          type="submit"
          className="bg-charcoal px-10 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-iron"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
