const results = (state=0, action) => {
	switch (action.type) {
		case 'addResult':
			const newState = state;
			console.log(state)
			if (action.isCorrect) {
				return newState + 1;
			} else {
				return newState;
			}
		case 'playAgain':
			let newState2 = state;
			newState2 = 0;
			return newState2;
		default:
			return state;
	}
}

export default results;