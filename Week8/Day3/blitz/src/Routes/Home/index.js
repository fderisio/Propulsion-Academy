import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeed } from '../../store/actions';

import Header from '../../components/Header';
import FeedItem from '../../components/FeedItem';
import Footer from '../../components/Footer';

class Home extends Component {
  
  componentDidMount = () => {
    this.props.dispatch(fetchFeed());
  }

  nextPage = (value) => { this.props.history.push(value); };

  render() {
    const feed = this.props.feed;
    console.log('feed', feed)

    // if there are not feeds yet
    if (Object.keys(feed).length === 0) {
      return <p> Loading home page... </p>
    }
  	
    // home display
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} /><br/>
        <div className="Body">
          <p className="Title">Check what you missed!</p><br/>
          <div>
              { feed.map((feedItem, index) => <FeedItem key={index} feedItem={feedItem} />)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Home);