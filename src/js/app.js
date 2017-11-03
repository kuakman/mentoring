define(['backbone',
		'model/main',
		'text!template/index-main.html'], function(Backbone, MainModel, IndexHTML) {

		var Application = Backbone.View.extend({

			initialize: function() {
				this.template = _.template(IndexHTML);
				return Application.__super__.initialize.apply(this, arguments);

			},

			render: function() {
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			}
		}, {

				NAME: 'Application',

				bootstrap: function() {
					return new Application({ el: 'body > .main', model: new MainModel() }).render();
				}
			
		});

		return Application.bootstrap();
});