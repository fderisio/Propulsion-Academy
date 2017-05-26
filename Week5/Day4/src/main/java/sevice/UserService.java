package sevice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import repository.TweetRepository;

@Service
public class UserService {

	@Autowired
	TweetRepository tweetRepository;
	
	List<String> findAllUsernames() {
		return tweetRepository.findAllUsernames();
	}
	
}
