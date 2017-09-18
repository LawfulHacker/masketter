const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var fs = require('fs');
var nodeModules = {};

fs.readdirSync('node_modules').forEach(function (m) {
  if (m !== '.bin') {
    nodeModules[m] = true;
  }
});

var nodeModulesTransform = function(context, request, callback) {
  // search for a '/' indicating a nested module
  var slashIndex = request.indexOf("/");
  var rootModuleName;
  if (slashIndex == -1) {
    rootModuleName = request;
  } else {
    rootModuleName = request.substr(0, slashIndex);
  }

  // Match for root modules that are in our node_modules
  if (nodeModules.hasOwnProperty(rootModuleName)) {
    callback(null, "commonjs " + request);
  } else {
    callback();
  }
}

module.exports = {
  entry: {
    masketter: './src/index.ts',
    examples: './examples/index.ts'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: nodeModulesTransform,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Masketter'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  }
};
