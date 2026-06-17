import { useState } from "react";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Materials", href: "#materials" },
  { label: "Craft", href: "#craft" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="font-display text-xl tracking-wide text-cream lg:text-2xl">
          Nordic<span className="text-warm">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-warm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden border border-cream/20 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-cream backdrop-blur-md transition hover:border-warm/40 hover:bg-warm/10 md:inline-block"
        >
          Inquire
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-px w-6 bg-cream transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-cream transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-charcoal/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-cream/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
