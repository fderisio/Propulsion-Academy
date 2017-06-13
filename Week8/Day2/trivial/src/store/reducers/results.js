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
		default:
			return state;
	}
}

export default results;