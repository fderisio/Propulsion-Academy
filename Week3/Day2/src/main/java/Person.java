
public class Person {
	// final fields makes class Person immutable
	private final String firstName;
	private final String lastName;
	private final int age;
	
	// constructor
	public Person(String firstName, String lastName, int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	//methods
	public String getFirstName() {
		return firstName;
	}

//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}

	public String getLastName() {
		return lastName;
	}

//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}

	public int getAge() {
		return age;
	}

//	public void setAge(int age) {
//		this.age = age;
//	}
	
	public String getFullName() {
		return firstName + " " + lastName;
	}

	public static void printPeople(Person... people) {
        for(Person person: people)
        System.out.println(person);
	}
	
	@Override
	public String toString() {
		//return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + "]";
		
		return new StringBuilder("Person [") 
				.append("firstName=").append (this.firstName).append(", ")
				.append("lastName=").append (this.lastName).append(", ")
				.append("age=").append (this.age)
				.append("]")
				.toString();
	}
	
	
	public static void main(String[] args) {
		// creates object
		Person person = new Person("Julia", "Johnson", 35);

		// print fields separately
		System.out.println(person.firstName);
		System.out.println(person.lastName);
		System.out.println(person.age);
		
		// change properties
//		person.setFirstName("Susan");
//		person.setLastName("Smith");
//		person.setAge(25);
		
		// print toString()
		System.out.println(person.toString());
		
		
		System.out.println(person.getFullName());
		printPeople(person);
		
	}
	
}


