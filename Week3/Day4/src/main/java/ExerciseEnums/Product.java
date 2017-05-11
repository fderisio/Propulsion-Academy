package ExerciseEnums;

public class Product {
	// fields
	private String name;
	private Colors color;
	private Size size;
	private Double price;
	
	public Product(String name, Colors color, Size size, Double price) {
		this.name = name;
		this.color = color;
		this.size = size;
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setColor(Colors color) {
		this.color = color;
	}

	public void setSize(Size size) {
		this.size = size;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Colors getColor() {
		return color;
	}

	public Size getSize() {
		return size;
	}
	
	public Double getPrice() {
		return price;
	}
	
	
	
}
