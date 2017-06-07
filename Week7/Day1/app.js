// h1 and div are sibblings

const element = document.getElementById('title'); // vanilla JS
// console.log(typeof element); // object
// console.log(Object.keys(element.__proto__)); // align
// console.log(element.getAttribute('id')); // title

const myDiv = document.createElement('div'); // creates a div in JS
// console.log(myDiv);

const title = $("#title");
// console.log(title); // shows title as an array
// console.log(element);

// const objects = $(''); 
// console.log(objects); // shows all functions in JQuery

const paragraph = $('.paragraph'); // = $('[class="paragraph"]')
console.log(paragraph);
// const paragraph1 = $('.first-js');
// console.log(paragraph1);


/* -- remove() -- */
//paragraph.remove(); // not shown in DOM, deleted from HTML, but the variable still exists
//paragraph.removeClass('paragraph-class');
//console.log(paragraph); // shows the variables even when they are not shown


/* -- append()  -- */ // agrega algo al final
const container = $('.container');
const addedP = $('<p>Hello from JS</p>'); //same as: const addedP = $('<p>'); document.createElement('p'))
//addedP.append("Hello from JS");
setTimeout(() => {
	addedP.append("<span>Hello Span</span>");
	container.append(addedP);
	console.log(addedP);
},2000);


/* -- each -- */
paragraph.each((index, element) => {
	$(element).addClass('my-class') // esto sirve si queremos cambiar una clase de color, creando un CSS con solo esta clase nueva
	//console.log(element) // shows raw HTML element
	//console.log($(element).addClass); // shows raw HTML element
	//console.log(element.addClass);
})

/* -- event listeners -- */
const pElement = $('.first-js');
pElement.on('click', function(e) { // same as: pElement.click((e) => { 
	console.log('you clicked')
})

// cualquier p que se clickea se vuelve roja
const pAll = $('p');
pAll.on('click', function(e) {
	$(e.currentTarget).addClass('red');
	console.log('you clicked')
})

$(document).on('keypress', function(e) {
	console.log(e.keyCode);
});

//$(someFunction) // --> activa la funcion cuando carga el documento