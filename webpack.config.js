const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.resolve(__dirname, "./src/index.js"),
    'webpack-hot-middleware/client'
  ],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src"),
        loader: "style-loader!css-loader"
      }
    ]
  }
}
