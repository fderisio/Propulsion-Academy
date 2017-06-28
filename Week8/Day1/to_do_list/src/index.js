import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import s from './components/Store';

ReactDOM.render(
	<Provider store = {s} >
		<Router>
			<Switch>
				<Route exact path="/home" component= { " Home" } />
				<Route exact path="/questions/order" component= { " App" } />
			</Switch> 
		</Router>,
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
