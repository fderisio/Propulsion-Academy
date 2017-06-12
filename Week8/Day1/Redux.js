const INC = 'inc'; // convention to write types

const reducer = (state = 0, action) => {
	switch (action.type) {
		case INC:
			return state + action.amount;
		default:
			return state;
	}
}

const store = Redux.createStore(reducer);

const increment = {
	type: INC,
	amount: 1
}

function render() {
	const counterEl = document.getElementById('counter');
	const state = store.getState();
	counterEl.innerHTML = state; // .text()

render();

store.subscribe(render);

document.getElementById('increment').addEventListener('click', (e) => {
	.store.dispatch(increment);
})

// one store, different states



// all the information you need must be in the state
this.state: {
	todos: {
	1: {..., userId: 123},
	2: {...},
	3: {...}
	},
	filter: 'all'
};

// trivial app
this.state: {
	users: {
		1: {},
		2: {}
	},
	questions: {
		1: {},
		2: {},
		3: {}
	}
	answers: [{}]
}

// blackjack app
this.state: {
	players: {
		1: { name: 'John', cards: [{suite: 'heart', value: 2}] },
		2: { name: 'Susan', cards: [{suite: 'heart', value: 2}] },
	},
	dealer: {
		cards: [{}}
	}
	currentPlayer: {
		isDealer: false,
		player: 2,
	}
}

// Twitter state
this.state: {
	user: {
		1: { name: 'Julia', tweets: [1, 2, 10], following: true },
		2: { name: 'Mike', tweets: [1, 2, 10], following: false },
	},
	tweets: {
		1: {id, string, author, status: ['liked', 'retwitted']},
		2: {id, string, author, status: ['liked', 'retwitted']}
	}
}

// youtube
videos: {}
users: {}
comments: {}
