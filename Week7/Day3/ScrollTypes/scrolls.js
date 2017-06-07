const ready = () => {
	// slider
	//let scrollInit = parseInt($('.wrapper').css('width').replace(/[px]/g, ""));
	let scrollSlider = 0;
	let count = 2;
	$('#slider-left').on('click', () => {
		scrollSlider += 1041;
		console.log(scroll)
		count++;
		if (scrollSlider > 2040) {
			scrollSlider = scrollSlider;
		}
		result = 'translateX(' + scrollSlider + 'px)';
		//$('.horizontal-scroll').css('transform', 'translateX(200px');
		$('.slider-scroll').css('transform', result);
	})
	$('#slider-right').on('click', () => {
		scrollSlider -= 1041;
		count++;
		console.log(scroll)
		if (scrollSlider === -1564) {
			scrollSlider += 564;
		}
		result = 'translateX(' + scrollSlider + 'px)';
		$('.slider-scroll').css('transform', result);
	})

	// horizontal scroll
	let scroll = 0;
	//scroll = parseInt($('.wrapper').css('width').replace(/[px]/g, ""));
	console.log(scroll)
	let result;
	$('#leftButton').on('click', () => {
		scroll += 290;
		console.log(scroll)
		if (scroll > 0) {
			scroll = 0;
		}
		result = 'translateX(' + scroll + 'px)';
		$('.horizontal-scroll').css('transform', result);
	})
	$('#rightButton').on('click', () => {
		scroll = scroll - 260;
		console.log(scroll)
		if (scroll < -1300) {
			scroll = 0;
		}
		result = 'translateX(' + scroll + 'px)';
		$('.horizontal-scroll').css('transform', result);
	})
}

$(ready);