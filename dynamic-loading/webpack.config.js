module.exports = {
  entry: {
    "index": "./index.js"
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015-webpack', 'stage-0']
      }
    }]
  }
};