export const setCurrentUserCreator = (user) => {
	return {
	type: 'setUser',
	user
}
}

export const loginCreator = (email, password) => (dispatch, getState) => {
	const headers  = new Headers({ 'Content-Type': 'application/json' })
	const body = { email: email, password: password };

	// because fetch() needs a config
	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) }; 

	fetch('https://propulsion-blitz.herokuapp.com/api/login', config)
		.then(res => res.json())
		.then(user => {
			const action = setCurrentUserCreator(user);
			dispatch(action);
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})	
}


// --> para llamarlo: this.props.dispatch(this.props.ferchFeed())
export const fetchFeedCreator = () => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		Authorization: `Bearer ${currentUser.token}`
	});
	const config = { headers: headers };

	fetch('https://propulsion-blitz.herokuapp.com/api/feed', config)
		.then(res => res.json())
		.then(feed => {
			const action = setCurrentUserCreator(feed);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

// 	fetch(`${devUrl}/api/feed`, config)