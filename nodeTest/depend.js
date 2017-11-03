function ageAthing(thing) {
	thing.name = "Old" + thing.name;
	thing.age = thing.age + 10;
	return thing;
}

module.exports = {
	age: ageAthing
};