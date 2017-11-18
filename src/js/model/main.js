define(['backbone'], function() {

	var MainModel = Backbone.Model.extend({

		defaults: function() {
			return {
				first: "",
				second: 0
			};
		}

	});

	return MainModel;
});
