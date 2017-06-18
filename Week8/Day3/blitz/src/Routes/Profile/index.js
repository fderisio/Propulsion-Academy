import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../store/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Profile extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchProfile());
  }

  nextPage = (value) => { this.props.history.push(value); }

  render() {
    const user = this.props.currentUser.username;
    const likes = this.props.currentUser.likes; // array of likes
    const follows = this.props.currentUser.follow; // array of followers
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
        <h1> {user}´s Profile </h1>
        <h3> Coming soon...</h3>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Profile);

