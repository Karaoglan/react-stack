var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/main.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  devServer: { inline: true },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]

  }
};
