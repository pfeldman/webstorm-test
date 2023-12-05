const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

// mode: "production" means to run yarn build
const devConfig = {
  mode: "development",
  plugins: [
    new EnvironmentPlugin({
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
