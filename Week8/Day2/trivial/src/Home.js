import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class Home extends Component {
  
  startButton = () => {
    this.props.history.push('/questions/1');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2> Welcome to the new trivia game lauched by Fiorella Inc.! </h2>
        <h5> Press Start when you are ready to play </h5>
        <button onClick={ this.startButton }>Start!</button>
        <Footer />
      </div> 
    );
  }

}


export default Home;