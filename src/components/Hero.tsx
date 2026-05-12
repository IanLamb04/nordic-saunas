import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content fade-in-up">
        <h1>Where Stark Elegance<br />Meets Natural Warmth</h1>
        <p>Commissioned saunas blending sleek black metal architecture with handcrafted artisanal wood.</p>
        <a href="#about" className="btn-outline">Discover the Balance</a>
      </div>
    </header>
  );
};

export default Hero;