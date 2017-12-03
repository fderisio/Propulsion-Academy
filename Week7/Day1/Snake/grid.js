function createGrid() {
	let columns = 15;
	let rows = 15;
	let snake = [];
	for (let i = 1; i <= columns; i++) {
		for (let j = 1; j <= rows; j++) {
			let cell = $("<div class='cell'></div>")
			cell.data("row", i);
			cell.data("column", j);
			$("#container").append(cell);
			console.log($(".cell").data("row"));
		}	
	}

	// cell width and height size
	$('.cell').width((480/9) * 0.26);
	$('.cell').height((480/9) * 0.26);

	// snake
	const cells = $('.cell');
	//	$('.cell').data('row', 5).addClass('snake');
	//$('.activ').attr('class', 'snake');
	// snake[0] = $('.cell').attr('data-row', 2);
	// snake[1] = $('.cell').attr('data-row', 3);
	// snake[2] = $('.cell').attr('data-row', 24;


	// build snake [row, column]
	snake[0] = [3, 4];
	snake[1] = [3, 5];
	snake[2] = [3, 6];

	// render snake
	snake.forEach((snakepart, index) => {
		// console.log('snakepart', snakepart)
		$('.cell').each((index, element) => {
			if ($(element).data("row") == snakepart[0] && $(element).data("column") == snakepart[1]) {
				$(element).attr('class', 'cell snake');
			} 
		})
	})
	//console.log('column', $('.snake').data("column"));
}


$(document).on('keypress', function(e) {
	// let rowPos = $('.snake').data("row");
	// let colPos = $('.snake').data("column");
	// console.log(e.which);
	// console.log('colPos', colPos)
	let rowPos = 3;
	let colPos = 6;
	if (e.keyCode === 119) { // W (up)
		rowPos -= 1;
		console.log('hola')
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
	// if (e.keyCode === 113) { // Q (diagonal up left)
	// 	rowPos -= 1;
	// 	colPos -= 1;
	// }
	// if (e.keyCode === 101) { // E (diagonal up right)
	// 	rowPos -= 1;
	// 	colPos += 1;
	// }
	// if (e.keyCode === 121) { // Y (diagonal down left)
	// 	rowPos += 1;
	// 	colPos -= 1;
	// }
	// if (e.keyCode === 99) { // C (diagonal down right)
	// 	rowPos += 1;
	// 	colPos += 1;
	// }
	//console.log(e.keyCode);
	move(rowPos, colPos);
});

function move(rowPos, colPos) {
	let snakeParts = 3;

	$('.cell').each((index, element) => {
			if ($(element).data("row") == rowPos && $(element).data("column") == colPos) {
				//$('.snake').attr('class', 'cell nonActive');
				$(element).attr('class', 'cell snake');
			} else if ((rowPos < 1) || (rowPos > 5) || (colPos < 1) || (colPos > 5)) {
				rowPos += 1;
				rowPos -= 1;
				colPos += 1;
				colPos -= 1;
			}
	})
}


$(document).ready(createGrid);