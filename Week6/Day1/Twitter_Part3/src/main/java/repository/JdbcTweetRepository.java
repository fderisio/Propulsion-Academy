package repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import domain.Tweet;

@Repository
public class JdbcTweetRepository implements TweetRepository{
	
	// map field
	private final TweetMapper tweetMapper = new TweetMapper();
	
	// creates rowmapper
	class TweetMapper implements RowMapper<Tweet> {

		@Override
		public Tweet mapRow(ResultSet rs, int rowNum) throws SQLException {
			return new Tweet(rs.getInt("id"), rs.getString("author"), rs.getString("text"));
		}

	}
	
	// database fields
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
		return jdbcTemplate.queryForObject("SELECT count(*) FROM tweet", Integer.class);
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
		jdbcTemplate.queryForObject("DELETE FROM tweet WHERE id=?", tweetMapper, id);
	}
	
	@Override
	public void deleteAll() {
		jdbcTemplate.update("delete from tweet");		
	}

	@Override
	public Tweet findById(Integer id) {
		String sql = "select * from tweet where id=?";
		return jdbcTemplate.queryForObject(sql, tweetMapper, id);
	}

	@Override
	public List<Tweet> findAll() {
		return jdbcTemplate.query("select * from tweet", tweetMapper);
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		String sql = "select * from tweet where lower(author) = lower(?)";
		return jdbcTemplate.query(sql, tweetMapper, username);
	}

	@Override
	public List<Tweet> findAllContaining(String searchText) {
		String sql = "select * from tweet where lower(text) like lower(?)";
		return jdbcTemplate.query(sql, tweetMapper, "%" + searchText + "%");
	}
	
	@Override
	public List<String> findAllUsernames() {
		String sql = "select distinct lower(author) from tweet";
		return jdbcTemplate.queryForList(sql, String.class);
	}

	@Override
	public void findAllByUsernameWithExactMatch() {
		// TODO Auto-generated method stub
		
	}

}
