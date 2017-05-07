function isAnagram(string1, string2) {
	var string = string1.split("");
	var reverseArray = string.reverse();
	var join = reverseArray.join("");
	if (string2 === join) {
		return true;
	}
	return false;
}

module.exports.isAnagram = isAnagram;
// console.log(isAnagram('hello', 'olleh')); // => true
// console.log(isAnagram('car', 'rac')); // => true
// console.log(isAnagram('world', 'ordly')); // => false
// console.log(isAnagram('fante', 'tenaff')); // => false

function boxVolume(width, length, height) {
	let convFromCm3toL = 1 / 1000;
	let returnValue = width * length * height;
	returnValue *= convFromCm3toL;
	return returnValue;
}
module.exports.boxVolume = boxVolume;
console.log(boxVolume(10, 10, 10)); // => 1
console.log(boxVolume(5, 5, 5)); // => 0,125
console.log(boxVolume(5, 5, 5.1)); // => 0,1275

function intersect(rectA, rectB) {
	let rectA1 = rectA[0];
	let rectA2 = rectA[1];
	let rectB1 = rectB[0];
	let rectB2 = rectB[1];
	let resultArray = [];
	// checks if vertex of rectB is inside rectA
	if (rectB1[0] >= rectA1[0] && rectB1[0] <= rectA2[0] && rectB1[1] >= rectA1[1] && rectB1[1] <= rectA2[1] &&
	 	rectA2[0] >= rectB1[0] && rectA2[0] <= rectB2[0] && rectA2[1] >= rectB1[1] && rectA2[1] <= rectB2[1]) {
		resultArray.push(rectB1, rectA2);
	} else if (
		rectA1[0] >= rectB1[0] && rectA1[0] <= rectB2[0] && rectA1[1] >= rectB1[1] && rectA1[1] <= rectB2[1] &&
		rectA2[0] >= rectB1[0] && rectA2[0] <= rectB2[0] && rectA2[1] >= rectB1[1] && rectA2[1] <= rectB2[1]) {
		resultArray.push(rectA1, rectA2);
	}
	return resultArray;
}

// para otro chequeo rectB2[0] >= rectA1[0] && rectB2[0] <= rectA2[0] && rectB2[1] >= rectA1[1] && rectB2[1] <= rectA2[1]) {
// module.exports.intersect = intersect;
// console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])); // => [2, 2], [4, 3]
// console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])); // => [2, 1], [4, 4]

// function intersect([rectA1, rectA2], [rectB1, rectB2]) {
// 	let widthA = Math.abs(rectA2[0] - rectA1[0]);
// 	let heightA = Math.abs(rectA2[1] - rectA1[1]);
// 	let widthB = Math.abs(rectB2[0] - rectB1[0]);
// 	let heightB = Math.abs(rectB2[1] - rectB1[1]);