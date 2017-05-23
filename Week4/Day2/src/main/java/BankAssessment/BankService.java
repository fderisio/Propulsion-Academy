package BankAssessment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

public class BankService {
	
	HashMap<String, Customers> bankDatabase = new HashMap<>();
	
	// add new customer
	public void add(Customers customer) {
		bankDatabase.put(customer.getId(), customer);
		System.out.println("A new account for: " + customer.getName() + " has been created.");
		System.out.println("Customer´s ID: " + customer.getId());
	}
		
	// remove customer
	public void delete(String id) {
		// checks if the ID exists
		for (Customers customer : allCustomers()) {
			if (customer.getId().contains(id)) {
				bankDatabase.remove(id);	
				System.out.println("Customer deleted successfully. Remained customers: " + bankDatabase.size());
			}
		}
		System.out.println("The given ID does not exist");
	}	
			
	// find customer by ID
	public Customers findById(String id) {
		Customers found = bankDatabase.get(id);
		System.out.println("With the given ID, we found the following client: " + found.getName());
		return found;
	}
		
	// for testing proposes
	public int size(){
		return bankDatabase.size();
	}
		
	// list all customers
	public List<Customers> listAll() {
		ArrayList<Customers> customersList = new ArrayList<>(this.bankDatabase.values());
		//prints list nicely
		for (Iterator<Customers> i = customersList.iterator(); i.hasNext();) {
		    Customers item = i.next();
		    System.out.println(item);
		}
		return customersList;
	}
		
	// search for a specific string
	public List<Customers> search(String someString) {
		System.out.println("Customers´ names found with '" + someString + "':");
		List<Customers> mentionedCustomers = new ArrayList<Customers>();
		for (Customers customer : allCustomers()) {
			if (customer.getName().contains(someString)) {
				mentionedCustomers.add(customer);
			}
		}
		// prints mentioned customers nicely
		for (Iterator<Customers> i = mentionedCustomers.iterator(); i.hasNext();) {
		    Customers item = i.next();
		    System.out.println(item);
		}
		return mentionedCustomers;
	}
	
	public List<Customers> allCustomers() {
		return new ArrayList<>(this.bankDatabase.values());
	}
}
