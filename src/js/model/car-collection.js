define(['backbone'], function() {

	var CarCollection = Backbone.Collection.extend({

		initialize: function() {
			this.fetch();
		},

		url: function() {
			return '/js/data/cars.json';
		},

		parse: function(response) {
			return _.filter(response, function(car) {
				return (car.name !== 'Subaru');
			});
		},

		findById: function(id) {
			return this.find(function(car) {
				return (car.id === id);
			});
		}

	});

	return CarCollection;

});
