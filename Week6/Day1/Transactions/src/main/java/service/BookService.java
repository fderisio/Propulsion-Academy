package service;

import java.util.List;

import domain.Book;

public interface BookService {

	void saveBook(Book user);

	Book findById(Integer id);

	Book findByIsbn(String isbn);

	List<Book> findAllByAuthor(String author);

	void deleteById(Integer id);

	void deleteByIsbn(String isbn);
	
}
