package ExerciseEnums;

import static org.junit.Assert.*;

import org.junit.Test;

public class PriceCalculatorTest {
	
	Colors color1 = Colors.RED;
	Size size1 = Size.XXL;
	Product product1 = new Product("T-Shirt", color1, size1, 20.50);
	
	Colors color2 = Colors.RED;
	Size size2 = Size.S;
	Product product2 = new Product("T-Shirt", color2, size2, 15.00);
	
	@Test
	public void test() {
		assertEquals(22.55, PriceCalculator.calculatePrice(product1), 0);
		assertEquals(15.00, PriceCalculator.calculatePrice(product2), 0);
	}

}
