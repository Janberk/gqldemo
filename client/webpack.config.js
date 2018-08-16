const path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // A SourceMap without column-mappings ignoring loaded Source Maps. 
  devtool: 'cheap-module-source-map',
  plugins: [
    /* simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles
       that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file 
       for you, supply your own template using lodash templates or use your own loader.
    */
    new HtmlWebpackPlugin({
      title: 'GQLDEMO',
      favicon: './public/favicon.ico',
      template: './public/index.html'
    }),
    // Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, publicPath),
    filename: 'bundle.js',
    publicPath: publicPath,
    sourceMapFilename: 'bundle.map',
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    // Be possible go back pressing the 'back' button at chrome
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
    // hotmodulereplacementeplugin
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      }]
  }
}
