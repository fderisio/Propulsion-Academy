import { combineReducers } from 'redux';

import currentUser from './currentuser';
import feed from './feedReducer';
import users from './users';

export default combineReducers ({
	currentUser,
	feed,
	users,

})
