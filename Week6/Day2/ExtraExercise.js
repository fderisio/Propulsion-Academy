/* ------------------ 1 -------------- */

// Write a function that accepts a square matrix in string form
// (where columns are comma-separated, and each row is on a new line),
// and returns a string representing the difference between the sums
// of its diagonals. For example:
//
// let matrix =
// `7, -12, 6
// -3,  8,  1
// 23, -16, 4`;
//
// diagonalDifference(matrix) -> '-18'
// (because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).

function diagonalDifference(matrix) {
	let total = 0;
	let total2 = 0;
	let num = 0;
	if (matrix.length % 2 !== 0) {
		//console.log(matrix.length);
		for (let i = 3; i < 50; i++) {
			if (matrix.length % i === 0) {
				for (let j = 0; j < matrix.length; j=j+(i+1)) {
					total += matrix[j];
				}
				for (let j = i-1; j < matrix.length-(i-(i-1)); j=j+(i-1)) {
					total2 += matrix[j];		
				}
				return Math.abs(total-total2);
			}
		}
	} else {
		console.log("The sum of diagonals can not be done");
	}
}

let matrix =
[7, -12, 6,
-3,  8,  1,
23, -16, 4];

let matrix2 =
[1, 2, 3, 4, 5,
 6, 7, 8, 9, 10,
 2, 3, 4, 2, 15,
 1, 6, 3, 4, 5,
 1, 6, 3, 4, 5];

// 1+7+4+4+5 = 21 / 1+6+4+9+5= 25 --> 3

//console.log(diagonalDifference(matrix2));


/* -------------- 2 ------------- */
// Two adds (20 mins)

// Write a function that adds from two invocations.
// For example: twoAdds(3)(4) -> 7

function twoAdds(num) {
	return function (num2) {
		return num+num2;
	}
}

//console.log(twoAdds(3)(4));


/* ------------ 3 --------------*/
// Roman numeral translator (45 mins)

// Write a function that takes a roman numeral as input,
// and returns the same number in Hindu-Arabic form
// (https://en.wikipedia.org/wiki/Roman_numerals).
// Extra credit: write a second function that takes
// a number as input and returns its roman numeral.

let romanNums = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

function romanTranslator(letters) {
	let lettersArray = letters.split("");
	let result = 0;
	let resultArray = [];
	for (let i=0; i<lettersArray.length; i++) {
		Object.keys(romanNums).forEach(function(key,index) {	
			if (lettersArray[i] === key) {
				resultArray.push(romanNums[key]);
			}
		});
	}

	for (let i=0; i<resultArray.length; i++) {
		if (resultArray.indexOf(resultArray[i]) !== resultArray.length-1) {
			if (resultArray[i] < resultArray[i+1]) {;
				result = resultArray[i+1] - resultArray[i] + result;
				i++;
			} else {
				result += resultArray[i];
			}
		}
	}

	return result;
}

//console.log(romanTranslator("XIV")); // 14
//console.log(romanTranslator("MCMLXXXVIII")); // 1988
//console.log(romanTranslator("XLIX")); // 49


function numTranslator(num) {
	let valuesList = [];
	let resultArray = [];
	let resultArray2 = [];
	let newNum = 0;
	for (var key in romanNums) {
		var rest = num - romanNums[key];
		if (rest > 0) {
			valuesList.push(romanNums[key]);
		} else {
			break;
		}
	}
	console.log(valuesList);
	var max = Math.max.apply(null, valuesList);
	resultArray.push(max);
	console.log(resultArray);
	console.log(rest);
	if (rest > 0) {
		console.log("hola");
		numTranslator(rest);
	}
	
	// for (let i=0; i<resultArray.length; i++) {
	// 	Object.keys(romanNums).forEach(function(key,index) {
	// 		if (resultArray[i] === romanNums[key]) {
	// 			resultArray2.push(key);
	// 			console.log(resultArray2);
	// 		}
	// 	});
	// }


	// let resultArray2 = [];
	// Object.keys(romanNums).forEach(function(key,index) {
	// 	//let value = num / romanNums[key];
	// 	let rest = num - romanNums[key];
		
	// 	//let rest = 100;
	// 	//let rest = num % romanNums[key];
	// 	//console.log(romanNums[key])
	// 	console.log(rest);
	// 	if (rest > 0) {
	// 		resultArray.push(romanNums[key]);
	// 	}
	// 	resultArray2.push(resultArray.length-1);
	// 	// while (rest > 0) {
	// 	// 	let value = romanNums[key];
	// 	// 	console.log(value);
	// 	// 	if (rest === romanNums[key]) {
	// 	// 		resultArray.push(key);
	// 	// 	}
	// 	// }
		
	// });
	// //return value;
	//return resultArray2.join();
}

console.log(numTranslator(140));



