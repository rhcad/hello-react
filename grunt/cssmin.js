module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: '*.css',
      dest: 'src/assets/css'
    }]
  }
};