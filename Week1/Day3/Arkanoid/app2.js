
function Game() {
	this.canvas = document.getElementById('canvas');
	this.ctx = canvas.getContext('2d'); // canvas context - para pintar el canvas en 2D
	this.ball = new Ball();
	this.paddle = new Paddle();

	// creat blocks
	this.blocks = [];
	const width = 50;
	const height = 15;
	let spaceX = 50;
	let spaceY = 30;
	let colorsList = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
	let blockColumns = Math.floor((this.canvas.width - 50) / (width + 4) );  // amount of rows possible
	
	for (let i = 0; i < 6; i++) { // rows
		if (i > 0) {
			spaceY += 4;
		}
		for (let j = 0; j < blockColumns; j++) { // columns
			
			// generates random color
			let randomIndex = Math.floor(Math.random()*(colorsList.length-1));
			console.log(randomIndex);
			let randomColor = colorsList[randomIndex];

			// // generates spaces
			// if (j > 0) {
			// 	 spaceX += 4;
			// };
				
			// adds a block //position, height, width, color
			var block = new Block([spaceX + j * width, spaceY + i * height], height, width, randomColor);  
			this.blocks.push(block);

		}
	}
		
}

var game = new Game();

Game.prototype.resetCanvas = function() {
	// Background Fill
	this.ctx.fillStyle = 'black'; //#0E693C'; //'black';
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
}

// creates a ball
function Ball() {
 	this.initialPos = [300, 575]; // [x, y]
 	this.direction = [1,1];
}

// Ball render
Ball.prototype.render = function(ctx) {
	// Ball Fill
	ctx.beginPath();
	ctx.arc(this.initialPos[0], this.initialPos[1], 8, 1100, 2 * Math.PI, false); // arc(x, y, radius, startAngle, endAngle, anticlockwise); 
	ctx.fillStyle = 'white'; //'#fff'; // 'silver';
	ctx.fill();
}

// Ball moves
Ball.prototype.move = function(height, width) {
	if (this.initialPos[0] < 10) this.direction[0] = 1;
	if (this.initialPos[0] > 590) this.direction[0] = -1;
	if (this.initialPos[1] < 10) this.direction[1] = 1;
	if (this.initialPos[1] > 590) this.direction[1] = -1;	
	
	this.initialPos[0] += this.direction[0];
 	this.initialPos[1] += this.direction[1];
}


// creates a block
function Block(position, height, width, color) {
	this.position = position; // [x, y]
	this.height = height;// 10;
	this.width = width; //50;
	this.color = color; // '#FF1D58';
}

// block render
Block.prototype.render = function(ctx) {
	// Block Fill
		ctx.beginPath();
		ctx.fillRect(this.position[0], this.position[1], this.width, this.height); //fillrect(x, y, width, height);
		ctx.fillStyle = this.color; //'#FF1D58'; // 'silver';
		ctx.fill();
}

// creates Paddle
function Paddle() {
	this.position;
}

Paddle.prototype.render = function(ctx){
	// Paddle Fill
	ctx.beginPath();
	ctx.fillStyle = 'silver';
	ctx.fillRect(275, 595, 70, 10); //fillrect(x, y, width, height);
	ctx.fill();
}

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// document.addEventListener('keydown', function(event) {
//   console.log('you pressed a key!');
// });


Game.prototype.play = function() {
	setInterval(function callMeMaybe() {
		this.resetCanvas();
		this.ball.render(this.ctx);
		this.ball.move(this.height, this.width);
		this.paddle.render(this.ctx);
		for (let i = 0; i < this.blocks.length; i++) {
			this.blocks[i].render(this.ctx);
		};
	}.bind(this), 5); // .bind(this) dentro del metodo de game = game constructor info
}


game.play();

// ANOTHER METHOD!!!!
// Play method with 
// Game.prototype.play = function() {
// 	var that = this; // console.log(this);
// 	setInterval(function callMeMaybe() {
// 		that.resetCanvas();
// 		that.ball.render(that.ctx);
// 		that.ball.move();
// 	}, 10);
// }