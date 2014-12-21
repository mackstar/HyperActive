module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'tests/*Spec.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
}