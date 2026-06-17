const Footer = () => (
  <footer className="border-t border-white/5 bg-charcoal py-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
      <p className="font-display text-lg text-cream">
        Nordic<span className="text-warm">.</span>
      </p>
      <p className="text-xs text-cream/30">
        © {new Date().getFullYear()} Nordic Saunas. Crafted with intention.
      </p>
      <div className="flex gap-8">
        {["Instagram", "Pinterest", "Houzz"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-[10px] uppercase tracking-[0.2em] text-cream/40 transition hover:text-warm"
          >
            {social}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
