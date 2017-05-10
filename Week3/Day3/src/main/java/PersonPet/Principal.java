package PersonPet;

import java.util.Set;
import java.util.HashSet;
import oop.AnimalInterface;
import oop.Bird;
import oop.Cat;
import oop.Dog;

public class Principal {
	
	public static void main(String[] args) {
		//List<Animal> animals = new ArrayList();
		Set<AnimalInterface> animals = new HashSet<>();
		
		animals.add(new Dog("Fido"));
		animals.add(new Cat("Blacky"));
		animals.add(new Bird("Fidy"));
		animals.add(new Dog("Daisy"));

		// System.out.println("Animals: " + animals);
		
		for (AnimalInterface animal : animals) {
			System.out.println(animal.getName() + " says " + animal.speak());
		}
	}
	
}
