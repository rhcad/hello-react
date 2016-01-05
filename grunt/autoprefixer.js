module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  assets: {
    files: [{
      expand: true,
      cwd: 'src/styles',
      src: '*.css',
      dest: 'src/assets/css'
    }]
  }
};
