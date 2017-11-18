define(['backbone'], function() {

	var Collection = Backbone.Collection.extend({

		initialize: function() {

		},

		findSomething: function(id) {
			return this.find(function(model) {
				return (model.get('id') === id);
			});
		}

	});

	return Collection;

});
