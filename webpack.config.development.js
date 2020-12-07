const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@reducers': path.resolve(__dirname, 'src/store/reducers'),
      '@actions': path.resolve(__dirname, 'src/store/actions'),
      '@actionTypes': path.resolve(__dirname, 'src/store/actionTypes'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    port: 3001,
    open: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
})