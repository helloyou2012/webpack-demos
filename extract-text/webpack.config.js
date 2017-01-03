const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const join = require('path').join;

const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = [{
  'entry-a': './entry-a.js'
}, {
  'entry-b': './entry-b.js'
}].map(v => {
  return {
    entry: v,
    output: {
      path: join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      loaders: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css?$/,
        loader: extractCSS.extract('css-loader')
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