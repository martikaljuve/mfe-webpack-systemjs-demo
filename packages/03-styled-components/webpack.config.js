// @ts-check
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");

const pkg = require("./package.json");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3003/",
    libraryTarget: "system",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app3",
      library: { type: "system" },
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
      shared: pkg.dependencies,
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};
