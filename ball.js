// creates a ball
function Ball() {
 	this.ballPosition = [150, 377]; // [x, y]
 	this.ballDirection = [1,-1];
 	this.ballRadius = 5;
}

// Ball render
Ball.prototype.render = function(ctx) {
	// Ball Fill
	ctx.beginPath();
	ctx.fillStyle = 'white'; //'#fff'; // 'silver';
	// arc(x, y, ballRadius, startAngle, endAngle, anticlockwise); 
	ctx.arc(this.ballPosition[0], this.ballPosition[1], this.ballRadius, 0, 2 * Math.PI, false); 
	ctx.fill();
}

// Ball moves
Ball.prototype.move = function(height, width) {

	// hits left border
	if (this.ballPosition[0] < 0 + this.ballRadius) this.ballDirection[0] = 1; // 10 = canvas.width - ball.ballRadius
	// hits right border eje de x
	if (this.ballPosition[0] > 300 - this.ballRadius) this.ballDirection[0] = -1; // eje de x
	// hits superior border eje de y
	if (this.ballPosition[1] < 0 + this.ballRadius) this.ballDirection[1] = 1;
	
	// hits inferior border - eje de y (eventually gone)
	if (this.ballPosition[1] > 400 - this.ballRadius) this.ballDirection[1] = -1;	

	this.ballPosition[0] += this.ballDirection[0];
 	this.ballPosition[1] += this.ballDirection[1];

 	// game over
 	// if (this.ballPosition[1] > 600) {
 	// 	alert('Game Over');
 	//	lifeCounter --;	
 	// 	document.location.reload();
 	// }
}

Ball.prototype.collidesPaddle = function(paddleX, paddleWidth, paddleY) {
	let ballX = this.ballPosition[0] + this.ballRadius;
	let ballY = this.ballPosition[1] + this.ballRadius;
	let paddleEnds = paddleX + paddleWidth;
	if (ballX >= paddleX && ballX <= paddleEnds	&& ballY > paddleY) {
		this.ballDirection[1] = -1;
		this.ballPosition[1] += this.ballDirection[1];
	}
}

Ball.prototype.collidesBrick = function(/*blockX, blockWidth, blockHeight,*/ blocksList) {
	let ballX = this.ballPosition[0] + this.ballRadius;
	let ballY = this.ballPosition[1] + this.ballRadius;

	// hard code
	if (ballX >= 30 && ballX < 270 && ballY < 114) {
		this.ballDirection[1] = 1;
		this.ballPosition[1] += this.ballDirection[1];
	}

	for (let i = 0; i < blocksList.length; i++) {
		let brick = blocksList[i].blockColRow;
		
	}

	// for (let i = 0; i < blocksList.length; i++) {
	// 	let brick = blocksList[i];
	// 	console.log(brick);

	// 	let brickEnds = blockX + blockWidth;
	//  	if (ballX >= blockX && ballX <= brickEnds) {
	// 		this.ballDirection[1] = -1;
	// 		this.ballPosition[1] += this.ballDirection[1];
	// 	}
	// }

	// for (let i = 0; i < blocksList; i++) {
	// 	let brickEnds = blockX[i] + blockWidth[i];
	//  	if (ballX >= blockX && ballX <= brickEnds) {
	// 		this.ballDirection[1] = 1;
	// 		this.ballPosition[1] += this.ballDirection[1];
	// 	}
	// }
	
}