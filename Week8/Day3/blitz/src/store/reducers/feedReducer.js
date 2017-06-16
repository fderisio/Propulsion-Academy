const feed = (state=[], action) => {
	switch (action.type) {
		case 'setFeed':
			const newFeedState = [ ...action.feed ];
			console.log('feed state', newFeedState);
			return newFeedState;
		case 'addBlitz':
			const newBlitzsState =[ ...this.state ];
			newBlitzsState.push(action.blitz)
			console.log('blitzs state', newBlitzsState);
			return newBlitzsState;
		default:
			return state;
	}
}

export default feed;