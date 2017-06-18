export const setCurrentUserCreator = (user) => {
	return { type: 'setUser', user }
}
export const setFeed = (feed) => {
	return { type: 'setFeed', feed } 
}
export const setFollows = (user) => {
	return { type: 'setFollows', user }
}
export const setUsers = (usersArray) => {
	return { type: 'setUsers', usersArray }
}
export const addBlitz = (blitz) => {
	return { type: 'addBlitz',	blitz }
}
export const likeBlitz = (blitz) => {
	return { type: 'likeBlitz',	blitz }
}
export const eliminateBlitz = (blitz) => {
	return { type: 'deleteBlitz', blitz }
}
export const newUser = (user) => {
	return { type: 'addNewUser', user }
}
export const logOutUser = () => {
	return { type: 'logOut' }
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

export const fetchUsers = () => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		Authorization: `Bearer ${currentUser.token}`
	});
	const config = { headers: headers };

	fetch('https://propulsion-blitz.herokuapp.com/api/users', config)
		.then(res => res.json())
		.then(users => {
			const action = setUsers(users);
			dispatch(action);
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

export const postBlitz = (content) => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.token}`
	})
	const body = { content: content };

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) }; 

	fetch('https://propulsion-blitz.herokuapp.com/api/blitzs', config)
		.then(res => res.json())
		.then(blitzs => {
			console.log('blitzs', blitzs)
			// const action = addBlitz(blitzs);
			// dispatch(action);
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

export const fetchLikes = (blitz) => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.token}`
	})
	const body = { blitz: blitz };

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) }; 

	fetch('https://propulsion-blitz.herokuapp.com/api/blitzs/:blitzId/like', config)
		.then(res => res.json())
		.then(likes => {
			console.log('likes', likes)
			// const action = likeBlitz(likes);
			// dispatch(action);
			
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

export const deleteBlitz = (blitz) => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.token}`
	})
	const body = { blitz: blitz };

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'DELETE', 
		body: JSON.stringify(body) }; 

	fetch('https://propulsion-blitz.herokuapp.com/api/blitzs', config)
		.then(res => res.json())
		.then(blitzs => {
			console.log('blitzs', blitzs)
			// const action = eliminateBlitz(blitzs);
			// dispatch(action);
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}