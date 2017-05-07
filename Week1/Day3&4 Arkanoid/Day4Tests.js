test('sum function', function(t) {
	t.test("passing 2 integers", function(t) {
		t.equal(sumFn(3,7), 10, "sum 2 integers");
		t.end();
	});

		t.test("passing 1 integer", function(t) {
		t.equal(sumFn(3), 3, "returns same nember");
		t.end();
	});
})