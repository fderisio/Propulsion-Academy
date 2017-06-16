import { combineReducers } from 'redux';

import currentUser from './currentuser';
import feed from './feedReducer';
import users from './users';
import following from './following';

export default combineReducers ({
	currentUser,
	feed,
	following,
	users,

})
