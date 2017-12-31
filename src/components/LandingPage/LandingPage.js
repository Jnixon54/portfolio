import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
  return (
    <div ref={container => this.container = container} id="landing" className="content-container">
      <div className="landing-text">
        <div id="block-1">Joe Nixon</div>
        <div id="block-2">Interactive Web</div>
        <div id="block-3">Development</div>
      </div>
      <div>

      </div>
    </div>
  )}
}

export default LandingPage;