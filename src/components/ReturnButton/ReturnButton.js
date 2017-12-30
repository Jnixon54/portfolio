import React, { Component } from 'react';
import './ReturnButton.css';
import {Link} from 'react-router-dom';


class ReturnButton extends Component {
  render() {
    return (
      <div className="return-button-container">
      <Link onClick={() => this.props.handleScroll('header')} to="#home">
        <div className="return-button">
          <div />
          <div />
        </div>
      </Link>
      </div>
    )}
}

export default ReturnButton;