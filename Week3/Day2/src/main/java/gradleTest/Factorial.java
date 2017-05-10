package gradleTest;
//package org.prepwork.fiorella;
import java.util.stream.IntStream;

public class Factorial {

	public static long factorial(long n) { // n! = n × (n-1)! - Recursion // int solo imprime hasta 14 caracteres
		if (n < 0) {
			throw new IllegalArgumentException("Only positive values are permitted");
		}	
		
		if (n == 0) {
	    		return 1;
	  		}
	  		return n * factorial(n - 1);
	}
	
// BONUS Iterative Loop
//	 double fact = 1;
//     if (n == 0) { // if (n == BigInteger.ZERO)
//         fact = 1; // return BIgInteger.ONE;
//     } else {
//         for (int i = 1; i<=n; i++) {
//             fact = fact * i; // fact *= i
//		 }
//	 }
//  return fact;

	public static void main(String[] args) {
		IntStream.rangeClosed(0, 20).forEach(n -> print(n)); // functional programming in JSE8 // closed = including the last number
		// rangeCLosed(1, 8).reduce(1) // reduce no incluye el ultimo numero
	}

	private static void print(int n) {
		System.out.println(n + "! = " + factorial(n));
	}

}