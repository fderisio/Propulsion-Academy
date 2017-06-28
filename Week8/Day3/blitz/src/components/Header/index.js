import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './icon.png';
import './style.css';
import { logOutUser } from '../../store/actions';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

class Header extends Component {

  goToFeed = () => { this.props.nextPage('/feed'); };
  goToProfile = () => { this.props.nextPage('/users/:user'); };
  goToLikes = () => { this.props.nextPage('/likes'); };
  goToUsers = () => { this.props.nextPage('/users'); };

  logOut = (e) => {
    e.preventDefault();
    const logoutAction = logOutUser();
    this.props.dispatch(logoutAction);
    this.props.nextPage('/');
  };

  render() {
    const currentUser = this.props.username;

    const LoggedInButtons = (
      <div>
        <Link to="/feed"><FlatButton label="Home" /></Link>
        <Link to="/users/:userId"><FlatButton label="Profile" /></Link>
        <Link to="/likes"><FlatButton label="Likes" /></Link>
        <Link to="/users"><FlatButton label="Users" /></Link>
        <FlatButton label="Sign Out" onClick={ this.logOut} />
        <img src={logo} className="Welcome-logo" alt="logo" />
      </div>
    );

    const MenuButtons = LoggedInButtons;
    return (
      <div className="Blitz">
        <div className="Header">
          <AppBar 
            style={ { 'textAlign':'right', 'backgroundColor': '#0EEDAE' } } 
            showMenuIconButton= {false}
            iconElementRight={ MenuButtons }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Header); // to get dispatch()
