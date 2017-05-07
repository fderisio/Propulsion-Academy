
	// if (checkType(element) === 'object' && checkType(predicate) === 'object') {
	// 	for (let key in predicate) {
	// 		for (let key in element) {
	// 			if (element[key] == predicate[key]) {
	// 				return true;
	// 			}
	// 		}
	// 	}
	// }

	// if (checkType(element) == 'array' && checkType(predicate) == 'object') {
	// 	console.log(element);
	// 	for (let i=0; i<element.length; i++) {
	// 		console.log(element[i]);
	// 		for (let key in predicate) {
	// 			console.log(predicate[key]);
	// 			for (let key in element[i]) {
					
	// 				console.log(object[i][key]);
	// 				if (object[i][key] == predicate[key]) {
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 	}
	// }	

	// if (checkType(object) === 'array' && checkType(predicate) === 'array') {
	// 	for (let i=0; i<object.length; i++) {
	// 		for (let j=0; j<predicate.length; j++) {
	// 			for (let key in predicate[j]) {
	// 				for (let key in object[i]) {
	// 					console.log(predicate[j][key]);
	// 					console.log(object[i][key]);
	// 					if (object[i][key] == predicate[j][key]) {
	// 						return true;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }	
		
	// return false;



// var user = { 'user': 'barney', 'age': 36, 'active': false };
// var users = [
//   { 'user': 'barney', 'age': 36, 'active': false },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];

// console.log(myEvery(users, { 'user': 'barney', 'active': false })); // false
// console.log(myEvery(users, ['active', false])); // true
// console.log(myEvery(users, 'active')); // false
// console.log(myEvery(user, { 'user': 'barney', 'age': 36, 'active': false })); // true