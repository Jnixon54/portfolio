import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
        <span>J</span>
        <span id="name-dot">.</span>
        <span id="name-extra">OE</span>
        <span id="name-last">NIXON</span>
        </Link>
      </div>
      <div className="header-links">
        <Link className="header-link" to="/projects">
          <span className="header-link-text">Projects</span>
          <span id="secondary-link-1">Projects</span>
        </Link>
        <Link className="header-link" to="/about">
          <span className="header-link-text">About Me</span>
          <span id="secondary-link-2">About Me</span>
        </Link>
        <Link className="header-link" to="/contact">
          <span className="header-link-text">Contact</span>
          <span id="secondary-link-3">Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Header;