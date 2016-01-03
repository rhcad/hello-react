// Watches files for changes and runs tasks based on the changed files
module.exports = {
  options: {
    livereload: '<%= connect.options.livereload %>'
  },
  sass: {
    files: ['src/styles/*.scss', 'src/styles/*.css'],
    tasks: ['sass']
  },
  livereload: {
    files: [
      'src/assets/{,*/}*.{js,css}',
      'src/{,*/}*.html',
      'src/{,*/}*.{png,jpg,jpeg,gif,svg}'
    ]
  }
};
