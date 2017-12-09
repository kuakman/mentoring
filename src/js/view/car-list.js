define(['model/car-collection'], function(CarCollection) {

	var CarList = Backbone.View.extend({

		initialize: function() {
			this.listenTo(this.collection, 'update', this.onFetch);
			return CarList.__super__.initialize.apply(this, arguments);
		},

		onFetch: function(collection) {
			console.log(collection.findById(1));
		}

	});

	new CarList({
		collection: new CarCollection()
	});

	return CarList;

});
