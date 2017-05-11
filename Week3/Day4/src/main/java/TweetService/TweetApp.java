package TweetService;

import java.util.Scanner;

public class TweetApp extends TweetService{
	
	public static void main(String[] args) {
		Scanner scan = new Scanner (System.in);
		System.out.println("Welcome!");
		System.out.println("Write your tweet in the next line");
		
		String text = scan.nextLine();
		Tweet tweet1 = new Tweet(text);
		
		TweetService.save(tweet1);
		System.out.println("Congratulations! You guessed in " + counter + " tries!");
	}
	
	
}
