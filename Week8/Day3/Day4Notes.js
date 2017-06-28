// 1) pasar a la siguiente pagina si la login action funciona
login = (e) => {
    e.preventDefault();
    const loginAction = loginCreator(this.state.email, this.state.password);
    this.props.dispatch(loginAction)
      .then(() => {
        console.log('finished')
        this.props.history.push('/feed');
      });
  }

/* -- Token Info Kept -- */
  // localStorage: solo retiene la info de un especifico URL
  localStorage.clear();
  localStorage.setItem('myToken', 'secretToken'); // 
  localStorage.getItem('myToken');
  

// 2) guardar el token para mantener la sesion - index.js
const checkLocalUser = () => {
	const token = localStorage.getItem('token'); // variable as its in the fetch function
	const user = {
		token: token,
	};
	store.dispatch(setCurrentUser(user)); // guarda el token en el store - from the index.js manda la info del user a todas las pages
}

checkLocalUser();


/* --- Middleware personalizado --- */
// - para filtrar comentarios ofensivos por ejemplo
// - aparte de usar thunk
// - se llama con cada action que dispatchea

// 1) Crear: store/middleware.js
const loginMiddleware = (store) => (next) => (action) => { // store=gives access to the state / next= paracontinuar con la cadena de acciones
	return next(action);
}
export default loginMiddleware;
// (store) = ({ dispatch, getState })

// 2) En store.js
const store = createStore(
	reducers,
	applyMiddleware(loginMiddleware, thunk)
);
export default store;

