package PersonPet;

import java.util.*;

public class Person implements AnimalInterface {
		// final fields makes class Person immutable
		private final String firstName;
		private final String lastName;
		private final int age;
		private final List<Pet> pets = new ArrayList<>();
		
		// constructor
		public Person(String firstName, String lastName, int age) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
		}


		@Override
		public String speak() {
			return "Hi!";
		}

		@Override
		public String getName() {
			return this.firstName + " " + this.lastName;
		}
		
		//methods
		public String getFirstName() {
			return firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public int getAge() {
			return age;
		}
		
		public List<Pet> getPets() {
			return this.pets;
		}


		@Override
		public String toString() {
			return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", pets=" + pets
					+ "]";
		}
		
	
}
