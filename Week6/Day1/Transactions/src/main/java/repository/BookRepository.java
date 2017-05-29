package repository;

import java.util.List;

import domain.Book;

public interface BookRepository {

	int count();

	void save(Book book);

	void deleteAll();

	void deleteById(Integer id);

	void deleteByIsbn(String isbn);

	Book findById(Integer id);

	Book findByIsbn(String isbn);

	List<Book> findAll();

	List<Book> findAllByAuthor(String author);

}
