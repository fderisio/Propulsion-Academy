function createGrid() {
	let columns = 5;
	let rows = 5;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			$("#container").append("<div class='cell' data-row=i, data-col=j></div>");
		}	
	}
	$('.cell').width(200/5);
	$('.cell').height(200/5);
}

// click function
const cells = $('.cell');
cells.on('click', function(e) {
	$(e.currentTarget).addClass('cell active');
	console.log('clicked');
});

//random colours
function randomizeGrid() {
	let colors = ["red", "blue", "green", "yellow"];
	$('.cell').each((index, element) => {
		let random = (Math.floor(Math.random()*4));
		$(element).css("background-color", colors[random]); // esto sirve si queremos cambiar una clase de color, creando un CSS con solo esta clase nueva
	})
}

$(document).on('keypress', function(e) {
	if (e.keyCode === 119) {

	}
	console.log(e.keyCode); // W = 119 A=97 D=100 S=115
});

setInterval(function() {
	randomizeGrid();
}, 1000);

$(document).ready(createGrid);