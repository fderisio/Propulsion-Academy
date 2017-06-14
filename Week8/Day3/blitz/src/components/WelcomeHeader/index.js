import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from '../Header/icon2.png';
import './style.css';

class WelcomeHeader extends Component {
  render() {
    return (
      <div className="Blitz">
        <div className="WelcomeHeader">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Blitz </h2>
        </div>
      </div>
    );
  }
}

export default WelcomeHeader;

// Trademark logo 
