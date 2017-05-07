function Person() {
	console.log('in the Person');
	console.log(this); // { a: 2}
	this.name = 'Fiorella';
}

// var fiorella = new Person();
// console.log(fiorella);

function myNew(ConstructorName) {
	console.log('in the new');
	//var obj = { a: 2}; //  adds this to the person
	//var obj = Object.create({});// crea un objetos como obj = {}
	var obj = Object.create(ConstructorName.prototype); // create and set object with the singer.__proto__
	ConstructorName.call(obj); // para llamar a la person
	//Object.setPrototypeOf(obj, ConstructorName.prototype); // set pbj.__proto__ to be Singer.prototype
	return obj;
}

console.log('creating person');
var fiorella = myNew (Person); // adds the name
console.log(fiorella);

function Singer() {
	console.log('in the singer');
	console.log(this); // { a: 2}
	this.name = 'John';
}


Singer.prototype.sing = function(){
	console.log('singing');
}

var john = myNew (Singer);
var john = new Singer(); 
console.log(john.__proto__);
john.sing(); // error