const styles = {
	wrapper: {
		textAlign: 'center', // text.align: 'left'
		margin: '20px auto',
		width: '30%'
	}
}

// question class

import { Link } from 'react-router-dom';

class question extends Component {
<div style={styles.wrapper}></div>

addAnswer = () => {

}

render () {
	const question = {
		id: 1,
		text: 'some question',
		answers: [
		{ id: 1, text: , isCorrect: }
		]
	}

	<li key {answer.id}  onClick={this.addAnswer}> { answer}</li>
	<li key {answer.id}  onClick={() => {answer.isCorrect? alert('yay') : alert('buhhh')})}> { answer}</li>

	return (
		<Link to="/result"> Go to result <Link />  --> a link to go to the results
		<ul>
		{
		question.answers.map(answer => 
			<AnswerItem answer = { answer }/>
		)
		})
}

// answer class

import { withRouter } from 'react-router-dom';

class answer extends Component {
	<div style={styles.wrapper}></div>

	checkAnswer = () => {
		//this.props.answer.isCorrect ? alert('yay') : alert('buhhh');
		this.props.history.push('/result'); // cualquier click va a ir a las respuestas
		const action = addResultCreator(this.props.answer.isCorrect);
		this.props.dispatch(action);

	}

	render () {
		const { answer } = this.props; // igual que --> const answer = this.props.answer;

		return (
			<li onClick={ this.checkAnswer }> { answer.text }</li>
		)
	}

}
export default connect()(withRouter(AnswerItem)); // connecta y agrega el router

/* connect en App Class */

const mapStateToProps = (state) => {
	const questions = Object.value(state.questions).map(question => {
		const answers = question.incorrect_answers.map((ans, index) => {
			return {
				id: index + 1,
				text: ans,
				isCorrect: false
			}
		});
		const correctAns = {
			id: 4,
			text: question.correct_answer,
			isCorrect: true
		};
		answers.push(correctAns)
		const newQuestion = {
			id,
			text,
			answers
		};
		return newQuestion;
	});


}

const mapStateToProps = (state) => {
	props.match.params.order // --> cantidad de veces que se paso por una pagina
}

// Router library

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<Provider>
		<Router>
			<Switch>
				<Route exact path="/" component= { " App" } /> --> Home
			</Switch> 
		</Router>,
		<App /> 
	</Provider>,
document.getElementById('root')
);
	
	registerServiceWorker();


// CSS Notes
h1.nameoftheclass = more specific CSS style

CSS style:

parent rule (bad practice in react)
css file
inline style (en HTML)
!important

match: tiene info de donde esta
history.go se mueve a otra pagina


const questions = (state=initialState, action) {
	return state;
}

export default questions;

/* the same as */
export const questions (state=initialState, action) {
	return state;
}

export const addResultCreator = () => {
	return {
		type: 'addResult',
		isCorrect: isCorrect
	}
}

export const addQuestionCreator = (question) => {
	return {
		type: 'addQuestion',
		question,
	}
}



//
import {} from '../../store/actions'

reducer case:
return action.isCorrect ? state + 1, state;


// App

componentDidAmount() {
	fetch('URL')
	.then(res => res.json())
	.then(data => {
		const questions = data.results.map((question, index) => {
			const newQuestion = { ...question };
			newQuestion.id = index + 1;
			return newQuestion;
		});
	questions.forEach(question => { // the arrow function defines the context
		const action = addResultCreator(question)
		this.props.dispatch(action)
	});
	});
}

connected --> container component (no tienen CSS, solo logica, metodos, renderean un functional component
	)
no connected --> presentencial component (functional components)
