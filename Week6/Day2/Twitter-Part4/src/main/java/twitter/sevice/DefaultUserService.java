package twitter.sevice;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import twitter.repository.TweetRepository;

@Service
@Transactional // makes all public methods from the UserService interface "transactional".
public class DefaultUserService implements UserService {

	private static final Logger logger = LogManager.getLogger(DefaultUserService.class);

	private final TweetRepository tweetRepository;

	@Autowired
	public DefaultUserService(TweetRepository tweetRepository) {
		this.tweetRepository = tweetRepository;
	}

	@Override
	public List<String> findAllUsernames() {
		logger.trace("Finding all usernames");
		return this.tweetRepository.findAllUsernames();
	}

}