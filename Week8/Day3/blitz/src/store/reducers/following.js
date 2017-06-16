const following = (state=[], action) => {
	switch (action.type) {
		case 'setFollows':
			const newState = [ ...action.followsArray ];
			return newState;
		default:
			return state;
	}
}


export default following;