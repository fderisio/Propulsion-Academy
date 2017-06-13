import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Result from './components/Result';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route exact path="/questions/:order" component={ App } />
				<Route exact path="/result" component={ Result } />
			</Switch> 
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
