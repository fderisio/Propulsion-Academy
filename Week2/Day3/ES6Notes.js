// concatenar arrays u objectos
const nums1 = [1, 2];
const nums2 = [4, 7]; 
const nums = [...nums1, ...nums2]; // equals to const nums = nums1.concat(num2); 


//function (...words) {} // (...words) "..." creates an array with all the given arguments
const yell = (firstWord, ...someArguments) => {
	someArguments.forEach(arg => {
		console.log(arg);
	});
}
console.log(yell('hello', 'chau', 'mundo'));


// con let y const no hay hosting


// functions I
const yell1 = (name) => {
	console.log(name.toUpperCase());
}
// or:
const yell2 = (name) => console.log(name.toUpperCase());
//const yell3 = (name) => return name.toUpperCase();
const yell4 = (name) => ({ yell: name.toUpperCase() }); // () defines that an object will be returned

yell1('Ronda');
yell2('Ronda');

//console.log(yell3('Ronda'));
console.log(yell4('Tom'));

const filtered = [2, 4, 10] 							// sin ;
								.map(num => num*num)			// sin ;
								.filter(num => num>10);		// con ;

console.log(filtered); // 16, 100

filtered.push(200);
const newFiltered = filtered;
newFiltered.push(400);

console.log(filtered === newFiltered); // true
console.log(filtered); // 16, 100, 200, 400
console.log(newFiltered); // 16, 100, 200, 400


// functions II - choose if it is going to be called (using the word "function()" or only defined (without it)
const writer = {
	name: 'Jane Austen',
	books: ['Pride and Prejudice', 'Sense and Sensibility'],


	printBooks: function(editorial = 'Alfaguara') { // function should be written cause it will be called (otherwise it will only be defined)
		// if (typeof editoria === 'undefined') { /*same as in the if*/ 	
		// 	editorial = 'Alfaguara';
		// }
		this.books.forEach( (book) => { // function word is hidden  to make this.name in the scope (only ES6)
			console.log(`${this.name} 
				wrote ${book}
				by ${editorial}`); // it is "Enter" sensitive
		});
	}
	// printBooks: function() {
	// 	const printBook = (book) => {
	// 		console.log(this.name + ' wrote ' + book);
	// 	};
	// 	this.books.forEach(printBook);
	// }
}
writer.printBooks('Alfffaguara');
writer.printBooks();

//const { name } = writer; // === const name = writer.name;
const { name, books, printBooks } = writer; // === const name = writer.name;
console.log(name); // Jane Austen
console.log(printBooks); // function

console.log(printBooks === writer.printBooks); // true!!!!! Be careful!!! both are functions

/* --------- Another writer -------*/
const goodWriter = {
	name: 'Dan Brown',
	books: ['Angel and Demons', 'The Da Vinci Code']
}
goodWriter.print = printBooks; // adds the method from the writer
goodWriter.print(); 

// Importing (app.js)
// import moment from 'moment'; // importa package
// import { myVar2 } from './myVar'; // importa un objeto
// import myVar from './myVar'; // importa variable
// import * as myVar from './myVar'; // importo todo lo que un archivo exporta

// // Exporting (otherFiles.js)
// let myVar = 'Something'; 
// export default myVar1;
// export { myVar2 };
// /* equals to */
// export { 
// 	myVar2: myVar2 
// };


// constructor
class Person {
	constructor(name) { // dice que Person es un constructor
		this.name = name;
	}
	// creates a method (talk)
	talk() {
		console.log('Hello!!'); // lo que quieras que haga la funcion
	}
}

var person1 = new Person('Fiorella');

// Inheritance
// creates a constructor Dancer
class Dancer extends Person {
	constructor(name, band) {
		super(name); // equals to Person.call(this, name)
		this.band = band;
	}
}

const dancer1 = new Dancer('John', 'Backstreet Boys');
dancer1.talk();
console.log(dancer1.band);

`First: ${'abc'} Second: ${'def'}`;

class SuperPerson extends Person {
  constructor(first, last, power) {
    super(first, last);
    this.superPower = power;
  }

  toString() {
    return `${super.toString()} with the power of ${this.superPower}`;
  }
}


// Default values for parameters
function logDefaults(a = 1, b = 2, c = 3) {
    console.log({a, b, c});
}
logDefaults(); // {"a":1,"b":2,"c":3}

function logDestructuredDefaults({a:A = 1, b:B, c:C = 3}) {
    console.log({A, B, C});
}
logDestructuredDefaults({b: 2}); // {"A":1,"B":2,"C":3}

let {a=1, b=2, c=3} = {};
console.log({a, b, c}); // {"a":1,"b":2,"c":3}


// instead of {first: first, last: last}
function makeParent(first, last) {
    return {first, last, isParent: true};
}
console.log(makeParent('Darth', 'Vader'));


//Array destructuring
let x = 1, y = 2;
[y, x] = [x, y];
console.log({x, y}); // {"x":2,"y":1}


// Object destructuring
let person = {
    first: 'Marsellus',
    last: 'Wallace',
    spouse: {
        first: 'Mia',
        last: 'Wallace'
    }
};

let {first: husband, last, spouse: { first: wife } } = person;
console.log(wife, husband, last); //"Mia" "Marsellus" "Wallace"


// Arrow functions not affect: call, apply, bind, by "this"
var ctx = { foo: 'bar' };

// this === window
let printThis = () => {
  if (this !== ctx) {
    console.log("Context is not changed");
  }
  else {
    console.log("Context changed", this);
  }
}

printThis(); // "Context is not changed"
printThis.call(ctx); // "Context is not changed"
printThis.apply(ctx); // "Context is not changed"
printThis.bind(ctx)(); // "Context is not changed"


// Arrow functions
var values = [1, 2, 3, 4, 5, 6];

var even = values.filter(x => x % 2 === 0);
var evenSquares = even.map(x => x * x);

console.log(even, evenSquares); // [2,4,6] [4,16,36]

// 
let futureJavascript = () => {
    let ES2015 = 'awesome';
    console.log(`The future of JavaScript is ${ES2015}`); // "The future of JavaScript is awesome"
};

futureJavascript();