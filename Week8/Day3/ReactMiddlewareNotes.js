/* --- Middleware (Thunk) --- */

// - the objects can be functions, grab action and calls it
// - cuando creas el store hay que agregar el middleware 
// - can be more than one
// - only for actions as function
// - only purpose: call the action fn
// - si la accion no es una funcion, llamara al reducer, si lo es llamara a la funcion
// - hace que el componente solo dispatche la accion, la funcion en si debe estar programada dentro de las acciones
// - el componente no deberia calcular funciones, SOLO dispatchar acciones


// 1) Set up
import { createStore, applyMiddleware } from 'redux'; // check we also require `applyMiddleware`
import thunk from 'react-thunk'; // require the Middleware
import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk) // second parameter to `createStore`
);

// 2) create the action fn()
export const fetchQuestions = () => {
	// paste here the whole function that was in componentDidMount before
	// delete this.props.dispatch(action) 
	// write only: dispatch(action) --> porque es un parametro de la accion "fetchQuestions"
}

// 3) en App class
componentDidMount = () => {
	this.props.dispatch(fetchquestions)
}