var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    prod: "./src/prod.js"
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "prod.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, exclude: /node_modules/, loader: "style!css" },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    port: 8050
  }
};
