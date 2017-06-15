import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './icon2.png';
import './style.css';
//import Logout from '../Logout';
import { fetchFeed, fetchProfile } from '../../store/actions';
import { logOutUser } from '../../store/actions';

import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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
    const currentUser = this.props.currentUser;
    return (
      <div className="Blitz">
        <div className="Header">
          <AppBar
              title= {currentUser.username}
              className="MenuBar"
              style={ { 'textAlign':'left', 'backgroundColor': '#0EEDAE' } }
              showMenuIconButton= {false}
              //iconClassNameRight="muidocs-icon-navigation-expand-more"
              //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              >
              <IconMenu
                iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
                // targetOrigin={{horizontal: 'left', vertical: 'top'}}
                // anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                iconStyle={{ 'color': 'white', 'align': 'left', 'marginTop': '8px'}}
              >
                <MenuItem primaryText="Feed" onClick={ this.goToFeed } />
                <MenuItem primaryText="Profile" onClick={ this.goToProfile } />
                <MenuItem primaryText="Likes" onClick={ this.goToLikes } />
                <MenuItem primaryText="Users" onClick={ this.goToUsers } />
                <MenuItem primaryText="Sign out" onClick={ this.logOut } />
              </IconMenu>
              
            </AppBar>
          <h2>Blitz</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Header); // to get dispatch()
//<Logout nextPage = { this.props.nextPage }/>
//<h5>Hi {this.props.currentUser.username}!</h5>
// <img src={ this.props.currentUser.avatar} />
// const mapStateToProps = (state) => {
//   return state;
// }
// connect(mapStateToProps)(Header)