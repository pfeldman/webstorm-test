const path = require("path");
const { EnvironmentPlugin, ProvidePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const ROOT_DIR = path.join(__dirname, "../");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },
      {
        test: /\.svg?$/,
        issuer: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new EnvironmentPlugin({
      version: process.env.npm_package_version,
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    alias: {
      "@utils": path.join(ROOT_DIR, "/src/utils"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
};
