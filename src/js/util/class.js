/**
*	Backbone Strategy for inheritance
**/
define(['underscore'], function(_) {

	var inherit = function(protoProps, staticProps) {
		var parent = this;
		var child;

		if (protoProps && _.has(protoProps, 'constructor')) {
			child = protoProps.constructor;
		} else {
			child = function() { return parent.apply(this, arguments); };
		}

		// static variables (Static Props attached to the constructor);
		// Child.accessToStatic
		_.extend(child, parent, staticProps);

		child.prototype = _.create(parent.prototype, protoProps);
		child.prototype.constructor = child;

		child.__super__ = parent.prototype;
		child.extend = inherit;

		return child;
    };

	var Class = function() {};
	Class.extend = inherit;
	return Class;

});
