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
    less: {
      dev: {
        options: {
          paths: ['less']
        },
        files: {
          'build/style.css': 'less/style.less'
        }
      },
      compress: {
        options: {
          paths: ['less'],
          yuicompress: true
        },
        files: {
          'build/style.css': 'less/style.less'
        }
      }
    },
    min: {
      dist: {
        src: ['scripts/lib/require.js'],
        dest: 'build/require-min.js'
      }
    },
    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', 'less:dev lint');
  grunt.registerTask('build', 'requirejs min less:compress');
};
