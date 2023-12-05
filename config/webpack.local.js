const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

// mode: "development" means to run yarn start
const prodConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
    }),
  ],
  devtool: "source-map",
};

module.exports = merge(commonConfig, prodConfig);
