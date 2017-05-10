package oop;

public class Inheritance {
	
	public static void main(String[] args) {
//		Integer num1 = new Integer(42);
//		Double num2 = new Double(3.14);
		
		Number num1 = fromUser(); // type of the reference = concrete type object
		Number num2 = new Double(3.14);
		
		//num2.isInfinite(); // solo si se define como Double
		
		if (num1 instanceof Double) {
			System.out.println("num2 is Double");
			boolean infinite = ((Double) num2).isInfinite(); //((Double) variable).method--> casts!!
			System.out.println("num2 is infinite: " + infinite);
		} else {
			System.out.println("is not a Double");
		}
		
		if (num2 instanceof Double) {
			System.out.println("num2 is Double");
		} else {
			System.out.println("is not a Double");
		}
	}
//super.getColor() --> method from the "super"class
	
	private static Integer fromUser() {
		return new Integer(42);
	}
	
}
