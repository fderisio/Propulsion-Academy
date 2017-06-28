// creates a ball
function Ball() {
 	this.ballPosition = [22, 209]; // [x, y]
 	this.ballDirection = [1,-1]; // [x, y]
 	this.ballRadius = 6;
}


// Ball render
Ball.prototype.render = function(ctx) {
	// Ball Fill
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.arc(this.ballPosition[0], this.ballPosition[1], this.ballRadius, 0, 2 * Math.PI, false); 
	ctx.fill();
}


// Ball moves
Ball.prototype.move = function(height) {
	// hits superior border - y axis
	if (this.ballPosition[1] < 0 + this.ballRadius) this.ballDirection[1] = 1;
	// hits inferior border - y axis 
	if (this.ballPosition[1] > height - this.ballRadius) this.ballDirection[1] = -1;	

	this.ballPosition[0] += this.ballDirection[0];
 	this.ballPosition[1] += this.ballDirection[1];
}


// Collitions
Ball.prototype.collidesPaddle = function(player) /*paddleX, paddleWidth, paddleY, paddleHeight, player)*/ {
	let paddleEnds = player.paddlePosition[1] + player.paddleHeight;

	// collides paddle player 1
	if (player.player === 1) {
		let ballX = this.ballPosition[0] - this.ballRadius;
		let ballY = this.ballPosition[1] + this.ballRadius;
		
		if (ballY >= player.paddlePosition[1] && ballY <= paddleEnds	&& ballX <= (player.paddlePosition[0] + player.paddleWidth)) {
			this.ballDirection[0] = 1;
			this.ballPosition[0] += this.ballDirection[0];
			return;
		}
	}

	// collides paddle palyer 2
	if (player.player === 2) {
		let ballX = this.ballPosition[0] + this.ballRadius;
		let ballY = this.ballPosition[1] + this.ballRadius;

		if (ballY >= player.paddlePosition[1] && ballY <= paddleEnds	&& ballX >= player.paddlePosition[0]) {
			this.ballDirection[0] = -1;
			this.ballPosition[0] += this.ballDirection[0];
			return;
		}
	}
}


// Scores
Ball.prototype.scoring = function(player, id) {
	let gamePaused = false;

	// PLAYER 2 scores
	if (player.lifes > 0 && player.player === 2 && this.ballPosition[0] > 450 - this.ballRadius) {
		player.lifes--;
		this.ballPosition = [20, 210];
		gamePaused = true;
	}

	// PLAYER 1 scores
	if (player.lifes > 0 && player.player === 1 && this.ballPosition[0] < 0 - this.ballRadius) {
		player.lifes--;
		this.ballPosition = [435, 210];
		gamePaused = true;
	}

	// GAME OVER
	if (player.lifes === 0) {
		alert('Game Over' + '\nPlayer ' + player.player + ' loses');
		
		let playAgain = confirm('Would you like to play again?');
		clearInterval(id);
		
		if (playAgain) {
			document.location.reload();
		} else {
			alert('Good Bye!');
		}

	}
}