package domain;

import lombok.AllArgsConstructor;

// 1) creates the constructor
@AllArgsConstructor
public class Song {

	private int id;
	private String title;
	private String artist;
	private String album;
	private int year;
	
	public Song(String title, String artist, String album, int year){
		this.title = title;
		this.artist = artist;
		this.setAlbum(album);
		this.year = year;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "Song [id=" + id + ", title=" + title + ", artist=" + artist + ", album=" + album + ", year=" + year
				+ "]";
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}
	
}
