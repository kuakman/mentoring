/**
*	RequireJs Main Configuration
**/
requirejs.config({

	baseUrl: '/js',

	paths: {
		text: 'libraries/text/text',
		backbone: 'libraries/backbone/backbone-min',
		jquery: 'libraries/jquery/dist/jquery.min',
		underscore: 'libraries/underscore/underscore-min'
	},

	shim: {
		underscore: { exports: '_', deps: ['text'] },
		jquery: { deps: ['underscore'], exports: '$' },
		backbone: { deps: ['jquery'], exports: 'Backbone' }
	}

});
