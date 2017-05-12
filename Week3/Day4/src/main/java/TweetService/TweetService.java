package TweetService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class TweetService {
	
	HashMap<String, Tweet> tweetsDatabase = new HashMap<>();
	
	// save new tweet
	public void save(Tweet tweet) {
		tweetsDatabase.put(tweet.getId(), tweet);
		System.out.println("Created tweet: '" + tweet.getText() + "' - ID Nr.: " + tweet.getId());
	}
	
	// remove a tweet
	public void delete(String id) {
		tweetsDatabase.remove(id);
		System.out.println("Tweet deleted successfully. Remained tweets: " + tweetsDatabase);
	}	
		
	// find tweet with ID
	public Tweet findById(String id) {
		Tweet found = tweetsDatabase.get(id);
		System.out.println("With the given ID, we found the tweet: " + found.getText() + " ID: " + found.getId());
		return found;
	}
	
	public int size(){
		return tweetsDatabase.size();
	}
	
	// list all tweets
	public List<Tweet> findAll() {
		return new ArrayList<>(this.tweetsDatabase.values());
//		List<Tweet> tweetsList = new ArrayList<Tweet>();
//		for (Tweet tweet : tweetsList) {
//			tweetsList.add(tweet);
//		}
//		return tweetsList;
	}
	
	// search for a specific string
	public List<Tweet> search(String someString) {
		List<Tweet> mentionedTweets = new ArrayList<Tweet>();
		for (Tweet tweet : findAll()) {
			if (tweet.getText().contains(someString)) {
				mentionedTweets.add(tweet);
			}
		}
		System.out.println("The following tweets with the word " + someString + " found: " + mentionedTweets);
		return mentionedTweets;
		
	}
	
}
