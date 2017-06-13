import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../../App';
import '../../App.css';

class Question extends Component {

	render() {
		return (
			<h4 className="App">{this.props.question.text}  </h4>
		);
	}


}


export default Question;
