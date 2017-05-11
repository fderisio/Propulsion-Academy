package TweetService;

import static org.junit.Assert.*;

import java.util.HashMap;

import org.junit.Test;

public class TweetServiceTest {
	
	TweetService tweetService = new TweetService();
	
	Tweet tweet1 = new Tweet("hola gente!!!");
	Tweet tweet2 = new Tweet("programar me quema el cerebro");
	Tweet tweet3 = new Tweet("Argentina tiene buena vibra");
	Tweet tweet4 = new Tweet("Suiza tiene la mejor calidad de vida");
	Tweet tweet5 = new Tweet("hola hallo ciao");
	
	@Test
	public void saveTest() {
		tweetService.save(tweet1);
		assertEquals("hola gente!!!", tweetService.findById(tweet1.getId()).getText());
	}

	@Test
	public void deleteTest() {
		tweetService.delete(tweet1.getId());
		assertEquals(0, tweetService.size());
	}

	@Test
	public void searchTest() {
		tweetService.save(tweet2);
		tweetService.save(tweet3);
		tweetService.save(tweet4);
		tweetService.save(tweet5);
		tweetService.search("hola");
		assertEquals(2, tweetService.findAll().size()-2);
	}
	
}
