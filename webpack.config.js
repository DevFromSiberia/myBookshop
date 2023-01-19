const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
    open: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}
