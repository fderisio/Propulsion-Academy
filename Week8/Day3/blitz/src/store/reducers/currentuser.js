const currentUser = (state={}, action) => {
	switch (action.type) {
		case 'setUser':
			const newState = { ...action.user };
			console.log(newState)
			return newState;
		default:
			return state;
	}
}


export default currentUser;