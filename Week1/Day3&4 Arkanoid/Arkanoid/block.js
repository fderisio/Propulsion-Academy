// creates a block
function Block(blockPosition, blockColRow, blockHeight, blockWidth, blockColor, status, index) {
	this.blockPosition = blockPosition; // [x, y]
	this.blockColRow = blockColRow; // [column, row]
	this.blockHeight = blockHeight;// 10;
	this.blockWidth = blockWidth; //50;
	this.blockColor = blockColor; // '#FF1D58';
	this.status = status;
	this.index = index;
}

// block render
Block.prototype.render = function(ctx) {
	// Block Fill
	ctx.beginPath();
	ctx.fillRect(this.blockPosition[0], this.blockPosition[1], this.blockWidth, this.blockHeight); //fillrect(x, y, width, height);
	ctx.fillStyle = this.blockColor; //'#FF1D58'; // 'silver';
	ctx.fill();
}