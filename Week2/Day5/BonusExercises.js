// 1) convert to ES5
// ({ routes }) => ({ routes }) // return an object with his value (routes: routes)

// function(someObject) {
// 	return {routes: someObject.routes};
// }
// let routes = {routes:{}};
// console.log(fn(routes));

// 2) myUnion
function myUnion() {
	let result = [];
	for (let i=0; i<arguments.length; i++) {
		for (let j=0; j<arguments[i].length; j++) {
			if (result.indexOf(arguments[i][j]) === -1) {
				result.push(arguments[i][j]);
			}
		}
	}
	return result;
}

//console.log(myUnion([1,2], [2], [52]));


// 3) myOmit
function myOmit(oneObject, propertyToDelete) {
	let result = {};
	for (let key in oneObject) { // Key= a, b, c
		for (let i=0; i<propertyToDelete.length; i++) {
			if (key === propertyToDelete[i]) {
				delete oneObject[propertyToDelete[i]];
			}
		}
	}
	return oneObject;
}

var oneObject = { 'a': 1, 'b': '2', 'c': 3 };
//console.log(myOmit(oneObject, ['a', 'c'])); // { b: '2' }


// 4) myPickBy
function myPickBy(someObject, condition) {
	let result = {};
	if (condition === '_.isNumber') {
		for (let key in someObject) {
			if (typeof someObject[key] === 'number') {
				result[key] = someObject[key];
			}
		}
		return result;
	}
}

var object1 = { 'a': 1, 'b': '2', 'c': 3 };
//console.log(myPickBy(object1, '_.isNumber'));


// 5) convert to ES5 - ...fns = composed mixins
const composeMixins = (...fns) => (
  obj = {}, // --> this is the parameter
  piped = x => fns.reduce((o, fn) => fn(o), x)) => piped(obj);

var composeMixins = function() {
	var fns = Array.prototype.slice.call(arguments);
	return function (obj, piped) {
		if (obj === undefined) {
			obj = {};
		}
		if (piped === undefined) {
			piped = function(x) {
				return fns.reduce(function(o, fn) {
					return fn(o);
				}, x);
			}
		}
		return piped(obj);
	}
}

function num1(obj) {
	obj.a = 3;
	return obj;
}

function num2(obj) {
	obj.b = 5;
	return obj;
}

console.log(composeMixins(num1, num2)()); // ()() calls the function