// Watches files for changes and runs tasks based on the changed files
module.exports = {
  options: {
    livereload: '<%= connect.options.livereload %>'
  },
  styles: {
    files: ['src/styles/{,*/}*.css'],
    tasks: ['autoprefixer']
  },
  livereload: {
    files: [
      'src/assets/{,*/}*.{js,css}',
      'src/{,*/}*.html',
      'src/{,*/}*.{png,jpg,jpeg,gif,svg}'
    ]
  }
};
