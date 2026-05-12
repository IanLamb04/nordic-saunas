import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">NORDIC SAUNAS</div>
      <div className="nav-links">
        <a href="#about">Philosophy</a>
        <a href="#craftsmanship">Craftsmanship</a>
        <a href="#materials">Materials</a>
        <a href="#contact" className="btn-primary">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;