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
	const height = 10;
	let spaceX = 30;
	let spaceY = 30;
	let colorsList = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
	let blockColumns = Math.floor((this.canvas.width - spaceX) / (width + 4) );  // amount of rows possible
	for (let i = 0; i < 6; i++) { // rows
		if (i > 0) {
			spaceY += 4;
		}
		for (let j = 0; j < blockColumns; j++) { // columns
			
			// generates random color
			let randomIndex = Math.floor(Math.random()*(colorsList.length-1));
			let randomColor = colorsList[randomIndex];

			// // generates spaces
			// if (j > 0) {
			//  	 spaceX += 4;
			//  };
			
			// creates a block
			var block = new Block([spaceX + j * width, spaceY + i * height], [j, i], height, width, randomColor);  
			this.blocks.push(block);
		}
	}
	console.log(this.blocks);
}
var game = new Game();

Game.prototype.resetCanvas = function() {
	// Background Fill
	this.ctx.fillStyle = 'black'; //#0E693C'; //'black';
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
}

// Play method
Game.prototype.play = function() {
	
	setInterval(function callMeMaybe() {
		this.resetCanvas();
		this.ball.render(this.ctx);
		this.ball.move(400, 300);
		this.ball.collidesPaddle(this.paddle.paddlePosition[0],
														this.paddle.paddleWidth,
														this.paddle.paddlePosition[1]);
		this.ball.collidesBrick(this.blocks);
		this.paddle.render(this.ctx);
		this.paddle.move();
		for (let i = 0; i < this.blocks.length; i++) {
			this.blocks[i].render(this.ctx);
		};
	}.bind(this), 5); // .bind(this) dentro del metodo de game = game constructor info
}

game.play();