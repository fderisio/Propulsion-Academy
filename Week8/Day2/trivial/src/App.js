import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Question from './components/Question';
import Answers from './components/Answers';
import Header from './components/Header';
import Footer from './components/Footer';
import { addQuestionCreator } from './store/actions';
import { addAnswersCreator } from './store/actions';


class App extends Component {
  
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=3')
      .then(res => res.json())
      .then(data => {
        //console.log('fetched data', data)

        // fetch questions
        const questions = data.results.map((question, index) => { // array of objects
          const newQuestion = {
            id: index + 1,
            text: question.question
          }
          return newQuestion;
        });
        
        // fetch answers
        let newIndex = 1;
        const answers = data.results.map((question, index) => { // array of objects
          let answersArray = [];
          // multiple choice answer
          for (let i=0; i<question.incorrect_answers.length; i++) {
            const newIncorrectAnswer = {
              id: i + 1,
              text: question.incorrect_answers[i],
              isCorrect: false
            };
            answersArray.push(newIncorrectAnswer)
          }
          const newCorrectAnswer = {
            id: 4,
            text: question.correct_answer,
            isCorrect: true
          };
          answersArray.push(newCorrectAnswer)

          // boolean answers
          if (question.incorrect_answers.length === 1) {
            const newIncorrectAnswer = {
              id: 1,
              text: question.incorrect_answers,
              isCorrect: false
            };
            answersArray.push(newIncorrectAnswer)
            const newCorrectAnswer = {
              id: 2,
              text: question.correct_answer,
              isCorrect: true
            };
            answersArray.push(newCorrectAnswer)
          }
          //console.log(newCorrectAnswer)
          //return answersArray;
          return [newIndex] = answersArray;
          newIndex++;
      });
      //console.log('answers', answers)
    
      questions.forEach(question => { // the arrow function defines the context
        const action = addQuestionCreator(question)
        this.props.dispatch(action)
      });

      answers.forEach(answer => { // the arrow function defines the context
        //console.log('answer', answer)
        const action = addAnswersCreator(answer)
        this.props.dispatch(action)
      });
    });

  }

  nextPage = (value) => {
    this.props.history.push(value);
  }

  startAgainButton = () => {
    this.props.history.push('/');
  }

  render() {
    const questionId = this.props.match.params.order;
    //console.log('answers[1]', this.props.answers[0])
    return (
      <div className = "App">
        <Header />
        <Question question={this.props.question[questionId-1]} questionId={ questionId }/>
        <Answers answers={this.props.answers[questionId-1]} dispatch={this.props.dispatch} nextPage = {this.nextPage} questionId={questionId}/>
        <button onClick={ this.startAgainButton }>Start again!</button>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = (state) => { // devuelve el state de redux
  //console.log('state', state)
  return state
};

export default connect(mapStateToProps)(App);
