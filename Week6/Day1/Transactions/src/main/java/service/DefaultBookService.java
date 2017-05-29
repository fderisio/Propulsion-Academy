package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import domain.Book;
import repository.BookRepository;

@Service
@Transactional (readOnly = true) // makes all public methods from the BookService interface "transactional"
public class DefaultBookService implements BookService{

	private final BookRepository bookRepository;

	@Autowired // gets access to the BookRepository in the ApplicationContext
	public DefaultBookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	@Transactional(readOnly = false)
	@Override
	public void saveBook(Book book) {
		this.bookRepository.save(book);
	}

	@Override
	public Book findById(Integer id) {
		return this.bookRepository.findById(id);
	}

	@Override
	public Book findByIsbn(String isbn) {
		return this.bookRepository.findByIsbn(isbn);
	}

	@Override
	public List<Book> findAllByAuthor(String author) {
		return this.bookRepository.findAllByAuthor(author);
	}

	@Transactional(readOnly = false)
	@Override
	public void deleteById(Integer id) {
		this.bookRepository.deleteById(id);

		// Simulate a step in the "unit of work" that throws an exception
		// after having already deleted from the database within the
		// current transaction.
		//
		//		if (2 * 2 == 4) {
		//			throw new RuntimeException("Step #2 in business use case failed");
		//		}
	}

	@Transactional(readOnly = false)
	@Override
	public void deleteByIsbn(String isbn) {
		this.bookRepository.deleteByIsbn(isbn);
	}

	

	
	
}
