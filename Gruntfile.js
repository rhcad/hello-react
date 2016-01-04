// Readme: http://www.gruntjs.net/configuring-tasks

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({});

  grunt.config('webpack', require('./grunt/webpack_'));
  grunt.config('sass', require('./grunt/sass'));
  grunt.config('watch', require('./grunt/watch'));
  grunt.config('eslint', require('./grunt/eslint'));
  grunt.config('clean', require('./grunt/clean'));
  grunt.config('connect', require('./grunt/connect'));
  grunt.config('open', require('./grunt/open'));

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('dev', ['clean', 'eslint', 'sass:dev', 'webpack:dev']);
  grunt.registerTask('build', ['clean', 'eslint', 'sass:dist', 'webpack:dist']);

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run(['dev', 'connect:livereload', 'open:dev', 'watch']);
  });

};
