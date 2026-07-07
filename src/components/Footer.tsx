const Footer = () => (
  <footer className="border-t border-ink/10 py-16 px-[6%]">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
      <div>
        <p className="heading-label text-ink/45 mb-4">For Home</p>
        <ul className="space-y-2 text-sm text-ink/60">
          <li><a href="#models" className="hover:text-ink">Model 8</a></li>
          <li><a href="#models" className="hover:text-ink">Model 5/5+</a></li>
          <li><a href="#models" className="hover:text-ink">Model 3</a></li>
        </ul>
      </div>
      <div>
        <p className="heading-label text-ink/45 mb-4">For Business</p>
        <ul className="space-y-2 text-sm text-ink/60">
          <li><a href="#contact" className="hover:text-ink">Design &amp; Consult</a></li>
          <li><a href="#contact" className="hover:text-ink">Business Resources</a></li>
        </ul>
      </div>
      <div>
        <p className="heading-label text-ink/45 mb-4">About Us</p>
        <ul className="space-y-2 text-sm text-ink/60">
          <li><a href="#philosophy" className="hover:text-ink">Our Design Philosophy</a></li>
          <li><a href="#contact" className="hover:text-ink">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <p className="heading-label text-ink/45 mb-4">Contact</p>
        <ul className="space-y-2 text-sm text-ink/60">
          <li>hello@nordicsaunas.com</li>
          <li>Duluth, Minnesota</li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-ink/10 text-xs text-ink/40">
      <p className="font-display text-lg text-ink">Nordic Saunas</p>
      <p>&copy; {new Date().getFullYear()} Nordic Saunas. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
