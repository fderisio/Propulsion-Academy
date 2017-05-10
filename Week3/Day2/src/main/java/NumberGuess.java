import java.util.Random;
import java.util.Scanner;

public class NumberGuess {

	public static void main(String[] args) {
		
		// creates random number
		Random random = new Random(System.currentTimeMillis());  // recommended to give a seed to provide a real random number
		int randomNum = random.nextInt(10); // (int) (Math.random() * 10) + 1;
		System.out.println("I'm thinking of a random number from 1 to 10.");
		
		// initialize scanner & variables
		@SuppressWarnings("resource")
		Scanner scan = new Scanner (System.in);
		int guess;
		boolean guessed = false;
		int counter = 0;
		
		// play
		while (guessed == false) {
			System.out.println("Guess what it is: ");
			guess = scan.nextInt();
			counter++;
			if (guess == randomNum) {
				guessed = true;
				break;
			} else if ( guess > randomNum) {
				System.out.println("Nope. It's lower than that. Try again." );
			} else if ( guess < randomNum) {
				System.out.println("Nope. It's higher than that. Try again.");
			}
		}
		
		System.out.println("Congratulations! You guessed in " + counter + " tries!");
	}

}
