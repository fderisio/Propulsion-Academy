import React from 'react';
import './index.css';

class ToDoList extends React.Component {

	render() {
		return ( 
			<div className='ToDoList'>
				<ul>
					{
					this.props.toDos.map(todo => {
						if (this.props.filter === 'completed' && todo.completed === true) {
							return ( 
								<div>
									<li key={todo.id} className={ 'TodoItem-completed' } onClick={()=>this.props.setCompleted(todo.id)}>
										{ todo['content'] }&nbsp;
									</li>
									<button onClick={()=>this.props.delete(todo.id)}>Delete</button>
								</div>);
						} else if (this.props.filter === 'pending' && todo.completed === false) {
							return (
								<div>
									<li key={todo.id} onClick={()=>this.props.setCompleted(todo.id)}>
										{ todo['content'] }&nbsp;</li>
									<button onClick={()=>this.props.delete(todo.id)}>Delete</button>
								</div>);
						} else if (this.props.filter === 'all') {
							return (
								<div>
									<li key={todo.id} className={ todo.completed ? 'TodoItem-completed' : '' } onClick={()=>this.props.setCompleted(todo.id)}>
										{ todo['content'] }&nbsp;</li>
									<button onClick={()=>this.props.delete(todo.id)}>Delete</button>
								</div>);
						}
					})
					}
				</ul>
			</div>
		);
	}

}

export default ToDoList;