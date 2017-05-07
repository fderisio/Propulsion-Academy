function Bank() {
	this.customers = {};
}

var bank = new Bank();

// Add Customer
Bank.prototype.addCustomer = function(customer) {
	this.customers[customer] = 0;
	console.log("The new customer is: " + customer);
};

bank.addCustomer("Sheldor"); // The new customer is: Sheldor


// Print Account
Bank.prototype.printAccount = function(customer) {
	console.log(customer + "´s account is: " + this.customers[customer]);
};

bank.printAccount("Sheldor"); // Sheldor´s account is 0


// Deposit Amounts
Bank.prototype.deposit = function(customer,dep) {
	return this.customers[customer] += dep;
};

bank.deposit("Sheldor", 10);
bank.printAccount("Sheldor"); // Sheldor´s account is 10


// Withdrawings
Bank.prototype.withdraw = function(customer, withd) {
	if (this.customers[customer] <  withd) {
			console.log("Transaction not possible. Not enough money in the account");
		} else {
			return this.customers[customer] -= withd;
		}
};

bank.withdraw("Sheldor", 2);
bank.printAccount("Sheldor"); // Sheldor´s account is 8
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldor'); 
bank.printAccount('Raj');
bank.withdraw("Sheldor",200); // Error message shown

// List All
Bank.prototype.list = function() {
	console.log("List of all the customers of the bank and their accounts: ");
	for (key in this.customers) { 
        console.log(key + " - Account: " + this.customers[key]);
    }
};

bank.list();