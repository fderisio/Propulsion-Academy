package BankAssessment;

import java.util.Scanner;

public class BankApp {

	private static BankService bankService = new BankService();
	
	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner scan = new Scanner (System.in);
		System.out.println("Welcome to Niagara Bank!");
		boolean active = true;
		int option;
		int option2;
		String text;
		double amount;
		welcomeMenu();
		
		while (active == true) {
		option = scan.nextInt();
		scan.nextLine();
		
			if (option == 1) {
				System.out.println("Enter customer´s name");
				text = scan.nextLine();
				bankService.add(new Customers(text));
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
			
			} else if (option == 2) {
				System.out.println("Enter the ID Nr. of the customer you want to delete in the next line");
				text = scan.nextLine();
				bankService.delete(text);
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 3) {
				System.out.println("Enter the ID Nr. of the customer you want to search in the next line");
				text = scan.nextLine();
				bankService.findById(text);
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 4) {
				System.out.println("Enter a word to start the search");
				text = scan.nextLine();
				bankService.search(text);
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 5) {
				System.out.println("Make a deposit. Enter customer´s ID:");
				text = scan.nextLine();
				System.out.println("Enter amount to be deposited:");
				amount = scan.nextDouble();
				bankService.findById(text).getAccount().credit(amount);
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 6) {
				System.out.println("Make a withdraw. Enter customer´s ID:");
				text = scan.nextLine();
				System.out.println("Enter amount to be withdrawed:");
				amount = scan.nextDouble();
				bankService.findById(text).getAccount().debit(amount);
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else if (option == 7) {
				bankService.listAll();
				System.out.println("Press 9 to go back to the menu or 0 to escape");
				option2 = scan.nextInt();
				checkMenu(option2);
				
			} else {
				System.out.println("Please enter a number between 1 and 6, press 9 to go to the menu or 0 to escape");
			}
//			} else if (option instanceof String)) {
//			System.out.println("Please enter only a number from 1 to 4, press 5 to go to the menu or 0 to escape");
			
		}	
		
	}
	
	public static void welcomeMenu() {
		System.out.println("Press 1 to add a customer");
		System.out.println("Press 2 to delete a customer by ID");
		System.out.println("Press 3 to search for a customer by ID");
		System.out.println("Press 4 to search for a customer by a word");
		System.out.println("Press 5 to credit account for a customer by ID");
		System.out.println("Press 6 to debit account for a customer by ID");
		System.out.println("Press 7 to list all customers");
	}

	private static void checkMenu(int option2) {
		if (option2 == 9) {
			welcomeMenu();
		} else if (option2 == 0) {
			System.out.println("Good Bye! Have an awesome day :P");
		}
	}
}
