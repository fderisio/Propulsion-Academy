import React from 'react';

class Filter extends React.Component {

	checkedFilter = (e) => {
		e.preventDefault()
		this.setState({ checkedValue: true})
		this.props.setFilter(e.currentTarget.id);
	}

	render() {
		return ( 
			<div className='Filter'>
				<label>
					<input type="radio" name="filter" id="all" onChange={this.checkedFilter} />
					All
				</label>
				<label>
					<input type="radio" name="filter" id="pending" onChange={this.checkedFilter} />
					Pending
				</label>
				<label>
					<input type="radio" name="filter" id="completed" onChange={this.checkedFilter} />
					Completed
				</label>
			</div>
		);
	}

}

export default Filter;