package PersonPet;

public class Pet implements AnimalInterface{
	
	private final String name;
	private final String says;

	public Pet(String name, String says) {
		this.name = name;
		this.says = says;
	}

	@Override
	public String getName() {
		return this.name;
	}

	@Override
	public String speak() {
		return this.says;
	}

	@Override
	public String toString() {
		return "Pet [name=" + this.name + ", says=" + this.says + "]";
	}

}