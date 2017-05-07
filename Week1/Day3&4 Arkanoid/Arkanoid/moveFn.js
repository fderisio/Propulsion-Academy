// Ball moves
Ball.prototype.move = function(height, width) {

	// hits left border
	if (this.ballPosition[0] < 0 + this.ballRadius) this.ballDirection[0] = 1; // 10 = canvas.width - ball.ballRadius
	// hits right border - x axis
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

let collidedBlocks = [];

Ball.prototype.collidesBrick = function(block, blocksList, score) { /*block, blockX, blockWidth, blockHeight, blockY*/ 
	let ballX = this.ballPosition[0] + this.ballRadius;
	let ballY = this.ballPosition[1] + this.ballRadius;

	let blockEndsX = block.blockPosition[0] + block.blockWidth;
	let blockYRight = blockEndsX - block.blockHeight;
	let blockEndsY = block.blockPosition[1] + block.blockHeight;
	let blocksToRemove = [];
	// hits inferior border of a brick
	if (ballX > block.blockPosition[0] && ballX < blockEndsX && ballY < blockEndsY) {		
		// chages direction of the ball
		this.ballDirection[1] = 1;
		this.ballPosition[1] += this.ballDirection[1];
		this.score ++;
		//collidedBlocks = blocksList.splice(block.index, 1);
		//collidedBlocks = blocksList.slice(block.index);
		blocksToRemove.push(block);
	}

	 //Remove the blocks
  if (blocksToRemove.length > 0){
    for (let i = 0; i < blocksToRemove.length; i++) {
      blocksList.splice(blocksToRemove[i], 1);
    }
  }
	// // hits superior border
	// if (ballY > block.blockPosition[0] && ballY < blockEndsX && ballX < blockEndsY) {		
	// 	console.log('hola')
	// 	// chages direction of the ball
	// 	this.ballDirection[1] = -1;
	// 	this.ballPosition[1] += this.ballDirection[1];
	// 	//collidedBlocks = blocksList.slice(block.index);
	// 	collidedBlocks = blocksList.splice(block.index, 1);
	// 	score = score + 1;
	// 	//console.log(score);
	// 	// console.log(collidedBlocks);
	// }

	// // hits right border
	// if (ballX < block.blockPosition[1] && ballX > blockEndsY && ballY < blockEndsX) {
	// 	score++;
	// 	this.ballDirection[1] = 1;
	// 	this.ballPosition[1] += this.ballDirection[1];
	// 	//collidedBlocks = blocksList.slice(block.index);
	// 	collidedBlocks = blocksList.splice(block.index, 1);
	// 	score = score + 1;
	// 	console.log(score);
	// }
	
	// // hits left border
	// if (ballX < block.blockPosition[1] && ballX > blockEndsY && ballY > blockEndsX) {
	// 	score++;
	// 	this.ballDirection[1] = 1;
	// 	this.ballPosition[1] += this.ballDirection[1];
	// 	//collidedBlocks = blocksList.splice(block.index, 1);
	// 	score = score + 1;
	// 	//console.log(score);
	// }

	if (blocksList.lenght === 0) {
		alert('Game Over - You Won');
		clearInterval();

	}
}


	// if (ballX >= block.blockPosition[0] && ballX <= blockEndsX 
	// 	&& ballY > block.blockPosition[1] +  && ballY < blockEndsY) {

// Ball.prototype.collidesBrick = function(block, blockX, blockWidth, blockHeight, blockY) {
// 	let ballX = this.ballPosition[0] + this.ballRadius;
// 	let ballY = this.ballPosition[1] + this.ballRadius;

// 	// // hard code
// 	// if (ballX >= 30 && ballX < 270 && ballY < 114) {
// 	// 	this.ballDirection[1] = 1;
// 	// 	this.ballPosition[1] += this.ballDirection[1];
// 	// }
// 	let blockEndsX = blockX + blockWidth;
// 	let blockYRight = (blockX + blockWidth) - blockHeight;
// 	let blockEndsY = blockY + blockHeight;
// 	let collidedBlock;
// 	let collidedBlocks = [];

// 	// hits inferior border of a brick
// 	if (ballX >= blockX && ballX <= blockEndsX && ballY > blockY && ballY < blockEndsY) {
// 		collidedBlock = block;
// 		// chages direction of the ball
// 		this.ballDirection[1] = 1;
// 		this.ballPosition[1] += this.ballDirection[1];

// 		//collidedBlocks();
// 	}

// 	// hits left border of a brick
// 	if (ballY > blockY && ballY < blockEndsY) {
// 		this.ballDirection[1] = 1;
// 		this.ballPosition[1] += this.ballDirection[1];
// 	}

// 	// function collidedBlocks() {
// 	// 	if (collidedBlock) {
// 	// 		collidedBlocks.push(block);
// 	// 	}
// 	// }

// 	// function paintBlack() {
// 	// 	this.block.renderCollidedBlock().bind(this);
// 	// }

// 	// // hits superior border of a brick
// 	// if (ballX > blockX && ballX < blockEnds &&
// 	// ballY < blockYLeft) {
// 	// 	this.ballDirection[1] = 1;
// 	// 	this.ballPosition[1] += this.ballDirection[1];
// 	// }
// 	// // hits right border of a brick
// 	// if (ballY < blockYRight && ballY > blockEnds) {
// 	// 	this.ballDirection[1] = -1;
// 	// 	this.ballPosition[1] += this.ballDirection[1];
// 	// }
// 	// hits left border of a brick
// 	// if (ballY > blockYRight && ballY < blockYLeft) {
// 	// 	this.ballDirection[1] = -1;
// 	// 	this.ballPosition[1] += this.ballDirection[1];
// 	// }
	
// }