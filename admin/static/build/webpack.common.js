const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "../src"),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true,
    }),
  ],
};
