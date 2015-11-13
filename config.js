'use strict';

module.exports = {
    
    'browserPort': 9000,
    'UIPort': 9001,
    'serverPort': 9002,

    'lib': {
        'src': 'app/lib/*',
        'dest': 'build/lib'
    },

    'data': {
        'src': 'app/data.json',
        'dest': 'build'
    },


    'styles': {
        'src': 'app/styles/**/*.scss',
        'dest': 'build/css'
    },

    'html': {
        'src': 'app/views/**/*.html',
        'dest': 'build/views'
    },

    'scripts': {
        'src': ['app/scripts/**/*.js', 'app/scripts/**/*.jsx'],
        'dest': 'build/js',
        'main': 'app/scripts/main.js'
    },

    'views': {
        'src': 'app/**/*.jade',
        'dest': 'build'
    },

    'fonts': {
        'src': ['app/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'images': {
        'src': 'app/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src': 'app/fonts/**/*',
        'dest': 'build/fonts'

    },

    'dist': {
        'root': 'build'
    },

    'icons': {
        'src': 'app/icons/*',
        'dest': 'build/icons'
    }
};