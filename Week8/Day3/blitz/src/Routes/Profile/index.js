import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../store/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserItem from '../../components/UserItem';

class Profile extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchProfile());
  }

  nextPage = (value) => { this.props.history.push(value); }

  render() {
    // if there are no feeds yet
    if (this.props.feed.length === 0) {
      return <p> Loading your profile details... </p>
    }

    console.log('profile', this.props)
    const user = this.props.currentUser;
    const likes = this.props.currentUser.likes; // array of likes
    const follows = this.props.currentUser.follow; // array of followers
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
        <h1> {user.username}´s Profile </h1>
        <img src={user.avatar} />
        <p>Email: {user.email} </p>
        <p>Last updated: {user.updatedAt} </p>
        <p>You are following: </p>
        <div>
          { user.follows.map((userItem, index) => 
            <UserItem key={index} userItem={userItem} follow={this.follow} unfollow={this.unfollow} showLink={ true }/>)}
        </div>
        <h3> More details coming soon...</h3>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Profile);