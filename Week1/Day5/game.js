function Game() {
	this.canvas = document.getElementById('canvas');
	this.ctx = canvas.getContext('2d');
	
	// creates players
	this.players = [];
	let namePlayer1 = prompt('Player 1 name \nYou will play with the keys A & D');
	let namePlayer2 = prompt('Player 2 name \nYou will play with the arrows (right and left)');
	// checks if player name entered
	if (namePlayer1 === '' || namePlayer2 === '') {
		namePlayer1 = 'Player 1';
		namePlayer2 = 'Player 2';
	}
	let player1 = new Player([8, 180], 8, 55, 1,['d', 'a'], namePlayer1);
	this.players.push(player1);
	let player2 = new Player([435, 180], 8, 55, 2, ['right', 'left'], namePlayer2);
	this.players.push(player2);

	// creates the ball
	this.ball = new Ball();
}

var game = new Game();

Game.prototype.resetCanvas = function() {
	// background fill
	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
	// adds text
	// if (this.players[0].lifes > this.players[1].lifes) {
	// 	this.ctx.fillStyle = 'green';
	// } else if (this.players[0].lifes < this.players[1].lifes) {
	// 	this.ctx.fillStyle = 'red';
	// } else {
	// 	this.ctx.fillStyle = 'white';
	// }
	this.ctx.fillStyle = 'white';
	this.ctx.font = "10px Arial";

	for (var i = 0; i < this.players.length; i++) {
		this.ctx.fillText('Player ' + (i+1) + ': ' + this.players[i].name, 120 + i*120, 10); //(text, x, y [, maxWidth]);
		this.ctx.fillText('Lifes: ' + this.players[i].lifes, 120 + i*120, 30);
	}
	// draws line
	this.ctx.beginPath();
	this.ctx.strokeStyle = 'white';
	this.ctx.moveTo(220, 0); // (x, y)
	this.ctx.lineTo(220, 400); // [x, y]
	this.ctx.stroke();
}

// Play method
Game.prototype.play = function() {
	var id = setInterval(function() {
		this.resetCanvas();
		this.ball.render(this.ctx);
		this.ball.move(this.canvas.height);
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].render(this.ctx);
			this.players[i].move(this.ctx);
			this.ball.scoring(this.players[i], id); //NO!!! this.ball.scoring(this.players[i].player, this.players[i].lifes);
			this.ball.collidesPaddle(this.players[i]);
		}
	}.bind(this), 5);
}

game.play();