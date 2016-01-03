module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/styles/',
      src: ['*.scss', '*.css'],
      dest: 'src/assets/css',
      ext: '.css'
    }]
  },
  dist: {
    options: {
      sourcemap: 'none',
      style: 'compressed'
    },
    files: [{
      expand: true,
      cwd: 'src/styles/',
      src: ['*.scss', '*.css'],
      dest: 'src/assets/css',
      ext: '.css'
    }]
  }
};
