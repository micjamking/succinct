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
        dest: 'plugin/',
        src: [
          'jQuery.succinct.js',
          'bower.json',
          'README.md',
          'LICENSE'
        ]
      },
      app: {
        expand: true,
        cwd: 'app/',
        dest: 'dist/',
        src: [
          'index.html'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      plugin: {
        files: [{
          dot: true,
          src: 'plugin'
        }]
      },
      app: {
        files: [{
          dot: true,
          src: 'dist'
        }]
      }
    },
    uglify: {
      options: {
        preserveComments: 'all'
      },
      plugin: {
        files: {
          'plugin/jQuery.succinct.min.js': ['plugin/jQuery.succinct.js']
        }
      },
      app: {
        files: {
          'dist/jQuery.succinct.min.js': ['jQuery.succinct.js']
          'dist/script.min.js': ['app/script.js']
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
    cssmin: {
      app: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/'
        }]
      }
    },
    buildcontrol: {
      options: {
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      plugin: {
        options: {
          dir: 'plugin',
          remote: 'git@github.com:micjamking/succinct.git',
          branch: 'master'
        }
      },
      app: {
        options: {
          dir: 'dist',
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
    'cssmin',
    'buildcontrol'
  ]);

  grunt.registerTask('deploy-app', [
    'clean:app',
    'jshint',
    'copy:app',
    'uglify:app',
    'cssmin:app',
    'buildcontrol:app'
  ]);

  grunt.registerTask('deploy-plugin', [
    'clean:plugin',
    'jshint',
    'copy:plugin',
    'uglify:plugin',
    'buildcontrol:plugin'
  ]);

};