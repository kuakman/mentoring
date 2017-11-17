define(['backbone',
		'model/main',
		'text!template/index-challenge.html'], function(Backbone, MainModel, IndexHTML) {

		var Application = Backbone.View.extend({

			events: {
				'keyup #typer': 'textCopy'
			},

			initialize: function() {
				this.template = _.template(IndexHTML);
				return Application.__super__.initialize.apply(this, arguments);
			},

			render: function() {
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			},

			textCopy: function (e) {
					var newText = $(e.currentTarget).val();
					$('.textCopy').text(newText);
			}
		}, {

				NAME: 'Application',

				bootstrap: function() {
					return new Application({ el: 'body > .main', model: new MainModel() }).render();
				}
			
		});

		return Application.bootstrap();
});