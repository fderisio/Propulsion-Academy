/* --- Authentication and Authorization in React --- */

// - without log-in no access to the info
// - header: metainformation about the request
// - everytime you dispatch an action, all the reducers son llamados, por eso siempre hay un default case (en caso que ese reducer no se llame)
// - 

// 1) Get the token
// via login mask  --> POST con values: Email + Password 
// from API: gets the user´s info, para guardarlo en el reader´s state

// 2) Header
// - Authorization passed
// - the token mus be added to the header --> Barer + some alphanumeric code (the token session) --> Bearer <token>
// - the token session will be stored in the state

// 3) logIn Class
import { connect } from 'redux';

constructor(props) {
	this.state = {
		email = '',
		password = ''
	}
}

handleEmail = (e) => {
	this.setState({ e.currentTarget.value });
}
handlePassword = (e) => {
	this.setState({ e.currentTarget.value });
}
login = (e) => {
	e.preventDefault();
	const loginAction = loginCreator(this.state.email, this.state.password); // una accion-funcion que llama a una funcion
	this.props.dispatch(loginAction)
	this.setState({ // vuelve los campos en blanco
		email = '',
		password = ''
	})
}

render() {
	return (
		<form>
		<input type="text" placeHolder="E-mail" onChange= {this.handleEmail} value={this.props.email}/>
		<input type="password" placeHolder="Password" onChange= {this.handlePassword} value={this.props.password}/>
		<input type="submit" value="Login" onClick={ this.login }/>
		</form>
	)
}

// 4) create a new reducer: currentUser para guardar el fetch
const currentUser = (state={}, action) => { // para acceder --> this.props.currentUser
	return state;
}

// 5) crear el useractionCreator
export const setCurrentUserCreator = (user) => {
	type: 'setCurrentUser',
	user
}


// 6) create the login action that return another function
export const loginCreator = (email, password) => (dispatch, getState) => {
	const headers  = new Headers({ 'Content-Type': 'application/json' })
	const body = { email: email, password: password };

	// because fetch() exige una config
	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) }; 

	fetch('URL', config)
		.then(res => res.json())
		.then(user => {
			const action = setCurrentUserCreator(user);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

// es lo mismo que:
// export const loginCreator = () => {
// 	return () => {
// 	}
// }

// 7) create fetch users info action (solo twitts)
export const fetchFeed = () => (dispatch, getState.currentUser()) { // --> para llamarlo: this.props.dispatch(this.props.ferchFeed())
	const headers  = new Headers({ 
		Authorization: 'Bearer ${currentUser.token}'
	});
	const config = { headers: headers };

	fetch('URL/feed', config)
		.then(res => res.json())
		.then(feed => {
			const action = setCurrentUserCreator(feed);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}
