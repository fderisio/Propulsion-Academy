import React from 'react';
import { connect } from 'react-redux';

import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import { ceroScore } from '../../store/actions';

class Results extends React.Component {

	startAgainButton = (results) => {
    	this.props.history.push('/');
        this.props.dispatch(ceroScore())
  	}

	render() {
		console.log(this.props.answers[0])
		return (
			<div className="App">
		        <Header />
				<h4> Total correct answers: { this.props.results } </h4>
				<h4> Total questions: { this.props.question.length } </h4>
				<button onClick={ this.startAgainButton }>Start again!</button>
				<Footer />
			</div>
		);
	}

}

const mapStateToProps = (state) => { // devuelve el state de redux
	const newState = state;
	console.log(newState)
	return newState;
	// const results = newState.results;
	// const questionId = newState.question.length;
 //  	return { results, questionId };
};

export default connect(mapStateToProps)(Results);

// <h5> { this.props.questions } </h5>
// 				<ul> {
// 					this.props.answers[0].map((answer, index) => 
// 					<li key={answer.id} className="App" onClick={ () => this.checkAnswer(answer.isCorrect) }>{answer.text}</li>
// 				)
// 				} </ul>