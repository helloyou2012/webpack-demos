const webpack = require('webpack');
const join = require('path').join;
const glob = require('glob');

const pages = glob
  .sync('page/**/index.js')
  .reduce((obj, file) => {
    obj[file.replace(/\.js$/, '')] = join(__dirname, file);
    return obj;
  }, {});
const entry = Object.assign({
  lib: glob.sync('./lib/*.js')
}, pages);

module.exports = {
  entry: entry,
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
        ]
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      minChunks: Infinity
    })
  ]
};