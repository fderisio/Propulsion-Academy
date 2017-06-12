import React from 'react';
import logo from './logo.svg';
import './index.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '...'
		}
	}

	componentDidMount() { // build-in function / se llama cuando el state mount termina / si esta esto en una clase se llama
		//to fetch info from a API
		// porque el quote siempre viene en arrays
		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
			.then(res => res.json())
			.then(quotes => {
				this.setState({
					title: quotes[0], 
				});
			});
	}
	//otros built-in functions: componentAfterMount / componentWillReceiveXXXXX / etc.
	render() { 
		return (
			<div className="App-header">
          		<img src={logo} className="App-logo" alt="logo" /> 
          		<h2>{this.state.title}</h2>
          		<button onClick={()=>this.componentDidMount()}>Next Quote</button>
        	</div>	
		);
	}

	// render() comments:
	// no tiene que haber comentarios en el return
		/*<p>Hello World</p>*/
		// <p>{this.props.children}</p>
		// <h2>Welcome to React</h2>
		// {logo} escritura de javascript

}

export default Header;