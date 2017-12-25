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
    };

    this.handleScroll = this.handleScroll.bind(this);
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

  render() {
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
