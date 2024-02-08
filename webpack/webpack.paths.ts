import path from "path";

export const paths = {
  appPublicPath: "/",
  appFavicon: "./public/favicon.ico",
  appIndex: path.resolve(__dirname, "../src/index.tsx"),
  appBuild: path.resolve(__dirname, "../build"),
  appHtml: path.resolve(__dirname, "../public/index.html"),
};
