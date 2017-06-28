// render() ToDoList comments:

// --- Render() comments:
	// const toDos = ['Learn JS', 'Learn React', 'Learn Redux'];
		// (<p>A list of to do</p>);
		// * onChange={ this.handleInput.bind(this) }
		// bind --> creates a new function
		// -- return: 
		// Option A: this.renderToDos();
		// Option B: toDos.map(toDo => {
		// 	return <li key='toDo'>{toDo}</li>; /
		// })
		// <li>Learn JS</li>
		// <li>Learn React</li>
		// <li>Learn Redux</li>

		// Option A: renderToDos() {
		//    const toDos = ['Learn JS', 'Learn React', 'Learn Redux'];
		//    return this.state.toDos.map(toDo => {
		// 				return <li key='toDo'>{toDo}</li>; /
		//    });
		// }
		// return <TodoItem key={ index } toDo={ toDo } />;