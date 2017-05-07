package org.prepwork.fiorella;
import java.util.Scanner;

public class Hello {
 
    @SuppressWarnings("resource")
	public static void main (String[] args) {
		Scanner scan = new Scanner (System.in);
    	String name; 
    	name = scan.nextLine();
    	if (name.trim() .equals("")) {
    		System.out.println("Hello, Unknown!");
    	} else {
   		System.out.println("Hello, " + name + "!");
    	}
    }
    
}