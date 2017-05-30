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
	for (let i = 0; i < matrix.length; i=i+6) {
		total += matrix[i];
	}
	for (let i = 2; i < matrix.length-2; i=i+) {
		total2 += matrix[i];		
	}
	return Math.abs(total-total2);
}

let matrix =
[7, -12, 6,
-3,  8,  1,
23, -16, 4];

let matrix2 =
[1, 2, 3, 4, 5,
6, 7, 8, 9, 10,
20, 30, 40, 20, 15,
1, 6, 3, 4, 5,
1, 6, 3, 4, 5];

// 1+7+40+4+5 = 57 / 1+6+40+9+5= 61 --> 4

console.log(diagonalDifference(matrix2));
