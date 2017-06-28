import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { fetchUsers, fetchProfile } from '../../store/actions';
import Header from '../../components/Header';
import UserItem from '../../components/UserItem';
import Footer from '../../components/Footer';

class Users extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUsers());
    this.props.dispatch(fetchProfile());
  }

  nextPage = (value) => { this.props.history.push(value); }

  // follow user
    follow = (user, isFollow) => {
    this.props.currentUser.follows.push(user);
    isFollow = true;
  };
  // unfollow user
  unfollow = (user, isFollow) => {
    for (let i=0; i<this.props.currentUser.follows.length; i++) {
      if (user === this.props.currentUser.follows[i]) {
        this.props.currentUser.follows.splice(i, 1);
      }
    }
    isFollow = false;
  };

  render() {
    const users = this.props.users;
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
        <h3> Registered Users </h3>
        <div>
          { users.map((userItem, index) => 
            <UserItem key={index} userItem={userItem} follow={this.follow} unfollow={this.unfollow} showLink={ true }/>)}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Users);