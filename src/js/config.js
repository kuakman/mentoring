requirejs.config({

    baseUrl: '/js',

    paths: {
        text: 'libraries/text/text',
        jquery: 'libraries/jquery/dist/jquery.min',
        underscore: 'libraries/underscore/underscore-min',
        backbone: 'libraries/backbone/backbone-min'
    },

    shim: {
    	underscore: { deps: ['text'], exports: '_' },
        jquery: { deps: ['underscore'], exports: '$' },
        backbone: { deps:['jquery'], exports: 'Backbone' }
    }

});