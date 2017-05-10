package gradleTest;

import static org.junit.Assert.*;

import org.junit.Test;

public class FibonacciJUnit {

	@Test
	public void test() {
		assertEquals(13 , Fibonacci.fibonacci(7),0); 
		assertEquals(102334155 , Fibonacci.fibonacci(40),0);
	}

}
