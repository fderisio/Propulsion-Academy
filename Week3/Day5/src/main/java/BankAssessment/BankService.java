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
		
	// remove a customer
	public void delete(String id) {
		// checks if the ID exists
		for (Customers customer : listAll()) {
			if (customer.getId().contains(id)) {
				bankDatabase.remove(id);	
				System.out.println("Customer deleted successfully. Remained customers: " + bankDatabase.size());
			}
			System.out.println("The given ID does not exists");
		}
	}	
			
	// find customer with ID
	public Customers findById(String id) {
		Customers found = bankDatabase.get(id);
		System.out.println("With the given ID, we found the following client: " + found.getName());
		return found;
	}
		
	// for testing proposes
	public int size(){
		return bankDatabase.size();
	}
		
	// list all customer
	public List<Customers> listAll() {
		ArrayList<Customers> customersList = new ArrayList<>(this.bankDatabase.values());
		for (Iterator<Customers> i = customersList.iterator(); i.hasNext();) {
		    Customers item = i.next();
		    System.out.println(item);
		}
		return customersList;
	}
		
	// search for a specific string
	public List<Customers> search(String someString) {
		List<Customers> mentionedCustomers = new ArrayList<Customers>();
		for (Customers customer : listAll()) {
			if (customer.getName().contains(someString)) {
				mentionedCustomers.add(customer);
			}
		}
		System.out.println("The following customers with the word " + someString + " were found: " + mentionedCustomers);
		return mentionedCustomers;
	}
	
}
