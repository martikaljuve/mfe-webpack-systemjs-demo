// @ts-check
const webpack = require("webpack");
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
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
    publicPath: "http://localhost:3001/",
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
      {
        parser: {
          system: false,
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "system" },
      filename: "remoteEntry.js",
      // exposes: {
      //   "./AppContainer": "./src/App",
      // },
      // remotes: {
      //   app2: 'app2',
      //   app3: 'app3',
      // },
      shared: {
        ...pkg.dependencies,
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-dom"],
        },
      },
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};
