package twitter.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = "id")
public class Tweet {
	
	private Integer id;
	public String author;
	public String text;
	
	public Tweet(String author, String text) {
		this.author = author;
		this.text = text;
	}
	
	// setId???
}
