import React from 'react';
import { connect } from 'react-redux';
import { addResultCreator } from '../../store/actions';
import '../../App.css';

class Answers extends React.Component {
	
	checkAnswer = (isCorrect) => {
		const nextQuestion = this.props.questionId*1 + 1;
		this.props.dispatch(addResultCreator(isCorrect));
		if (nextQuestion === 6) {
			this.props.nextPage('/result');
		} else {
			this.props.nextPage('/questions/' + nextQuestion);
		}
	}

	render() {
		const answers = this.props.answers;
		console.log('answers', answers)
		return (
			<ul> {
				answers.forEach((answer) => {
					<li key={answer.id} className="App" onClick={ () => this.checkAnswer(answer.isCorrect) }>{ answer.text }</li>
				})
			}
			</ul>
		);
	}
}

export default Answers;

//console.log(answer); 

// {
// 				this.props.answers.map((answer, index) => 
// 					<li key={answer.id} className="App" onClick={ () => this.checkAnswer(answer.isCorrect) }>{answer.text}</li>
// 				)

// 