package repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.transaction.BeforeTransaction;
import org.springframework.test.jdbc.JdbcTestUtils;
import org.springframework.transaction.annotation.Transactional;

import config.RepositoryConfig;
import config.TestDataAccessConfig;
import domain.Book;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { TestDataAccessConfig.class, RepositoryConfig.class })
@ActiveProfiles("dev")
@Sql("/test-data.sql")
@Transactional
public class BookRepositoryTests {

	private static final int NUM_BOOKS = 100; // cant de libros en test-data.sql

	@Autowired
	BookRepository bookRepository;

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Rule
	public TestName testName = new TestName();
	
	Book summer = new Book(1, "978-3-16-148410-0", "Angelica", "Can't Wait for Summer", 120);
	Book spring = new Book("978-0-59-680193-9", "Sam Brannen", "Spring in a Nutshell", 700);
	
	@BeforeTransaction
	public void assertStateInDatabaseBeforeTransaction() {
		assertNumBooks(0);
	}

	@Before
	public void assertStateInDatabaseWithinTransaction() {
		// The deleteByIsbn() test method inserts its own data into the
		// database, so we don't expect NUM_BOOKS to be in the database
		// for the deleteByIsbn() method.
		if (!testName.getMethodName().equals("deleteByIsbn")) {
			assertNumBooks(NUM_BOOKS);
		}
	}

	@Test
	// @Commit
	public void save() {
		bookRepository.save(spring);
		assertNumBooks(NUM_BOOKS + 1);
	}

	@Test
	// Clean up is no longer necessary
	// @Sql(statements = "delete from book")
	public void count() {
		// assertThat(0).isEqualTo(0);
		assertThat(bookRepository.count()).isEqualTo(NUM_BOOKS);
	}

	@Test
	@Sql(statements = "insert into book(isbn, author, title, num_pages) values('111', 'Angelica', 'Cannot Wait for Summer', 120)")
	@Sql(statements = "insert into book(isbn, author, title, num_pages) values('222', 'Bart', 'Cannot Wait for Springfield', 10)")
	// Clean up is no longer necessary
	// @Sql(statements = "delete from book", executionPhase = ExecutionPhase.AFTER_TEST_METHOD)
	// @Rollback
	public void deleteByIsbn() {
		assertNumBooks(2);
		assertThat(bookRepository.findByIsbn("111")).isNotNull();
		assertThat(bookRepository.findByIsbn("222")).isNotNull();

		bookRepository.deleteByIsbn("111");
		assertNumBooks(1);
		bookRepository.deleteByIsbn("222");
		assertNumBooks(0);
	}

	@Test
	// @Commit
	public void deleteById() {
		bookRepository.deleteById(summer.getId());
		assertNumBooks(NUM_BOOKS - 1);
	}

	@Test
	public void findById() {
		assertThat(bookRepository.findById(summer.getId())).isEqualTo(summer);
	}

	@Test
	public void findByIsbn() {
		assertThat(bookRepository.findByIsbn(summer.getIsbn())).isEqualTo(summer);
	}

	@Test
	public void findAll() {
		bookRepository.save(spring);
		assertNumBooks(NUM_BOOKS + 1);

		//		TestTransaction.flagForCommit();
		//		TestTransaction.end();

		// do other stuff here.

		//		TestTransaction.start();
		// Whatever happens here will be rolled back!
		// bookRepository.save(spring);

		assertThat(bookRepository.findAll()).contains(summer, spring);
	}

	@Test
	public void findAllByAuthor() {
		bookRepository.save(spring);
		assertNumBooks(NUM_BOOKS + 1);

		assertThat(bookRepository.findAllByAuthor(summer.getAuthor())).containsExactly(summer);
	}
	
	
	
	/* ------ extra methods for tests purposes ------- */
	
	private void assertNumBooks(int expected) {
		assertThat(JdbcTestUtils.countRowsInTable(jdbcTemplate, "book")).isEqualTo(expected);		
	}
	
	
}
