var test = require('tape');
var exercises = require('C:/Users/Fio/Documents/Programacion/Bootcamp/Week1/Day1Excercises.js');

test('My first test', function(t) {
  t.true(true, 'should work easily');
  t.end();
});


test('isString function', function(t) {
  t.test('when passed a string', function(t) {
    t.true(exercises.isString('hello'), 'should return true');
    t.end();
  });

  t.test('when passed an array', function(t) {
    t.false(exercises.isString([1, 2]), 'should return false');
    t.end();
  });
});


test('isArray function', function(t) {
	t.test('when passed an array', function(t) {
  	t.true(exercises.isArray([1, 2]), 'should return true');
  	t.end();
  });

  t.test('when passed an array', function(t) {
    t.false(exercises.isArray('hello'), 'should return false');
    t.end();
  });
});


test('areSameType function', function(t) {
	t.test('when passed same types', function(t) {
  	t.true(exercises.areSameType(['hello', 'world', 'long sentence']), 'should return true');
  	t.end();
  });

  t.test('when passed different types', function(t) {
    t.false(exercises.areSameType([[1, 2, 3], { a: 2 }]), 'should return false');
    t.end();
  });
});


test('longest function', function(t) {
	t.test('when passed two strings', function(t) {
  	t.equal(exercises.longest('abcccaa', 'acddddffzzz'), 'abcdfz', 'should return a string sorted (A-Z) without repeated letters');
  	t.end();
  });
});


test('convert function', function(t) {
	t.test('when passed a number', function(t) {
  	t.deepEqual(exercises.convert(429563), [9, 6, 5, 4, 3, 2], 'should return an array with sorted odd and even numbers');
  	t.end();
  });
});


test('repetitions function', function(t) {
	t.test('when passed an array', function(t) {
  	t.deepEqual(exercises.repetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']), { kerouac: 2, fante: 3, buk: 2, hemingway: 1, hornby: 1 }, 'should return object with the arrays elements and repeated number');
  	t.end();
  });
});


test('isCaught function', function(t) {
	t.test('when passed a string', function(t) {
  	t.true(exercises.isCaught('..C..m'), 'should return true');
  	t.end();
  });

  t.test('when passed a string', function(t) {
    t.false(exercises.isCaught('C.....m'), 'should return false');
    t.end();
  });
});

// // fails
// test('splitTheBill function', function(t) {
// 	t.test('when passed a number', function(t) {
//   	t.equal(exercises.splitTheBill(429563), [9, 6, 5, 4, 3, 2], 'should return an array with sorted odd and even numbers');
//   	t.end();
//   });
// });

test('exp function', function(t) {
	t.test('when passed two numbers', function(t) {
  	t.equal(exercises.exp(5, 3), 125, 'should return the exponentiation');
  	t.end();
  });
  t.test('when passed two numbers', function(t) {
  	t.equal(exercises.exp(4, 0), 1, 'should return the exponentiation');
  	t.end();
  });
});

test('factorial function', function(t) {
	t.test('when passed a number', function(t) {
  	t.equal(exercises.factorial(4), 24, 'should return the factorial');
  	t.end();
  });
  t.test('when passed a number', function(t) {
  	t.equal(exercises.factorial(0), 1, 'should return the factorial');
  	t.end();
  });
});


test('fibonacci function', function(t) {
	t.test('when passed a number', function(t) {
  	t.deepEqual(exercises.fibs(7), [0, 1, 1, 2, 3, 5, 8], 'should return an array with the amount of fibonacci numbers');
  	t.end();
  });
  t.test('when passed a number', function(t) {
  	t.deepEqual(exercises.fibs(1), [0, 1], 'should return an array with the amount of fibonacci numbers');
  	t.end();
  });
});


test('zeroSum function', function(t) {
	t.test('when passed an array', function(t) {
  	t.deepEqual(exercises.zeroSum([1, 5, 0, -5, 3, -1]), [[0, 5], [1, 3]], 'should return an array with the index that summed are equal 0');
  	t.end();
  });
  t.test('when passed an array', function(t) {
  	t.deepEqual(exercises.zeroSum([0, 4, 3, 5]), [], 'should return an array with the index that summed are equal 0');
  	t.end();
  });
});