const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('[name].css');
module.exports = [{
  'entry-a': './entry-a.js'
}, {
  'entry-b': './entry-b.js'
}].map(v => {
  return {
    entry: v,
    output: {
      path: 'dist',
      filename: '[name].js'
    },
    module: {
      loaders: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.css?$/,
        loader: extractCSS.extract('css')
      }]
    },
    plugins: [
      extractCSS
    ],
    stats: {
      children: true
    }
  }
});