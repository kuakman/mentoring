/**
*	Application Model
**/
define(['backbone'], function(Backbone) {

	var ApplicationModel = Backbone.Model.extend({

		defaults: function() {
			return {
				message: 'Hello World'
			};
		},

		initialize: function() {
			return ApplicationModel.__super__.initialize.apply(this, arguments);
		}

	}, {

		NAME: 'ApplicationModel',

		get: function() {
			return new ApplicationModel();
		}

	});

	return ApplicationModel;

});
