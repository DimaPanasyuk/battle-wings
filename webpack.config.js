const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '.');

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: path.resolve(rootDir, 'public', 'app', 'js', 'app'),
  output: {
    path: path.resolve(rootDir, 'dist'),
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
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'public', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(rootDir, 'public', 'build'),
    port: 3000
  }
};