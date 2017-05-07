function Player() {
	this.songs = [];
}

var player = new Player();

// Add new song
Player.prototype.add = function(song) {
	this.songs.push(song);
	console.log(song + " added");
};

// Play added song
Player.prototype.play = function() {
	console.log("Playing: " + this.songs[this.songs.length - 1]);
};

// Play next song
Player.prototype.next = function() {
	console.log("Next - Playing: " + this.songs[0]);
};

// Play previous song
Player.prototype.previous = function() {
	console.log("Previous - Playing: " + this.songs[this.songs.length - 2]);
};

player.add("drive"); // "drive added"
player.add("hello"); // "hello" added"
player.add("happy");
player.play();
player.next();
player.previous();