package Shape;

public class Rectangle extends AbstractShape{

	private final double height;
	private final double width;
	
	public Rectangle(double width2, double width3) {
		this.height = width2;
		this.width = width3;
	}
	
	public final double getHeight() {
		return this.height;
	}
	public final double getWidth() {
		return this.width;
	}
	
	@Override
	public final double getArea(){
		return this.height * this. width;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(height);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		temp = Double.doubleToLongBits(width);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rectangle other = (Rectangle) obj;
		if (Double.doubleToLongBits(height) != Double.doubleToLongBits(other.height))
			return false;
		if (Double.doubleToLongBits(width) != Double.doubleToLongBits(other.width))
			return false;
		return true;
	}
	
	
}
