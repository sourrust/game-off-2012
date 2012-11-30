module.exports = function(grunt) {
  'use strict';

  var lintFiles;

  lintFiles = grunt.file.expand(
                [ 'grunt.js'
                , 'scripts/*.js'
                , 'scripts/components/*.js'
                , 'scripts/scenes/*.js'
                ]);

  grunt.initConfig({
    lint: {
      all: lintFiles.filter(function(file) {
        // filter out box2d.js since it isn't my code
        return !(/box2d\.js/.test(file));
      })
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
