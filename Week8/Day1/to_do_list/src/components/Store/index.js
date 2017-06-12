import { createStore } from 'redux';

const reducer = (state=['Do Groceries', 'Study'], action) => {
	return state;
}

const store = createStore(reducer);

export default store;

