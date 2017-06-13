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
		return (
			<div className="App">
		        <Header />
				<h4> Total correct answers: { this.props.results } </h4>
				<h4> Total questions: { this.props.questionId } </h4>
				<button onClick={ this.startAgainButton }>Start again!</button>
				<Footer />
			</div>
		);
	}

}

const mapStateToProps = (state) => { // devuelve el state de redux
	const newState = state;
	const results = newState.results;
	const questionId = newState.question.length;
  	return { results, questionId };
};

export default connect(mapStateToProps)(Results);