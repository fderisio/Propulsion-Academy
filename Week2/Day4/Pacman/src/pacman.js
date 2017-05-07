export default class Pacman {
	constructor() {
		this.position = [185, 385]; // [x, y]
		this.direction = [1,-1]; // [x, y]
		this.radius = 10;
		this.rightPressed = false;
		this.leftPressed = false;
		this.upPressed = false;
		this.downPressed = false;
		this.spacePressed = false;
		this.openedMouth = true;
		// 			   0right, 1left, 2up, 3down
		this.moving = [true, true, true, true];
	}

	openMouth(ctx) {
		ctx.beginPath();
		ctx.arc(this.position[0], this.position[1], this.radius, 0.25 * Math.PI, 1.25 * Math.PI, false);
		ctx.fillStyle = "rgb(255, 255, 0)";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(this.position[0], this.position[1], this.radius, 0.75 * Math.PI, 1.75 * Math.PI, false);
		ctx.fill();
		// ctx.beginPa1th();
		// ctx.arc(this.position[0]-5, this.position[1]-3, 3, 0, 2 * Math.PI, false);
		// ctx.fillStyle = "rgb(0, 0, 0)";
		// ctx.fill();
	}

	closeMouth(ctx) {
		ctx.beginPath();
		ctx.fillStyle = "rgb(255, 255, 0)";
		ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false); 
		ctx.fill();
		// ctx.beginPath();
		// ctx.arc(this.position[0]-5, this.position[1]-3, 3, 0, 2 * Math.PI, false);
		// ctx.fillStyle = "rgb(0, 0, 0)";
		// ctx.fill();
	}

	renderPacman(ctx) {
		if (this.openedMouth) {
			this.openMouth(ctx);
		} else {
			this.closeMouth(ctx);
		}
	}

	move() {
			// moves the pacman
			if (this.moving[0] && this.rightPressed && this.position[0] < 370-this.radius) {
				this.position[0] += 1;
			} else if (this.moving[1] && this.leftPressed && this.position[0] > 0+this.radius) {
				this.position[0] -= 1;
			} else if (this.moving[2] && this.upPressed && this.position[1] > 0+this.radius) {
				this.position[1] -= 1;
			} else if (this.moving[3] && this.downPressed && this.position[1] < 420-this.radius) {
				this.position[1] += 1;
			}

	}

	collidesWall(wall) {
		this.moving = [true, true, true, true];	
		for (let i=0; i < wall.length; i++) {
			// going right
			if (this.position[0]+this.radius === wall[i].wallStarts[0] && this.position[1] > wall[i].wallStarts[1] && this.position[1] < wall[i].wallEnds[1]) {
				this.moving[0] = false;
			}
			// going left
			if (this.position[0]-this.radius === wall[i].wallStarts[0] && this.position[1] > wall[i].wallStarts[1] && this.position[1] < wall[i].wallEnds[1]) {
				this.moving[1] = false;
			}
			// going up
			if (this.position[1]-this.radius === wall[i].wallEnds[1] && this.position[0]-this.radius > wall[i].wallStarts[0] && this.position[0]-this.radius < wall[i].wallEnds[0]) {
				/*&& this.position[1]-this.radius === wall[i].wallEnds[0]*/
				this.moving[2] = false;
			}
			// going down
			if (this.position[1]+this.radius === wall[i].wallStarts[1] && this.position[0]-this.radius > wall[i].wallStarts[0] && this.position[0]-this.radius < wall[i].wallEnds[0]) {
				this.moving[3] = false;
			}
		}
	}

}