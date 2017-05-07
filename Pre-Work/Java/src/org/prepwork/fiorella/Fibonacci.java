package org.prepwork.fiorella;
public class Fibonacci {

	public static int fibonacci(int n) {
		if (n == 0) {
			return 0;
		} else if (n == 1) {
			return 1;
		} else if (n > 1) {
			int num1 = 0;
			int num2 = 1;
			int total = 1;
			for (int i = 2; i <= n; i++) {
				total = num1 + num2;
				num1 = num2;
				num2 = total; 
			}	
			return total;
		} else {
			System.out.println("Please enter only numbers greater than 0");
			return -1;
		}
	}

	public static void main(String[] args) {
		System.out.println(fibonacci(0));  // 0
		System.out.println(fibonacci(1));  // 1
		System.out.println(fibonacci(2));  // 1
		System.out.println(fibonacci(3));  // 2
		System.out.println(fibonacci(7));  // 13
		System.out.println(fibonacci(12)); // 144
	}
}
