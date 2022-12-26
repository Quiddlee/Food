'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + 'Programs/OServer/OSPanel/domains/Food'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
