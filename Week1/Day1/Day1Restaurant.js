// Dish class
function Dish(name, price, ingredients) {
	this.name = name;
	this.price = price;
	this.ingredients = ingredients;
}

// Restaurant Class
function Restaurant() {
	this.orders = [];
}
var restaurant = new Restaurant();

// Ingredient Class
function Ingredient(name, cost) {
	this.name = name;
	this.cost = cost;
}

// Customers Class
function Customers(name, id) {
	this.name = name;
	this.id = id;
}

// adding ingredients & prices
var cheese = new Ingredient('Cheese', 5);
var pepperoni = new Ingredient('Pepperoni', 2);
var dough = new Ingredient('Dough', 5);
var tomato = new Ingredient('Tomato', 5);
var lettuce = new Ingredient('Lettuce', 5);

// adding dishes
var pizza = new Dish('Pizza');
var salad = new Dish('Salad');
var pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
var salad = new Dish('Salad', 30, [lettuce, cheese, tomato]);

// adding customers
var pluto = new Customers('Pluto', 1);
var goofy = new Customers('Goofy', 2);


// Restaurant functions:
Restaurant.prototype.orderDish = function(dish, customer) {
	this.orders.push(dish);
};
restaurant.orderDish(pizza);
restaurant.orderDish(salad);

Restaurant.prototype.printOrders = function() {
 	for (let i = 0; i < this.orders.length; i++) { 
 		console.log('Order #' + i + ": " + this.orders[i].name); // Order #0: Pizza
 	}
};
restaurant.printOrders();

console.log(pizza);


// Dish Cost & Profit
Dish.prototype.cost = function() {
	var totalCost = 0;
	for (let i = 0; i < this.ingredients.length; i++) {
		//console.log('each ingredient costs', this.ingredients[i].cost);
		totalCost += this.ingredients[i].cost;
	}
	total = totalCost + 10;
	return 'The ' + this.name + ' costs ' + total;
};
pizza.cost();

Dish.prototype.profit = function(dish) {
	//console.log(this.cost());
	//console.log(this.price);
	//var dishProfit = this.price - this.cost();
	//return dishProfit;
	return 'The profit is ' + (this.price - this.cost());
	//console.log(dishProfit);
};
pizza.profit();


// Restaurant Check
Restaurant.prototype.printCheck = function() {
	var totalCheck = 0;
	for (let i = 0; i < this.orders.length; i++) { 
 		console.log('Order #' + i + ": " + this.orders[i].name + " - " + this.orders[i].price); // Order #0: Pizza
 		totalCheck += this.orders[i].price;
 	}
 	console.log('Total: ' + totalCheck);
};
restaurant.printCheck();

restaurant.orderDish(pizza, goofy);
restaurant.printCheck(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.printCheck(pluto);