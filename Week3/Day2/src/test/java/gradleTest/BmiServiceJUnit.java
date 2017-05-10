package gradleTest;

import static org.junit.Assert.*;
import org.junit.Test;

public class BmiServiceJUnit {

	BmiService bmiService = new BmiService();

	@Test
	public void knownValues() {
		assertEquals(24.69, bmiService.calculate(80, 1.8), 0.01);
	}

	@Test
	public void edgeCases() {
		assertEquals(0, bmiService.calculate(0, 1.8), 0.01);
		assertEquals(Double.POSITIVE_INFINITY, bmiService.calculate(80, 0), 0.01);
	}

}
