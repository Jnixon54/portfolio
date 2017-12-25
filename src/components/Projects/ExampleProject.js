import React, { Component } from 'react';
import './ExampleProject.css';

class ExampleProject extends Component {
  render(){
    return (
      <div ref={ container => this.container = container } id="project-container">
        <div>

        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default ExampleProject;