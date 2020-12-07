const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
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
    new CompressionPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ // use in code app console.log('process.env', process.env.NODE_ENV);
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  devtool: 'inline-source-map'
})