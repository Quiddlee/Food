'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: '/Programs/OServer/OSPanel/domains/Food/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
