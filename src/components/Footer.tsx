const Footer = () => (
  <footer className="border-t border-zinc-800 bg-black">
    <div className="grid lg:grid-cols-12">
      <div className="border-b border-zinc-800 p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
        <p className="font-industrial text-lg font-semibold uppercase tracking-[0.2em] text-stone-200">
          Nordic Saunas
        </p>
        <p className="mt-4 font-organic text-lg italic text-zinc-600">
          Modern artisanal wellness.
        </p>
      </div>

      <div className="grid grid-cols-2 border-b border-zinc-800 lg:col-span-5 lg:border-b-0 lg:border-r">
        {[
          { title: "Navigate", links: ["Philosophy", "Craft", "Materials", "Experience"] },
          { title: "Legal", links: ["Privacy", "Terms", "Warranty"] },
        ].map((col) => (
          <div key={col.title} className="border-r border-zinc-800 p-8 last:border-r-0 lg:p-12">
            <p className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              {col.title}
            </p>
            <ul className="mt-6 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono-industrial text-xs text-zinc-500 transition-colors hover:text-stone-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between p-8 lg:col-span-3 lg:p-12">
        <p className="font-mono-industrial text-[10px] leading-relaxed text-zinc-700">
          © {new Date().getFullYear()} Nordic Saunas.
          <br />
          All commissions bespoke.
        </p>
        <p className="mt-8 font-mono-industrial text-[10px] text-zinc-800">
          0° radius. ∞ warmth.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
