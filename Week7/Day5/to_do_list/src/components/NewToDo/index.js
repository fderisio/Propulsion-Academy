import React from 'react';

class NewToDo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}

	handleInput = (e) => { 
		this.setState({
			inputValue: e.currentTarget.value
		});
	}

	addNewToDo = (e) => {
		e.preventDefault();
		this.props.addToDo(this.state.inputValue);
		this.setState({
			inputValue: ''
		})
	}

	render() {  // forms: used to take the information from every input in it
		return ( 
			<div className='NewToDo'>
				<form onSubmit={ this.handleForm }>
					<input type='text' value={this.state.inputValue} onChange={ this.handleInput } placeholder='Enter the new task here'/> 
					<button onClick={this.addNewToDo} onKeyPress={this.handleEnterKey}>Add task</button>
				</form>
			</div>
		)
	}

}

export default NewToDo;