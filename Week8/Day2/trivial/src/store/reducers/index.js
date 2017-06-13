import question from './question';
import answers from './answers';
import results from './results';


import { combineReducers } from 'redux';

export default combineReducers({
  question,
  answers,
  results
})