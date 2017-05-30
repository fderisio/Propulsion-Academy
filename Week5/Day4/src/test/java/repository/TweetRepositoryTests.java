package repository;

import static java.util.stream.Collectors.toList;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ContextConfiguration;

import config.DataAccessConfig;
import config.RepositoryConfig;
import domain.Tweet;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { RepositoryConfig.class, DataAccessConfig.class })
public class TweetRepositoryTests {
	
	@Autowired
	TweetRepository repository;

	@Before
	@After
	public void clearTweetTable() {
		repository.deleteAll();
		assertNumTweets(0);
	}

	@Test
	public void save() {
		saveTweet1();
		assertNumTweets(1);
	}

	@Test
	public void deleteById() {
		Tweet tweet1 = saveTweet1();
		assertNumTweets(1);
		// Integer id = repository.findAll().get(0).getId();
		// repository.deleteById(id);
		repository.deleteById(tweet1.getId());
		assertNumTweets(0);
	}

	@Test
	public void deleteAll() {
		saveTweet1();
		saveTweet2();
		assertNumTweets(2);
		repository.deleteAll();
		assertNumTweets(0);
	}

	@Test
	public void findById() {
		saveTweet1();
		assertNumTweets(1);
		Integer id = repository.findAll().get(0).getId();
		Tweet tweet = repository.findById(id);
		assertThat(tweet.getAuthor()).isEqualTo("mary01");
		assertThat(tweet.getText()).isEqualTo("Hello, Twitter!");
	}

	@Test
	public void findAll() {
		Tweet tweet1 = saveTweet1();
		Tweet tweet2 = saveTweet2();
		assertNumTweets(2);
		assertThat(repository.findAll()).containsExactlyInAnyOrder(tweet2, tweet1);

		// List<String> tweetTexts = repository.findAll().stream().map(Tweet::getText).collect(toList());
		// assertThat(tweetTexts).containsExactlyInAnyOrder("Hello, Twitter!", "2nd tweet");
	}

	@Test
	public void findAllByUsernameWithExactMatch() {
		save3Tweets();
		// @formatter:off
		List<String> tweetTexts = repository.findAllByUsername("mary01")
				.stream()
				.map(Tweet::getText)
				.collect(toList());
		// @formatter:on
		assertThat(tweetTexts).containsExactlyInAnyOrder("Hello, Twitter!", "Have a great Thursday!");
	}

	@Test
	public void findAllByUsernameIgnoringCase() {
		save3Tweets();
		// @formatter:off
		List<String> tweetTexts = repository.findAllByUsername("mary01")
				.stream()
				.map(Tweet::getText)
				.collect(toList());
		// @formatter:on
		assertThat(tweetTexts).containsExactlyInAnyOrder("Hello, Twitter!", "Have a great Thursday!");
	}

	@Test
	public void findAllContainingWithExactMatch() {
		save3Tweets();
		// @formatter:off
		List<String> tweetTexts = repository.findAllContaining("Twitter")
				.stream()
				.map(Tweet::getText)
				.collect(toList());
		// @formatter:on
		assertThat(tweetTexts).containsExactly("Hello, Twitter!");
	}

	@Test
	public void findAllContainingIgnoringCase() {
		save3Tweets();
		// @formatter:off
		List<String> tweetTexts = repository.findAllContaining("twitter")
				.stream()
				.map(Tweet::getText)
				.collect(toList());
		// @formatter:on
		assertThat(tweetTexts).containsExactly("Hello, Twitter!");
	}

	@Test
	public void findAllUsernames() {
		save3Tweets();
		assertNumTweets(3);
		List<String> usernames = repository.findAllUsernames();
		assertThat(usernames).containsExactlyInAnyOrder("mary01", "john_06");
	}

	private void save3Tweets() {
		saveTweet1();
		saveTweet2();
		saveTweet3();
		assertNumTweets(3);
	}

	private void assertNumTweets(int expected) {
		assertThat(repository.count()).isEqualTo(expected);
	}

	private Tweet saveTweet1() {
		Tweet tweet = new Tweet("mary01", "Hello, Twitter!");
		repository.save(tweet);
		return tweet;
	}

	private Tweet saveTweet2() {
		Tweet tweet = new Tweet("mary01", "Have a great Thursday!");
		repository.save(tweet);
		return tweet;
	}

	private void saveTweet3() {
		repository.save(new Tweet("john_06", "If you never try, you´ll never know."));
	}

}
