/**
*	Exercise Javascript
**/
define(['util/class'], function(Class) {

	var Exercise = Class.extend({

		name: 'Default',

		data: {
			value: 'Hello World'
		},

		constructor: function(attrs) {
			attrs || (attrs = {});
			return _.extend(this, attrs);
		},

		setName: function(name) {
			this.name = name;
		},

		getName: function() {
			return this.name;
		},

		debug: function() {
			var properties = _.reduce(_.allKeys(this), function(memo, k) {
				var v = !_.isFunction(this[k]) ? this[k] : k;
				memo.push(k + ' = ' + v);
				return memo;
			}, [], this).join(', ');
			return ['[', this.constructor.NAME, properties, ']'].join(' ');
		}

	}, {

		NAME: 'Exercise'

	});

	var one = new Exercise({ name: 'Steve' });
	var two = new Exercise({ name: 'Alex' });
	var three = new Exercise();

	var ExtendedExercise = Exercise.extend({

		name: 'DefaultExtended',

	}, {

		NAME: 'ExtendedExercise'

	});

	var four = new ExtendedExercise({ name: 'Pato' });
	four.data.value = "Hola Mundo!";

	console.log('One: ', one.debug());
	console.log('Two: ', two.debug());
	console.log('Three: ', three.debug());
	console.log('(Extended) Four: ', four.debug());

	return { one: one, two: two, three: three };

});
