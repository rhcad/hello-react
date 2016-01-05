var webpack = require('webpack');
var webpackConfig = require('./webpack_.js').dev;

// The actual grunt server settings
module.exports = {
  options: {
    port: 3000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost',
    livereload: 35729
  },
  livereload: {
    options: {
      open: false, // set to false to prevent opening default browser
      middleware: function (connect) {
        return [
          connect.static('src'),

          // route other files to webpack's in-memory dev server
          require('webpack-dev-middleware')(webpack(webpackConfig))
        ];
      }
    }
  },
  dist: {
    options: {
      open: true,
      base: 'src'
    }
  }
};