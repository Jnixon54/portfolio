import './App.css';

import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {Pop} from '../animations/animations';
import '../animations/animations.css';

import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import About from './About/About';
import ReturnButton from './ReturnButton/ReturnButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
      showReturn: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollPosition = this.scrollPosition.bind(this);
    this.toggleReturnButton = this.toggleReturnButton.bind(this);
  }

  componentDidMount() {
    window.location.hash = '#home';
    window.addEventListener('scroll', this.scrollPosition);


    // console.log('document.documentElement: ', document.documentElement);
  }

  componentWillUpdate() {
    if (this.state.scrollPercent > 18 && this.state.showReturn !== true) this.toggleReturnButton()
    if (this.state.scrollPercent <= 18 && this.state.showReturn === true) this.toggleReturnButton()
  }

  
  handleScroll(target){
    // window.scrollTo(0, DOMelement.offsetTop);
    scrollToComponent(this[target].container, { duration: 1000, ease: 'inOutQuad'})
    // if (target === 'home') {
    //   scrollToComponent(this.home.cont)
    // } else if (target === 'projects'){
    //   scrollToComponent(this.Project.container, { duration: 1000, ease: 'inOutQuad' })
    // } else if (target === 'about'){
    //   scrollToComponent(this.about.container, { duration: 1000, ease: 'inOutQuad' })
    // } else if (target === 'contact'){
    //   scrollToComponent(this.contact.container, { duration: 1000, ease: 'inOutQuad' })
    // } 
  }
  
  scrollPosition(){ // Pure Javascript function to monitor scroll postion
    let winHeight = window.innerHeight;

    let body = document.body;
    let html = document.documentElement;
    let docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let value = document.documentElement.scrollTop;

    let max = docHeight - winHeight;
    let percent = (value / max) * 100;
    this.setState({scrollPercent: percent});

  }

  toggleReturnButton() {
    console.log('toggle')
    this.setState({showReturn: !this.state.showReturn})
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <Header ref={header => this.header = header} handleScroll={this.handleScroll}/>
        <LandingPage ref={landingPage => this.landingPage = landingPage}/>
        <Project ref={projects => this.projects = projects}/>
        <About ref={about => this.about = about} />
        <Contact ref={contact => this.contact = contact}/>
        {/* {(this.state.scrollPercent > 18) ? ( */}
          <Pop in={this.state.showReturn}>
            <ReturnButton handleScroll={this.handleScroll} scrollPercent={this.state.scrollPercent}/>
          </Pop>
        {/* ) : null} */}
        {/* <ReturnButton handleScroll={this.handleScroll} scrollPercent={this.state.scrollPercent}/> */}
      </div>
    );
  }
}

export default App;
