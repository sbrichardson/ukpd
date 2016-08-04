/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: { jshintrc: true },
      gruntfile: { src: 'gruntfile.js' },
      src: { src: 'src/**/*.js' }
    },
    bump: {
      options: {
        files: ['package.json'],
        commitFiles: ['package.json'],
        tagName: '%VERSION%',
        tagMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        commitMessage: 'Release v%VERSION%' + (grunt.option('m') ? ' - ' + grunt.option('m') : ''),
        pushTo: 'origin'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('test', ['jshint']);

  // Releasing
  grunt.registerTask('release:minor', ['test', 'bump:minor']);
  grunt.registerTask('release:patch', ['test', 'bump:patch']);
  // Commenting out releasing a major version until we are ready for v1
  // grunt.registerTask('release:major', ['test', 'bump:major']);

};