import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../store/actions';

import Header from '../../components/Header';
import LikesItem from '../../components/LikesItem';
import Footer from '../../components/Footer';

class Likes extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchProfile());
  }

  nextPage = (value) => { this.props.history.push(value); }

  render() {
    console.log('likes props', this.props)
    const likes = this.props.currentUser.likes; // array of likes
    console.log('likesarray', likes)
    // if (likes.length === 0) {
    //   return <p> Loading home page... </p>
    // }

    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
        <h1> This are your likes </h1>
        <h3> Coming soon...</h3>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Likes);

// <div>
//           { likes.map((likeItem, index) => <LikesItem key={index} likeItem={likeItem} />) }
//         </div>