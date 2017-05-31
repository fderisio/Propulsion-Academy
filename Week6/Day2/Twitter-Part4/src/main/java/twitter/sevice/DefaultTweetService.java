package twitter.sevice;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import twitter.domain.Tweet;
import twitter.repository.TweetRepository;

@Service
@Transactional // makes all public methods from the TweetService interface "transactional".
public class DefaultTweetService implements TweetService {

	private static final Logger logger = LogManager.getLogger(DefaultTweetService.class);

	private final JavaMailSender javaMailSender;

	private final TweetRepository tweetRepository;

	@Autowired
	public DefaultTweetService(JavaMailSender javaMailSender, TweetRepository tweetRepository) {
		this.javaMailSender = javaMailSender;
		this.tweetRepository = tweetRepository;
	}

	@Transactional (readOnly = false)
	@Override
	public void save(Tweet tweet) {
		logger.trace(() -> "Saving tweet: " + tweet);
		this.tweetRepository.save(tweet);
		sendNewTweetPostedNotificationEmail(tweet);
	}

	private void sendNewTweetPostedNotificationEmail(Tweet tweet) {
		String body = String.format("Dear %s,%nYour tweet with the following text has been posted.%n%n%s%n",
			tweet.getAuthor(), tweet.getText());

		try {
			MimeMessage mimeMessage = this.javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
			helper.setFrom("no-reply@example.org");
			helper.setTo(tweet.getAuthor() + "@example.org");
			helper.setSubject("New tweet posted");
			helper.setText(body);
			this.javaMailSender.send(mimeMessage);
		}
		catch (MailSendException | MessagingException ex) {
			// ex.printStackTrace(System.err);
			logger.warn("Failed to send email notification: " + ex.getMessage());
		}
	}

	@Override
	public void deleteById(Integer tweetId) {
		logger.trace(() -> "Deleting tweet with ID: " + tweetId);
		this.tweetRepository.deleteById(tweetId);
	}

	@Override
	public Tweet findById(Integer tweetId) {
		logger.trace(() -> "Finding tweet with ID: " + tweetId);
		return this.tweetRepository.findById(tweetId);
	}

	@Override
	public List<Tweet> findAll() {
		logger.trace("Finding all tweets");
		return this.tweetRepository.findAll();
	}

	@Override
	public List<Tweet> findAllByUsername(String username) {
		logger.trace(() -> "Finding all tweets by username: " + username);
		return this.tweetRepository.findAllByUsername(username);
	}

	@Override
	public List<Tweet> findAllContainingHashTag(String hashTag) {
		logger.trace(() -> "Finding all tweets containing hash tag: " + hashTag);
		return this.tweetRepository.findAllContaining("#" + hashTag);
	}

	@Override
	public List<Tweet> findAllMentioningUsername(String username) {
		logger.trace(() -> "Finding all tweets mentioning username: " + username);
		return this.tweetRepository.findAllContaining("@" + username);
	}

}