import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>NORDIC SAUNAS</h3>
            <p>Modern luxury meets artisanal wellness.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">Philosophy</a></li>
              <li><a href="#craftsmanship">Craftsmanship</a></li>
              <li><a href="#materials">Materials</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>info@rayssaunas.com</p>
            <p>Follow us on Instagram</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Nordic Saunas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;