/**
*	Main Application Bootstrap
*	@amd
**/
define(['model/application-model',
	'view/exercise',
	'text!templates/application.html'], function(ApplicationModel, Exercise, ApplicationHTML) {

	var Application = Backbone.View.extend({
		// Prototype Properties & Methods

		events: {},

		initialize: function() {
			this.template = _.template(ApplicationHTML);
			return Application.__super__.initialize.apply(this, arguments);
		},

		render: function() {
			this.$el.append(this.template(this.model.toJSON()));
			return this;
		}

	}, {
		// Static Properties & Methods

		NAME: 'Application',

		bootstrap: function() {
			return new Application({ el: 'body > .main', model: ApplicationModel.get() }).render();
		}

	});

	return Application;

});
