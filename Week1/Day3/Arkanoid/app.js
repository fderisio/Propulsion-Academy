var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); // canvas context - para pintar el canvas en 2D
//backgroundFill(ctx);

// checking for support
// if (canvas.getContext) {
//   var ctx = canvas.getContext('2d');
//   // drawing code here
// } else {
//   // canvas-unsupported code here
// }

//ctx.scale(10, 10); // scale(x, y); modifica tamano de objeto

// Background Fill
// function backgroundFill(ctx) {
// 	ctx.fillStyle = 'black';
// 	ctx.fillRect(0, 0, 600, 600); // fillrect(x, y, width, height);
// }

var x = 300;
var y = 575;

// creates a ball
function Ball() {
 	this.initialPos = [x, y];
}
var ball = new Ball();

// Ball render
Ball.prototype.render = function(ctx) {
	// Ball Fill
	ctx.beginPath();
	ctx.arc(x, y, 8, 1100, 2 * Math.PI, false); // arc(x, y, radius, startAngle, endAngle, anticlockwise); 
	ctx.fillStyle = '#fff'; // 'silver';
	ctx.fill();
}
ball.render(ctx);

// Ball moves
Ball.prototype.move = function() {
	x--;
	y--;
}

setInterval(function callMeMaybe() {
	// Background Fill
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, 600, 600);
	ball.move();
  	ball.render(ctx);
}, 10);

