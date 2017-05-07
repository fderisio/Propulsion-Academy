function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.isAlive = true;
}

Person.prototype.greet = function() {
	console.log('Hello this is Laurent Meyer.');
}

var person1 = new Person ('Anna', 'Smith');
var person2 = new Person ('John', 'Jackson');
var person3 = new Person ('Mary', 'Johnson');
console.log(person1, person2, person3);


function Writer(firstName, lastName, isAlive) {
	Person.call(this, firstName, lastName, isAlive);
	// let newFirstName = firstName.split("").reverse().join("");
	// let newLastName = lastName.split("").reverse().join("");
	this.pseudonym = firstName.split("").reverse().join("") + ' ' + lastName.split("").reverse().join("");
	//this.pseudonym = newFirstName + ' ' + newLastName;
	this.signBook = function() { // haciendo esto, todos los objetos tienen esa funcion o asi es llamable****
		console.log(this.pseudonym);
	}
}
Writer.prototype = Object.create(Person.prototype);
var writer1 = new Writer('Dan', 'Brown');
writer1.signBook();
console.log(writer1);


function Singer(firstName, lastName, isAlive) {
	Person.call(this, 'Fancy' + firstName, 'Fancy' + lastName, isAlive);
	this.melody = 'Dont worry be happy';
	this.sing = function() { // realizar la funcion en el constructor ocupas mas memoria!!!
		console.log(this.melody, this.melody, this.melody);
	}
}


Singer.prototype = Object.create(Person.prototype);
var singer1 = new Singer('Bob', 'Marley');
console.log(singer1);
singer1.sing();


function Developer(firstName, lastName, codeName, isAlive) {
	Person.call(this, firstName, lastName, isAlive);
	this.codeName = codeName;
	this.impress = function() {
		for (let i=0; i<5; i++) {
			console.log('0 1' /*+ codeName*/);
		}
		console.log(codeName);
	}
}
Developer.prototype = Object.create(Person.prototype);
var developer1 = new Developer('Mary', 'Lovett', 'Ping Pong Queen');
console.log(developer1);
console.log(developer1.impress());


function JuniorDeveloper(firstName, lastName, codeName, isAlive) {
	Developer.call(this, firstName, lastName, codeName, isAlive);
	this.isStrugling = true;
	this.complain = codeName.toUpperCase();
	this.workHard = function() {
		for (let i=0; i<10; i++) {
			console.log(codeName, 'is working hard');
		}
	}
}
JuniorDeveloper.prototype = Object.create(Developer.prototype);
var juniorDeveloper1 = new JuniorDeveloper ('Fiorella', 'De Risio', 'Lalaland');
console.log(juniorDeveloper1);
juniorDeveloper1.workHard();
