const Path = require("path")

module.exports = {
    entry: Path.resolve(__dirname, "./src/index.js"),
    output: {
        path: Path.resolve(__dirname, "./build"),
        filename: "bundle.js",
        publicPath: "./bundle"
    },
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
