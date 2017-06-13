import React, { Component } from 'react';
import '../../App.css';

class Question extends Component {

	render() {
		return (
			<h4 className="App">{this.props.question.text}  </h4>
		);
	}


}


export default Question;
