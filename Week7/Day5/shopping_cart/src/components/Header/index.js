import React, { Component } from 'react';
import logo from './icon.png';
import './style.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Online Shopping Cart by Fiorella</h2>
        </div>
    );
  }

}

export default Header;