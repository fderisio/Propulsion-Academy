package repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import domain.Tweet;

@Repository
@Configuration
public class JdbcTweetRepository implements TweetRepository{
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	// converts a row in a tweet
	String sql = "select * from tweets";
	Tweet tweet = jdbcTemplate.queryForObject(sql, new RowMapper<Tweet>() {
		@Override
		public Tweet mapRow(ResultSet rs, int rowNum) throws SQLException {
			return new Tweet(
				rs.getString("author"),
				rs.getString("text")
			);
		}
	});
	
	@Override
	public int count() {
		sql = "SELECT count(*) FROM tweets";
		Integer cantTweets = jdbcTemplate.queryForObject(sql, Integer.class);
		return cantTweets;
	}

	@Override
	public void save(Tweet tweet) {
		sql = "INSERT INTO tweets(author, text) VALUES (?,?)";
		jdbcTemplate.update(sql, tweet.getAuthor(), tweet.getText());
	}

	@Override
	public void deleteById(String id) {
		sql = "DELETE FROM tweets WHERE id=?";
		jdbcTemplate.queryForObject(sql, String.class, id);
	}

	@Override
	public Tweet findById(String id) {
		sql = "SELECT * FROM tweets WHERE id=?";
		Tweet tweetById = jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
				return tweet; //tweet.getAuthor() + tweet.getText();
		}, id);
		return tweetById;
	}

	@Override
	public List<Tweet> findAll() {
		String sql = "SELECT * FROM tweets";
		List<Tweet> allTweets = jdbcTemplate.query(sql, (rs, num) -> {
				return new Tweet(
					rs.getString("author"),
					rs.getString("text")
				);
		});
		return allTweets;
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		sql = "SELECT * FROM tweets WHERE author=?";
		List<Tweet> tweetsByUser = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet;
		}, username);
		return tweetsByUser;
	}

	@Override
	public List<Tweet> findAllContaining(String searchText) {
		sql = "SELECT * FROM tweets WHERE TEXT LIKE '%searchText%'";
		List<Tweet> tweetsContainingString = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet;
			}, searchText);
		return tweetsContainingString;
	}
	
	@Override
	public List<String> findAllUsernames() {
		sql = "SELECT author FROM tweets";
		List<String> usersList = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet.getAuthor();
		});
		return usersList;
	}	
	
}
