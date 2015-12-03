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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FHack',
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV === 'production',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
