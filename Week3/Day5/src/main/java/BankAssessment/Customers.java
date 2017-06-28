package BankAssessment;

import java.util.concurrent.atomic.AtomicInteger;

public class Customers {
	
	private static final AtomicInteger idGenerator = new AtomicInteger();
	private String name;
	private final String id;
	private Accounts account;
	
	
	public Customers(String name) {
		this.name = name;
		this.id = "" + idGenerator.incrementAndGet(); // "" converts integer to string
		this.account = new Accounts();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public Accounts getAccount() {
		return account;
	}

	@Override
	public String toString() {
		return "Customer´s Name: " + name + ", ID: " + id + account.toString();
	}

}
