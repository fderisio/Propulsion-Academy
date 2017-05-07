// ARGUMENTS creates a list of arguments

function yell() {
	console.log(arguments); // Hola Chau
	console.log([].slice); // [Function slice]
	var args = [].slice.call(arguments, 0);
	console.log(args);
}

yell('Hola', 'Chau');



// CLOSURE: function that returns a function

function createService() {
	var secretKey = 'hulala';
	function service() {
		console.log(secretKey + 'is secret');
	}
	return service;
}

var ser = createService();
ser(); // 

function createBall() {
	var speed = [4,4];


	var Ball = function() {
		this.position = [1, 1];
	}

	Ball.prototype.accelerate = function() {
		speed[0] += 1;
		spped[1] += 1;
	}

	Ball.prototype.move = function() {
		this.position[0] += 4;
		this.position[1] += 4;
	}
}

createBall();


// KEYS PRESSED
function oneKeyPressed(e) {
	console.log(e.key);
	if (e.key === 'a') {
		console.log('left');
	} else if (e.key === 'd') {
		console.log('right');
	}
}

document.addEventListener('keypress', oneKeyPress);

// //								this is the listener			
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// document.addEventListener('keydown', function(event) {
//   console.log('you pressed a key!');
// });
