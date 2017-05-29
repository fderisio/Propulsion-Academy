package repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import domain.Book;

@Repository
public class JdbcBookRepository implements BookRepository {

	private final BookMapper bookMapper = new BookMapper();

	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public JdbcBookRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public int count() {
		return jdbcTemplate.queryForObject("select count(*) from book", Integer.class);
	}

	@Override
	public void save(Book book) {
		jdbcTemplate.update("insert into book(isbn, author, title, num_pages) values(?,?,?,?)", //
				book.getIsbn(), book.getAuthor(), book.getTitle(), book.getNumPages());
	}

	@Override
	public void deleteAll() {
		jdbcTemplate.update("delete from book");		
	}

	@Override
	public void deleteById(Integer id) {
		jdbcTemplate.update("delete from book where id=?", id);
	}

	@Override
	public void deleteByIsbn(String isbn) {
		jdbcTemplate.update("delete from book where isbn=?", isbn);		
	}

	@Override
	public Book findById(Integer id) {
		return jdbcTemplate.queryForObject("select * from book where id=?", bookMapper, id);
	}

	@Override
	public Book findByIsbn(String isbn) {
		return jdbcTemplate.queryForObject("select * from book where isbn=?", bookMapper, isbn);
	}

	@Override
	public List<Book> findAll() {
		return jdbcTemplate.query("select * from book", bookMapper);
	}

	@Override
	public List<Book> findAllByAuthor(String author) {
		return jdbcTemplate.query("select * from book where author=?", bookMapper, author);
	}
	
	private static class BookMapper implements RowMapper<Book> {

		@Override
		public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
			// @formatter:off
			return new Book(
				rs.getInt("id"),
				rs.getString("isbn"),
				rs.getString("author"),
				rs.getString("title"),
				rs.getInt("num_pages")
			);
			// @formatter:on
		}
	}

}
