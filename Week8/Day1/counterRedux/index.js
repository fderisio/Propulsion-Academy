// const INC = 'inc'; // convention to write types
// const REDU = 'redu';
// actions
const increment = {
	type: INC,
	amount: 1
}

const reduct = {
	type: REDU,
	amount: 1
}

const deleteAll = {
	type: DEL
}

// combines the reduces
const combinedReducers = Redux.combineReducers ({
	todosReduce,
  	counterReduce
})

// // returns the state
// const reducer = (state = { counter: 0, toDos: ['Learn Redux', 'Master React'] }, action) => {
// 	switch (action.type) {
// 		case INC:
// 			const newState = Object.assign({}, state)
// 			newState.counter += action.amount
// 			return newState;
// 		case REDU:
// 			const newState2 = Object.assign({}, state)
// 			newState2.counter -= action.amount
// 			return newState2;
// 		case ADD:
// 			const newState3 = Object.assign({}, state)
// 			const newList = state.toDos;
// 			newList.push(action.value);
// 			return newState3;
// 		case DEL:
// 			const newState4 = Object.assign({}, state)
// 			newState4.toDos = [];
// 			return newState4;
// 		default:
// 			return state;
// 	}
// };	

// creates store with the reducer
const store = Redux.createStore(combinedReducers);
console.log(store.getState())

// renders state
function render() {

	// clears <ul>
	document.getElementById('toDoList').innerHTML = "";

	// renders counter
	const counterEl = document.getElementById('result');
	const state = store.getState();
	counterEl.innerHTML = state.counterReduce; // .text()

	// renders List
	let ul = document.createElement('ul');
	console.log(state.todosReduce.length)
	for (let i=0; i<state.todosReduce.length; i++) {
		let li = document.createElement('li');
		li.innerHTML = state.todosReduce[i];
		ul.append(li);
	}
	document.getElementById('toDoList').appendChild(ul);
	
}
render();

// will notify us every time the State changes
store.subscribe(render);

document.getElementById('sumButton').addEventListener('click', (e) => {
	store.dispatch(increment);
})

document.getElementById('restButton').addEventListener('click', (e) => {
	store.dispatch(reduct);
})

document.getElementById('addTask').addEventListener('click', (e) => {
	const content = document.getElementById('newToDo').value;
	// actions creator
	function addToDo(text) {
  		const action = {
    		type: ADD,
    		value: text
  		}
  		store.dispatch(action);
	}

	addToDo(content);
})

document.getElementById('removeButton').addEventListener('click', (e) => {
	store.dispatch(deleteAll);
})