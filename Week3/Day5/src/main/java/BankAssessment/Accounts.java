package BankAssessment;

import java.util.concurrent.atomic.AtomicInteger;

public class Accounts {
	
	private static final AtomicInteger idGenerator = new AtomicInteger();
	public String id;
	public double balance;
	public Customers customer;
	
	public Accounts() {
		this.id = "" + idGenerator.incrementAndGet(); // "" converts integer to string
		this.balance = 0;
	}

	public String getId() {
		return id;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Customers getCustomer() {
		return customer;
	}

	public void setCustomer(Customers customer) {
		this.customer = customer;
	}
	
	public void credit(double amountC) {
		this.balance += amountC;
		System.out.println("The new balance is: " + this.balance);
	}
	
	public void debit(double amountD) {
		if (this.balance < amountD) {
			System.out.println("The account has not enough money to proceed");
		} else {
			this.balance -= amountD;
			System.out.println("The new balance is: " + this.balance);
		}
	}

	@Override
	public String toString() {
		return " - Account´s ID: " + id + ", balance: " + balance;
	}
	
	
}
