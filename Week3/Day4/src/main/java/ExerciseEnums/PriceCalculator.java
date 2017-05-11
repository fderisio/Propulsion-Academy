package ExerciseEnums;

public class PriceCalculator {
	
	public static double calculatePrice(Product product) {
		return product.getPrice() * product.getSize().getSurchargePercentage();
	}
	
}
