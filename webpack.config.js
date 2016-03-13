const Path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    Path.resolve(__dirname, "./src/index.js"),
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: Path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: Path.resolve(__dirname, "./build")
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: Path.resolve(__dirname, "./src"),
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        include: Path.resolve(__dirname, "./src"),
        loader: "style-loader!css-loader"
      }
    ]
  }
}
