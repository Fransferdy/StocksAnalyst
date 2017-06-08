import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About us</h2>
        </div>
        <p className="App-intro">
          Ipslum lorem lalalala
        </p>
      </div>
    );
  }
} 

export default About ;
