const ADD = 'add';
const DEL = 'delete';

const todosReduce = (state = ['Learn Redux', 'Master React'] , action) => {
	switch (action.type) {
		case ADD:
			const newList = state;
			newList.push(action.value);
			return newList;
		case DEL:
			let newListDel = state;
			newListDel = [];
			return newListDel;
		default:
			return state;
	}
};	