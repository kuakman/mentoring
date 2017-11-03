define(['backbone'], function() {

	var MainModel = Backbone.Model.extend({
		defaults: function() {
			return { message: "Hello Pato" };
		}
	});

	return MainModel;
});