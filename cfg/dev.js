'use strict';

const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin');

const config = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [
    path.join(__dirname, '/../src')
  ]
});

module.exports = config;
