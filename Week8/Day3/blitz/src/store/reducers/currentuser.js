const currentUser = (state={}, action) => {
	switch (action.type) {
		case 'setUser':
			const newState = { ...action.user };
			//console.log('user state', newState)
			return newState;
		case 'setFollows':
			const newFollow = { ...this.state };
			newFollow.following.push(action.user);
			return newFollow;
		case 'logOut':
			let logoutState = { ...state };
			localStorage.clear();
			logoutState = {};
			return logoutState;
		default:
			return state;
	}
}


export default currentUser;