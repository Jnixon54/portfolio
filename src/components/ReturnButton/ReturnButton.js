import React, { Component } from 'react';
import './ReturnButton.css';
import {Link} from 'react-router-dom';

import chevronUp from '../../icons/chevron_up.svg';


class ReturnButton extends Component {
  
  render() {
    console.log(this.props.scrollPercent)
    let classes = '';
    classes = this.props.scrollPercent > 22 ? 'active' : 'hidden';
    return (
      <div className={'return-button-container ' + classes}>
      <Link onClick={() => this.props.handleScroll('header')} to="#home">
        <div className="return-button">
          <img src={chevronUp} className="chevron-up" alt="" />
        </div>
      </Link>
      </div>
    )}
}

export default ReturnButton;