package BankAssessment;

import static org.junit.Assert.*;

import org.junit.Test;

public class BankServiceTest {

	BankService bankService = new BankService();
	
	Customers customer1 = new Customers("Kate Johnson");
	Customers customer2 = new Customers("James Smith");
	Customers customer3 = new Customers("Lucy Robertson");

	@Test
	public void saveTest() {
		bankService.add(customer1);
		assertTrue(bankService.size()==1);
	}

	@Test
	public void deleteTest() {
		bankService.delete(customer1.getId());
		assertEquals(0, bankService.size());
	}
	
	@Test
	public void searchTest() {
		bankService.add(customer1);
		bankService.add(customer2);
		bankService.add(customer3);
		bankService.search("son");
		assertEquals(1, bankService.listAll().size()-2);
	}
	
	
}
