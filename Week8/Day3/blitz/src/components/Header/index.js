import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './icon2.png';
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

// <Link to="/feed"><IconButton><MoreVertIcon /></IconButton></Link>
//<Logout nextPage = { this.props.nextPage }/>
//<h5>Hi {this.props.currentUser.username}!</h5>
// <img src={ this.props.currentUser.avatar} />
// const mapStateToProps = (state) => {
//   return state;
// }
// connect(mapStateToProps)(Header)

// <div className="Header">
//           <AppBar
//               title= {currentUser.username}
//               className="MenuBar"
//               style={ { 'textAlign':'left', 'backgroundColor': '#0EEDAE' } }
//               showMenuIconButton= {false}
//               //iconClassNameRight="muidocs-icon-navigation-expand-more"
//               //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//               >
//               <IconMenu
//                 iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
//                 // targetOrigin={{horizontal: 'left', vertical: 'top'}}
//                 // anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//                 iconStyle={{ 'color': 'white', 'align': 'left', 'marginTop': '8px'}}
//               >
//                 <MenuItem primaryText="Feed" onClick={ this.goToFeed } />
//                 <MenuItem primaryText="Profile" onClick={ this.goToProfile } />
//                 <MenuItem primaryText="Likes" onClick={ this.goToLikes } />
//                 <MenuItem primaryText="Users" onClick={ this.goToUsers } />
//                 <MenuItem primaryText="Sign out" onClick={ this.logOut } />
//               </IconMenu>
              
//             </AppBar>
//           <h2>Blitz</h2>
//         </div>


// <AppBar 
//             style={ { 'textAlign':'left', 'backgroundColor': '#0EEDAE' } } 
//             showMenuIconButton= {false}
//             iconElementRight={<FlatButton label="Menu">}>

//               <MenuItem primaryText="Feed" onClick={ this.goToFeed } />
//                   <MenuItem primaryText="Likes" onClick={ this.goToLikes } />
//                   <MenuItem primaryText="Users" onClick={ this.goToUsers } />
//                   <MenuItem primaryText="Your Profile" onClick={ this.goToProfile }/>
//                   <MenuItem primaryText="Sign out" onClick={ this.logOut } />

//           </FlatButton>} >
            
//             <h3 style={ { 'textAlign':'right'} }>Hi {currentUser.username}!</h3>
            
//             <RaisedButton
//               onTouchTap={this.handleTouchTap}
//               label="Menu"
//               className="MenuButton"
//             />
//               <Popover
//                 open={this.state.open}
//                 anchorEl={this.state.anchorEl}
//                 anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
//                 targetOrigin={{horizontal: 'left', vertical: 'top'}}
//                 onRequestClose={this.handleRequestClose}
//               >
//                 <Menu>
//                   <MenuItem primaryText="Feed" onClick={ this.goToFeed } />
//                   <MenuItem primaryText="Likes" onClick={ this.goToLikes } />
//                   <MenuItem primaryText="Users" onClick={ this.goToUsers } />
//                   <MenuItem primaryText="Your Profile" onClick={ this.goToProfile }/>
//                   <MenuItem primaryText="Sign out" onClick={ this.logOut } />
//                 </Menu>
//               </Popover>

//            </AppBar>