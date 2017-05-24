package demo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import config.DataBaseConfig;
import domain.Movie;

public class JdbcDemo {
	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		ApplicationContext context = new AnnotationConfigApplicationContext(DataBaseConfig.class);
		
		JdbcTemplate jdbcTemplate = context.getBean(JdbcTemplate.class);
		
//		String sql = "delete from movies";
//		jdbcTemplate.update(sql);
		
		//String sql = "truncate table movies";
		jdbcTemplate.update("truncate table movies");
		
		String sql = "insert into movies(name, director, year) values (?,?,?)";
		jdbcTemplate.update(sql, "Toy Story", "John Lasseter", 1995);
		jdbcTemplate.update(sql, "Grand Hotel Budapest", "Wes Anderson", 2014);
		jdbcTemplate.update(sql, "Inside Out", "Disney", 2015);
		jdbcTemplate.update(sql, "Hidden Figures", "Theodore Melfi", 2016);
		jdbcTemplate.update(sql, "Lion", "Garth Davies", 2016);
		jdbcTemplate.update(sql, "Lalaland", "Damien Chazelle", 2016);
		jdbcTemplate.update(sql, "Whiplash", "Damien Chazelle", 2014);
		jdbcTemplate.update(sql, "Manchester by the Sea", "Kenneth Lonergan", 2016);
		jdbcTemplate.update(sql, "The secret in their eyes", "Juan Jose Campanella", 2009);
		
		sql = "select director from movies where name = ?";
		String director = jdbcTemplate.queryForObject(sql, String.class, "Inside Out");
		System.out.println(director);
		
		sql = "select count(*) from movies where year=2016";
		Integer cantMovies2016 = jdbcTemplate.queryForObject(sql, Integer.class);
		System.out.println(cantMovies2016); // 4
		
		sql = "select name from movies where year = 2016 ORDER BY name DESC";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		System.out.println(list);
		
		// Anonymous inner class
		sql = "select * from movies where name=?";
		Movie movie = jdbcTemplate.queryForObject(sql, new RowMapper<Movie>() {
			@Override
			public Movie mapRow(ResultSet rs, int rowNum) throws SQLException {
				return new Movie(
					rs.getInt("id"),
					rs.getString("name"),
					rs.getString("director"),
					rs.getInt("year")
				);
			}
		}, "Hidden Figures");
		System.out.println(movie);
		
		// lambda Expression for rows results
		sql = "select * from movies where name=?";
		Movie movieUsingLambda = jdbcTemplate.queryForObject(sql, (rs, rowNum) -> {
				return new Movie(
					rs.getInt("id"),
					rs.getString("name"),
					rs.getString("director"),
					rs.getInt("year")
				);
		}, "Lion");
		System.out.println(movieUsingLambda);
		
		// lists all the movies as objects
		sql = "select * from movies";
		List<Movie> movies = jdbcTemplate.query(sql, (rs, num) -> {
				return new Movie(
					rs.getInt("id"),
					rs.getString("name"),
					rs.getString("director"),
					rs.getInt("year")
				);
		});
		System.out.println(movies);
		
	}
}