function Game() {
	this.canvas = document.getElementById('canvas');
	this.ctx = canvas.getContext('2d'); // canvas context - para pintar el canvas en 2D
	
	// adds ball to the canvas
	this.ball = new Ball();
	// adds paddle
	this.paddle = new Paddle();

	// adds blocks
	this.blocks = [];
	const width = 40;
	const height = 15;
	let spaceX = 25;
	let spaceY = 30;
	let blockPadding = 2;
	let colorsList = ['Blue', 'Chartreuse', 'Cyan', 'Fuchsia', 'Yellow', 'Red', 'Orange', 'DarkOrchid'];
	let numBlock = -1;
	/*let colorsList = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];*/
	let blockColumns = Math.floor((this.canvas.width - spaceX) / (width + 4) );  // amount of rows possible
	
	for (let i = 0; i < 8; i++) { // rows
		for (let j = 0; j < blockColumns; j++) { // columns
			numBlock += 1;
			// generates random color
			let randomIndex = Math.floor(Math.random()*(colorsList.length-1));
			let randomColor = colorsList[randomIndex];
			// creates a block
			var block = new Block([spaceX + j * (width + blockPadding), spaceY + i * (height + blockPadding)], [j, i], height, width, 'green', 'shown', numBlock);  
			this.blocks.push(block);
		}
	}

}
var game = new Game();

Game.prototype.resetCanvas = function() {
	// Background Fill
	this.ctx.fillStyle = 'black'; //#0E693C'; //'black';
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
	// text
	this.ctx.fillStyle = 'white';
	this.ctx.font = "10px Arial";
	this.ctx.fillText('Score ' + this.ball.score, 120, 10);
}

// Play method
Game.prototype.play = function() {
	
	var id = setInterval(function Nico() {
		this.resetCanvas();
		this.ball.render(this.ctx);
		this.paddle.render(this.ctx);
		this.paddle.move();
		this.ball.move(400, 300, this.paddle, this.blocks, this.ball.score);
		this.ball.collidesBlock(this.blocks, this.ball.score, id);
		for (let i = 0; i < this.blocks.length; i++) {
			this.blocks[i].render(this.ctx);
		};
	}.bind(this), 5); // .bind(this) dentro del metodo de game = game constructor info // bindea solo this, porque esta dentro de la funcion ya
}

game.play();