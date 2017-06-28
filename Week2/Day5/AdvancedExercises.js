// 1) myEvery
function checkType(element){
		if (typeof element === 'object') {
			return Array.isArray(element) ? 'array' : 'object';
		}
		return typeof object;
}

function myEvery(element, someFn) {

	if (checkType(element) === 'object') {
		for (let key in element) {
			if (someFn(element[key])) {
				return true;
			}
		}
	}

	if (checkType(element) === 'array') {
		for (let i=0; i<element.length; i++) {
			for (let key in element) {
				if (someFn(element[key])) {
					return true;
				} else {
					return false;
					break;
				}
			}
		}
	}
	return false;

}

// test
let numArray = [1, 20, 35];

function biggerThan10(arguments) {
	if (arguments > 10) {
		return true;
	}
	return false;
}

//console.log(myEvery(numArray, biggerThan10)); // false



// 2) mySome
function mySome(element, someFn) {

	// element = object
	if (checkType(element) === 'object') {
		for (let key in element) {
			if (someFn(element[key])) {
				return true;
				break;
			} else {
				return false;
			}
		}
	}

	// element = array
	if (checkType(element) === 'array') {
		for (let i=0; i<element.length; i++) {
			for (let key in element) {
				if (someFn(element[key])) {
					return true;
				} else {
					return false;
					break;
				}
			}
		}
	}

}

function typeOfFn(arguments) {
	if (typeof arguments === 'string') {
		return true;
	}
	return false;
}
let myObj1 = {a: 'hello', b: false, c: 2}; 
let myObj2 = {a: 152, b: false, c: 2}; 

console.log(mySome(myObj1, typeOfFn)); // true
console.log(mySome(myObj2, typeOfFn)); // false

// 3) myDefaults
function myDefaults () {
	const obj = {};
  for(let i = 0; i<arguments.length; i++) {
  	for (let key in arguments[i]) {
      if(!obj[key] || obj[key] === 0) 
        obj[key] = arguments[i][key];
    };
  }
  return obj;
}

//console.log(myDefaults({ 'a': 1 }, { 'b': 2 })); // { a: 1, b: 2 }