var nums = [1, 2, 3, 4, 5];

// forEach function
nums.forEach(function(element, index, array) {
	console.log(element + ' in ' + index);
});

// forEach function
function printing(element, index, array) {
	console.log(element + ' in ' + index);
}
nums.forEach(printing);

// reduce function siempre espera un resultado
var result = nums.reduce(function(acumulador, element, index, array) {
	console.log('aculador: ', acumulador);
	console.log('   elemento: ', element);
	return acumulador + element;
}, 0);


// Scopes in an object
function Writer(name, books) {
	this.name = name;
	this.books = books;
}

var writer1 = new Writer("John", ["Book1", "Book2"]);

// printInfo method I
Writer.prototype.printInfo2 = function(name) {
	console.log(this.name);
	this.books.forEach(function(book) {
		console.log(this); // bubble object (?)
		console.log(this.name + ' wrote ' + book); // this.name = undefined (porque esta dentro de la funcion donde no esta definido)
	});
}

// printInfo method II
Writer.prototype.printInfo1 = function(name) {
	console.log(this.name);
	var writer = this;
	this.books.forEach(function(book) {
		console.log(writer); // bubble object (?)
		console.log(writer.name + ' wrote ' + book); 
	});
}

// printInfo method III
Writer.prototype.printInfo = function(name) {
	console.log(this.name);
	var writer = this;
	function printBook(book) {
		console.log(writer); // bubble object (?)
		console.log(writer.name + ' wrote ' + book); 
	}
	// var writer = this;
	// var boundPrint = printInfo.bind(writer); // bind method
	// this.books.forEach(boundPrint);
	this.books.forEach(printBook.bind(this));
}

// creates the function as an extern method
Writer.prototype.printBook = function(book) {
	console.log(this); // bubble object (?)
	console.log(this.name + ' wrote ' + book); 
}

// printInfo III
Writer.prototype.printInfo = function(name) {
	console.log(this.name);
	// var writer = this;
	// function printBook(book) {
	// 	console.log(writer); // bubble object (?)
	// 	console.log(writer.name + ' wrote ' + book); 
	// }
	// var writer = this;
	// var boundPrint = printInfo.bind(writer); // bind method
	// this.books.forEach(boundPrint);
	this.books.forEach(this.printBook.bind(this));
}
writer1.printInfo();

// ways of calling a function
function yell() {
	console.log(this === bogdan); // true
}

var bogdan = {
	name: 'Bogdan',
	complain: yell
}

bogdan.complain(); 

var res = new yell(); // creates a new object

