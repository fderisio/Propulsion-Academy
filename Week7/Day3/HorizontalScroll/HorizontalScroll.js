const ready = () => {
	let scroll = 0;
	let result;
	$('#rightButton').on('click', () => {
		scroll = scroll + 94;
		console.log(scroll)
		if (scroll === 0) {
			scroll -= 94;
		}
		result = 'translateX(' + scroll + 'px)';
		$('.horizontal-scroll').css('transform', result);
	})
	$('#leftButton').on('click', () => {
		scroll = scroll - 94;
		console.log(scroll)
		if (scroll === -564) {
			scroll += 564;
		}
		result = 'translateX(' + scroll + 'px)';
		$('.horizontal-scroll').css('transform', result);
	})
}

$(ready);