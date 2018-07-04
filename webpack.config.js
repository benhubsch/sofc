const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./client/index'],
  module: {
    rules: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  mode: 'development'
};
