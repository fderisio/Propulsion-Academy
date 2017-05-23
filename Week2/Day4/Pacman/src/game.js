import Pacman from './pacman.js';
import Wall from './wall.js';

export default class Game {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');
		this.pacman = new Pacman();
		this.walls = [];

		// boders
		const wall1 = new Wall([0,2], [370,2]);
		const wall2 = new Wall([2,0], [2,420]);
		const wall3 = new Wall([2, 418], [368, 418]);
		const wall4 = new Wall([368, 0], [368, 418]);
		// squares
		const wall5 = new Wall([30, 35], [80, 35]);
		const wall6 = new Wall([30,	70], [80, 70]);
		const wall7 = new Wall([80, 35], [80, 70]);
		const wall8 = new Wall([30, 35], [30, 70]);

		// squares
		const wall9 = new Wall([20, 120], [200, 120]);
		const wall10 = new Wall([30, 120], [150, 120]);
		const wall11 = new Wall([80, 50], [80, 150]);
		const wall12 = new Wall([115,50] , [115, 150]);
		const wall13 = new Wall([20, 120], [200, 120]);
		const wall14 = new Wall([20, 120], [200, 120]);

		this.walls.push(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14);
		console.log(this.walls);

	}

	resetCanvas() {
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fillrect(x, y, width, height);
	}

	listeners(){
		// Keys pressed
		document.addEventListener('keydown', (event) => { // => except of using bind(this)
			 if (event.keyCode === 39) {
				this.pacman.rightPressed = true;
			} else if (event.keyCode === 37) {
				this.pacman.leftPressed = true;
			} else if (event.keyCode === 38) {
				this.pacman.upPressed = true;
			} else if (event.keyCode === 40) {
				this.pacman.downPressed = true;
			} else if (event.keyCode === 32) {
				this.pacman.pause = true;
			}
		});

		document.addEventListener('keyup', (event) => {
			 if (event.keyCode === 39) {
				this.pacman.rightPressed = false;
			} else if (event.keyCode === 37) {
				this.pacman.leftPressed = false;
			} else if (event.keyCode === 38) {
				this.pacman.upPressed = false;
			} else if (event.keyCode === 40) {
				this.pacman.downPressed = false;
			} else if (event.keyCode === 32) {
				this.pacman.pause = false;
			}
		});
	}

	play() {
		this.listeners();
		var id = setInterval(function() {
			this.resetCanvas();
			for (let i=0; i < this.walls.length; i++) {
				this.walls[i].renderWall(this.ctx);
			}
			this.pacman.collidesWall(this.walls);
			this.pacman.renderPacman(this.ctx);
			this.pacman.move();
			
		}.bind(this), 5);

		setInterval(() => { // ()=> = function sin parametros
			this.pacman.openedMouth = !this.pacman.openedMouth;
		}, 80);
	}
}

	