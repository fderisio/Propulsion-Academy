function createGrid() {
	
	// draw grid 5x5
	let columns = 5;
	let rows = 5;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= columns; j++) {
			let cell = $("<div class='cell'></div>")
			cell.data("row", i);
			cell.data("column", j);
			$("#container").append(cell);
			//console.log($(".cell").data("row"));
		}	
	}
	$('.cell').width(200/5);
	$('.cell').height(200/5);

	// click function
	const cells = $('.cell');
	cells.on('click', function(e) {
		//$('.clicked').attr('class', 'cell nonActive');
		$(e.currentTarget).addClass('clicked');
		// console.log('row' + rowPos + ' col' + colPos);
	});
}


$(document).on('keypress', function(e) {
	let rowPos = $('.clicked').data("row");
	let colPos = $('.clicked').data("column");
	
	if (e.keyCode === 119) { // W (up)
		rowPos -= 1;
	}
	if (e.keyCode === 115) { // S (down)
		rowPos += 1;
	}
	if (e.keyCode === 97) { // A (left)
		colPos -= 1;
	}
	if (e.keyCode === 100) { // D (right)
		colPos += 1;
	}
	if (e.keyCode === 113) { // Q (diagonal up left)
		rowPos -= 1;
		colPos -= 1;
	}
	if (e.keyCode === 101) { // E (diagonal up right)
		rowPos -= 1;
		colPos += 1;
	}
	if (e.keyCode === 121) { // Y (diagonal down left)
		rowPos += 1;
		colPos -= 1;
	}
	if (e.keyCode === 99) { // C (diagonal down right)
		rowPos += 1;
		colPos += 1;
	}
	//console.log(e.keyCode);
	move(rowPos, colPos);
});

function move(rowPos, colPos) {
	$('.cell').each((index, element) => {
			if ($(element).data("row") == rowPos && $(element).data("column") == colPos) {
				$('.clicked').attr('class', 'cell nonActive');
				$(element).attr('class', 'cell clicked');
			} else if ((rowPos < 1) || (rowPos > 5) || (colPos < 1) || (colPos > 5)) {
				rowPos += 1;
				rowPos -= 1;
				colPos += 1;
				colPos -= 1;
			}
	})
}


$(document).ready(createGrid);