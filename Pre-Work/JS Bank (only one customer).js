var bank = new Object();

// Add Customer
bank.addCustomer = function(customer) {
	this.customer = customer;
	this.account = 0;
  	console.log("The new customer is: " + customer);
};

bank.addCustomer("Sheldor"); // The new customer is: Sheldor


// Print Account
bank.printAccount = function(customer) {
	console.log(customer + "´s account is " + this.account);
}

bank.printAccount("Sheldor"); // Sheldor´s account is 0


// Deposit Amounts
bank.deposit = function(customer,dep) {
	return this.account += dep;
}

bank.deposit("Sheldor", 10);
bank.printAccount("Sheldor"); // Sheldor´s account is 10


// Withdrawings
bank.withdraw = function(customer, withd) {
	if (withd > this.account) {
		console.log("Transaction not possible. Not enough money in the account");
	} else {
		return this.account -= withd;
	}
}

bank.withdraw("Sheldor", 2);
bank.printAccount("Sheldor"); // Sheldor´s account is 8

/*// List All (on going)
function list() {
for (var i = 0; i < customers.length; i++) {
console.log(customers[i].customer);
}
}

list();*/