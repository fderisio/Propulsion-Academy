function Pet(name) {
	this.name = name;
}

Pet.prototype.yellName = function() {
	console.log(this.name.toUpperCase() + "!!!");
}

Pet.prototype.walk = function() {
	console.log(this.name + " is going for a walk");
}

var firstPet = new Pet('Buk');
firstPet.yellName(); // BUK!!!

Mammal.prototype = Object.create(Pet.prototype); 
function Mammal(name) {
	Pet.call(this, name);
}

var firstMammal = new Mammal('Fante');
firstMammal.yellName(); // FANTE!!!
firstMammal.walk(); // Fante is going for a walk

Dog.prototype = Object.create(Pet.prototype); 
function Dog(name, name2) {
	Pet.call(this, name);
	this.name2 = name2;
}

Dog.prototype.bark = function() {
	console.log(this.name2 + ", woof woof!!!");
}

var doggy = new Dog('Hornby', 'Laurent');
doggy.yellName(); // HORNBY!!!
doggy.walk(); // Hornby is going for a walk
doggy.bark(); // Laurent, woof woof!!!


Cat.prototype = Object.create(Pet.prototype); 
function Cat(name, name2) {
	Pet.call(this, name);
	this.name2 = name2;
}

Cat.prototype.spoon = function() {
	console.log(this.name2 + " GET OUT!");
}
var markov = new Cat('Markov', 'Bogdan');
markov.yellName(); // MARKOV!!!
markov.walk(); // Markov is going for a walk
markov.spoon(); // Bogdan GET OUT!