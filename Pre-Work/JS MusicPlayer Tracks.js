function Player() {
	this.tracks = [];
}

var player = new Player();

// Constructor Tracks
function Track(artist, title, album) {
	this.artist = artist;
	this.title = title;
	this.album = album;
}

var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

// Add complete tracks
Player.prototype.add = function(track) {
	this.tracks[this.tracks.length] = {
		artist: track.artist,
		title: track.title,
		album: track.album
	};
	console.log(track.title + " added");
};

player.add(driveTrack);
player.add(laBambaTrack);
console.log(player.tracks);

// Play last added track
Player.prototype.play = function() {
	console.log("Playing: " + this.tracks[this.tracks.length - 1].title + " by " + this.tracks[this.tracks.length - 1].artist);
};

player.play()

// Track constructor
function Track(artist, title, album) {
	this.artist = artist;
	this.title = title;
	this.album = album;
}

var track = new Track();

Track.prototype.add = function(artist, title, album) {
	this[this.length] = {
		artist: artist,
		title: title,
		album: album
	};
	console.log(tracks.title + " added");
};

track.add("Adele", "Hello", "25");

// Play selected track
Player.prototype.select = function(track) {
	for (var i = 0; i < this.tracks.length; i++) {
		if (track == this.tracks[i].title) {
			console.log("Playing selected song: " + this.tracks[i].title);
		}
	}
};

player.select("drive");

// List all tracks
Player.prototype.list = function() {
	console.log("List of all the tracks:");
	for (i in this.tracks) { 
        console.log(this.tracks[i]);
    }
};

player.list();