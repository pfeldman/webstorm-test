const { merge } = require("webpack-merge");
const { EnvironmentPlugin } = require("webpack");
const commonConfig = require("./webpack.common.js");

// mode: "production" means to run yarn build
const prodConfig = {
  mode: "production",
  plugins: [
    new EnvironmentPlugin({
      cognitoPoolId: "us-west-2_q8x199jyA",
      cognitoClientId: "5q42ktvgjc9edkpt40je5a9bdh",
      datadogRumApplicationId: "7970aae8-bb1b-4cbb-a8b9-dd70aceac08c",
      datadogRumClientToken: "pube43b74d1bf0d8111550cfc7bf7aabc86",
      name: "staging",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
