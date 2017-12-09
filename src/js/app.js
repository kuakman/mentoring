define(['backbone',
		'model/main',
		'text!template/index-challenge.html',
		'view/car-list',
		'extra/bindings'],
			function(Backbone, MainModel, IndexHTML) {

		var Application = Backbone.View.extend({

			events: {
				'keyup #typer': 'textCopy',
				'keyup #second': 'onSecondUp',
				'click button.add': 'onAdd'
			},

			initialize: function() {
				this.template = _.template(IndexHTML);
				Application.__super__.initialize.apply(this, arguments);
				return this.attachEvents();
			},

			attachEvents: function() {
				this.listenTo(this.collection, 'add', this.onCollectionAdd);
				this.listenTo(this.model, 'change:first', this.update);
			},

			render: function() {
				this.$el.append(this.template(this.model.toJSON()));
				return this;
			},

			update: function(model, opts) {
				$('.textCopy').text(model.get('first'));
				return this;
			},

			textCopy: function (e) {
				this.model.set({ first: $(e.currentTarget).val() });
			},

			onSecondUp: function(e) {
				this.model.set({ second: $(e.currentTarget).val() });
			},

			onAdd: function(e) {
				var value = Math.random() * 10;
				this.collection.add({ id: value, name: value });
			},

			onCollectionAdd: function(model, collection, opts) {
				this.$el.append('<strong>' + model.get('name') + '</strong><br/>');
			}

		}, {

				NAME: 'Application',

				bootstrap: function() {
					return new Application({
						el: 'body > .main',
						collection: new Backbone.Collection([
							{ id: 1, name: 'Uno' },
							{ id: 2, name: 'Dos' },
							{ id: 3, name: 'Tres' }
						]),
						model: new MainModel()
					}).render();
				}

		});

		return Application.bootstrap();
});
