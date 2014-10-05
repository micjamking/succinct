/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      js: {
        files: [ 'Gruntfile.js', 'jQuery.succinct.js'],
        tasks: ['newer:jshint:all']
      }
    },

    // Copies remaining files
    copy: {
      plugin: {
        expand: true,
        dest: 'dist/',
        src: [
          'jQuery.succinct.js',
          'bower.json',
          'README.md',
          'LICENSE'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      plugin: {
        files: [{
          dot: true,
          src: 'dist/{,*/}*.*'
        }]
      }
    },
    uglify: {
      options: {
        preserveComments: 'all'
      },
      target: {
        files: {
          'dist/jQuery.succinct.min.js': ['dist/jQuery.succinct.js']
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        node: true,
        browser: true,
        esnext: true,
        bitwise: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        quotmark: 'single',
        regexp: true,
        undef: true,
        unused: true,
        strict: true,
        trailing: true,
        smarttabs: true,
        globals: {
          $: false,
          jQuery: false
        }
      },
      all: [ 'Gruntfile.js', 'jQuery.succinct.js' ]
    },
    buildcontrol: {
      options: {
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      plugin: {
        options: {
          dir: 'dist',
          remote: 'git@github.com:micjamking/succinct.git',
          branch: 'master'
        }
      },
      app: {
        options: {
          remote: 'git@github.com:micjamking/succinct.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('serve', [
    'jshint',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'copy',
    'uglify',
//     'buildcontrol'
  ]);

  grunt.registerTask('deploy-app', [
    'buildcontrol:app'
  ]);

  grunt.registerTask('deploy-plugin', [
    'buildcontrol:plugin'
  ]);

};