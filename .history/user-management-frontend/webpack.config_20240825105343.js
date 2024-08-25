const path = require("path");

module.exports = {
  // Entry point for your application
  entry: "./src/index.js",

  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // Module rules and loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Resolve and fallback for Node.js core modules
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
    },
  },

  // DevServer configuration if you're using webpack-dev-server
  devServer: {
    static: "./dist",
    port: 9000,
    hot: true,
  },

  // Other potential plugins and configurations can go here
};
