package Shape;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.offset;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Test;

public class ShapeTest {

	@Test
	public void circle() {
		Circle circle = new Circle(2.5);
		// assertEquals("area of circle", 19.63, circle.getArea(), 0.01);
		assertThat(circle.getArea()).isEqualTo(19.63, offset(0.01));
	}

	@Test
	public void triangle() {
		Triangle triangle = new Triangle(2.5, 3);
		// assertEquals("area of triangle", 3.75, triangle.getArea(), 0.0);
		assertThat(triangle.getArea()).isEqualTo(3.75);
	}

	@Test
	public void rectangle() {
		Rectangle rectangle = new Rectangle(2, 3);
		// assertEquals("area of rectangle", 6, rectangle.getArea(), 0.0);
		assertThat(rectangle.getArea()).isEqualTo(6);
	}

	@Test
	public void square() {
		Square square = new Square(2);

		// assertEquals("area of square", 4, square.getArea(), 0.0);
		assertThat(square.getArea()).isEqualTo(4);

		assertEquals("width and height of a square must be equal",
			square.getWidth(), square.getHeight(), 0.1);

		assertThat(square).isInstanceOf(Rectangle.class);
	}

	@Test
	public void listOfShapes() {
		List<Shape> shapes = new ArrayList<>();
		shapes.add(new Circle(4));
		shapes.add(new Square(2));
		shapes.add(new Square(2));
		shapes.add(new Rectangle(2, 3));
		shapes.add(new Triangle(3, 2));

		// Uncomment to see results of toString().
		// System.out.println(shapes);

		// 5 since lists allow duplicates
		assertEquals(5, shapes.size());
	}

	@Test
	public void setOfShapes() {
		Set<Shape> shapes = new HashSet<>();
		shapes.add(new Circle(4));
		shapes.add(new Circle(4));
		shapes.add(new Circle(4));
		shapes.add(new Square(2));
		shapes.add(new Square(2));
		shapes.add(new Rectangle(2, 3));
		shapes.add(new Rectangle(2, 3));
		shapes.add(new Triangle(3, 2));
		shapes.add(new Triangle(3, 2));

		// Uncomment to see results of toString().
		// System.out.println(shapes);

		// 4 since sets don't allow duplicates, AND since
		// we implemented 
		assertEquals(4, shapes.size());
	}


}
