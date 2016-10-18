const webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-eval-source-map',
  entry: './public/app/js/app.js',
  output: {
    path: `${__dirname}/public/build`,
    publicPath: '/public/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.less']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style!css!less'
    }]
  },
  devServer: {
    contentBase: './public',
    port: 3000,
    inline: true,
    stats: 'normal',
    serveCustomHtmlInDev: true
  }
};