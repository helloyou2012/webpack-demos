const webpack = require('webpack');
const join = require('path').join;

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: [
          ['es2015', {
            modules: false
          }],
          'react',
          'stage-0'
        ],
        plugins: [
          'syntax-dynamic-import'
        ]
      }
    }]
  }
};