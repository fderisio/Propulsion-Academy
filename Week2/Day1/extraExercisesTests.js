var test = require('tape');
var testExercises = require('C:/Users/Fio/Documents/Programacion/Bootcamp/Week2/Day1 Tests/testExercises.js');


test('isAnagram function', function(t) {
  t.test('when passed two anagram strings', function(t) {
    t.true(testExercises.isAnagram('hello', 'olleh'), 'should return true');
    t.end();
  });

  t.test('when passed two not anagram strings', function(t) {
    t.false(testExercises.isAnagram('car', 'cra'), 'should return false');
    t.end();
  });
});


test('boxVolume function', function(t) {
  t.test('when passed three measures', function(t) {
    t.deepEqual(testExercises.boxVolume(10, 10, 10), 1, 'should return the volume');
    t.end();
  });
});


test('intersect function', function(t) {
  t.test('when passed two rectangles', function(t) {
    t.deepEqual(testExercises.intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]), [2, 2], [4, 3], 'should return their intersections points');
    t.end();
  });
});