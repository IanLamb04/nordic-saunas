const Contact = () => (
  <section id="contact" className="py-20 md:py-28 px-[6%] bg-sand/40 left-100">
    <div className="max-w-lg mx-auto">
      <p className="heading-label text-ink/45 mb-4 text-center">Work with us</p>
      <h2 className="heading-section text-center">
        Let&apos;s get started with your new sauna
      </h2>

      <form className="mt-12 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="heading-label text-ink/45 mb-2">This is a...</legend>
          <select className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40">
            <option>Home</option>
            <option>Business</option>
            <option>Real Estate Development</option>
          </select>
        </fieldset>

        <fieldset>
          <legend className="heading-label text-ink/45 mb-2">Interested in</legend>
          <select className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40">
            <option>Model 3</option>
            <option>Model 5</option>
            <option>Model 5+</option>
            <option>Model 8</option>
          </select>
        </fieldset>

        <fieldset>
          <legend className="heading-label text-ink/45 mb-2">Desired delivery month</legend>
          <select className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40">
            <option>Next available</option>
            <option>6–12 months</option>
            <option>1 year +</option>
          </select>
        </fieldset>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40"
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink/40"
        />

        <button type="submit" className="btn btn-ink w-full">
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
