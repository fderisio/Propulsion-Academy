import { combineReducers } from 'redux';
import currentUser from './currentuser';
import feedReducer from './feedReducer';
import users from './users';

export default combineReducers ({
	currentUser,
	feedReducer,
	users,
})
