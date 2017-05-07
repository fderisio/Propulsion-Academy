// 1) Expanded Math Object
var myMath = Object.create(Math);

myMath.randomInt = function (num1, num2 = 0) {
	return Math.floor(Math.random()*num1 + num2);
};

console.log(myMath.randomInt(5));
console.log(myMath.randomInt(10, -4)); // -3 for example


// 2)  reverse to a String prototype
String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}
console.log('hello'.reverse());


// 3) myEach
function myEach (array, aFunction) { 	//array.forEach(callback[, thisArg])
	for (let i=0; i < array.length; i++) {
		aFunction(array[i], i, array);
	}
}

function someFn(element, index, array) { // ojo! someFn() = undefined
	element += 1;
	return element;
}

myEach([1, 7, 10], someFn); // envia la funcion
/*myEach([1, 7, 10], someFn()); --> envia el return del someFn*/


// 4) myMap 
function myMap(array, aFunction) {
	let newArray = [];
	for (let i=0; i < array.length; i++) {
		result = anotherFn(array[i], i, array);
		newArray.push(result);
	}
	return newArray;
}

function anotherFn(element, index, array) {
	return element;
	console.log('Executed function');
}

myMap([{name: 'John', age: 28}, {name: 'Ana', age: 20},{name: 'Nick', age: 25}], anotherFn);

// 5) myFilter 
function myFilter(array, aFunction) {
	let newArray = [];
	let result;
	for (let i=0; i < array.length; i++) {
		result = aFunction(array[i], i, array)
		console.log(result);
		if (result !== undefined) {
			newArray.push(result);
		}
	}
	return newArray;
}

function greaterThan10(element, index, array) {
	// some criteria
	if (element >= 10) {
		return element;
	}
}

console.log(myFilter([12, 5, 8, 130, 44], greaterThan10));


// 6) merge
// MINE
// function merge() {
// 	let result = {};
// 	for (let i=0; i<arguments.length; i++) {
// 		if (typeof arguments[i] == 'object') { //object test
//      	for (var key in arguments[i]) {
//      		result.key = arguments[i];
//        	//console.log(result);
//         if (arguments[i].hasOwnProperty(key)) {
//         	result.key = arguments[i][key];
//           console.log(result.key); //here ya go
//         }
//       }
//     }
// 	}
// 	return 'the result is ' + result;
// }

// SOLUTION
function merge() {
  const obj = {};
  for(let i = 0; i<arguments.length; i++) {
    Object.keys(arguments[i]).forEach(key => {
    	console.log(arguments[i]);
      if(!obj[key] || obj[key] === 0) 
        obj[key] = arguments[i][key];
    });
  }
  return obj;
}


console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 }

// 7) invert
//MINE
// function invert(obj) {
// 	console.log(obj);
// 	for (var i = 0; i < a.length; i++) {
// }

// SOLUTION
function invert(obj) {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    newObj[value] = key; 
  });
  return newObj;
}
// console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }

