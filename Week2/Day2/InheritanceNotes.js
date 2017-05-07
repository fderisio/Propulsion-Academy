
// // crear un constructor dentro de otro
// function Person(name, age) {
// 	this.name = name;
// 	this.isAlive = true;
// 	this.age = age;
// }

// function Singer(name, age) {
// 	Person.call(this, name, age); // agrega a la person como singer!! 
// }

// var fiorella = new Singer ('Fiorella', 18);
// console.log(fiorella);


// agregar propiedad al crear un constructor dentro de otro
function Person(name, age) {
	this.name = name;
	this.isAlive = true;
	this.age = age;
}

function Singer(name, age) {
	Person.call(this, name, age); // agrega a la person como singer!! 
	this.canSing = true; // agrega propiedad al singer
	this.sing = function() { // haciendo esto, todos los objetos tienen esa funcion o asi es llamable****
		console.log('singing')
	}
	this.constructor = Singer;
}

Person.prototype.talk = function() {
	console.log('talking');
}

Singer.prototype = Object.create(Person.prototype); // ** tiene que estar antes del metodo del singer!!!!!!

// ****
Singer.prototype.sing = function() {
	console.log('singing');
}

var fiorella = new Singer ('Fiorella', 18);
console.log(fiorella);
fiorella.talk();
fiorella.sing(); // hay que gregar **
console.log(fiorella.__proto__.__proto__);


// Partial 
function createMultiplier (a, b) {
	return function multiplier(c, d, e) {
		return a*b*c*d*e;
	}
}
// Partial application:
// Part I "fixed part" of the function
var multiplyThree = createMultiplier(2,1);
console.log(multiplyThree); // returns "function"

// Part II the changable part of the function
var result = multiplyThree(51, 21, 15);
console.log(result);
var result2 = multiplyThree(2, 1, 5);
console.log(result2);

// Curried = ingresar los 5 parametros con 3 variables distintas (5, 2, 1, 3, 10)
var multiplyforTwo = multiply(5, 2);
var otherTwo = multiplyforTwo(1, 3);
var result3 = otherTwo(10);
console.log(result3); // muestra la multiplicacion de los 5 elementos.



// Vocabulary!!!

// side effects cuando la funcion genera una lista que se puede usar fuera de la funcion

// function composition f(g(x))

// shared state in a shared scope

// Inmutability: objeto que no puede cambiarse despues de creado distinto de mutable objects

// functional oriented significa que no se labura con objetos, sino con funciones

