export const setCurrentUserCreator = (user) => {
	return {
		type: 'setUser',
		user
	}
}
export const setFeed = (feed) => {
	return {
		type: 'setFeed',
		feed
	}
}
export const logOutUser = () => {
	return {
		type: 'logOut'
	}
}

// POST request
export const login = (email, password) => (dispatch, getState) => {
	const headers  = new Headers({ 'Content-Type': 'application/json' })
	const body = { email: email, password: password };

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) }; 

	return fetch('https://propulsion-blitz.herokuapp.com/api/login', config)
		.then(res => res.json())
		.then(user => {
			console.log(user)
			if (!user._id) {
				return 'not found';
			} else {
				const action = setCurrentUserCreator(user);
				dispatch(action);
				localStorage.setItem('token', user.token);
				localStorage.setItem('username', user.username);
				localStorage.setItem('avatar', user.avatar);
				return 'user found';
			}
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

export const fetchLocalUser = () => (dispatch) => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    dispatch(setCurrentUserCreator(user)); // dispatching an action to save it to Redux Store
  }
}

// GET --> para llamarlo: this.props.dispatch(this.props.fetchFeed())
export const fetchFeed = () => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		Authorization: `Bearer ${currentUser.token}`
	});
	const config = { headers: headers };

	fetch('https://propulsion-blitz.herokuapp.com/api/feed', config)
		.then(res => res.json())
		.then(feed => {
			const action = setFeed(feed);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

// GET --> para llamarlo: this.props.dispatch(this.props.fetchFeed())
export const fetchProfile = () => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		Authorization: `Bearer ${currentUser.token}`
	});
	const config = { headers: headers };

	fetch('https://propulsion-blitz.herokuapp.com/api/me', config)
		.then(res => res.json())
		.then(profile => {
			const action = setCurrentUserCreator(profile);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}