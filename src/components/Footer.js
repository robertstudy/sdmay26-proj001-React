import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} sdmay26-proj001. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
