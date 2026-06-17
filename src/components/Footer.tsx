const Footer = () => (
  <footer className="bg-black">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 section-pad !py-12 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="font-industrial text-sm font-semibold uppercase tracking-[0.15em] text-stone-200">
          Nordic Saunas
        </p>
        <p className="mt-2 font-organic text-lg italic text-zinc-600">
          Modern artisanal wellness.
        </p>
      </div>

      <div className="flex gap-16">
        <div>
          <p className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {["Philosophy", "Craft", "Materials", "Experience"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-stone-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-600">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            {["Privacy", "Terms", "Warranty"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-stone-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="font-mono-industrial text-[11px] text-zinc-700">
        © {new Date().getFullYear()} Nordic Saunas
      </p>
    </div>
  </footer>
);

export default Footer;
