var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    dist: "./src/entries/dist.js",
    devTest1: "./src/entries/devTest1.js"
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: "[name].js",
    sourceMapFileName: "[file].map"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/scripts"),
          path.resolve(__dirname, "src/entries")
        ],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src/styles"),
        loader: "style!css"
      },
      {
        test: /\.json$/,
        include: path.resolve(__dirname, "src/content"),
        loader: 'json'
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 8050,
    contentBase: "./build",
    quiet: true
  }
};
