package gradleTest;

import static org.junit.Assert.*;

import java.rmi.UnexpectedException;

import org.junit.Rule;

// en vez de:
/*import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;*/

import org.junit.Test; // imports a class
import org.junit.rules.ExpectedException;

public class HelloJUnit {

	@Rule // tests exception
	public ExpectedException exception = ExpectedException.none();
	public Timeout timeout = Timeout.millis(20);
	
	public void timeouts() throws UnexpectedException {
		Thread.sleep(10);
	}
	
	@Test
	public void firstTest() {
		assertTrue( 2 * 2 == 4 );
		assertFalse("2 * 2 == 10", 2 * 2 == 10);
		assertEquals( 2 * 2, 4 ); // condition, result
		assertNotEquals(2, 4);
		assertNull(null);
		String name = "Julia";
		assertNotNull(name);
		assertEquals("Julia", name); // cuando define un error, el error aparece en []
	}
	
	@Test // method add (UN test por method!!!!)
	public void add() {
		Calculator calculator = new Calculator();
		//assertEquals(10, calculator.add(7, 4), 0);
		assertEquals(10, calculator.add(7.0, 3.00001), 0.0001);
	}
	
	public void exceptions() {
		blowUp();
	}

	private void blowUp() {
		throw new RuntimeException("Boom!");
	}

}
