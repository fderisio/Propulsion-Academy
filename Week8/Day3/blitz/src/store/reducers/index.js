import { combineReducers } from 'redux';

import currentUser from './currentuser';
import feed from './feedReducer';

export default combineReducers ({
	currentUser,
	feed,
})
