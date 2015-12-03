const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FHack',
      filename: 'index.html',
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV === 'production',
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
    }],
  },
};
