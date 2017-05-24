package domain;

import lombok.Getter;
import lombok.Setter;

public class Movie {

	private @Getter @Setter int id;
	private @Getter @Setter String name;
	private @Getter @Setter String director;
	private @Getter @Setter int year;
	
	public Movie(int id, String name, String director, int year){
		this.id = id;
		this.name = name;
		this.director = director;
		this.year = year;
	}
	
	@Override
	public String toString() {
		return "Movie [id=" + id + ", name=" + name + ", director=" + director + ", year=" + year + "]";
	}
	
	
}
