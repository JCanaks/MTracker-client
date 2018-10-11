const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  resolve: { extensions: ['*', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 5000,
    publicPath: "http://localhost:5000/dist/",
    hot: true,
    historyApiFallback: true,
  },
  plugins: [ 
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
  }),
  new CleanWebpackPlugin(['./src/dist', 'build'], {
    root: path.join(__dirname, 'src', 'dist'),
    dry: false,
    verbose: true,
  })
]
};
