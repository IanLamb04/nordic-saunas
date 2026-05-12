import React from 'react';

const Craftsmanship: React.FC = () => {
  return (
    <section id="craftsmanship" className="section-dark">
      <div className="container layout-split reverse">
        <div className="text-content reveal">
          <span className="subheading">Uncompromising Design</span>
          <h2>Sleek Metal.<br />Expansive Glass.</h2>
          <p>Our signature look relies on minimalist dark framing and tempered glass. The stark black lines draw the eye, framing the warmth within like a living piece of art.</p>
        </div>
        <div className="image-content reveal delay-1 glass-card">
          <div className="card-inner">
            <h3>Architectural Precision</h3>
            <p>Every joint and angle is meticulously engineered to provide structural integrity while maintaining a feather-light visual profile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;