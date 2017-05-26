package sevice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import domain.Tweet;
import repository.TweetRepository;

@Service
public class TweetService {

	@Autowired
	TweetRepository tweetRepository;
	
	void save(Tweet tweet) {
		tweetRepository.save(tweet);
	}
	
	void deleteById(String id) {
		tweetRepository.deleteById(id);
	}
	
	Tweet findById(String id) {
		return tweetRepository.findById(id);
	}
	
	List<Tweet> findAll() {
		return tweetRepository.findAll();
	}
	
	List<Tweet> findAllByUsername(String username) {
		return tweetRepository.findAllByUsername(username);
	}
	
	List<Tweet> findAllContainingHashTag(String hashTag) {
		return tweetRepository.findAllContaining(hashTag);
	}
	
	List<Tweet> findAllMentioningUsername(String username) {
		return tweetRepository.findAllContaining(username);
	}
			
}
