package Generics;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ListSetMap {
	
	public static void main(String[] args) {
		
		Set<Number> numbers1 = new HashSet<Number>();
		numbers1.add(42);
		numbers1.add(12);
		numbers1.add(20000);
		numbers1.add(20000);
		System.out.println("Number Set: " + numbers1);
		
		Map<Integer, String> numbers2 = new HashMap<>();
		numbers2.put( new Integer(1), "one");
		numbers2.put( new Integer(2), "two");;
		System.out.println(numbers2);
		
		Map< Integer, List<String> > numbers3 = new HashMap<>();
		numbers3.put( new Integer(1), Arrays.asList("one", "eins"));
		numbers3.put( new Integer(2), Arrays.asList("one", "eins"));
		System.out.println(numbers3);
		
		
		DataHolder<String> dataHolder1 = new DataHolder<>("foo");
		final String data1 = dataHolder1.getData();
		//		if (data1 instanceof String) {
		//			System.out.println(((String) data1).toUpperCase());
		//		}
		System.out.println(data1.toUpperCase());
		System.out.println(data1);

		DataHolder<Integer> dataHolder2 = new DataHolder<>(new Integer(42));
		final Integer data2 = dataHolder2.getData();
		//		if (data2 instanceof String) {
		//			// do something with text
		//		}
		//		else if (data2 instanceof Number) {
		//			// do something with number
		//		}
		System.out.println(data2);
	}
}
