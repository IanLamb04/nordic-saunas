const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Craft", href: "#craftsmanship" },
  { label: "Materials", href: "#materials" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-xl">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <a
        href="#"
        className="font-industrial text-sm font-semibold uppercase tracking-[0.15em] text-stone-200"
      >
        Nordic Saunas
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-stone-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <details className="relative md:hidden">
          <summary className="cursor-pointer font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-500 list-none">
            Menu
          </summary>
          <ul className="absolute right-0 top-full mt-2 w-44 border border-zinc-800 bg-black">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-zinc-800 px-4 py-3 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-400 hover:text-stone-200 last:border-b-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <a
          href="#contact"
          className="border border-zinc-800 px-4 py-2 font-mono-industrial text-[11px] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:border-zinc-600 hover:text-stone-200"
        >
          Inquire
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
