import { createStore } from 'redux';

const initialState = [
	{id: 1, content: 'Do Groceries', completed: false},
	{id: 2, content: 'Study', completed: false}]

const reducer = (state=initialState, action) => {
	return state;
}

const store = createStore(reducer);

export default store;

