import { merge } from "webpack-merge";

import { commonWebpackConfig } from "./webpack.common";
import { prodWebpackConfig } from "./webpack.prod";
import { devWebpackConfig } from "./webpack.dev";
import { IEnvVars } from "./webpack.typings";

module.exports = (envVars: IEnvVars) => {
  const { mode } = envVars;
  const isProd = mode === "production";
  const modeConfig = isProd ? prodWebpackConfig : devWebpackConfig;
  const config = merge(commonWebpackConfig, modeConfig);
  return config;
};
