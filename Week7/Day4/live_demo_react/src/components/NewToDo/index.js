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

	addNewToDo = () => {
		this.props.addToDo(this.state.inputValue);
		this.setState({
			inputValue: ''
		})
	}

	render() {
		return ( 
			<div className='NewToDo'>
				<div>
					<input type='text' value={this.state.inputValue} onChange={ this.handleInput } placeholder='Enter the new task here'/> 
					<button onClick={this.addNewToDo}>Add task</button>
				</div>
			</div>
		)
	}

}

export default NewToDo;