package gradleTest;
import java.util.Scanner;

public class BmiCalculator {
	
	
	
	public static void main(String[] args) {
		System.out.println("Let's calculate your BMI (kg/m^2)");
		//try (Scanner scan = new Scanner (System.in)) { // closes the scanner - necessary since Java 7 (unless you supress warnings)
		
		@SuppressWarnings("resource")
		Scanner scan = new Scanner (System.in);
		System.out.println("What is your weight in kilograms?");
    	double weight = scan.nextDouble(); // nextDouble
    	
    	System.out.println("What is your height in meters?");
    	double height = scan.nextDouble();
   
    	/*double bmi =  Math.round(weight / (height * height));*/
    	BmiService bmiService = new BmiService();
    	System.out.println("Your BMI is: " + bmiService.calculate(weight, height));
	
	}	
		
}
