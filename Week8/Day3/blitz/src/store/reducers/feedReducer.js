const feed = (state=[], action) => {
	switch (action.type) {
		case 'setFeed':
			const newFeedState = [ ...action.feed ];
			console.log('feed state', newFeedState);
			return newFeedState;
		default:
			return state;
	}
}

export default feed;