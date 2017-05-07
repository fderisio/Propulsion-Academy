// creates a ball
function Ball() {
 	this.ballPosition = [150, 377]; // [x, y]
 	this.ballDirection = [1,-1]; // velocity [vx, vy]
 	this.ballRadius = 5;
 	this.score = 0;
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
Ball.prototype.move = function(height, width, paddle, blocks, score) {
	let ballX = this.ballPosition[0] + this.ballRadius;
	let ballY = this.ballPosition[1] + this.ballRadius;
	
	// collides borders
	// hits left border
	if (this.ballPosition[0] < 0 + this.ballRadius) this.ballDirection[0] *= -1; // 10 = canvas.width - ball.ballRadius
	// hits right border - x axis
	if (this.ballPosition[0] > 300 - this.ballRadius) this.ballDirection[0] *= -1; // eje de x
	// hits superior border eje de y
	if (this.ballPosition[1] < 0 + this.ballRadius) this.ballDirection[1] *= -1;
	
	// hits inferior border - eje de y (eventually gone)
	if (this.ballPosition[1] > 400 - this.ballRadius) this.ballDirection[1] *= -1;	

 	// collides paddle
	let paddleEnds = paddle.paddlePosition[0] + paddle.paddleWidth;
	let paddleX = paddle.paddlePosition[0];
	let paddleY = paddle.paddlePosition[1];
	
	if (ballX >= paddleX && ballX <= paddleEnds	&& ballY > paddleY) {
		// changes direction of the ball
		this.ballDirection[1] *= -1;
	}

	this.ballPosition[0] += this.ballDirection[0];
 	this.ballPosition[1] += this.ballDirection[1];

}


// Ball collides
Ball.prototype.collidesBlock = function(blocks, score, id) {
	// let ballX = this.ballPosition[0] + this.ballRadius;
	// let ballY = this.ballPosition[1] + this.ballRadius;
	let ballX = this.ballPosition[0];
	let ballY = this.ballPosition[1];
	let blocksToRemove = [];
	
	// collides bricks 
	for (let i=0; i < blocks.length; i++) {

		let blockEndsX = blocks[i].blockPosition[0] + blocks[i].blockWidth;
		let blockEndsY = blocks[i].blockPosition[1] + blocks[i].blockHeight;

		// collides lateral
		if (Math.abs(ballX - blocks[i].blockPosition[0]) < this.ballRadius && (ballY > blocks[i].blockPosition[1] && ballY < blockEndsY) ||
			Math.abs(ballX - blockEndsX) < this.ballRadius && (ballY > blocks[i].blockPosition[1] && ballY < blockEndsY) ||
			Math.abs(ballY - blocks[i].blockPosition[1]) < this.ballRadius && (ballX > blocks[i].blockPosition[0] && ballX < blockEndsX) ||
			Math.abs(ballY - blockEndsY) < this.ballRadius && (ballX > blocks[i].blockPosition[0] && ballX < blockEndsX) ||

			// collides diagonal
			Math.pow(ballX - blocks[i].blockPosition[0], 2) + Math.pow(ballY - blocks[i].blockPosition[1], 2) < Math.pow(this.ballRadius, 2) ||
			Math.pow(ballX - blocks[i].blockPosition[0], 2) + Math.pow(ballY - blockEndsY, 2) < Math.pow(this.ballRadius, 2) ||
			Math.pow(ballX - blockEndsX, 2) + Math.pow(ballY - blocks[i].blockPosition[1], 2) < Math.pow(this.ballRadius, 2) ||
			Math.pow(ballX - blockEndsX, 2) + Math.pow(ballY - blockEndsY, 2) < Math.pow(this.ballRadius, 2) ||

			// collides inside
			ballX >= blocks[i].blockPosition[0] &&
			ballX <= blockEndsX && ballY >= blocks[i].blockPosition[1] &&
			ballY <= blockEndsY) {

		 	this.ballDirection[1] *= -1;
		 	this.ballDirection[0] *= -1;
			this.score ++;
			blocks.splice(i, 1);
			//blocksToRemove.push(blocks[i]);
		}
	}
	console.log(blocks.length);
	this.ballPosition[0] += this.ballDirection[0];
 	this.ballPosition[1] += this.ballDirection[1];

 	// game over
	if (blocks.lenght === 0) {
		alert('Game Over - You Won');
		clearInterval(id);
	}

}
