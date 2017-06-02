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

//let romanObj = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

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

// console.time('someFunction');
// console.log(romanTranslator("MMDCCCXCIV"));//2894
// console.timeEnd('someFunction');

function romanTranslator(letters) {
	let lettersArray = letters.split("");
	let result = 0;

	// for (let i=0; i<lettersArray.length; i++) {
	// 	if (lettersArray.indexOf(lettersArray[i]) !== lettersArray.length-1) {
	// 		if (romanNums[lettersArray[i]] < romanNums[lettersArray[i+1]]) {
	// 			result = romanNums[lettersArray[i+1]] - romanNums[lettersArray[i]] + result;
	// 			i++;
	// 		} else {
	// 			result += romanNums[lettersArray[i]];
	// 		}
	// 	}
	// }

	for (let i=0; i<lettersArray.length; i++) {
		if (lettersArray.indexOf(lettersArray[i]) !== lettersArray.length-1) {
			if (romanNums[lettersArray[i]] < romanNums[lettersArray[i+1]]) {
				result = romanNums[lettersArray[i+1]] - romanNums[lettersArray[i]] + result;
				i++;
			} else {
				result += romanNums[lettersArray[i]];
			}
		}
	}

	return result;
}

// console.log(romanTranslator("XIV")); // 14
// console.log(romanTranslator("MCMLXXXVIII")); // 1988
// console.log(romanTranslator("XLIX")); // 49

//let numsArray = { "1":"I", "4":"IV", "5":"V", "9":"IX", "10":"X", "40":"XL", "50":"L", "90":"XC", "100":"C", "400":"CD", "500":"D", "900":"CM", "1000":"M" };
let romanNums = {1:"I", 4:"IV", 5:"V", 9:"IX", 10:"X", 40:"XL", 50:"L", 90:"XC", 100:"C", 400:"CD", 500:"D", 900:"CM", 1000:"M" };
let romanObj = {"I":1, "IV":4, "V":5, "IX":9, "X":10, "XL":40, "L":50, "XC":90, "C":100, "CD":400, "D":500, "CM":900, "M":1000 };
let resultArray = [];

function numTranslator(num) {
	let valuesList = [];

	for (var key in romanObj) {
		if (num - romanObj[key] >= 0) {
			var rest = num - romanObj[key];
			valuesList.push(romanObj[key]);
		}
	}

	let max = Math.max.apply(null, valuesList);
	resultArray.push(romanNums[max]);
	
	if (rest > 0) {
		numTranslator(rest);
	}

	return "The " + num + " in roman numbers is " + resultArray.join("");
}

//console.log(numTranslator(1490)); // MCDXC
//console.log(numTranslator(1988)); // MCMLXXXVIII
console.time('someFunction');
console.log(numTranslator(2894)); // MCDXLII
console.timeEnd('someFunction');


