import React from 'react';

class Filter extends React.Component {

	// // handleInput(e, v) { --> lleva a *
	// handleInput = (e) => { // quita el .bind(this) ---- ONLY in React!!!!!!
	// 	//console.log(e.currentTarget.value); // que tecla se presiono o se agrego al input
	// 	//this.state.inputValue = e.currentTarget.value;
	// 	this.setState({
	// 		inputValue: e.currentTarget.value // equivale a: this.state.inputValue
	// 	});
	// }

	checkedFilter = (e) => {
		this.props.setFilter(e.currentTarget.id);
	}

	render() {
		return ( 
			<div className='Filter'>
			<input type="radio" name="filter" id="all" onChange={this.checkedFilter}/><label htmlFor="all">All</label>
			<input type="radio" name="filter" id="pending" onChange={this.checkedFilter}/><label htmlFor="pending">Pending</label>
			<input type="radio" name="filter" id="completed" onChange={this.checkedFilter}/><label htmlFor="completed">Completed</label>
			</div>
		);
	}

}

export default Filter;
