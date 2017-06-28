var DataType = require('data-type');
var asciify = require('asciify');

var myModule = require('C:/Users/Fio/Documents/Programacion/Bootcamp/Week1/Day1Excercises.js');

// Data-type tests
var firstString = myModule.isString('firstApartment');
console.log(firstString);
var secondString = myModule.isString('Hola');
console.log(secondString);
var firstArray = myModule.isArray('Hola');
var secondArray = myModule.isArray(['hello']);
console.log(firstArray);
console.log(secondArray);


var firstTest = myModule.areSameType;
var test4 = myModule.longest;
var test5 = myModule.convert;
var test6 = myModule.repetitions;
var test7 = myModule.isCaught;
var test8 = myModule.splitTheBill;
var test9 = myModule.exp;
var test10 = myModule.factorial;
var test11 = myModule.fibs;
var test12 = myModule.zeroSum;