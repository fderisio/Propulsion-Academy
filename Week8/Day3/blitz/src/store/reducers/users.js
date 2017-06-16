const Users = (state=[], action) => {
	switch (action.type) {
		case 'setUsers':
			const newState = [ ...action.usersArray ];
			return newState;
		default:
			return state;
	}
}


export default Users;