let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//paddle1
	let paddle1keys = ['d', 'a'];
	let padde1Position = [8, 180];

//paddle2
	let paddle2keys = ['right', 'left'];
	let padde1Position = [435, 180];
	
function drawBackground() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// writes players
	ctx.fillStyle = 'white';
	ctx.font = "10px Arial";
	// for (var i = 0; i < players.length; i++) {
	// 	ctx.fillText('Player ' + (i+1) + ': ' + players[i].name, 120 + i*120, 10); //(text, x, y [, maxWidth]);
	// 	ctx.fillText('Lifes: ' + players[i].lifes, 120 + i*120, 30);
	// }
	// draws line
	ctx.beginPath();
	ctx.strokeStyle = 'white';
	ctx.moveTo(220, 0); // (x, y)
	ctx.lineTo(220, 400); // [x, y]
	ctx.stroke();
}

function drawPaddles() {
	let paddleWidth = 8;
	let paddleHeight = 55;
	// Paddle 1

	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.fillRect(paddle1Position[0], paddle1Position[1], paddleWidth, paddleHeight); //fillrect(x, y, paddleWidth, height);
	ctx.fill();

	// Paddle 2

	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.fillRect(paddle2Position[0], paddle2Position[1], paddleWidth, paddleHeight); //fillrect(x, y, paddleWidth, height);
	ctx.fill();

		// Keys pressed
	let rightPressed1;
	let leftPressed1;
	let rightPressed2;
	let leftPressed2;
	let pause;

	document.addEventListener('keydown', function(event) {
		 if (event.keyCode === 39) {
			rightPressed1 = true;
		} else if (event.keyCode === 37) {
			leftPressed1 = true;
		}

		 if (event.keyCode === 68) {
			rightPressed2 = true;
		} else if (event.keyCode === 65) {
			leftPressed2 = true;
		}

		if (event.keyCode === 32) {
			pause = true;
		}
	});

	document.addEventListener('keyup', function(event) {
			if (event.keyCode === 39) { // d = 68 right = 39
			rightPressed1 = false;
		} else if (event.keyCode === 37) { // a = 65 left = 37
			leftPressed1 = false;
		}

			if (event.keyCode === 68) { // d = 68 right = 39
			rightPressed2 = false;
		} else if (event.keyCode === 65) { // a = 65 left = 37
			leftPressed2 = false;
		}

		if (event.keyCode === 32) {
			pause = false;
		}
	});

	function movePaddles() {
		let paddle1Key = paddle1keys[0];
		let paddle2Key = paddle2keys[0];

		// checks key player 1
		if (paddle1Key == 'd') {
			// moves paddle
			if (rightPressed2 && paddle1Position[1] < 400 - paddleHeight) {
				paddle1Position[1] += 4;
			} else if (leftPressed2 && paddle1Position[1] > 0) {
				paddle1Position[1] -= 4;
			}
		}
		
		// checks keys player 2
		if (paddle2Key == 'right') {
			// moves paddle
			if (rightPressed1 && paddle2Position[1] < 400 - paddleHeight) {
			paddle2Position[1] += 4;
			} else if (leftPressed1 && paddle2Position[1] > 0) {
			paddle2Position[1] -= 4;
			}
		}
	}
	movePaddles();
}

function drawBall() {
	let ballDirection = [1,-1]; // velocity [x, y]
	let ballPosition = [22, 209];
	let ballRadius = 6

	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.arc(ballPosition[0], ballPosition[1], ballRadius, 0, 2 * Math.PI, false); 
	ctx.fill();
	move();
	
	function move() {
		if (ballPosition[1] < 0 + ballRadius) ballDirection[1] = 1;
		// hits inferior border - y axis 
		if (ballPosition[1] > canvas.height - ballRadius) ballDirection[1] = -1;	

		ballPosition[0] += ballDirection[0];
 		ballPosition[1] += ballDirection[1];
	}

}


function play() {
	var id = setInterval(function() {
		drawBackground();
		drawPaddles();
		drawBall();
	}, 5);
}

play();

