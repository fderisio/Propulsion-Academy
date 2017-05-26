package domain;

import java.util.UUID;

public class Tweet {
	
	private final String id = UUID.randomUUID().toString();
	public String author;
	public String text;
	
	public Tweet(String author, String text) {
		this.author = author;
		this.text = text;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Tweet [id=" + id + ", author=" + author + ", text=" + text + "]";
	}	
	
}
