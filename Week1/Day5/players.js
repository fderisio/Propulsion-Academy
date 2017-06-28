function Player(paddlePosition, paddleWidth, paddleHeight, player, keys, name) {
	this.paddlePosition = paddlePosition; // [x, y]
	this.paddleWidth = paddleWidth;
	this.paddleHeight = paddleHeight;
	this.player = player;
	this.keys = keys;
	this.lifes = 5;
	this.name = name;
}


Player.prototype.render = function(ctx){
	// Paddle Fill
	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.fillRect(this.paddlePosition[0], this.paddlePosition[1], this.paddleWidth, this.paddleHeight); //fillrect(x, y, paddleWidth, height);
	ctx.fill();
}

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


Player.prototype.move = function(ctx) {
		let rightKey = this.keys[0];

		// checks key player 1
		if (rightKey == 'd') {
			// moves paddle
			if (rightPressed2 && this.paddlePosition[1] < 400 - this.paddleHeight) {
				this.paddlePosition[1] += 4;
			} else if (leftPressed2 && this.paddlePosition[1] > 0) {
				this.paddlePosition[1] -= 4;
			}
		}
		
		// checks keys player 2
		if (rightKey == 'right') {
			// moves paddle
			if (rightPressed1 && this.paddlePosition[1] < 400 - this.paddleHeight) {
			this.paddlePosition[1] += 4;
			} else if (leftPressed1 && this.paddlePosition[1] > 0) {
			this.paddlePosition[1] -= 4;
			}
		}
	
	// } else if (pause) {
	// 		ctx.fillStyle = 'white';
	// 		ctx.font = '14px Arial';
	// 		ctx.fillText = 'Press Space to continue';
	// 		this.ballDirection = [0, 0];
	// 		pause = true;
	// 		move();
	// 	}

}