package service;

import java.util.Scanner;

public class GreetingApp {

	public static void main(String[] args) {
		MessageService messageService = new GermanMessageService();
		
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner (System.in);
		System.out.println("Whats your name?");
		String name = scanner.nextLine();
		System.out.println(messageService.generateMessage(name));
		

	}
}
