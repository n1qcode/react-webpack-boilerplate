import { WebpackConfiguration } from "webpack-cli";
import { Configuration as DevConfiguration } from "webpack-dev-server";

export interface IDevConfiguration extends WebpackConfiguration {
  devServer: DevConfiguration;
}

export interface IEnvVars {
  mode: string;
}
