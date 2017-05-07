export default class Wall {
	constructor(wallStarts, wallEnds /*width, height*/) {
		this.wallStarts = wallStarts; // [x, y]
		this.wallEnds = wallEnds;  	// [x, y]
		// this.width = width;
		// this.height = height;	
	}

	renderWall(ctx) {
		// ctx.fillStyle = 'grey';
		// ctx.fillRect(this.position[0], this.position[1], this.width, this.height); //fillrect(x, y, width, height);

		// draws line
		ctx.beginPath();
		ctx.strokeStyle = 'white';
		ctx.moveTo(this.wallStarts[0], this.wallStarts[1]); // (x, y)
		ctx.lineTo(this.wallEnds[0], this.wallEnds[1]); // [x, y]
		ctx.stroke();
	}


}
