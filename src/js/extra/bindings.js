define(['underscore'], function() {

	var global = {
		variable: "Hello Global"
	};

	var obj = {
		variable: "Hello from obj",
		something: function(comingBind1, comingBind2, id) {
			console.log(comingBind1, comingBind2, id, this.variable);
		}
	};

	// 1) Verbatim
	obj.something("case 1: ");

	// 2) Bind
	// return obj.something.call(global, arguments[0], 'Hello');
	// return obj.something.apply(global, arguments);

	var dynamic = "Hardcoded 1";
	var newFunction = _.bind(obj.something, global, dynamic, "Hardcoded 2");
	//... 1000 lines of code
	dynamic = "CHANGED"; // and then changed

	obj.something("case 1.1: ");
	newFunction("scope change: ");
	console.log(dynamic);

});
