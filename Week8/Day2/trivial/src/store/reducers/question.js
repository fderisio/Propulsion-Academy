
const initialState = [
	{id: 1, text: 'First President of Switzerland'},
	{id: 2, text: 'Year of creation of Switzerland'}

]

const questions = (state=initialState, action) => {
	switch (action.type) {
		case 'addQuestion':
			const newState = state;
			console.log(state)
			newState.push(action.question);
			return newState;
		default:
			return state;
	}
	return state;
}

export default questions;