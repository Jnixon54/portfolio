import './App.css';

import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Project from './Projects/Project';
import Contact from './Contact/Contact';
import About from './About/About';
import ReturnButton from './ReturnButton/ReturnButton';
import ScrollNav from './ScrollNav/ScrollNav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollPosition = this.scrollPosition.bind(this);
  }

  componentDidMount() {
    window.location.hash = '#home';
    window.addEventListener('scroll', this.scrollPosition);

    
  }

  
  handleScroll(target){
    // let body = document.querySelector('body');
    // body.style.backgroundColor = '#44EDE4';
    // console.log(body)
    // window.scrollTo(0, DOMelement.offsetTop);
    scrollToComponent(this[target].container, { duration: 1000, ease: 'inOutQuad'})
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

  render() {
    console.log(this);
    
    return (
      <div className="App">
        <Header ref={header => this.header = header} handleScroll={this.handleScroll}/>
        <LandingPage ref={landingPage => this.landingPage = landingPage}/>
        <Project ref={projects => this.projects = projects}/>
        <About ref={about => this.about = about} />
        <Contact ref={contact => this.contact = contact}/>
        <ReturnButton handleScroll={this.handleScroll} scrollPercent={this.state.scrollPercent}/>
        <ScrollNav scrollPercent={this.state.scrollPercent}/>
      </div>
    );
  }
}

export default App;
