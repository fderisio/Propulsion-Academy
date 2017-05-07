//console.log('check type: ', typeof [1, 2, 3]);
//snippet

// 1) isString
console.log('1) isString');
function isString(word) {
	if (typeof word === 'string') {
		return true;
	} 
	return false;
}
module.exports.isString = isString;

isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false


// 2) isArray
console.log('2) isArray');
function isArray(arrayToCheck) {
	if (arrayToCheck.constructor == Array) {
		return true;
	}
	return false;
}
module.exports.isArray = isArray;
isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false


// 3) Check type of array
console.log ('3) Check type of array');

function checkType(element){
	if (typeof element === 'object') {
		return Array.isArray(element) ? 'array' : 'object';
	}
	return typeof element;
}

function areSameType(arrayToCheck) {
	for (let i = 0; i < arrayToCheck.length; i++) {
		if ( checkType(arrayToCheck[0]) !== checkType(arrayToCheck[i]) ) {
			return false; 
		}
	}
	return true;
}
module.exports.areSameType = areSameType;
console.log(areSameType(['hello', 'world', 'long sentence']));// => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([[1, 2, 3], { a: 2 }]) // => false


// 4) Sort and remove duplicated characters
console.log('4) Sort and remove duplicated characters');
function longest(string1, string2) {
	var array1 = string1.split(""); 
	var array2 = string2.split("");
	fullArray = array1.concat(array2);
	fullArray.sort();
	var result = [];

	for (let i = 0; i < fullArray.length; i++) {
		if (result.indexOf(fullArray[i]) === -1) {
			result.push(fullArray[i]);
			//fullArray.splice(i+1, 1); // array.splice(index, howmany, item1, ....., itemX) // reindexa!!!!!!!
		}
	}
	return result.join("");
}
module.exports.longest = longest;
console.log(longest('abcccaa', 'acddddffzzz')); // => 'abcdfz'

/*a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
console.log(longest(a, b)); // => 'abcdefklmopqwxy'*/

/*a = 'abcdefghijklmnopqrstuvwxyz'
console.log(longest(a, a));*/


// 5) Convert number to reversed array of digits
console.log('5) Convert number to reversed array of digits');
function convert(num) {
  return num
    .toString()
    .split('')
    .map(Math.floor)
    .sort()
    .reverse()
}
// function convert(num) {
// 	var numArray = (""+num).split("");
// 	var reversedArray = numArray.reverse(numArray.sort());
// 	return reversedArray;
// }
module.exports.convert = convert;
console.log(convert(429563)); // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)); // => [4, 3, 2]


// 6) Count repetitions
console.log('6) Count repetitions');
function repetitions(array) {
	var object = {};
	for (let i = 0; i < array.length; i++) {
		//
		if (!object[array[i]]) {
			// add property or keys
			object[array[i]] = 1;
		} else {
			object[array[i]] += 1;
		}
	}
	return object;
}
module.exports.repetitions = repetitions;
var array = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
console.log(repetitions(array));


// 7) Cat and Mouse
console.log('7) Cat and Mouse');
function isCaught(givenString) {
	for (let i = 0; i < givenString.length; i++) {
		if (givenString[i] === "C" && givenString[i+3] === "m") {
			return true;
			break;
		}
	}
	return false;
}
module.exports.isCaught = isCaught;
console.log(isCaught('C.....m')); // => false
console.log(isCaught('C..m')); // => true
console.log(isCaught('..C..m')); // => true


// 8) Split the bill
// console.log('8) Split the bill');
  
var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}
function splitTheBill(group) {
  let total = 0;
  for (let i in group) {
    total += group[i];
  }
  for (let i in group) {
    group[i] = -(group[i] - total/(Object.keys(group).length));
  }

  return group;
}

module.exports.splitTheBill = splitTheBill;

console.log(splitTheBill(group));


// function splitTheBill(group) {
// 	let totalBill = 0;
// 	let amountPerson = 0;
// 	for (let person in group) {
// 		totalBill += group[person];
// 	}
// 	return totalBill;
// 	for (let person in group) {
// 		amountPerson++;
// 	}
// 	return amountPerson;
// 	console.log(amountPerson);
	// let paidAmount = totalBill / (group.length - 1);
	// 	console.log(paidAmount);
	// 	if (paidAmount === 15) {
	// 		return 0;
	// 	} else {
	// 		let result = 15 - paidAmount;
	// 		return person + ": " + result;
	// 	}
// }
// var result = {};


// 9) Exponentiation
console.log('9) Exponentiation');
function exp(num1, num2) {
	return Math.pow(num1, num2);
}
module.exports.exp = exp;
console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1


// 10) Factorial
console.log('10) Factorial');
function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}
module.exports.factorial = factorial;
console.log(factorial(5)); // => 120
console.log(factorial(4)); // => 24
console.log(factorial(0)); // => 1


// 11) Fibonacci
console.log('11) Fibonacci');

function fibs(num) {
	var fibsArray = [];	
	var num1 = 0;
	var num2 = 1;
	var total;

	if (num === 0) {
		fibsArray.push(0);
	} else if (num === 1) {
		fibsArray.push(0, 1);
	} else {
		fibsArray.push(0, 1);
		while (num > fibsArray.length) {
			total = num1 + num2;
			fibsArray.push(total);
			num1 = num2;
			num2 = total;
		}
	}
	return fibsArray;
}
module.exports.fibs = fibs;
console.log(fibs(3)); // => [0, 1, 1]
console.log(fibs(7)); // => [0, 1, 1, 2, 3, 5, 8]
console.log(fibs(1)); // => [0]
console.log(fibs(0));


// 12) Zero Sum
console.log('12) Zero Sum');

function zeroSum(array) {
	var result = [];
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === 0) {
				result.push([i, j]);
			}
		}
	}
	return result;
}
module.exports.zeroSum = zeroSum;
console.log(zeroSum([1, 5, 0, -5, 3, -1])) // => [[0, 5], [1, 3]]
console.log(zeroSum([1, -1])) // => [[0, 1]]
console.log(zeroSum([0, 4, 3, 5])) // => []