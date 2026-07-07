const Navbar = () => (
  <header className="fixed w-100 top-0 left-0 bottom-0 h-full z-50 bg-cream/90 backdrop-blur-sm">
    <nav className="flex h-full items-center p-10 flex-col justify-between">
      <a href="#" className="font-display text-2xl text-ink">
        Nordic Saunas
      </a>
      <ul className="flex-col hidden lg:flex items-left gap-8 text-lg text-ink/70 content-left">
        <li><a href="#models" className="hover:text-ink transition-colors">For Home</a></li>
        <li><a href="#mission" className="hover:text-ink transition-colors">For Business</a></li>
        <li><a href="#experience" className="hover:text-ink transition-colors">Sauna with Us</a></li>
        <li><a href="#journal" className="hover:text-ink transition-colors">Resources</a></li>
      </ul>
      <a href="#contact" className="btn btn-ink py-2 px-5">
        Get started
      </a>
    </nav>
  </header>
);

export default Navbar;
