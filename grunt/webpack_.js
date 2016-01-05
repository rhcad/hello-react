// Readme: http://webpack.github.io/docs/configuration.html
// Babel presets: http://babeljs.io/docs/plugins

var path = require('path'),
  webpack = require('webpack'),
  commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var entry = {
  app: './src/js/app.js',
  dummy: './src/js/dummy.js'
};

var output = {
  path: path.join(__dirname, '../src/assets/js'),
  filename: '[name].js'
};

var resolve = {
  extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
};

var webpackModules = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
  ]
};

module.exports = {
  dev: {
    entry: entry,
    output: output,
    module: webpackModules,
    resolve: resolve,
    plugins: [
      commonsPlugin,
      new webpack.HotModuleReplacementPlugin()
    ],

    // Configure the console output
    stats: {
      colors: true,
      modules: true,
      reasons: false
    },
    progress: true,
    watch: true,
    devtool: 'source-map',
    bail: true,
    watchDelay: 2000
  },

  // Exclude any dev like configuration for any production like env
  dist: {
    entry: entry,
    output: output,
    module: webpackModules,
    resolve: resolve,
    plugins: [
      commonsPlugin,
      new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin()
    ]
  }
};
