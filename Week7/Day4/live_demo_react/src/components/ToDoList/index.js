import React from 'react';
import './index.css';

class ToDoList extends React.Component {

	// constructor(props) {
	// 	super(props); // constructor of react component

	// }

	// // handleInput(e, v) { --> lleva a *
	// handleInput = (e) => { // quita el .bind(this) ---- ONLY in React!!!!!!
	// 	//console.log(e.currentTarget.value); // que tecla se presiono o se agrego al input
	// 	//this.state.inputValue = e.currentTarget.value;
	// 	this.setState({
	// 		inputValue: e.currentTarget.value // equivale a: this.state.inputValue
	// 	});
	// }

	render() {
		return ( 
			<div className='ToDoList'>
				<ul>
					{
					this.props.toDos.map(todo => {
						if (this.props.filter === 'completed' && todo.completed === true) {
							return <li key={todo.id} className={ todo.completed ? 'TodoItem-completed' : '' } onClick={()=>this.props.setCompleted(todo.id)}>{ todo['content'] }<button onClick={}>Delete</button></li>;
						} else if (this.props.filter === 'pending' && todo.completed === false) {
							return <li key={todo.id} className={ todo.completed ? 'TodoItem-completed' : '' } onClick={()=>this.props.setCompleted(todo.id)}>{ todo['content'] }<button>Delete</button></li>;
						} else if (this.props.filter === 'all') {
							return <li key={todo.id} className={ todo.completed ? 'TodoItem-completed' : '' } onClick={()=>this.props.setCompleted(todo.id)}>{ todo['content'] }<button>Delete</button></li>;
						}

					})
					}
				</ul>
			</div>
		);
	}

}

export default ToDoList;