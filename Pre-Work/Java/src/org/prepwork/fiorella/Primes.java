package org.prepwork.fiorella;
import java.util.Arrays;
import java.util.stream.IntStream;

public class Primes {

	private static boolean isPrime (int n) {
		int counter = 2;
		boolean prime = true;
		while ((prime) && (counter!=n)){
		    if (n % counter == 0) {
		    	prime = false;
		    	counter++;
			 }
		}
		return prime;
	}

	public static void main(String[] args) {
		int[] primes = IntStream.iterate(1, n -> n + 1)
				.filter(Primes::isPrime)
				.limit(20)
				.toArray();

		System.out.println(Arrays.toString(primes));
	}

}
