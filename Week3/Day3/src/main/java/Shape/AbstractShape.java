package Shape;

public abstract class AbstractShape implements Shape{
	
	@Override
	public final String toString() {
		return String.format("%s[area = %s]", getClass().getSimpleName(), getArea());
	}
	
	@Override
	public abstract int hashCode();
	
	@Override
	public abstract boolean equals(Object obj);

}
