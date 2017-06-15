import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Likes extends Component {

  nextPage = (value) => { this.props.history.push(value); }

  render() {
    return (
      <div className="App">
        <Header nextPage = {this.nextPage} />
        	<p> LIKES </p>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Likes);