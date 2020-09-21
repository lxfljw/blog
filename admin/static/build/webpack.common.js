/*
 * @Author: luxiaofeng
 * @Date: 2020-09-13 23:29:34
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-09-21 23:15:31
 * @Description: file content
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "js/[name].[hash].js",
    path: path.join(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
    // 别名配置
    alias: {
      ["@"]: path.resolve(__dirname, "../", "src/"),
    },
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
        test: /\.less$/,
        use: [
          "style-loader",
          // NODE_ENV === 'development' ? "css-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          // NODE_ENV === "development"
          //   ? "css-loader"
          //   : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            //1024 == 1kb
            //小于10kb时打包成base64编码的图片否则单独打包成图片
            limit: 10240,
            name: path.join("img/[name].[hash:7].[ext]"),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: path.join("font/[name].[hash:7].[ext]"),
            },
          },
        ],
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
