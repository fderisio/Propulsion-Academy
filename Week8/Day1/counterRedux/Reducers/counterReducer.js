const INC = 'inc'; // convention to write types
const REDU = 'redu';

const counterReduce = (state = 0, action) => {
	switch (action.type) {
		case INC:
			return state + action.amount;
		case REDU:
			return state - action.amount;
		default:
			return state;
	}
};	