var test = require('tape');
var exercises = require('C:/Users/Fio/Documents/Programacion/Bootcamp Propulsion Academy/Week 1 - JavaScript/Day1Restaurant.js');

test('orderDish function', function(t) {
	t.test('when passed a dish', function(t) {
  	t.deepEqual(exercises.restaurant.orderDish(pizza), 'Order #0: Pizza', 'should return number of order and dish');
  	t.end();
  });
});

test('printOrders function', function(t) {
	t.test('when passed two strings', function(t) {
  	t.deepEqual(exercises.restaurant.printOrders(), 'Order #0: Pizza', 'should return number of order and dish');
  	t.end();
  });
});