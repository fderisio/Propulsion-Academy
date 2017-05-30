package repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import domain.Tweet;

@Repository
public class JdbcTweetRepository implements TweetRepository{
	
	// mapper field
	private final TweetMapper tweetMapper = new TweetMapper();

	class TweetMapper implements RowMapper<Tweet> {

		@Override
		public Tweet mapRow(ResultSet rs, int rowNum) throws SQLException {
			return new Tweet(rs.getInt("id"), rs.getString("author"), rs.getString("text"));
		}

	}
	
	// db fields
	private final JdbcTemplate jdbcTemplate;
	private final SimpleJdbcInsert insertTweet;

	@Autowired
	public JdbcTweetRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
		// @formatter:off
		this.insertTweet = new SimpleJdbcInsert(jdbcTemplate)
				.withTableName("tweet")
				.usingGeneratedKeyColumns("id");
		// @formatter:on
	}
	
	@Override
	public int count() {
//		sql = "SELECT count(*) FROM tweets";
//		Integer cantTweets = jdbcTemplate.queryForObject(sql, Integer.class);
//		return cantTweets;
		return jdbcTemplate.queryForObject("SELECT count(*) FROM tweets", Integer.class);
	}

	@Override
	public void save(Tweet tweet) {
		Map<String, Object> parameters = new HashMap<>(2);
		parameters.put("author", tweet.getAuthor());
		parameters.put("text", tweet.getText());
		Number newId = insertTweet.executeAndReturnKey(parameters);

		tweet.setId(newId.intValue());
	}

	@Override
	public void deleteById(Integer id) {
//		String sql = "DELETE FROM tweets WHERE id=?";
//		jdbcTemplate.queryForObject(sql, String.class, id);
		jdbcTemplate.queryForObject("DELETE FROM tweets WHERE id=?", tweetMapper, id);
	}

	@Override
	public Tweet findById(Integer id) {
		sql = "SELECT * FROM tweets WHERE id=?";
		Tweet tweetById = jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
				return tweet; //tweet.getAuthor() + tweet.getText();
		}, id);
		return tweetById;
	}

	@Override
	public List<Tweet> findAll() {
//		String sql = "SELECT * FROM tweets";
//		List<Tweet> allTweets = jdbcTemplate.query(sql, (rs, num) -> {
//				return new Tweet(
//					rs.getString("author"),
//					rs.getString("text")
//				);
//		});
//		return allTweets;
		return jdbcTemplate.query("select * from tweet", tweetMapper);
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		String sql = "SELECT * FROM tweets WHERE author=?";
		List<Tweet> tweetsByUser = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet;
		}, username);
		return tweetsByUser;
	}

	@Override
	public List<Tweet> findAllContaining(String searchText) {
		String sql = "SELECT * FROM tweets WHERE TEXT LIKE '%searchText%'";
		List<Tweet> tweetsContainingString = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet;
			}, searchText);
		return tweetsContainingString;
	}
	
	@Override
	public List<String> findAllUsernames() {
		String sql = "SELECT author FROM tweets";
		List<String> usersList = jdbcTemplate.query(sql, (rs, num) -> {
			return tweet.getAuthor();
		});
		return usersList;
	}

	@Override
	public void deleteAll() {
		jdbcTemplate.update("delete from tweet");		
	}
	
}
