import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

import { IDevConfiguration } from "./webpack.typings";
import { commonStyleRules } from "./webpack.common";

export const devWebpackConfig: IDevConfiguration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: commonStyleRules,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: "node_modules",
      emitWarning: false,
      cache: true,
    }),
  ],
};
