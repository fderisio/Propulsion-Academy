// myBind
var obj = {
  name: 'Markov'
}

function printName() {
  console.log('The name is: ' + this.name); // this apunta al contexto global
}
// printName(); --> The name is undefined

function myBind(someFn, context) { // this apunta al contexto adecuado
	return function() {
		//someFn.call(context, arguments); // contexto y pasa funcion sin parametros o con argumentos de la someFn pasados individualmente
		someFn.apply(context, arguments); // mejor con funcion con paramentros - pasa contexto y array de los parametros de la someFn
	}
}

var boundPrint = myBind(printName, obj); // copia la funcion que retorno sin retornarla todavia, sin llamarla
boundPrint(); // sin argumentos


// 2) Improve myBind
var obj = {
  name: 'Markov'
}

function greetingsTo(name) {
  console.log('Hello ' + name + ', my name is: ' + this.name);
}
greetingsTo('Fante');
var boundGreeting = myBind(greetingsTo, obj);
boundGreeting('Fante');

function greetingsToAll(name, name2) {
  console.log('Hello ' + name + ' and ' + name2 + ', my name is: ' + this.name);
}
greetingsToAll('Fante', 'Hornby');
var boundToAll = myBind(greetingsToAll, obj);
boundToAll('Fante', 'Hornby');

var boundAndFirst = myBind(greetingsToAll, obj, 'Fante');
boundAndFirst('Hornby');


// // 3) Currying calculator
// var curry = require('curry'); // library
// var createCurryCalc = curry(curriedSumme);

// var curriedSumme = function(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
//curriedSumme.length; // 5
//MINE
function createCurryCalc() {
	return function(arguments) {
		let list = [];
		let total;
		while (arguments.length <= 5) {
			for (let i=0; i<arguments.length; i++){
				list.push(arguments[i]);
			}
		}
		for (let = 0; list.length; i++) {
			total += arguments[i];
		}
		return total;
	}
}

// SOLUTION
function createCurryCalc() {
  var args = [];
  return function calc() {
    var newArgs = Array.prototype.slice.call(arguments);
    args = args.concat(newArgs);
    if (args.length >= 5) {
      return args.reduce(function(acc, el) {
        return acc + el;
      }, 0);
    }
    return calc;
  }
}

var curryCalc = createCurryCalc();
var partial = curryCalc(2, 3, 4);
console.log(partial(1, 3));



var curryCalc2 = createCurryCalc();
var partial2 = curryCalc2(2);
//partial2 = partial2(4, 5)
//console.log(partial2(1, 3));


// myCurry
function calc(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function curry(fn) {
  var arity = fn.length;

  function helper(args) {
    return function() {
      var newArgs =  Array.prototype.slice.call(arguments);
      var totalArgs = args.concat(newArgs);
      if (totalArgs.length >= arity) {
        return fn.apply(this, totalArgs);
      }
      return helper(totalArgs);
    }
  }

  return helper([]);
}

// // 5) myNew
// function myNew(someFn) {
//   var newObj = {}; // 1.
//   someFn.call(newObj); // 2.
//   Object.setPrototypeOf(newObj, someFn.prototype); // 3.

//   return newObj; // 4.
// }

// function Writer() {
//   this.name = 'Jane Austen';
// }
// var writer2 = myNew(Writer);
// console.log(writer2);