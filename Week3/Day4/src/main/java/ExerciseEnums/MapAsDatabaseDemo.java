package ExerciseEnums;

import java.util.HashMap;
import java.util.Map;

public class MapAsDatabaseDemo {
	
	public static void main(String[] args) {
		
		//HashMap<Key, Value> Key: name of a person, or product code
		Map<String, Product> hashmap1 = new HashMap <>();
		Product product1 = new Product("Jeans", Colors.BLUE, Size.M, 159.90);
		Product product2 = new Product("T-Shirt", Colors.BLUE, Size.S, 99.90);
		
		// create
		hashmap1.put(product1.getName(), product1);
		hashmap1.put(product2.getName(), product2);
		System.out.println("Created: " + hashmap1);
		
		// read database
		Product found = hashmap1.get("jeans");
		Product found2 = hashmap1.get("shoes");
		System.out.println("Read: " + found);
		System.out.println("Read: " + found2);
		
		// update
		found = hashmap1.get("jeans");
		found.setSize(Size.S);
		System.out.println("Update: " + hashmap1);
		
		// remove
		hashmap1.remove("jeans");
		System.out.println("Deleted: " + hashmap1);
		
	}
}
