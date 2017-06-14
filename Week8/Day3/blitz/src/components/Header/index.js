import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './icon2.png';
import './style.css';
import Menu from './Menu';
import MenuBar from './MenuBar';
import MenuDisplay from './Menu/menuDisplay';

class Header extends Component {

showMenu = (e) => {
  e.preventDefault();
  return <Menu />
}

  render() {
    return (
      <div className="Blitz">
        <div className="Header">
          <MenuBar onClick={ this.showMenu }><MenuDisplay /></MenuBar>
          
          <h2>Blitz</h2>
        </div>
      </div>
    );
  }
}

export default Header;
