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
        <input type="text" placeholder="Enter your name" name="userName" />
        <h5> Press Start when you are ready</h5>
        <button onClick={ this.startButton }>Start!</button>
        <Footer />
      </div> 
    );
  }

}


export default Home;

// <p>Enter your name here: </p> 
//         <input style="text" placeholder="Enter your name"> </input>