const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Craft", href: "#craftsmanship" },
  { label: "Materials", href: "#materials" },
  { label: "Experience", href: "#experience" },
  { label: "Inquire", href: "#contact" },
];

const Navbar = () => (
  <header className="fixed top-0 left-0 z-50 w-full lg:w-[42%]">
    <nav className="flex items-stretch border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="flex w-16 shrink-0 items-center justify-center border-r border-zinc-800">
        <span className="font-mono-industrial text-[10px] font-light tracking-[0.3em] text-zinc-500 [writing-mode:vertical-lr] rotate-180">
          NS
        </span>
      </div>

      <div className="flex flex-1 items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="font-industrial text-xs font-semibold uppercase tracking-[0.25em] text-stone-200"
        >
          Nordic Saunas
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-stone-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <details className="relative md:hidden">
          <summary className="cursor-pointer font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-500 list-none">
            Menu
          </summary>
          <ul className="absolute right-0 top-full mt-2 w-48 border border-zinc-800 bg-black/95 backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-zinc-800 px-4 py-3 font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-stone-200 last:border-b-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <a
          href="#contact"
          className="border border-zinc-800 px-4 py-2 font-mono-industrial text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-white/20 hover:text-stone-200"
        >
          Commission
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
