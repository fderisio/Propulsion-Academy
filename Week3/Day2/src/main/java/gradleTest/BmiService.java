package gradleTest;

public class BmiService {

	public double calculate(double weight, double height) {
		return Math.round(weight / (height * height));
	}

}
