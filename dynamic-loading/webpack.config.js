const webpack = require('webpack');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: [
          ['es2015', {
            modules: false
          }],
          'react',
          'stage-0'
        ]
      }
    }]
  }
};