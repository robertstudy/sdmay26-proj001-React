import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
          <span className="company-name">ATP File Processing</span>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Instructions</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
