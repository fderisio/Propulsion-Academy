import React, { Component } from 'react';
import logo from '../Header/icon.png';
import './style.css';

class WelcomeHeader extends Component {
  render() {
    return (
      <div className="Blitz">
        <div className="WelcomeHeader">
          <img src={logo} className="Welcome-logo" alt="logo" />
          <h2>Welcome to Blitz </h2>
        </div>
      </div>
    );
  }
}

export default WelcomeHeader;
