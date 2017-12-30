import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
  return (
    <div ref={container => this.container = container} className="header-container" id="home">
      <div className="header-logo">
        <Link to="/#home">
        <span>J</span>
        <span id="name-dot">.</span>
        <span id="name-extra">OE</span>
        <span id="name-last">NIXON</span>
        </Link>
      </div>
      <div className="header-links">
        <Link onClick={() => this.props.handleScroll('projects')} className="header-link" to="#projects">
          <span className="header-link-text">Projects</span>
          <span id="secondary-link-1">Projects</span>
        </Link>
        <Link onClick={() => this.props.handleScroll('about')} className="header-link" to="#about">
          <span className="header-link-text">About Me</span>
          <span id="secondary-link-2">About Me</span>
        </Link>
        <Link onClick={() => this.props.handleScroll('contact')} className="header-link" to="#contact">
          <span className="header-link-text">Contact</span>
          <span id="secondary-link-3">Contact</span>
        </Link>
      </div>
    </div>
  )}
}

export default Header;