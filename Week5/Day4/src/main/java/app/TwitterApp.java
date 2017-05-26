package app;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

import org.springframework.expression.Operation;

import domain.Tweet;
import service.TweetService;
import service.UserService;

/**
 * Command-line application that serves as a text-based
 * user interface for the Twitter application.
 */
public class TwitterApp {

	private static final UserService userService = new DefaultUserService(new InMemoryUserRepository());
	private static final TweetService tweetService = new DefaultTweetService(new InMemoryTweetRepository());

	private static final Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		while (true) {
			Operation operation = getOperationFromUser();

			switch (operation) {
				case EXIT: {
					banner("Exiting... 👋");
					System.exit(0);
				}
				case NEW_USER: {
					registerNewUser();
					break;
				}
				case DELETE_USER: {
					deleteUser();
					break;
				}
				case FIND_USER_BY_ID: {
					findUserById();
					break;
				}
				case FIND_USER_BY_USERNAME: {
					findUserByUsername();
					break;
				}
				case FIND_ALL_USERS: {
					findAllUsers();
					break;
				}
				case NEW_TWEET: {
					createNewTweet();
					break;
				}
				case DELETE_TWEET: {
					deleteTweet();
					break;
				}
				case FIND_TWEET_BY_ID: {
					findTweet();
					break;
				}
				case FIND_ALL_TWEETS: {
					findAllTweets();
					break;
				}
				case FIND_TWEETS_BY_USER_ID: {
					findAllTweetsByUserId();
					break;
				}
				case FIND_TWEETS_BY_USERNAME: {
					findAllTweetsByUsername();
					break;
				}
				default:
					System.err.printf("Unsupported operation: %s%n%n", operation.ordinal());
					break;
			}
		}
	}

	// =========================================================================

	private static void printTweet(Tweet tweet) {
		User author = tweet.getAuthor();
		LocalDate tweetDate = tweet.getDateCreated().toLocalDate();
		System.out.printf("%s%n\tOn %s, @%s tweeted: %s%n", tweet.getId(), tweetDate, author.getUsername(),
			tweet.getText());
	}

	private static void printUser(User user) {
		System.out.println("@" + user.getUsername());
		System.out.println("  ID:            " + user.getId());
		System.out.println("  Name:          " + user.getFirstName() + " " + user.getLastName());
		System.out.println("  Member since:  " + user.getDateCreated().toLocalDate());
		System.out.println("  Tweets:        ");
		user.getTweets().forEach(TwitterApp::printTweet);
	}

	private static void findAllUsers() {
		banner("Users");
		System.out.println();

		List<User> users = userService.findAllUsers();
		if (users.isEmpty()) {
			System.out.println("No Tweeters!");
		}
		else {
			users.forEach(TwitterApp::printUser);
		}
	}

	private static void registerNewUser() {
		banner("Register New User");

		prompt("First Name");
		String firstName = scanner.nextLine();

		prompt("Last Name");
		String lastName = scanner.nextLine();

		prompt("Email Address");
		String email = scanner.nextLine();

		prompt("Username");
		String username = scanner.nextLine();

		prompt("Password");
		String password = scanner.nextLine();

		User user = new User(firstName, lastName, email, username, password);
		userService.registerNewUser(user);
	}

	private static void findUserById() {
		banner("Find User By ID");

		prompt("User ID");
		String id = scanner.nextLine();

		System.out.println();
		User user = userService.findUserById(id);
		if (user == null) {
			System.err.println("Could not find user with ID: " + id);
		}
		else {
			printUser(user);
		}
	}

	private static void findUserByUsername() {
		banner("Find User By Username");

		prompt("User Username");
		String username = scanner.nextLine();

		System.out.println();
		User user = userService.findUserByUsername(username);
		if (user == null) {
			System.err.println("Could not find user with username: " + username);
		}
		else {
			printUser(user);
		}
	}

	private static void deleteUser() {
		banner("Delete User");

		prompt("User ID");
		String id = scanner.nextLine();

		userService.deleteUser(id);

		// We assume the user got deleted, but we don't
		// actually know if the operation succeeded.
		// For example, if there is no such user, the
		// UserService doesn't inform us of that. :(
		System.out.println("Deleted user with ID: " + id);
	}

	private static void createNewTweet() {
		banner("New Tweet");

		prompt("User ID");
		String id = scanner.nextLine();
		User author = userService.findUserById(id);

		if (author == null) {
			System.err.println("Could not find user with ID: " + id);
		}
		else {
			prompt("Tweet");
			String text = scanner.nextLine();
			Tweet tweet = new Tweet(author, text);
			author.addTweet(tweet);
			tweetService.saveTweet(tweet);

			printUser(author);
		}
	}

	private static void deleteTweet() {
		banner("Delete Tweet");

		prompt("Tweet ID");
		String id = scanner.nextLine();

		tweetService.deleteTweet(id);

		// We assume the tweet got deleted, but we don't
		// actually know if the operation succeeded.
		// For example, if there is no such tweet, the
		// TweetService doesn't inform us of that. :(
		System.out.println("Deleted tweet with ID: " + id);
	}

	private static void findTweet() {
		banner("Find Tweet");

		prompt("Tweet ID");
		String id = scanner.nextLine();

		System.out.println();
		Tweet tweet = tweetService.findTweet(id);
		if (tweet == null) {
			System.err.println("Could not find tweet with ID: " + id);
		}
		else {
			printTweet(tweet);
		}
	}

	private static void findAllTweets() {
		banner("Tweets");
		System.out.println();

		List<Tweet> tweets = tweetService.findAllTweets();
		if (tweets.isEmpty()) {
			System.out.println("No Tweets!");
		}
		else {
			tweets.forEach(TwitterApp::printTweet);
		}
	}

	private static void findAllTweetsByUserId() {
		banner("Tweets by User ID");
		System.out.println();

		prompt("User ID");
		String id = scanner.nextLine();

		List<Tweet> tweets = tweetService.findAllTweetsByUserId(id);
		if (tweets.isEmpty()) {
			System.out.println("No tweets for user with ID: " + id);
		}
		else {
			tweets.forEach(TwitterApp::printTweet);
		}
	}

	private static void findAllTweetsByUsername() {
		banner("Tweets by Username");
		System.out.println();

		prompt("Username");
		String username = scanner.nextLine();

		List<Tweet> tweets = tweetService.findAllTweetsByUsername(username);
		if (tweets.isEmpty()) {
			System.out.println("No tweets for @" + username);
		}
		else {
			tweets.forEach(TwitterApp::printTweet);
		}
	}

	// =========================================================================

	private static Operation getOperationFromUser() {
		banner("Menu");

		while (true) {
			System.out.println();
			for (Operation current : Operation.values()) {
				System.out.println(current);
			}

			prompt("Operation");
			if (scanner.hasNextInt()) {
				int input = scanner.nextInt();
				scanner.nextLine();
				Operation operation = Operation.fromOrdinal(input);
				if (operation == null) {
					System.err.println("Invalid operation: " + input);
				}
				else {
					return operation;
				}
			}
			else {
				if (scanner.hasNextLine()) {
					System.err.println("Invalid operation: " + scanner.nextLine());
				}
			}
		}
	}

	private static void prompt(String label) {
		System.out.printf("%nEnter %s: ", label);
	}

	private static void banner(String header) {
		System.out.println();
		System.out.println("=================================================");
		System.out.println("=== " + header);
		System.out.println("=================================================");
	}

}