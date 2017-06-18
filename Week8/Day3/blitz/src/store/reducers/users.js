const Users = (state=[], action) => {
	switch (action.type) {
		case 'setUsers':
			const newState = [ ...action.usersArray ];
			return newState;
		case 'addNewUser':
			const newUserState = [ ...this.state ];
			newUserState.push(action.newUser);
			return newUserState;
		default:
			return state;
	}
}


export default Users;