import React, { Component } from 'react';
import './App.css';
import './LandingPage/LandingPage';
import LandingPage from './LandingPage/LandingPage';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
