import React from 'react';

class NewToDo extends React.Component {

	constructor(props) {
		super(props); // constructor of react component
		this.state = {
			inputValue: ''
		}
	}

	handleInput = (e) => { 
		this.setState({
			inputValue: e.currentTarget.value // equivale a: this.state.inputValue
		});
	}

	addNewToDo = (e) => {
		e.preventDefault();
		this.props.addToDo(this.state.inputValue);
		this.setState({
			inputValue: ''
		})
	}

	// handleEnterKey(target) {
	// 	if(target.charCode==13){
	// 		console.log('hola')
	// 	//if(event.keyCode === 13){
	// 		this.addNewToDo();
	// 	}
	// }

	handleForm = (e) => {

	}

	render() {
		return ( 
			<div className='NewToDo'>
				<form onSubmit={ this.handleForm }>
					<input type='text' value={this.state.inputValue} onChange={ this.handleInput } placeholder='Enter the new task here'/> 
					<button onClick={this.addNewToDo} onKeyPress={this.handleEnterKey}>Add task</button>
				</form>
			</div>
		)
	}

	// forms: used to take the information from every input in it
}

export default NewToDo;