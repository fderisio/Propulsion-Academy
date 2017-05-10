package gradleTest;
//package org.prepwork.fiorella;
public class Fibonacci {

	public static int fibonacci(int n) {
				if (n == 0) {
					return 0;
				}
				else if (n == 1) {
					return 1;
				}
				return fibonacci(n - 1) + fibonacci(n - 2);
	}

	public static void main(String[] args) {
		System.out.println(fibonacci(0));  // 0
		System.out.println(fibonacci(1));  // 1
		System.out.println(fibonacci(2));  // 1
		System.out.println(fibonacci(3));  // 2
		System.out.println(fibonacci(7));  // 13
		System.out.println(fibonacci(40)); // 144
	}

// Bonus Work	
	
	// SOLUTION
//	public static void main (String...strings args) {
//		if (args.length !=1) {
//			System.err.println("Error....");
//			System.exit(1);
//		}
//		int n = Integer.parseInt(args[0]); // todo lo que se tipea es string, asi que hay que convertirlo
//		System.out.println(fibonacci(n)); 
//	}
	
	
//	public static void main(String... args) {
//		int num = args.length == 0 ? args[0] : "Please enter a number";
//		System.out.println(fibonacci(num));
//	}
	
}

// OTHER POSSIBILITY
//	if (n == 0) {
//		return 0;
//	} else if (n == 1) {
//		return 1;
//	} else if (n > 1) {
//		int num1 = 0;
//		int num2 = 1;
//		int total = 1;
//		for (int i = 2; i <= n; i++) {
//			total = num1 + num2;
//			num1 = num2;
//			num2 = total; 
//		}	
//		return total;
//	} else {
//		System.out.println("Please enter only numbers greater than 0");
//		return -1;
//	}