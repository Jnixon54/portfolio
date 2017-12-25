import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
        J.NIXON
        </Link>
      </div>
      <div className="header-links">
        <Link className="header-link" to="/projects">
          <span className="header-link-text">Projects</span>
          <span >Projects</span>
        </Link>
        <Link className="header-link" to="/about">
          <span className="header-link-text">About Me</span>
          <span >About Me</span>
        </Link>
        <Link className="header-link" to="/contact">
          <span className="header-link-text">Contact</span>
          <span >Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default Header;