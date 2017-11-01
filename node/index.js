// My library depends on depa
var addition = require('./dependencies/depa');

var some = function() {
	return addition(1, 2);
};

console.log(some());
