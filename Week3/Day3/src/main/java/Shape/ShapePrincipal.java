package Shape;

import java.util.HashSet;
import java.util.Set;
import Shape.Circle;
import Shape.Square;
import Shape.Rectangle;
import Shape.Triangle;

public class ShapePrincipal {
	
	public static void main(String[] args) {
		Set<Shape> shapes = new HashSet<>();
		
		shapes.add(new Square(5));
		shapes.add(new Triangle(2, 3));
		shapes.add(new Rectangle(7, 3));
		shapes.add(new Circle(4));
		
		for (Shape shape : shapes) {
			System.out.println("The area is " + shape.getArea());
		}
	}
}
