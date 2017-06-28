
const feed = (state=[], action) => {
	switch (action.type) {
		case 'setFeed':
			const newFeedState = [ ...action.feed ];
			console.log('feed state', newFeedState);
			return newFeedState;
		case 'addBlitz':
			const newBlitzsState = [ ...this.state ];
			newBlitzsState.push(action.blitz)
			console.log('blitzs state', newBlitzsState);
			return newBlitzsState;
		case 'likeBlitz':
			const likesState = [ ...this.state ];
			console.log(likesState)	
		case 'deleteBlitz':
			console.log(action.blitz._id)
			const deleteState = [ ...this.state ];
			// for (let i=0; i<deleteState.length; i++) {
			// 	if (action.blitz._id === deleteState[i]._id) {
			// 		deleteState.splice(i, 1);
			// 	}
			// }
			console.log('blitzs after delete', deleteState);
			return deleteState;
		default:
			return state;
	}
}

export default feed;