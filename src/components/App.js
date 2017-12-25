import React, { Component } from 'react';
import './App.css';
import './LandingPage/LandingPage';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import ExampleProject from './Projects/ExampleProject';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
        <ExampleProject />
        <Contact />
      </div>
    );
  }
}

export default App;
