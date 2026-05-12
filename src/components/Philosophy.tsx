import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="section-light">
      <div className="container layout-split">
        <div className="text-content reveal">
          <span className="subheading">Our Philosophy</span>
          <h2>Wellness Rooted in Nature. Crafted for the Modern World.</h2>
          <p>We believe that a sauna is more than a room; it's a sanctuary. By fusing clean lines, stark contrasts, and luxury glass with the organic warmth of hand-selected wood, we create wellness spaces that elevate your surroundings.</p>
        </div>
        <div className="image-content reveal delay-1">
          <div className="wood-accent-panel"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;