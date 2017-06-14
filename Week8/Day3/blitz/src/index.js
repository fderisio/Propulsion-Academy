import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';


import Login from './Routes/Login';
import Home from './Routes/Home';
import Profile from './Routes/Profile';
import Likes from './Routes/Likes';
import Users from './Routes/Users';

import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

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
