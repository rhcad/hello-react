module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: '*.css',
      dest: 'src/assets/css'
    }]
  }
};
