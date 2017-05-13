package TweetService;

import java.util.Scanner;

public class TweetApp{
	
	static TweetService tweetService = new TweetService();
	
	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner scan = new Scanner (System.in);
		System.out.println("Welcome!");
		boolean active = true;
		int option;
		int option2;
		String text1, text2, text3, text4;
		welcomeMenu();
		
		while (active == true) {
		option = scan.nextInt();
		scan.nextLine();
			
			if (option == 1) {
				System.out.println("Write your tweet in the next line");
				text1 = scan.nextLine();
				tweetService.save(new Tweet(text1));
				System.out.println("Press 5 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
			
			} else if (option == 2) {
				System.out.println("Enter the ID Nr. of the tweet you want to delete in the next line");
				text2 = scan.nextLine();
				tweetService.delete(text2);
				System.out.println("Press 5 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 3) {
				System.out.println("Enter the ID Nr. of the tweet you want to search in the next line");
				text3 = scan.nextLine();
				tweetService.findById(text3);
				System.out.println("Press 5 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 4) {
				System.out.println("Enter a word to start the search");
				text4 = scan.nextLine();
				tweetService.search(text4);
				System.out.println("Press 5 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else {
				System.out.println("Please enter a number between 1 and 4, press 5 to go to the menu or 0 to escape");
			}
			
		}	
		
	}
	
	public static void welcomeMenu() {
		System.out.println("Press 1 to create a tweet");
		System.out.println("Press 2 to delete a tweet");
		System.out.println("Press 3 to search for a tweet by ID");
		System.out.println("Press 4 to search for a tweet by a word");
	}

	private static void checkMenu(int option2) {
		if (option2 == 5) {
			welcomeMenu();
		} else if (option2 == 0) {
			System.out.println("Good Bye! Have an awesome day :P");
		}
	}
	
}
