import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Home;
