// creates Paddle
function Paddle() {
	this.paddlePosition = [115, 392];
	this.paddleWidth = 55;
	this.paddleHeight = 8;
}

Paddle.prototype.render = function(ctx){
	// Paddle Fill
	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.fillRect(this.paddlePosition[0], this.paddlePosition[1], this.paddleWidth, this.paddleHeight); //fillrect(x, y, paddleWidth, height);
	ctx.fill();
}

// Keys pressed
let rightPressed;
let leftPressed;

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 39) {
		rightPressed = true;
	} else if (event.keyCode === 37) {
		leftPressed = true;
	}
});

document.addEventListener('keyup', function(event) {
	if (event.keyCode === 39) {
		rightPressed = false;
	} else if (event.keyCode === 37) {
		leftPressed = false;
	}
});

Paddle.prototype.move = function() {
	if (rightPressed && this.paddlePosition[0] < 300 - this.paddleWidth) {
		this.paddlePosition[0] += 5;
	} else if (leftPressed && this.paddlePosition[0] > 0) {
		this.paddlePosition[0] -= 5;
	//} else if (!rightPressed || !leftPressed) {
	//	this.paddlePosition[0] = this.paddlePosition[0];
	}
}


