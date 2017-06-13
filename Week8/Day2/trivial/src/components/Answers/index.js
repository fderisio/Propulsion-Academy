import React from 'react';
import { addResultCreator } from '../../store/actions';
import '../../App.css';

class Answers extends React.Component {
	
	checkAnswer = (isCorrect) => {
		const nextQuestion = this.props.questionId*1 + 1;
		this.props.dispatch(addResultCreator(isCorrect));
		if (nextQuestion === 4) {
			this.props.nextPage('/result');
		} else {
			this.props.nextPage('/questions/' + nextQuestion);
		}
	}

	render() {
		return (
			<ul> {
				this.props.answers.map((answer, index) => 
					<li key={answer.id} className="App" onClick={ () => this.checkAnswer(answer.isCorrect) }>{answer.text}</li>
				)
			}
			</ul>
		);
	}
}

export default Answers;
