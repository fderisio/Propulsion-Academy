import todos from './toDosReducer';
import counter from './counterReducer';

export default React.combineReducers({
  todos,
  counter
})