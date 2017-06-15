import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Profile extends Component {

  nextPage = (value) => { this.props.history.push(value); }

  render() {
    const likes = this.props.currentUser.likes; // array of likes
    const follows = this.props.currentUser.follow; // array of followers
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
      <p> profile </p>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Profile);