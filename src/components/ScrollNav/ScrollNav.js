import React, { Component } from 'react';
import './ScrollNav.css';

class ScrollNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delayComplete: false
    };

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({delayComplete: true})
    }, 1500);
  }


  render () {
    let orbOuterHeight = 35; // nav-orb-container height
    let orbCount = 3;
    console.log(orbOuterHeight);
    let currentSection = Math.floor(this.props.scrollPercent / 33.3333);
    let position = `calc(50% - ${(this.props.scrollPercent/100)*(orbOuterHeight * orbCount)}px)`;
    // let position = `calc(50% - ${currentSection*30}px)`;
    console.log(this.state)
    let navClasses = this.state.delayComplete ? 'scroll-nav-container active' : 'scroll-nav-container';
    return (
      <div className={navClasses}>
        <div className="nav-range" id="nav-range" style={{top: position}}>
          <div className="nav-orb-container" style={{height: orbOuterHeight + 'px'}}>
            <div className="nav-orb" style={{backgroundColor: '#FCF34B'}}></div>
          </div>
          <div className="nav-orb-container" style={{height: orbOuterHeight + 'px'}}>
            <div className="nav-orb" style={{backgroundColor: '#44EDE4'}}></div>
          </div>
          <div className="nav-orb-container" style={{height: orbOuterHeight + 'px'}}>
            <div className="nav-orb" style={{backgroundColor: '#FC7753'}}></div>
          </div>
          <div className="nav-orb-container" style={{height: orbOuterHeight + 'px'}}>
            <div className="nav-orb" style={{backgroundColor: '#9760DB'}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScrollNav;
