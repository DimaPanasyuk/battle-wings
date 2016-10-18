const webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-eval-source-map',
  entry: './public/app/js/app.ts',
  output: {
    path: `${__dirname}/public/build`,
    publicPath: '/public/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.less']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style!css!less'
    }]
  }
};