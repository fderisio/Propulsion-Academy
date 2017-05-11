package TweetService;

public final class Tweet {
	
	public String id;
	public String text;
	
	public Tweet(String text) {
		this.id = java.util.UUID.randomUUID().toString();
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
