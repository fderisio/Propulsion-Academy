var Dish = function(name, price, ingredients) { 
	this.name = name;
	this.price = price;
	this.baseCost = 5;
	this.inrgredients = ingredients;
}

console.log('before method', Dish.prototype);

Dish.prototype.profit = function() {
	var ingredientCost = this.ingredients.reduce(function(acc, inngredient) {
		return ingredient.cost + acc;
	}, 0);
	return this.price - this.baseCost - ingredientCost;
}
Dish.prototype.author = 'Fiorella';
console.log('after method', Dish.prototype);

var salad = new Dish('salad', 15, [
	{ name: 'lechuga', cost: 5 },
	{ name: 'tomate', cost: 2},
	{ name: 'zanahoria', cost: 1}	
]);

console.log(salad.author);
console.log(salad.__proto__ === Dish.prototype);
console.log(salad.profit()); // llama la funcion de arriba


salad.profit = function() {
	console.log('hacked');
}
//console.log(salad.__proto__.profit()); // error porque el prototype de salad no tien ingredientes
console.log(salad.__proto__.profit.call(salad)); // error porque el prototype de salad no tien ingredientes

//!!! 
module.exports = {
	//sumFn: sum,
	Dish: Dish
};