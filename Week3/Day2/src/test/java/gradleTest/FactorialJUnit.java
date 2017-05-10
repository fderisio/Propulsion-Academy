package gradleTest;

import static org.junit.Assert.*;
import static gradleTest.Factorial.factorial;

import org.junit.Test;
import org.junit.Rule;
import org.junit.rules.ExpectedException;

public class FactorialJUnit {
	@Rule
	public ExpectedException exception = ExpectedException.none();
	
	@Test
	public void FactorialTest() {
		assertEquals(6 , factorial(3),0);
		assertEquals(1 , factorial(0),0);
	}
	
	@Test
	public void negativeValue() {
		exception.expect(IllegalArgumentException.class);
		exception.expectMessage("Only positive");

		// factorial(-1);
		factorial(Integer.MIN_VALUE);
	}
}
