import React, { Component } from 'react';
import './App.css';
import './LandingPage/LandingPage';
import scrollToComponent from 'react-scroll-to-component';

import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import ExampleProject from './Projects/ExampleProject';
import Contact from './Contact/Contact';
import About from './About/About';

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

    // console.log('document.documentElement: ', document.documentElement);
  }
  
  handleScroll(target){
    // window.scrollTo(0, DOMelement.offsetTop);
    if (target === 'projects'){
      scrollToComponent(this.exampleProject.container, { duration: 1000, ease: 'inOutQuad' })
    } else if (target === 'about'){
      scrollToComponent(this.about.container, { duration: 1000, ease: 'inOutQuad' })
    } else if (target === 'contact'){
      scrollToComponent(this.contact.container, { duration: 1000, ease: 'inOutQuad' })
    }
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
    console.log(this.state.scrollPercent);
    return (
      <div className="App">
        <Header handleScroll={this.handleScroll}/>
        <LandingPage ref={landingPage => this.landingPage = landingPage}/>
        <ExampleProject ref={exampleProject => this.exampleProject = exampleProject}/>
        <About ref={about => this.about = about} />
        <Contact ref={contact => this.contact = contact}/>
      </div>
    );
  }
}

export default App;
