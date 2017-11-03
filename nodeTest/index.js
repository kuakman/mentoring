var changeUtil = require('./depend');
var thing = {
		name: "Human",
		age: 25
	};
function doAThing(thing) {
	console.log(changeUtil.age(thing));
}

for (i = 0 ; i < 10 ; i++) {
	doAThing(thing);
}