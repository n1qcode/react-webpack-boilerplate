import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin, RuleSetRule } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { paths } from "./webpack.paths";

export const commonWebpackConfig: Configuration = {
  entry: paths.appIndex,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheCompression: false,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  cache: {
    type: "filesystem",
  },
  output: {
    path: paths.appBuild,
    publicPath: paths.appPublicPath,
    filename: "[name].[chunkhash].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ProgressPlugin(),
  ],
  stats: "errors-only",
};

export const commonStyleRules: RuleSetRule[] = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  }
];
