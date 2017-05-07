var customers = {};

function addCustomers(customer) {
	customers[customers.length]= {
		name: customer,
		account: 0
	};
}

addCustomers("Fiore");
