package repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import org.springframework.test.context.ContextConfiguration;

import config.DataBaseConfig;
import config.RepositoryConfig;
import domain.Tweet;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { RepositoryConfig.class, DataBaseConfig.class })
@ActiveProfiles("dev")
public class TweetRepositoryTests {

	// selects the bean
	@Autowired
	TweetRepository tweetRepository;
	
	@Autowired
	ApplicationContext context = new AnnotationConfigApplicationContext(DataBaseConfig.class);
	
	JdbcTemplate jdbcTemplate = context.getBean(JdbcTemplate.class);
	
	Tweet tweet1 = new Tweet("mary01", "hello tweeter");
	Tweet tweet2 = new Tweet("john_01", "have a great thursday");
	
	@Test
	public void save() {
		// Given
		assertThat(tweetRepository.findAll()).isEmpty();

		// When
		Tweet tweet = new Tweet("mary01", "hello tweeter");
		tweetRepository.save(tweet);

		// Then
		assertThat(tweetRepository.findAll()).containsExactly(tweet);
	}
	
//	@Test
//	public void JDBCTweetRepositoryTests() {
//		//test messageService
//		//assertThat(tweetRepository.count()).isEqualTo(2);
//		//assertEquals(tweetRepository.save(tweet1), tweet1);
//		TweetRepository tweetRepository1 = applicationContext.getBean(TweetRepository.class);
//		assertThat(tweetRepository1.count()).isEqualTo(0);
//		
//	}

}
