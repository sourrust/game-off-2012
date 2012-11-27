module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    lint: {
      all: [ 'grunt.js'
           , 'script/*.js'
           , 'script/components/*.js'
           , 'script/scenes/*.js'
           ]
    },
    jshint: {
      options: {
        browser: true,
        node: true,
        asi: false,
        eqeqeq: true,
        laxcomma: true,
        strict: true,
        undef: true,
        unused: true
      },
      globals: {
        require: true,
        requirejs: true,
        define: true
      }
    },
    requirejs: {
      compile: {
        options: {
          name: 'main',
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/main.js',
          out: 'build/dcgame-min.js'
        }
      }
    },
    min: {
      dist: {
        src: ['scripts/lib/require.js'],
        dest: 'build/require-min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', 'lint');
  grunt.registerTask('build', 'lint requirejs min');
};
