const ready = () => {
	$('#go-left').on('click', () => {
		$('.horizontal-scroll').css('transform', 'translateX(200px)');
	})
}

$(ready);