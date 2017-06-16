import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // es un componente
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import Login from './Routes/Login';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import Likes from './Routes/Likes';
import Users from './Routes/Users';
import { setCurrentUserCreator } from './store/actions';

import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// get token of current session
const checkLocalUser = () => {
	const token = localStorage.getItem('token'); // variable as its in the fetch function
	const userName = localStorage.getItem('username'); // variable as its in the fetch function
	const avatar = localStorage.getItem('avatar'); // variable as its in the fetch function
	const user = {
		token: token,
		username: userName,
		avatar: avatar,
	};
	store.dispatch(setCurrentUserCreator(user)); // guarda el token en el redux state - from the index.js manda la info del user a todas las pages
}
checkLocalUser();

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
	<Provider store={ store }>
		<Router>
			<Switch>
				<Route exact path="/" component={ Login } />
				<Route exact path="/feed" component={ Home } />
				<Route exact path="/users/:userId" component={ Profile } />
				<Route exact path="/likes" component={ Likes } />
				<Route exact path="/users" component={ Users } />
			</Switch>
		</Router>
	</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);

registerServiceWorker();

// withRouter