const initialState = [
	
	[
	{id: 1, text: 'Jonas Furrer', isCorrect: true},
	{id: 2, text: 'Henri Druey', isCorrect: false},
	{id: 3, text: 'Josef Munzinger', isCorrect: false},
	{id: 4, text: 'Wilhelm Matthias Naeff', isCorrect: false}
	],

	[
	{id: 1, text: '1201', isCorrect: false},
	{id: 2, text: '1221', isCorrect: false},
	{id: 3, text: '1241', isCorrect: false},
	{id: 4, text: '1291', isCorrect: true}
	]
];

const answers = (state=initialState, action) => {
	switch (action.type) {
		case 'addAnswers':
			const newState = state;
			console.log(state)
			newState.push(action.answer);
			return newState;
		default:
			return state;
	}
	return state;
}

export default answers;