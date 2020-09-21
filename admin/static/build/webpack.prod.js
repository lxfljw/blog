/*
 * @Author: luxiaofeng
 * @Date: 2020-09-21 21:48:15
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-09-21 23:17:00
 * @Description: 生产配置
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true,
      minify: {
        removeComments: true, // 去掉注释
        collapseWhitespace: true, // 去掉多余空白
        removeAttributeQuotes: true, // 去掉一些属性的引号，例如id="moo" => id=moo
      },
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: assetsPath('css/[name].[contenthash].css'),
    //   chunkFilename: assetsPath('css/[name].[id].[contenthash].css')
    // })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: require("cssnano"), // 使用 cssnano 压缩器
        cssProcessorOptions: {
          reduceIdents: false,
          autoprefixer: true,
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      }),
      new TerserPlugin({
        cache: true,
        // parallel: true,
        terserOptions: {
          compress: {
            warnings: true,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ["console.log", "debugger"], // 移除console debugger
          },
        },
        sourceMap: true,
      }),
    ],
    runtimeChunk: true
  },
});
