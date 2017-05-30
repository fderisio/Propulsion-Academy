package repository;

import java.util.List;

import domain.Tweet;

public interface TweetRepository {

	int count();
	void save(Tweet tweet);
	void deleteById(Integer id);
	Tweet findById(Integer id);
	List<Tweet> findAll();
	List<Tweet> findAllByUsername(String username);
	List<Tweet> findAllContaining(String searchText);
	List<String> findAllUsernames();
	void deleteAll();
}
