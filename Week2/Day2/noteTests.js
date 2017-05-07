var test = require('tape');
var modules = require('./bootcampNotes4.js');
var sumFn = modules.sumFn;
var Dish = modules.Dish;

// para no repetir la creacion del plato everytime
var createPizza = function(ingredients) {
	return new Dish('Pizza', 20, ingredients);
};

beforeEach.
console.log(salad.constructor);
console.log(salad.__proto__);

// each test is independent from each one
test('Dish class', function(t) {
	t.test('constructor', function(t) {
		var pizza = createPizza(['pasta', 'muzzarella', 'tomato']); // instead of var pizza = new Dish('Pizza', 20, 10, ['pasta', 'muzzarella', 'tomato']);
		var expectedPizza = {
			name: 'Pizza',
			price: 20,
			baseCost: 10,
			ingredients: ['pasta', 'muzzarella', 'tomato']
		};
		t.deepEqual(pizza, expectedPizza, 'Should bild a pizza'); // checks the properties (also in arrays)
		t.end();
	});

	t.test('profit method', function(t){
		var ingredients = [
			{cost: 2},
			{cost: 1}
		];
		var pizza = new Dish('Pizza', 20, 10, ['pasta', 'muzzarella', 'tomato']);
		var expectedProfit = 20 - 10 - 3; // pizza price - ??? - ingredients costs
		t.equal(pizza.profit(), expectedProfit, 'should return profit');
		t.end()
	})
});



// test('sum function', function(t) {
// 	t.test("passing 2 integers", function(t) {
// 		t.equal(sumFn(3,7), 10, "sum 2 integers");
// 		t.end();
// 	});

// 		t.test("passing 1 integer", function(t) {
// 		t.equal(sumFn(3), 3, "returns same nember");
// 		t.end();
// 	});
// })