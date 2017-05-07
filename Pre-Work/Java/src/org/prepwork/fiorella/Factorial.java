package org.prepwork.fiorella;
import java.util.stream.IntStream;

public class Factorial {

	public static int factorial(int n) { // n! = n × (n-1)! - Recursion
			if (n == 0) {
	    		return 1;
	  		}
	  		return n * factorial(n - 1);
	}
	
	// Iterative Loop
	

	public static void main(String[] args) {
		IntStream.rangeClosed(0, 5).forEach(n -> print(n));
	}

	private static void print(int n) {
		System.out.println(n + "! = " + factorial(n));
	}

}