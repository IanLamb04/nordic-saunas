import React from 'react';

const Materials: React.FC = () => {
  return (
    <section id="materials" className="section-wood">
      <div className="container text-center reveal">
        <span className="subheading">Thermally Modified Wood</span>
        <h2 className="dark-text">Artisanal & Handcrafted</h2>
        <p className="max-width dark-text">Sustainably sourced, our wood undergoes a thermal modification process that enriches its color, increases durability, and provides an intoxicating, warm aroma. It is chemical-free and crafted for generations of relaxation.</p>

        <div className="materials-grid">
          <div className="material-item reveal delay-1">
            <div className="material-swatch wood-light"></div>
            <h4>Golden Oak</h4>
            <p>Soft, inviting, and radiant.</p>
          </div>
          <div className="material-item reveal delay-2">
            <div className="material-swatch wood-dark"></div>
            <h4>Thermally Modified Ash</h4>
            <p>Deep, rich, and highly resilient.</p>
          </div>
          <div className="material-item reveal delay-3">
            <div className="material-swatch metal-black"></div>
            <h4>Matte Black Steel</h4>
            <p>Industrial strength, refined finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;