package domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = "id")
public class Book {

	private Integer id;
	private String isbn; // 978-3-16-148410-0
	private String author;
	private String title;
	private int numPages;
	
	public Book(String isbn, String author, String title, int numPages) {
		this.isbn = isbn;
		this.author = author;
		this.title = title;
		this.numPages = numPages;
	}
	
}
